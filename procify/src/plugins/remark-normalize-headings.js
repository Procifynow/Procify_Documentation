// Keeps the "On this page" panel clean, automatically, for every document.
//
// 1. Word exports often use "# Section" for every section. A page can have only
//    one title, so the first "#" stays the title and every other heading moves
//    one level down ("# Purpose" becomes "## Purpose").
//
// 2. On a training page with sessions ("Session 1 — ...", "Session 2: ..."),
//    only the session headings stay at "##", so the panel lists just
//    Session 1, Session 2, Session 3 ... Every other "##" heading (Quick
//    Reference, Concepts Recap, Session 3 Assignment, Part A ...) moves to "###".
//
// 3. A line that is only bold text and starts with "Step 1", "Step 2: ..." is
//    turned into a heading, so every step is listed in "On this page".
//    (If the page has no other "##" headings the steps are "##", otherwise "###".)
//    Empty headings ("## " with no text) are removed.
//
// Pages without these patterns are left untouched.
 
const STEP_RE = /^step\s+\d+/i;

// "Session 3 — Title" or "Session 3: Title"; not "Session 3 Assignment"
const SESSION_RE = /^\W*session\s+\d+\s*[—–:-]/i;
 
const textOf = (node) => {
  if (node.type === 'text' || node.type === 'inlineCode') return node.value;
  return Array.isArray(node.children) ? node.children.map(textOf).join('') : '';
};
 
export default function remarkNormalizeHeadings() {
  return (tree) => {
    const headings = [];
    const walk = (node) => {
      if (node.type === 'heading') headings.push(node);
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
 
    // 1. several "#" headings: keep the first as the title, move the rest down
    const levelOne = headings.filter((h) => h.depth === 1);
    if (levelOne.length >= 2) {
      for (const heading of headings) {
        if (heading !== levelOne[0] && heading.depth < 6) heading.depth += 1;
      }
    }
 
    // 2. session pages: only the session headings stay at level 2
    const isSession = (h) => SESSION_RE.test(textOf(h).trim());
    const sessions = headings.filter((h) => h.depth === 2 && isSession(h));
    if (sessions.length >= 2) {
      for (const heading of headings) {
        if (heading.depth === 2 && !isSession(heading)) heading.depth = 3;
      }
    }

    // 3. bold "Step N ..." lines become headings
    const parent = tree;
    if (Array.isArray(parent.children)) {
      // drop empty headings
      parent.children = parent.children.filter(
        (n) => !(n.type === 'heading' && textOf(n).trim() === ''),
      );
      const hasH2 = parent.children.some(
        (n) => n.type === 'heading' && n.depth === 2,
      );
      const stepDepth = hasH2 ? 3 : 2;
      const isBoldOnly = (n) =>
        n.type === 'paragraph' &&
        n.children.length > 0 &&
        n.children.some((c) => c.type === 'strong') &&
        n.children.every(
          (c) =>
            c.type === 'strong' ||
            c.type === 'break' ||
            (c.type === 'text' && c.value.trim() === ''),
        );
      parent.children = parent.children.map((n) => {
        if (!isBoldOnly(n)) return n;
        const text = textOf(n).trim();
        if (!STEP_RE.test(text) || text.length > 120) return n;
        const children = [];
        for (const c of n.children) {
          if (c.type === 'strong') children.push(...c.children);
          else if (c.type === 'text' && children.length) {
            children.push({ type: 'text', value: ' ' });
          }
        }
        return { type: 'heading', depth: stepDepth, children };
      });
    }
  };
}
