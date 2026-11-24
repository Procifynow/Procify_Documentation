import React, {useCallback, useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {buildIndex, search} from './retrieve';
import styles from './styles.module.css';

const MAX_HISTORY = 6;

// "[1]" in the answer -> link to the passage's page
function renderAnswer(text, passages) {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    if (!line.trim()) return <div key={i} className={styles.gap} />;
    const parts = line.split(/(\[\d+\]|\*\*[^*]+\*\*|`[^`]+`)/g).map((p, j) => {
      const cite = p.match(/^\[(\d+)\]$/);
      if (cite && passages[+cite[1] - 1]) {
        const ps = passages[+cite[1] - 1];
        return (
          <Link key={j} to={ps.u} className={styles.cite} title={ps.t}>
            {cite[1]}
          </Link>
        );
      }
      if (/^\*\*[^*]+\*\*$/.test(p)) return <strong key={j}>{p.slice(2, -2)}</strong>;
      if (/^`[^`]+`$/.test(p)) return <code key={j}>{p.slice(1, -1)}</code>;
      return p;
    });
    return <p key={i} className={styles.line}>{parts}</p>;
  });
}

function uniquePages(passages) {
  const seen = new Set();
  return passages.filter((p) => (seen.has(p.u) ? false : seen.add(p.u)));
}

function snippet(text, n = 220) {
  const t = text.replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n) + '…' : t;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [cfg, setCfg] = useState(null);
  const [index, setIndex] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const cfgUrl = useBaseUrl('/chat-config.json');
  const indexUrl = useBaseUrl('/chat-index.json');

  // Load config and docs index the first time the panel opens
  useEffect(() => {
    if (!open || index || loadError) return;
    let cancelled = false;
    (async () => {
      try {
        const [c, i] = await Promise.all([
          fetch(cfgUrl).then((r) => (r.ok ? r.json() : {})).catch(() => ({})),
          fetch(indexUrl).then((r) => {
            if (!r.ok) throw new Error('index');
            return r.json();
          }),
        ]);
        if (cancelled) return;
        setCfg(c);
        setIndex(buildIndex(i.chunks));
      } catch {
        if (!cancelled) setLoadError(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, index, loadError, cfgUrl, indexUrl]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({block: 'end'});
  }, [messages, busy]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const ask = useCallback(
    async (question) => {
      const q = question.trim();
      if (!q || busy || !index) return;
      setInput('');
      const history = messages
        .filter((m) => !m.error)
        .slice(-MAX_HISTORY)
        .map((m) => ({role: m.role, text: m.text}));
      setMessages((m) => [...m, {role: 'user', text: q}]);
      const passages = search(index, q, {k: 8});
      if (!passages.length) {
        setMessages((m) => [...m, {role: 'assistant', text: "I couldn't find anything about that in the documentation. Try different words, or use the search bar.", passages: []}]);
        return;
      }
      if (!cfg?.endpoint) {
        // No AI backend configured: show the best matching passages
        setMessages((m) => [...m, {role: 'assistant', mode: 'search', text: 'Here are the most relevant pages I found:', passages}]);
        return;
      }
      setBusy(true);
      try {
        const res = await fetch(cfg.endpoint, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            question: q,
            history,
            passages: passages.map((p) => ({title: p.t, guide: p.g, heading: p.h, url: p.u, text: p.x})),
          }),
        });
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        setMessages((m) => [...m, {role: 'assistant', text: data.answer || 'No answer was returned.', passages}]);
      } catch {
        setMessages((m) => [
          ...m,
          {role: 'assistant', mode: 'search', error: true, text: "The assistant isn't available right now. Here are the most relevant pages instead:", passages},
        ]);
      } finally {
        setBusy(false);
      }
    },
    [busy, index, messages, cfg],
  );

  return (
    <>
      {!open && (
        <button className={styles.launcher} onClick={() => setOpen(true)} aria-label="Open documentation assistant">
          💬 Ask the docs
        </button>
      )}
      {open && (
        <section className={styles.panel} role="dialog" aria-label="Documentation assistant">
          <header className={styles.header}>
            <strong>{cfg?.title || 'Ask the Procify docs'}</strong>
            <span>
              {messages.length > 0 && (
                <button className={styles.hbtn} onClick={() => setMessages([])} aria-label="Clear conversation">
                  Clear
                </button>
              )}
              <button className={styles.hbtn} onClick={() => setOpen(false)} aria-label="Close">
                ✕
              </button>
            </span>
          </header>
          <div className={styles.body}>
            <div className={styles.bot}>{cfg?.welcome || 'Hi! Ask me anything about Procify. I answer from the documentation and link the pages I used.'}</div>
            {loadError && <div className={styles.bot}>The documentation index could not be loaded. Please refresh the page.</div>}
            {!index && !loadError && <div className={styles.bot}>Loading documentation…</div>}
            {messages.map((m, i) =>
              m.role === 'user' ? (
                <div key={i} className={styles.user}>{m.text}</div>
              ) : (
                <div key={i} className={styles.bot}>
                  {m.mode === 'search' ? <p className={styles.line}>{m.text}</p> : renderAnswer(m.text, m.passages)}
                  {m.mode === 'search' && (
                    <ul className={styles.results}>
                      {uniquePages(m.passages).slice(0, 5).map((p) => (
                        <li key={p.u}>
                          <Link to={p.u}>{p.t}</Link>
                          <small> {p.g ? `· ${p.g}` : ''}</small>
                          <div className={styles.snip}>{snippet(m.passages.find((x) => x.u === p.u).x)}</div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {m.mode !== 'search' && m.passages?.length > 0 && (
                    <details className={styles.sources}>
                      <summary>Sources</summary>
                      <ol>
                        {m.passages.map((p, n) => (
                          <li key={n}>
                            <Link to={p.u}>{p.t}</Link>
                            <small>{p.g ? ` · ${p.g}` : ''}</small>
                          </li>
                        ))}
                      </ol>
                    </details>
                  )}
                </div>
              ),
            )}
            {busy && <div className={styles.bot}>Thinking…</div>}
            <div ref={bottomRef} />
          </div>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={index ? 'Ask a question…' : 'Loading…'}
              disabled={!index}
              maxLength={500}
              aria-label="Your question"
            />
            <button type="submit" disabled={!index || busy || !input.trim()}>
              Send
            </button>
          </form>
          <div className={styles.note}>AI answers can be wrong. Check the linked pages. Screenshots may show older product names.</div>
        </section>
      )}
    </>
  );
}
