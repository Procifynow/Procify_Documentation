// Builds static/chat-index.json: the knowledge base for the docs chatbot.
// Walks docs/**/*.md(x), strips Markdown noise, splits each page into
// heading-based chunks and records the page URL for citations.
// Runs automatically before `npm start`, `npm run build` and `npm run deploy`.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.resolve(process.env.CHAT_DOCS_DIR || path.join(ROOT, 'docs'));
const OUT = path.resolve(process.env.CHAT_INDEX_OUT || path.join(ROOT, 'static', 'chat-index.json'));
const MAX_CHARS = 1400; // target chunk size
const MIN_CHARS = 250; // merge smaller chunks into the previous one

// Big single-file originals that the site hides (SPLIT_ORIGINALS in docusaurus.config.js)
function splitOriginals() {
  try {
    const cfg = fs.readFileSync(path.join(ROOT, 'docusaurus.config.js'), 'utf8');
    const m = cfg.match(/SPLIT_ORIGINALS\s*=\s*\[([\s\S]*?)\]/);
    if (!m) return new Set();
    return new Set([...m[1].matchAll(/['"`]([^'"`]+)['"`]/g)].map((x) => x[1].replace(/\\/g, '/')));
  } catch {
    return new Set();
  }
}
const HIDDEN = splitOriginals();

function* walk(dir) {
  for (const e of fs.readdirSync(dir, {withFileTypes: true})) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name.startsWith('_') || e.name === 'img' || e.name.endsWith('-img')) continue;
      yield* walk(p);
    } else if (/\.mdx?$/.test(e.name) && !e.name.startsWith('_')) yield p;
  }
}

function frontMatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return {fm: {}, body: src};
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const k = line.match(/^(\w+):\s*(.*)$/);
    if (k) fm[k[1]] = k[2].replace(/^["']|["']$/g, '').trim();
  }
  return {fm, body: src.slice(m[0].length)};
}

// Docusaurus drops a leading "1. " / "01-" from file and folder names
const stripNum = (s) => s.replace(/^\d+\s*[-_.]+\s*(?!\d)/, '');

function pageUrl(rel, fm) {
  const segs = rel.replace(/\.mdx?$/, '').split('/');
  const last = segs[segs.length - 1];
  let route;
  if (fm.slug && fm.slug.startsWith('/')) route = fm.slug.split('/').filter(Boolean);
  else {
    const dir = segs.slice(0, -1).map(stripNum);
    const name = fm.slug ? fm.slug : stripNum(last);
    route = [...dir, ...(name === 'index' || name === 'README' ? [] : [name])];
  }
  return '/docs/' + route.map((s) => encodeURI(s)).join('/');
}

function clean(text) {
  return text
    .replace(/^\s*import .*$/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/<img[^>]*>/g, '')
    .replace(/\[([^\]]*)\]\((?:[^()]|\([^)]*\))*\)/g, '$1') // links -> text
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>\n]+>/g, '')
    .replace(/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?\s*$/gm, '') // table separators
    .replace(/\\([{}<>_*\[\]()#`|\\.!+-])/g, '$1')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function chunkPage(body, pageTitle) {
  const chunks = [];
  const stack = []; // heading path
  let buf = [];
  const flush = () => {
    const text = clean(buf.join('\n'));
    buf = [];
    if (!text) return;
    const heading = stack.filter(Boolean).join(' > ');
    // split overlong sections on paragraph boundaries
    let cur = '';
    for (const para of text.split(/\n\n+/)) {
      if (cur && cur.length + para.length > MAX_CHARS) {
        chunks.push({h: heading, x: cur});
        cur = '';
      }
      cur += (cur ? '\n\n' : '') + para;
      while (cur.length > MAX_CHARS * 1.6) {
        chunks.push({h: heading, x: cur.slice(0, MAX_CHARS)});
        cur = cur.slice(MAX_CHARS);
      }
    }
    if (cur) chunks.push({h: heading, x: cur});
  };
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) inFence = !inFence;
    const m = !inFence && line.match(/^(#{1,4})\s+(.*?)\s*#*\s*$/);
    if (m) {
      flush();
      const level = m[1].length;
      const title = m[2].replace(/[*_`]/g, '').replace(/\{#[^}]*\}/g, '').trim();
      stack.length = level - 1 < stack.length ? level - 1 : stack.length;
      if (level === 1) stack.length = 0;
      stack[level - 1] = title === pageTitle && level === 1 ? '' : title;
    } else buf.push(line);
  }
  flush();
  // merge tiny chunks into the previous chunk of the same heading path
  const merged = [];
  for (const c of chunks) {
    const prev = merged[merged.length - 1];
    if (prev && (c.x.length < MIN_CHARS || prev.x.length < MIN_CHARS) && prev.x.length + c.x.length <= MAX_CHARS * 1.4) {
      prev.x += '\n\n' + c.x;
      if (!prev.h) prev.h = c.h;
    } else merged.push({...c});
  }
  return merged;
}

if (!fs.existsSync(DOCS)) {
  console.error(`[chat-index] docs folder not found: ${DOCS}`);
  process.exit(1);
}

const out = [];
const pages = new Set();
for (const file of walk(DOCS)) {
  const rel = path.relative(DOCS, file).split(path.sep).join('/');
  if (HIDDEN.has(rel.replace(/^Docs\//, ''))) continue;
  const {fm, body} = frontMatter(fs.readFileSync(file, 'utf8'));
  const parts = rel.split('/');
  // docs/Docs/<Category>/<Guide>/<page>.md  ->  category, guide
  const rest = parts[0] === 'Docs' ? parts.slice(1) : parts;
  const category = rest.length > 1 ? rest[0] : '';
  const guide = rest.length > 2 ? rest[1] : '';
  const title = (fm.title || fm.sidebar_label || stripNum(path.basename(file).replace(/\.mdx?$/, ''))).replace(/^.*?\s—\s/, '');
  const url = pageUrl(rel, fm);
  const shown = guide && /^(introduction|overview|pre-?requisites?|about)$/i.test(title) ? `${guide} — ${title}` : title;
  for (const c of chunkPage(body, title)) {
    out.push({t: shown, g: guide, c: category, h: c.h, u: url, x: c.x});
    pages.add(url);
  }
}

fs.mkdirSync(path.dirname(OUT), {recursive: true});
fs.writeFileSync(OUT, JSON.stringify({v: 1, generated: new Date().toISOString(), chunks: out}));
const kb = Math.round(fs.statSync(OUT).size / 1024);
console.log(`[chat-index] ${out.length} chunks from ${pages.size} pages -> ${path.relative(ROOT, OUT)} (${kb} KB)`);
