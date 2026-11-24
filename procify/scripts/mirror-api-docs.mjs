// Mirror the hosted TypeDoc BOL API reference into static/api/bol so it is
// served from this site and no longer depends on apihelp.procifynow.com.
// Usage (repo root):  node scripts/mirror-api-docs.mjs [baseUrl] [outDir]
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const BASE = (process.argv[2] || 'https://apihelp.procifynow.com/bol').replace(/\/+$/, '') + '/';
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT = process.argv[3] || path.join(ROOT, 'static', 'api', 'bol');
const BASE_PATH = new URL(BASE).pathname;

const ATTR = /(?:href|src|data-src)\s*=\s*["']([^"'#]+)/gi;
const CSSURL = /url\(\s*["']?([^)"']+)/gi;
const ASSET = /["'`]((?:\.{0,2}\/)?assets\/[\w./@-]+)["'`]/g;

const localPath = (url) => {
  const p = decodeURIComponent(new URL(url).pathname).slice(BASE_PATH.length);
  return path.join(OUT, p || 'index.html');
};

async function get(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, {headers: {'User-Agent': 'procify-docs-mirror'}});
      if (r.status === 404) return null;
      if (r.ok) return {buf: Buffer.from(await r.arrayBuffer()), type: r.headers.get('content-type') || ''};
    } catch {}
    await new Promise((res) => setTimeout(res, 1000 * (i + 1)));
  }
  return null;
}

function linksIn(url, {buf, type}) {
  const text = buf.toString('utf8');
  const found = new Set();
  const add = (re) => { for (const m of text.matchAll(re)) found.add(m[1]); };
  if (/html/.test(type) || url.endsWith('.html')) add(ATTR);
  if (/css/.test(type) || url.endsWith('.css')) add(CSSURL);
  if (url.endsWith('.js') || /javascript/.test(type)) add(ASSET);
  const out = new Set();
  for (const l of found) {
    if (/^(data:|mailto:|javascript:)/.test(l)) continue;
    try {
      const u = new URL(l.trim(), url.endsWith('.js') ? BASE : url);
      u.hash = ''; u.search = '';
      if (u.href.startsWith(BASE)) out.add(u.href);
    } catch {}
  }
  return out;
}

const start = BASE + 'index.html';
const seen = new Set([start]);
let queue = [start], saved = 0;
const missing = [];
while (queue.length) {
  const batch = queue; queue = [];
  for (let i = 0; i < batch.length; i += 8) {
    const slice = batch.slice(i, i + 8);
    const res = await Promise.all(slice.map(get));
    res.forEach((r, j) => {
      const url = slice[j];
      if (!r) { missing.push(url); return; }
      const p = localPath(url);
      fs.mkdirSync(path.dirname(p), {recursive: true});
      fs.writeFileSync(p, r.buf);
      saved++;
      for (const n of linksIn(url, r)) if (!seen.has(n)) { seen.add(n); queue.push(n); }
    });
  }
  console.log(`  saved ${saved} files, ${queue.length} queued`);
}
console.log(`\nDone: ${saved} files in ${OUT}`);
if (missing.length) {
  console.log(`${missing.length} links returned 404 or failed (usually harmless):`);
  missing.slice(0, 15).forEach((m) => console.log('  ', m));
}
if (saved < 50) console.log('WARNING: very few files saved - check the URL / your connection.');
