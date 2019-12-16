const path = require('path')
const getDir = require('./utils/getDir')

console.error(getDir('docs'))

module.exports = {
  base: '/',
  dest: path.join(__dirname, '../../build'),
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
      href: '/assets/favicon.png'
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
            link: '/guide/'
          }
        ],
        sidebar: [
          {
            title: 'Documentation',
            path: '/docs/',
            children: getDir('docs')
          },
          {
            title: 'Reference',
            path: '/guide/',
            children: getDir('guide/symbologies')
          }
        ]
      }
    }
  }
}