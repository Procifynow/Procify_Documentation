/**
 * Procify Technical Documentation
 *
 * One sidebar per folder, so Previous/Next stays inside the same folder.
 */

const sidebars = {
  UserGuideSidebar: [
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/User Guide/Developer AI - User guide',
          label: 'Developer AI - User guide',
        },
      ],
    },
  ],

  trainingGuideSidebar: [
    {
      type: 'category',
      label: 'Training Guide',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/Training Guide/Advance Training Guide',
          label: 'Advanced Training Guide',
        },
        { type: 'doc', id: 'Docs/Training Guide/Session 1', label: 'Session 1' },
        { type: 'doc', id: 'Docs/Training Guide/Session 2', label: 'Session 2' },
        { type: 'doc', id: 'Docs/Training Guide/Session 3', label: 'Session 3' },
        { type: 'doc', id: 'Docs/Training Guide/Session 4', label: 'Session 4' },
        { type: 'doc', id: 'Docs/Training Guide/Session 5', label: 'Session 5' },
        { type: 'doc', id: 'Docs/Training Guide/Session 6', label: 'Session 6' },
        { type: 'doc', id: 'Docs/Training Guide/Session 7', label: 'Session 7' },
        { type: 'doc', id: 'Docs/Training Guide/Session 8', label: 'Session 8' },
      ],
    },
  ],

  releaseNotesSidebar: [
    {
      type: 'category',
      label: 'Release Notes',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Docs/Release Notes/7.7.564',
          label: '7.7.564',
        },
        {
          type: 'doc',
          id: 'Docs/Release Notes/7.2.359',
          label: '7.2.359',
        },
      ],
    },
  ],
};

module.exports = sidebars;