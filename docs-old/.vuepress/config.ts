import { path } from '@vuepress/utils'
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
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
  theme: defaultTheme({
    logo: '/assets/hero.svg',
    repo: 'jshor/symbology',
    docsDir: 'docs',
    sidebarDepth: 3,
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
  })
})
