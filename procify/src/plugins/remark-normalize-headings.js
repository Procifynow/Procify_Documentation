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
// Pages without these patterns are left untouched.
 
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
  };
}