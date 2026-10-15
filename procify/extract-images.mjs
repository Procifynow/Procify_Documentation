import fs from 'fs';
import path from 'path';

const dir = process.argv[2];
const write = process.argv.includes('--write');

if (!dir || !fs.existsSync(dir)) {
  console.error('Usage: node extract-images.mjs "<folder with .md files>" [--write]');
  process.exit(1);
}

const slug = (s) =>
  s.toLowerCase().replace(/\.mdx?$/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const DEF_RE = /^\[([^\]]+)\]:\s*<?data:image\/(png|jpe?g|gif|webp);base64,([A-Za-z0-9+/=]+)>?[ \t]*$/gm;

let totalImages = 0;

for (const file of fs.readdirSync(dir).filter((f) => /\.mdx?$/.test(f))) {
  const full = path.join(dir, file);
  let text = fs.readFileSync(full, 'utf8');
  const found = [...text.matchAll(DEF_RE)];
  if (!found.length) continue;

  const imgDir = path.join(dir, 'img');
  console.log(`${file}: ${found.length} embedded image(s)`);

  for (const m of found) {
    const [definition, name, type, data] = m;
    const ext = type === 'jpeg' ? 'jpg' : type;
    const outName = `${slug(file)}-${slug(name)}.${ext}`;
    const relPath = `./img/${outName}`;
    totalImages++;
    console.log(`  ${name} -> ${relPath} (${Math.round((data.length * 3) / 4 / 1024)} KB)`);

    if (write) {
      fs.mkdirSync(imgDir, {recursive: true});
      fs.writeFileSync(path.join(imgDir, outName), Buffer.from(data, 'base64'));

      const useRe = new RegExp(`!\\[([^\\]]*)\\]\\[${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]`, 'g');
      text = text.replace(useRe, (_, alt) => `![${alt || 'Screenshot'}](${relPath})`);
      text = text.replace(definition, '');
    }
  }

  if (write) fs.writeFileSync(full, text.replace(/\n{3,}/g, '\n\n'), 'utf8');
}

console.log(
  totalImages
    ? write
      ? `Done: ${totalImages} image(s) extracted.`
      : 'Preview only. Add --write to apply.'
    : 'No embedded images found.',
);