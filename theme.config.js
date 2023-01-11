export default {
  logo: <strong>Spesana 24'B Docs</strong>,
  titleTemplate: " - Spesana 24'B Docs",
//  project: {
//    link: "https://github.com/spesana24b/spesana24b.github.io"
//  },
  docsRepositoryBase: 'https://github.com/spesana24b/spesana24b.github.io/blob/main/',
  useNextSeoProps() {
    return {
    titleTemplate: '%s - Spesana 24'B Docs'
    }
  },
  navigation: {
    next: true,
    prev: true
  },
  darkMode: true,
  editLink: {
    text: "🖋️ Sunting halaman ini"
  },
  feedback: {
    content: () => <>💬 Ada pertanyaan ?</>,
    labels: 'feedback'
  },
  footer: {
    text: <div><center>Host by <a href="https://pages.github.com/" target="_blank">github pages</a> • © Spesana 24B</center></dic>,
  },
}
