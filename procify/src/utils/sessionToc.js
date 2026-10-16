// Decides what the "On this page" panel lists.
//
// On a page with sessions ("Session 1 — ...", "Session 2: ..."), the panel
// shows only the session headings, whatever level they were written at.
// Every other page keeps the normal list (headings set in docusaurus.config.js).
 
// "Session 3 — Title" or "Session 3: Title"; not "Session 3 Assignment"
const SESSION_RE = /^\W*session\s+\d+\s*[—–:-]/i;
 
// toc items hold HTML such as "Session 1 &mdash; <strong>Setup</strong>"
const plainText = (html) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&mdash;|&#8212;|&#x2014;/gi, '—')
    .replace(/&ndash;|&#8211;|&#x2013;/gi, '–')
    .replace(/&nbsp;/gi, ' ')
    .trim();
 
const sessionNumber = (item) =>
  plainText(item.value).match(/session\s+(\d+)/i)?.[1];
 
export function sessionToc(toc) {
  const sessions = toc.filter((item) => SESSION_RE.test(plainText(item.value)));
 
  if (sessions.length >= 2) {
    // If a session appears twice, list it once. The LAST one is kept, because a
    // repeat usually comes just before the real start of the session.
    const lastIndex = new Map();
    sessions.forEach((item, i) => lastIndex.set(sessionNumber(item), i));
    const unique = sessions.filter(
      (item, i) => lastIndex.get(sessionNumber(item)) === i,
    );
 
    return {
      toc: unique.map((item) => ({...item, level: 2})),
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
      isSessionPage: true,
    };
  }
 
  // not a session page: leave the list and the site-wide settings alone
  return {
    toc,
    minHeadingLevel: undefined,
    maxHeadingLevel: undefined,
    isSessionPage: false,
  };
}