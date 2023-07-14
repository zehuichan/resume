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
        text: 'Specification',
        items: [
          { text: 'Project', link: '/specification/project' },
          { text: 'Component', link: '/specification/component' }
        ]
      },
      {
        text: 'Interview',
        items: [
          { text: 'Javascript', link: '/interview/javascript' },
          { text: 'Framework', link: '/interview/framework' }
        ]
      },
      { text: 'Summary', link: '/summary' },
      { text: 'About', link: '/about' }
    ],
    sidebar: false,
    outline: false,
    outlineTitle: 'Outline',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zehuichan' }
    ]
  }
})
