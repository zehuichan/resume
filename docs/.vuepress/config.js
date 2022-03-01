const { path } = require('@vuepress/utils')

module.exports = {
  base: '/resume/',
  lang: 'zh-CN',
  title: '陈泽辉的简历',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },],
  ],
  themeConfig: {
    sidebar: false,
    sidebarDepth: 2,
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: true,
    contributorsText: '贡献者'
  },
  markdown: {
    code: {
      lineNumbers: false // 代码块显示行号
    }
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components')
      }
    ]
  ]
}