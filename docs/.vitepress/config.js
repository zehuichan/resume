import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/resume/',
  lang: 'zh-CN',
  title: '陈泽辉的简历',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }]
  ],
  themeConfig: {
    home: '/',
    sidebar: false,
    outlineTitle: 'Outline',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zehuichan' }
    ],
    editLink: false,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2015-present zeHuiChan.'
    }
  }
})
