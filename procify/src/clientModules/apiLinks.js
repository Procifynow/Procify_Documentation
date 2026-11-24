// The BOL API reference (static/api/bol) is a set of plain HTML files, not pages
// of this app. Clicks on its links must be full page loads; otherwise the
// client-side router shows "Page Not Found" until the page is refreshed.
if (typeof document !== 'undefined') {
  document.addEventListener(
    'click',
    (e) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target && e.target.closest ? e.target.closest('a[href*="/api/bol/"]') : null;
      if (!a) return;
      // Stop the router from handling it; the browser then follows the link normally.
      e.stopImmediatePropagation();
    },
    true,
  );
}
