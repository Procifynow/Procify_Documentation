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

  // Local documentation search (works fully in a production build)
  plugins: [
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
    // Light mode only, no toggle button
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
        {
          type: 'docSidebar',
          sidebarId: 'UserGuideSidebar', // must match sidebars.js exactly (case-sensitive)
          label: 'User Guide',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'trainingGuideSidebar',
          label: 'Training Guide',
          position: 'left',
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