// Prepares the built site for Cloudflare Pages.
// The site is built for the address /Procify_Documentation/ (baseUrl), so on
// Cloudflare the files are placed in dist/Procify_Documentation/ and the root
// address redirects there. No page links need to change.
//
// Cloudflare Pages build command:  npm run build:cloudflare
// Build output directory:          dist
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const build = path.join(root, 'build');
const dist = path.join(root, 'dist');
const sub = path.join(dist, 'Procify_Documentation');

if (!fs.existsSync(path.join(build, 'index.html'))) {
  console.error('build/index.html not found: run "npm run build" first.');
  process.exit(1);
}

fs.rmSync(dist, {recursive: true, force: true});
fs.mkdirSync(sub, {recursive: true});
fs.cpSync(build, sub, {recursive: true});
fs.writeFileSync(path.join(dist, '_redirects'), '/ /Procify_Documentation/ 302\n');
console.log('Cloudflare output ready in', dist);
