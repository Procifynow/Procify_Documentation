import React, {useEffect, useState} from 'react';

// "Logout" button for the top bar. It only appears when the site is opened
// through Cloudflare Access (the identity endpoint exists and answers with the
// signed-in user); on localhost or GitHub Pages it renders nothing.
export default function AccessNavItem() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    let dead = false;
    fetch('/cdn-cgi/access/get-identity', {credentials: 'same-origin'})
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!dead && j && (j.email || j.user_uuid)) setEmail(j.email || 'signed in');
      })
      .catch(() => {});
    return () => {
      dead = true;
    };
  }, []);

  if (!email) return null;

  // Plain link (full page load): the logout address is served by Cloudflare, not by this app.
  return (
    <a
      className="navbar__item navbar__link"
      href="/cdn-cgi/access/logout"
      title={`Signed in as ${email}`}
    >
      Logout
    </a>
  );
}
