// @ts-check
 
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';
import remarkNormalizeHeadings from './src/plugins/remark-normalize-headings.js';
 
const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
 
// Matches "Session 1", "Session 2", ... (file name, id or title)
const SESSION_RE = /^session[\s_-]*\d+/i;
 
// Matches version numbers such as 7.2.367
const VERSION_RE = /\d+(?:\.\d+)+/;
 
/** "7.2.367" -> [7, 2, 367] (no version found -> [0]) */
const parseVersion = (s) =>
  ((s || '').match(VERSION_RE)?.[0] ?? '0').split('.').map(Number);
 
/** Numeric, segment-by-segment comparison (7.2.368 > 7.2.367 > 7.2.99) */
const compareVersions = (a, b) => {
  for (let k = 0; k < Math.max(a.length, b.length); k++) {
    const d = (a[k] ?? 0) - (b[k] ?? 0);
    if (d) return d;
  }
  return 0;
};
 
/**
 * Reads every .md/.mdx file in docs/Docs/<folder> and returns doc items.
 * Order: sidebar_position (lowest first), then file name.
 *        With byVersion = true: highest version number first.
 * Label: sidebar_label, else title, else file name (surrounding ** removed).
 * Optional `exclude` (RegExp): files whose name, id or label match are skipped.
 */
/** Lists every .md/.mdx file under dir (sub-folders included), as relative paths. */
function listMarkdown(dir, rel = '') {
  let out = [];
  for (const entry of fs.readdirSync(path.join(dir, rel), {withFileTypes: true})) {
    // Docusaurus ignores files and folders that start with "_" or "."
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out = out.concat(listMarkdown(dir, relPath));
    else if (/\.mdx?$/.test(entry.name)) out.push(relPath);
  }
  return out;
}
 
function readDocs(folder, exclude = null, byVersion = false) {
  const dir = path.join(__dirname, 'docs', 'Docs', folder);
  if (!fs.existsSync(dir)) return [];
 
  return listMarkdown(dir)
    .map((relPath) => {
      const file = path.basename(relPath);
      const subDir = path.dirname(relPath) === '.' ? '' : `${path.dirname(relPath)}/`;
      const text = fs.readFileSync(path.join(dir, relPath), 'utf8');
      const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      const front = fm ? fm[1] : '';
      const clean = (m) => (m ? m[1].replace(/\*+/g, '').trim() : null);
 
      const base = file.replace(/\.mdx?$/, '');
      const id = clean(front.match(/^id:\s*["']?(.+?)["']?\s*$/m)) || base;
      const pos = front.match(/^sidebar_position:\s*(-?\d+(?:\.\d+)?)/m);
      const itemLabel =
        clean(front.match(/^sidebar_label:\s*["']?(.+?)["']?\s*$/m)) ||
        clean(front.match(/^title:\s*["']?(.+?)["']?\s*$/m)) ||
        base;
 
      return {
        position: pos ? parseFloat(pos[1]) : 9999,
        sortName: subDir + base,
        version: parseVersion(`${base} ${id} ${itemLabel}`),
        type: 'doc',
        docId: `Docs/${folder}/${subDir}${id}`,
        id: `${subDir}${id}`,
        file: path.join(dir, relPath),
        label: itemLabel,
        skip:
          exclude &&
          (exclude.test(base) || exclude.test(id) || exclude.test(itemLabel)),
      };
    })
    .filter((item) => !item.skip)
    .sort((a, b) =>
      byVersion
        ? compareVersions(b.version, a.version)
        : a.position - b.position ||
          a.sortName.localeCompare(b.sortName, undefined, {numeric: true}),
    );
}
 
/** Builds a navbar dropdown from the docs in docs/Docs/<folder>. */
function docsDropdown(folder, label, exclude = null, byVersion = false) {
  const docs = readDocs(folder, exclude, byVersion);
 
  const items = docs.map(({type, docId, label: l}, i) => ({
    type,
    docId,
    // With byVersion, the first item is the newest release
    label: byVersion && i === 0 ? `${l} (Latest)` : l,
  }));
 
  return {type: 'dropdown', label, position: 'left', items};
}
 
// ---------------------------------------------------------------------
// Every folder inside docs/Docs becomes a navbar dropdown automatically.
// Add a folder with .md files and it shows up after the next restart/build.
// ---------------------------------------------------------------------
const DOCS_ROOT = path.join(__dirname, 'docs', 'Docs');
 
// Menu order. New folders not listed here go just before "Release Notes".
const MENU_ORDER = ['User Guide', 'Installation Guide', 'Training Guide', 'Release Notes'];
 
// Folders that need special handling
const FOLDER_OPTIONS = {
  // Session 1-8 pages are hidden from the menu (they are listed on the guide page)
  'Training Guide': {exclude: SESSION_RE},
  // Newest version first, newest marked "(Latest)"
  'Release Notes': {byVersion: true},
};
 
const menuRank = (name) => {
  const i = MENU_ORDER.indexOf(name);
  return i >= 0 ? i : MENU_ORDER.indexOf('Release Notes') - 0.5;
};
 
const guideFolders = fs.existsSync(DOCS_ROOT)
  ? fs
      .readdirSync(DOCS_ROOT, {withFileTypes: true})
      .filter(
        (d) =>
          d.isDirectory() &&
          !d.name.startsWith('.') &&
          !d.name.startsWith('_') &&
          readDocs(d.name, FOLDER_OPTIONS[d.name]?.exclude ?? null).length > 0,
      )
      .map((d) => d.name)
      .sort((a, b) => menuRank(a) - menuRank(b) || a.localeCompare(b))
  : [];
 
const guideDropdowns = guideFolders.map((name) =>
  docsDropdown(
    name,
    name,
    FOLDER_OPTIONS[name]?.exclude ?? null,
    !!FOLDER_OPTIONS[name]?.byVersion,
  ),
);
 
// Folders beyond the three main guides: shown as extra cards on the home page
// and extra links in the footer (label + link to the first page)
const MAIN_GUIDES = ['User Guide', 'Training Guide', 'Release Notes'];
const extraGuides = guideFolders
  .filter((name) => !MAIN_GUIDES.includes(name))
  .map((name) => {
    const first = readDocs(name, FOLDER_OPTIONS[name]?.exclude ?? null)[0];
    return {
      label: name,
      path: '/docs/' + first.docId.split('/').map(encodeURIComponent).join('/'),
    };
  });
 
// Newest release note, used for the footer link (highest version number)
const latestRelease = readDocs('Release Notes', null, true)[0];
 
// Release date / type / scope, read from the "| Release Date | ... |" table
// at the top of the newest release note
const facts = {};
if (latestRelease) {
  const text = fs.readFileSync(latestRelease.file, 'utf8');
  for (const m of text.matchAll(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*$/gm)) {
    facts[m[1].replace(/\*+/g, '').trim().toLowerCase()] = m[2]
      .replace(/\*+/g, '')
      .trim();
  }
}
 
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Procify Technical Documentation',
 
  tagline:
    'An enterprise-class low-code platform for transforming business ideas into outcomes',
 
  favicon: 'img/favicon.ico',
 
  // SEO metadata
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content:
          'Procify, documentation, user guide, training guide, release notes',
      },
    },
  ],
 
  // GitHub Pages configuration (Procifynow repo)
  url: 'https://procifynow.github.io',
  baseUrl: '/Procify_Documentation/',
  organizationName: 'Procifynow',
  projectName: 'Procify_Documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
 
  // Read by src/pages/index.js (home page): always the highest release version
  customFields: {
    latestRelease: latestRelease
      ? {
          version: latestRelease.version.join('.'),
          path: `/docs/Docs/Release%20Notes/${encodeURIComponent(latestRelease.id)}`,
          date: facts['release date'],
          type: facts['release type'],
          scope: facts['scope'],
        }
      : null,
    extraGuides,
  },
 
  // Floating "Back to top" button (see src/clientModules/backToTop.js)
  clientModules: [require.resolve('./src/clientModules/backToTop.js')],
 
  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
 
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          breadcrumbs: true,
 
          // "# Section" headings (Word exports) become "## Section" so every
          // section appears in the "On this page" panel.
          // Must run BEFORE the default plugins, because they build that panel.
          beforeDefaultRemarkPlugins: [remarkNormalizeHeadings],
 
          // Release Notes sidebar: newest version on top, tagged with the
          // "latest-release" class (styled as a LATEST badge in custom.css).
          // Works for autogenerated sidebars; no manual front matter needed.
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const items = await defaultSidebarItemsGenerator(args);
 
            if (!/release notes/i.test(args.item.dirName || '')) return items;
 
            const versionOf = (i) =>
              parseVersion(`${i.id || ''} ${i.label || ''} ${i.href || ''}`);
 
            const sorted = [...items].sort((a, b) =>
              compareVersions(versionOf(b), versionOf(a)),
            );
 
            if (sorted[0] && sorted[0].type === 'doc') {
              sorted[0] = {...sorted[0], className: 'latest-release'};
            }
            return sorted;
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
 
  plugins: [
    // Click-to-zoom on screenshots (npm install docusaurus-plugin-image-zoom)
    'docusaurus-plugin-image-zoom',
 
    // Local documentation search (works fully in a production build)
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
 
  themeConfig: {
    // Image zoom settings (used by docusaurus-plugin-image-zoom)
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
 
    // Light mode only, no toggle button
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
 
    // "On this page" panel: only ## headings (Session 1, Session 2, ...) are listed
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
 
    // Announcement bar: always shows the newest release
    ...(latestRelease
      ? {
          announcementBar: {
            // new id per release, so people who closed the bar see the next one
            id: `release-${latestRelease.version.join('.')}`,
            content:
              `<span class="ann-tag">New release</span> ` +
              `${latestRelease.version.join('.')} is live. ` +
              `<a href="/Procify_Documentation/docs/Docs/Release%20Notes/${encodeURIComponent(latestRelease.id)}">Read the release notes</a>`,
            backgroundColor: '#211E1D',
            textColor: 'rgba(255,255,255,0.78)',
            isCloseable: true,
          },
        }
      : {}),
 
    // Top navigation
    navbar: {
      logo: {
        alt: 'Procify Logo',
        src: 'img/procify-logo.png',
      },
 
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          exact: true,
        },
 
        // One dropdown per folder in docs/Docs (built automatically, see above)
        ...guideDropdowns,
 
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/Procifynow/Procify_Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
 
    // Documentation sidebar
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
 
    // Footer
    footer: {
      style: 'light',
 
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'User Guide',
              to: '/docs/Docs/User Guide/Developer AI - User guide',
            },
            {
              label: 'Beginner Training',
              to: '/docs/Docs/Training Guide/Training Guide Beginner',
            },
            {
              label: 'Advanced Training',
              to: '/docs/Docs/Training Guide/Advance Training Guide',
            },
            {
              // Always points to the highest-numbered release note
              label: 'Release Notes',
              to: latestRelease
                ? `/docs/Docs/Release Notes/${latestRelease.id}`
                : '/docs/Docs/Release Notes',
            },
          ],
        },
        {
          title: 'Procify',
          items: [
            {
              label: 'Website',
              href: 'https://www.procifynow.com',
            },
            {
              label: 'experts@procifynow.com',
              href: 'mailto:experts@procifynow.com',
            },
          ],
        },
        {
          title: 'Developer Resources',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Procifynow/Procify_Documentation',
            },
          ],
        },
      ],
 
      copyright: `© ${new Date().getFullYear()} Procify Innovations Pvt Ltd.`,
    },
 
    prism: {
      theme: prismThemes.github,
    },
  },
 
  // Markdown configuration
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
};
 
export default config;