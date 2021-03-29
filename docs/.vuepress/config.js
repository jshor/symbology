const path = require('path')

module.exports = {
  base: '/',
  dest: path.join(__dirname, '../../build/docs'),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Symbology',
      description: 'Node.js Barcode Generator'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: '/assets/favicon.svg'
    }]
  ],
  host: 'localhost',
  serviceWorker: true,
  themeConfig: {
    logo: '/assets/symbology-logo.svg',
    repo: 'jshor/symbology',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Documentation',
            link: '/docs/'
          },
          {
            text: 'Reference',
            link: '/reference/'
          }
        ],
        sidebar: [
          {
            title: 'Documentation',
            path: '/docs/',
            children: [
              {
                title: 'Installation',
                path: '/docs/installation',
              },
              {
                title: 'API',
                path: '/docs/api',
              },
              {
                title: 'Options',
                path: '/docs/options',
              },
              {
                title: 'Encoding',
                path: '/docs/encoding',
              },
              {
                title: 'Error handling',
                path: '/docs/error-handling',
              },
            ]
          },
          {
            title: 'Reference',
            path: '/reference/',
            children: [
              {
                title: 'One-Dimensional symbols',
                path: '/reference/one-dimensional',
              },
              {
                title: 'Two-Dimensional symbols',
                path: '/reference/two-dimensional',
              },
              {
                title: 'Composite symbols (ISO 24723)',
                path: '/reference/composite',
              },
              {
                title: 'Stacked symbologies',
                path: '/reference/stacked',
              },
              {
                title: 'Two-Track symbols',
                path: '/reference/two-track',
              },
              {
                title: 'Other Barcode-Like Markings',
                path: '/reference/other',
              }
            ]
          },
          {
            title: 'Development',
            path: '/development',
          }
        ]
      }
    }
  }
}
