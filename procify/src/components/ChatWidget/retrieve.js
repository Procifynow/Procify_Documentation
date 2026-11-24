// Small BM25 retriever that runs in the browser (no dependencies).
import {ALIASES} from './aliases';

const STOP = new Set(('a an and are as at be but by can do does for from how i if in into is it its of on or our so than that the their then there these this to was we what when where which who why will with you your please tell me about use using').split(' '));

export function tokenize(text) {
  const out = [];
  for (let w of text.toLowerCase().split(/[^a-z0-9_]+/)) {
    if (!w || STOP.has(w)) continue;
    if (w.length > 4 && w.endsWith('ies')) w = w.slice(0, -3) + 'y';
    else if (w.length > 4 && w.endsWith('ing')) w = w.slice(0, -3);
    else if (w.length > 3 && w.endsWith('es')) w = w.slice(0, -2);
    else if (w.length > 3 && w.endsWith('ed')) w = w.slice(0, -2);
    else if (w.length > 3 && w.endsWith('s')) w = w.slice(0, -1);
    out.push(w);
  }
  return out;
}

export function buildIndex(chunks) {
  const docs = [];
  const df = new Map();
  let total = 0;
  for (const c of chunks) {
    // title, guide and heading count extra: repeat them
    const toks = tokenize(`${c.t} ${c.t} ${c.g} ${c.g} ${c.h} ${c.h} ${c.x}`);
    const tf = new Map();
    for (const t of toks) tf.set(t, (tf.get(t) || 0) + 1);
    for (const t of tf.keys()) df.set(t, (df.get(t) || 0) + 1);
    docs.push({tf, len: toks.length});
    total += toks.length;
  }
  return {chunks, docs, df, avg: total / Math.max(docs.length, 1)};
}

// If the question uses an old name (or a new one), also search for its counterpart.
export function expandQuery(q) {
  const lower = q.toLowerCase();
  let extra = '';
  for (const [oldName, newName] of ALIASES) {
    if (lower.includes(oldName.toLowerCase())) extra += ' ' + newName;
    else if (lower.includes(newName.toLowerCase())) extra += ' ' + oldName;
  }
  return q + extra;
}

export function search(index, query, {k = 8, perPage = 3} = {}) {
  const qt = [...new Set(tokenize(expandQuery(query)))];
  if (!qt.length) return [];
  const N = index.docs.length;
  const k1 = 1.4, b = 0.75;
  const scored = [];
  index.docs.forEach((d, i) => {
    let s = 0;
    for (const t of qt) {
      const f = d.tf.get(t);
      if (!f) continue;
      const n = index.df.get(t);
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      s += idf * ((f * (k1 + 1)) / (f + k1 * (1 - b + (b * d.len) / index.avg)));
    }
    if (s > 0) scored.push([s, i]);
  });
  scored.sort((a, b2) => b2[0] - a[0]);
  const perUrl = new Map();
  const out = [];
  for (const [s, i] of scored) {
    const c = index.chunks[i];
    const n = perUrl.get(c.u) || 0;
    if (n >= perPage) continue;
    perUrl.set(c.u, n + 1);
    out.push({...c, score: s});
    if (out.length >= k) break;
  }
  return out;
}
