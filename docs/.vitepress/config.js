import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/resume/',
  lang: 'zh-CN',
  title: '陈泽辉的简历',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', sizes: '16x16', href: '/vite.svg' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/vite.svg' }]
  ],
  themeConfig: {
    logo: '/vite.svg',
    siteTitle: false,
    nav: [
      {
        text: 'Interview',
        items: [
          { text: 'Javascript', link: '/interview/javascript' },
          { text: 'Framework', link: '/interview/framework' },
        ]
      }
    ],
    sidebar: false,
    outlineTitle: 'Outline',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zehuichan' }
    ]
  }
})
