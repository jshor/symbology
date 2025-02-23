export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/assets/hero.svg\",\"actionText\":\"Read the docs →\",\"actionLink\":\"/docs/\",\"footer\":\"© 2021 Symbology.js.\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Quick start\",\"slug\":\"quick-start\",\"link\":\"#quick-start\",\"children\":[{\"level\":3,\"title\":\"Example usage\",\"slug\":\"example-usage\",\"link\":\"#example-usage\",\"children\":[]}]}],\"git\":{\"updatedTime\":1617236845000,\"contributors\":[{\"name\":\"Josh Shor\",\"email\":\"jpshor@gmail.com\",\"commits\":3},{\"name\":\"Josh Shor\",\"email\":\"jshor@users.noreply.github.com\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
