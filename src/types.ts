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
  /** 岗位定位，展示在页头右侧（墨蓝强调） */
  title: string
  /** public 目录下的头像文件名 */
  avatar: string
  /** 经验年限的起算年份，页面据此自动计算「N 年+」 */
  experienceStartYear: number
  /** 页头右下的一行元信息，如 城市 / 学历 / 到岗时间 */
  meta: string[]
  /** 个人简介。支持 ==文本== 墨蓝高亮与 `代码` 行内标签 */
  summary: string
  contacts: ContactLink[]
}

/** 页头下方的数字卡（经验年限卡由页面自动计算并置于首位） */
export interface Metric {
  value: string
  unit: string
  label: string
}

/** 职业演进时间线的一步：一次判断或范围的跃迁，不是一段履历 */
export interface TimelineStep {
  year: string
  head: string
  body: string
}

/** 项目条目，严格遵守 kami 角色 / 动作 / 结果 三段式 */
export interface Project {
  name: string
  /** 项目类型，如「国际物流全链路」 */
  kind: string
  period: string
  /** 角色定位标签，如「架构主导」「独立开发」，注意梯度校准 */
  role: string
  /** 角色行：项目是什么 + 为什么做 + 你的位置 */
  scene: string
  /** 动作行：技术方案 / 关键决策 / 执行路径 */
  action: string
  /** 结果行：数据为王，==关键数字== 高亮 1-2 处 */
  result: string
}

export interface Company {
  name: string
  department: string
  role: string
  period: string
}

export interface OpenSourceItem {
  name: string
  href: string
  /** 语言 + 核心定位 + 场景，一行以内 */
  desc: string
}

export interface Skill {
  label: string
  body: string
}

export interface Education {
  school: string
  major: string
  degree: string
}

export interface Resume {
  profile: Profile
  /** 页头数字卡的后三张（第一张「N 年+」由页面计算） */
  metrics: Metric[]
  experience: {
    /** 分节线右侧的副标题，如「2015.11 - 至今 · 从独立开发到前端主程」 */
    sub: string
    timeline: TimelineStep[]
    projects: Project[]
  }
  moreProjects: {
    sub: string
    projects: Project[]
  }
  companies: Company[]
  openSource: {
    sub: string
    /** 开源定位一句话，支持 ==高亮== 与 **加重** */
    intro: string
    items: OpenSourceItem[]
    /** 高亮框的 TAG 文字，如「组件沉淀」 */
    highlightTag: string
    highlight: string
  }
  skills: Skill[]
  education: Education[]
  closing: string
}

/** 主题标识：kami 亮色（默认）与其暗色面 */
export type ThemeId = 'kami' | 'dark'

export interface Theme {
  id: ThemeId
  /** 控件中展示的名称 */
  label: string
  /** 该主题强调色，用于色板小圆点 */
  swatch: string
}
