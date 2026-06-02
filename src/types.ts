import type { Component } from 'vue'

export interface ContactLink {
  /** lucide 图标组件，如 `Mail`、`Github`（来自 @lucide/vue） */
  icon: Component
  label: string
  value: string
  href?: string
}

export interface Profile {
  name: string
  title: string
  /** public 目录下的头像文件名 */
  avatar: string
  /** 经验年限的起算年份，页面据此自动计算“N 年+” */
  experienceStartYear: number
  availability: string
  summary: string
  meta: string[]
  contacts: ContactLink[]
}

export interface Job {
  company: string
  department?: string
  role: string
  period: string
  stack: string[]
  bullets: string[]
}

export interface Project {
  name: string
  period: string
  description: string
  responsibilities: string[]
  stack: string[]
}

export interface Education {
  school: string
  major: string
  degree: string
}

export interface OpenSource {
  name: string
  href: string
  description: string
}

export interface Resume {
  profile: Profile
  highlights: string[]
  jobs: Job[]
  projects: Project[]
  education: Education[]
  openSource: OpenSource[]
  closing: string
}

/** 换肤：可选皮肤的标识 */
export type ThemeId = 'redstone' | 'dark' | 'linear' | 'vercel' | 'notion'

export interface Theme {
  id: ThemeId
  /** 控件中展示的名称 */
  label: string
  /** 该皮肤强调色，用于色板小圆点 */
  swatch: string
}
