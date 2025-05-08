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
        text: 'One-Dimensional Barcodes',
        items: [
          { text: 'Channel Code', link: '/reference/one-dimensional/channelcode' },
          { text: 'Codabar', link: '/reference/one-dimensional/codabar' },
          { text: 'Code 11', link: '/reference/one-dimensional/code11' },
          { text: 'Code 128', link: '/reference/one-dimensional/code128' },
          { text: 'Code 39', link: '/reference/one-dimensional/code39' },
          { text: 'GS1 DataBar', link: '/reference/one-dimensional/gs1databar' },
          { text: 'International Article Number (EAN)', link: '/reference/one-dimensional/ean' },
          { text: 'Pharmacode', link: '/reference/one-dimensional/pharmacode' },
          { text: 'Plessey Code', link: '/reference/one-dimensional/plessey' },
          { text: 'Telepen', link: '/reference/one-dimensional/telepen' },
          { text: 'Two-out-of-five Code', link: '/reference/one-dimensional/code2of5' },
          { text: 'Universal Product Code (UPC)', link: '/reference/one-dimensional/upc' },
        ]
      },
      {
        text: 'Two-Dimensional Barcodes',
        items: [
          { text: 'Aztec Code', link: '/reference/two-dimensional/aztec' },
          { text: 'Code One', link: '/reference/two-dimensional/codeone' },
          { text: 'Data Matrix', link: '/reference/two-dimensional/datamatrix' },
          { text: 'DotCode', link: '/reference/two-dimensional/dotcode' },
          { text: 'Grid Matrix', link: '/reference/two-dimensional/gridmatrix' },
          { text: 'Han Xin Code', link: '/reference/two-dimensional/hanxin' },
          { text: 'MaxiCode', link: '/reference/two-dimensional/maxicode' },
          { text: 'QR Code', link: '/reference/two-dimensional/qr' },
          { text: 'Ultracode', link: '/reference/two-dimensional/ultracode' }
        ]
      },
      {
        text: 'Postal Barcodes',
        items: [
          { text: 'Korea Post', link: '/reference/postal/korea' }
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
