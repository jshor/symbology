const path = require('path')

module.exports = {
  base: '/',
  dest: path.join(__dirname, '../../build/docs'),
  locales: {
    '/': {
      lang: 'en-US',
      text: 'Symbology',
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
    logo: '/assets/hero.svg',
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
        navbar: [
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
            text: 'Documentation',
            link: '/docs/',
            children: [
              {
                text: 'Installation',
                link: '/docs/installation',
              },
              {
                text: 'API',
                link: '/docs/api',
              },
              {
                text: 'Options',
                link: '/docs/options',
              },
              {
                text: 'Encoding',
                link: '/docs/encoding',
              },
              {
                text: 'Error handling',
                link: '/docs/error-handling',
              },
            ]
          },
          {
            text: 'Reference',
            link: '/reference/',
            children: [
              {
                text: 'One-Dimensional symbols',
                link: '/reference/one-dimensional',
              },
              {
                text: 'Two-Dimensional symbols',
                link: '/reference/two-dimensional',
              },
              {
                text: 'Composite symbols (ISO 24723)',
                link: '/reference/composite',
              },
              {
                text: 'Stacked symbologies',
                link: '/reference/stacked',
              },
              {
                text: 'Two-Track symbols',
                link: '/reference/two-track',
              },
              {
                text: 'Other Barcode-Like Markings',
                link: '/reference/other',
              }
            ]
          },
          {
            text: 'Development',
            link: '/development',
          }
        ]
      }
    }
  }
}
