export const themeData = JSON.parse("{\"logo\":\"/assets/hero.svg\",\"repo\":\"jshor/symbology\",\"docsDir\":\"docs\",\"sidebarDepth\":3,\"navbar\":[{\"text\":\"Documentation\",\"link\":\"/docs/\"},{\"text\":\"Reference\",\"link\":\"/reference/\"}],\"sidebar\":[{\"text\":\"Documentation\",\"link\":\"/docs/\",\"children\":[{\"text\":\"Installation\",\"link\":\"/docs/installation\"},{\"text\":\"API\",\"link\":\"/docs/api\"},{\"text\":\"Options\",\"link\":\"/docs/options\"},{\"text\":\"Encoding\",\"link\":\"/docs/encoding\"},{\"text\":\"Error handling\",\"link\":\"/docs/error-handling\"}]},{\"text\":\"Reference\",\"link\":\"/reference/\",\"children\":[{\"text\":\"One-Dimensional symbols\",\"link\":\"/reference/one-dimensional\"},{\"text\":\"Two-Dimensional symbols\",\"link\":\"/reference/two-dimensional\"},{\"text\":\"Composite symbols (ISO 24723)\",\"link\":\"/reference/composite\"},{\"text\":\"Stacked symbologies\",\"link\":\"/reference/stacked\"},{\"text\":\"Two-Track symbols\",\"link\":\"/reference/two-track\"},{\"text\":\"Other Barcode-Like Markings\",\"link\":\"/reference/other\"}]},{\"text\":\"Development\",\"link\":\"/development\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
