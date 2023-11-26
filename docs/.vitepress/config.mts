import { defineConfig } from 'vitepress'
import markdownItFootnote from 'markdown-it-footnote'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Symbology",
  description: "A VitePress Site",
  markdown: {
    config: md => md.use(markdownItFootnote)
  },
  themeConfig: {
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Two-Dimensional Barcodes',
        items: [
          { text: 'Aztec Code', link: '/reference/aztec' },
          { text: 'Code One', link: '/reference/codeone' },
          { text: 'Data Matrix', link: '/reference/datamatrix' },
          { text: 'DotCode', link: '/reference/dotcode' },
          { text: 'Grid Matrix', link: '/reference/gridmatrix' },
          { text: 'Han Xin Code', link: '/reference/hanxin' },
          { text: 'MaxiCode', link: '/reference/maxicode' },
          { text: 'QR Code', link: '/reference/qr' },
          { text: 'Ultracode', link: '/reference/ultracode' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jshor/symbology' }
    ]
  }
})
