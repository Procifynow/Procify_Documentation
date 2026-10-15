// @ts-check
 
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';
 
const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
 
// Matches "Session 1", "Session 2", ... (file name, id or title)
const SESSION_RE = /^session[\s_-]*\d+/i;
 
/**
 * Builds a navbar dropdown from every .md/.mdx file in docs/Docs/<folder>.
 * Order: sidebar_position (lowest first), then file name.
 * Label: sidebar_label, else title, else file name.
 * Optional `exclude` (RegExp): files whose name, id or label match are skipped.
 */
function docsDropdown(folder, label, exclude = null) {
  const dir = path.join(__dirname, 'docs', 'Docs', folder);
  let items = [];
 
  if (fs.existsSync(dir)) {
    items = fs
      .readdirSync(dir)
      .filter((file) => /\.mdx?$/.test(file))
      .map((file) => {
        const text = fs.readFileSync(path.join(dir, file), 'utf8');
        const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        const front = fm ? fm[1] : '';
        const clean = (m) => (m ? m[1].trim() : null);
 
        const base = file.replace(/\.mdx?$/, '');
        const id = clean(front.match(/^id:\s*["']?(.+?)["']?\s*$/m)) || base;
        const pos = front.match(/^sidebar_position:\s*(-?\d+(?:\.\d+)?)/m);
        const itemLabel =
          clean(front.match(/^sidebar_label:\s*["']?(.+?)["']?\s*$/m)) ||
          clean(front.match(/^title:\s*["']?(.+?)["']?\s*$/m)) ||
          base;
 
        return {
          position: pos ? parseFloat(pos[1]) : 9999,
          sortName: base,
          type: 'doc',
          docId: `Docs/${folder}/${id}`,
          label: itemLabel,
          skip:
            exclude &&
            (exclude.test(base) || exclude.test(id) || exclude.test(itemLabel)),
        };
      })
      .filter((item) => !item.skip)
      .sort(
        (a, b) =>
          a.position - b.position ||
          a.sortName.localeCompare(b.sortName, undefined, {numeric: true}),
      )
      .map(({type, docId, label: l}) => ({type, docId, label: l}));
  }
 
  return {type: 'dropdown', label, position: 'left', items};
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
 
    // "On this page" headings (the panel itself is hidden in custom.css)
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
 
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
 
        // Dropdowns below are built automatically from the docs folders
        docsDropdown('User Guide', 'User Guide'),
        // Session 1-8 excluded: only the main Training Guide pages are listed
        docsDropdown('Training Guide', 'Training Guide', SESSION_RE),
        docsDropdown('Release Notes', 'Release Notes'),
 
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
              label: 'Release Notes',
              to: '/docs/Docs/Release Notes/7.7.564',
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