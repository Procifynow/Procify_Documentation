# Login with Cloudflare (Pages + Access)

GitHub Pages cannot have a login. Cloudflare can: the site is hosted on Cloudflare Pages and
Cloudflare Access asks people to sign in before any page is served.

Cloudflare Access does not keep passwords itself. People sign in with a one-time code sent to
their email, or with their Google / Microsoft account. "Forgot password" is handled by that
account provider (the one-time code needs no password at all).

## 1. Host the site on Cloudflare Pages

1. Cloudflare dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git.
2. Choose the repository `Procifynow/Procify_Documentation`.
3. Build settings:
   - Root directory: `procify`
   - Build command: `npm run build:cloudflare`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION` = `20`
4. Save and Deploy. The site opens at `https://<project>.pages.dev/Procify_Documentation/`
   (the root address redirects there, so every existing link keeps working).

## 2. Turn on the login (Cloudflare Access)

1. In the Pages project: Settings -> General -> Access policy -> Enable / Manage.
   (Or Zero Trust -> Access -> Applications -> Add -> Self-hosted, domain `<project>.pages.dev`.)
2. Add a policy: Action `Allow`, Include -> `Emails ending in` `@procifynow.com`
   (add other company domains or individual emails as needed).
3. Login methods (Zero Trust -> Settings -> Authentication): `One-time PIN` is on by default;
   add Google or Microsoft if you want company single sign-on.

Visitors now see Cloudflare's login screen first. Once signed in, a **Logout** button appears
in the top bar (it links to `/cdn-cgi/access/logout`).

## 3. Close the old public site

The same pages are still public on `https://procifynow.github.io/Procify_Documentation/`
until you stop publishing there:

- Do not run `npm run deploy` any more, and
- GitHub repository -> Settings -> Pages -> unpublish (and delete the `gh-pages` branch).

## Notes

- Custom domain: add it in the Pages project, then use that domain for the Access application.
- Deploys: every push to the connected branch rebuilds the site on Cloudflare.
- The chat widget and search work as before.
