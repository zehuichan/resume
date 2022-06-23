const { defaultTheme } = require('@vuepress/theme-default')
const { containerPlugin } = require('@vuepress/plugin-container')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  base: '/resume/',
  lang: 'zh-CN',
  title: '陈泽辉的简历',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },],
  ],
  theme: defaultTheme({
    home: '/',
    repo: 'https://github.com/zehuichan',
    repoLabel: 'Github',
    sidebar: false,
    editLink: false,
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    contributors: true,
    contributorsText: '贡献者'
  }),
  plugins: [
    containerPlugin({
      type: 'experience-card',
      before: (info) => `<ExperienceCard title="${info}">\n`,
      after: () => '</ExperienceCard>\n'
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    })
  ]
}