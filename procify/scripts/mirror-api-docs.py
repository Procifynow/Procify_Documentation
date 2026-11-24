#!/usr/bin/env python3
"""Mirror the hosted TypeDoc BOL API reference into static/api/bol so it is
served from this site (GitHub Pages) and no longer depends on apihelp.procifynow.com.

Usage (from the repo root):   python scripts/mirror-api-docs.py
Optional:  python scripts/mirror-api-docs.py <base-url> <out-dir>
Standard library only. Safe to re-run (re-downloads everything).
"""
import os, re, sys, time
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urljoin, urlparse, unquote
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

BASE = (sys.argv[1] if len(sys.argv) > 1 else "https://apihelp.procifynow.com/bol").rstrip("/") + "/"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "static", "api", "bol")
UA = {"User-Agent": "Mozilla/5.0 (procify-docs-mirror)"}

ATTR = re.compile(r'''(?:href|src|data-src)\s*=\s*["']([^"'#]+)''', re.I)
CSSURL = re.compile(r'url\(\s*["\']?([^)"\']+)')
ASSET = re.compile(r'''["'`]((?:\.{0,2}/)?assets/[\w./@-]+)["'`]''')

def local_path(url):
    p = unquote(urlparse(url).path)[len(urlparse(BASE).path):]
    return os.path.join(OUT, p or "index.html")

def fetch(url):
    for i in range(3):
        try:
            with urlopen(Request(url, headers=UA), timeout=40) as r:
                return r.read(), r.headers.get("Content-Type", "")
        except HTTPError as e:
            if e.code == 404: return None, ""
        except (URLError, TimeoutError):
            time.sleep(1 + i)
    return None, ""

def links(url, data, ctype):
    text = data.decode("utf-8", "ignore")
    found = set()
    if "html" in ctype or url.endswith(".html"):
        found |= set(ATTR.findall(text))
    if "css" in ctype or url.endswith(".css"):
        found |= set(CSSURL.findall(text))
    if url.endswith(".js") or "javascript" in ctype:
        found |= set(ASSET.findall(text))
    out = set()
    for l in found:
        if l.startswith(("data:", "mailto:", "javascript:")): continue
        full = urljoin(url, l.strip()).split("#")[0].split("?")[0]
        if full.startswith(BASE): out.add(full)
    return out

seen, queue, missing, saved = set(), [BASE + "index.html"], [], 0
seen.add(queue[0])
with ThreadPoolExecutor(8) as ex:
    while queue:
        batch, queue = queue, []
        for url, (data, ctype) in zip(batch, ex.map(fetch, batch)):
            if data is None:
                missing.append(url); continue
            path = local_path(url)
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, "wb") as f: f.write(data)
            saved += 1
            for n in links(url, data, ctype):
                if n not in seen:
                    seen.add(n); queue.append(n)
        print(f"  saved {saved} files, {len(queue)} queued", flush=True)

print(f"\nDone: {saved} files in {OUT}")
if missing:
    print(f"{len(missing)} links returned 404 (usually harmless, e.g. search data):")
    for m in missing[:15]: print("  ", m)
if saved < 50:
    print("WARNING: very few files saved - check the URL / your connection.")
