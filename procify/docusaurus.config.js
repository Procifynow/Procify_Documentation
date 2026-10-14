// @ts-check
 
import {themes as prismThemes} from 'prism-react-renderer';
import {createRequire} from 'module';
 
const require = createRequire(import.meta.url);
 
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
 
  // GitHub Pages configuration
  url: 'https://procifynow.github.io',
  baseUrl: '/Procify_Documentation/',
  organizationName: 'Procifynow',
  projectName: 'Procify_Documentation',
  trailingSlash: false,
 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
 
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
 
  // Local documentation search
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
      },
    ],
  ],
 
  themeConfig: {
  colorMode: {
    defaultMode: 'light',
    disableSwitch: true,
    respectPrefersColorScheme: false,
  },
 
    // Right-hand "On this page" panel: show only ## headings
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 2,
    },
 
    // Top navigation
    navbar: {
      title: '',
 
      logo: {
        alt: 'Procify Logo',
        src: 'img/procify-logo.png',
        srcDark: 'img/procify-logo-dark.png',
        href: '/Technical-Documentation/',
      },
 
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          exact: true,
        },
        {
          type: 'docSidebar',
          sidebarId: 'UserGuideSidebar', // must match sidebars.js exactly (case-sensitive)
          label: 'User Guide',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Training Guide',
          position: 'left',
          items: [
            // Add 'Docs/Training Guide/Basic Training' back here once that file exists in docs/
            {
              type: 'doc',
              docId: 'Docs/Training Guide/Advance Training Guide',
              label: 'Advanced Training',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'releaseNotesSidebar',
          label: 'Release Notes',
          position: 'left',
        },
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
            // Add a 'Basic Training' link here once that doc exists
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
      darkTheme: prismThemes.dracula,
    },
  },
 
  // Markdown configuration
  markdown: {
    format: 'detect',
  },
};
 
export default config;