---
version: alpha
name: chenzehui-brand
description: A cool-neutral personal resume brand — teal accent on cold gray surfaces, Resume sheet mark, IBM Plex Sans + Mono with Noto Sans SC for Chinese. Light mode is the default product surface; dark mode keeps the same hierarchy on neutral graphite with a restrained accent. Print always forces white paper. No warm paper, no secondary accent.
assets:
  mark: ./brand/mark.svg
  logo: ./brand/logo.svg
  preview: ./brand/preview.html
colors:
  primary: '#00696e'
  primary-strong: '#005055'
  primary-soft: 'rgba(0, 105, 110, 0.12)'
  primary-soft-dark: 'rgba(108, 184, 188, 0.16)'
  primary-fill-dark: '#0e7f84'
  primary-fill-strong-dark: '#0b6c70'
  accent: '#00696e'
  accent-text-dark: '#6cb8bc'
  rule-dark: '#2f6467'
  tech-dark: '#d3d8dc'
  on-primary: '#ffffff'
  on-mark: '#ffffff'
  ink: '#111827'
  ink-soft: '#5b6472'
  ink-muted: '#8b93a1'
  ink-faint: '#6b7280'
  ink-dark: '#e4e7e9'
  ink-soft-dark: '#b2b9bf'
  ink-muted-dark: '#858d94'
  canvas: '#f4f5f7'
  canvas-dark: '#0b0d0e'
  muted: '#eef0f3'
  muted-dark: '#141719'
  surface: '#ffffff'
  surface-dark: '#191c1e'
  surface-soft: '#e8eaef'
  surface-soft-dark: '#23272a'
  hairline: 'rgba(17, 24, 39, 0.1)'
  hairline-dark: '#30353a'
  code-bg: '#0b0d12'
  brand-50: '#e5f4f4'
  brand-100: '#c4e6e7'
  brand-200: '#8bced1'
  brand-300: '#4aafb4'
  brand-400: '#178f95'
  brand-500: '#00696e'
  brand-600: '#005055'
  brand-700: '#00383c'
  print-accent: '#005055'
  print-accent-deep: '#00383c'
  print-line: '#ccd2da'
  warning: '#f4b400'
  success: '#0fa336'
  destructive: '#dc2626'

typography:
  display-lg:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.8px
  display-md:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  heading-2:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.02em
  body-md:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  wordmark:
    fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0
  eyebrow:
    fontFamily: 'IBM Plex Mono, ui-monospace, monospace'
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.08em
  caption:
    fontFamily: 'IBM Plex Mono, ui-monospace, monospace'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0
  code:
    fontFamily: 'IBM Plex Mono, ui-monospace, Consolas, monospace'
    fontSize: 12.5px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  nav-link:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 13.5px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0
  tech:
    fontFamily: 'IBM Plex Mono, ui-monospace, Consolas, monospace'
    fontSize: 0.84em
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  2xs: 2px
  xs: 4px
  sm: 6px
  md: 6px
  lg: 14px
  xl: 14px
  2xl: 22px
  full: 9999px
  sheet: 0

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px

shadow:
  xs: '0 1px 2px rgba(15, 23, 42, 0.04)'
  sm: '0 1px 2px rgba(15, 23, 42, 0.05), 0 1px 1px rgba(15, 23, 42, 0.04)'
  md: '0 10px 30px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(15, 23, 42, 0.05)'
  lg: '0 16px 40px rgba(15, 23, 42, 0.1), 0 4px 12px rgba(15, 23, 42, 0.06)'

components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.button}'
    rounded: '{rounded.sm}'
    padding: 0 14px
    height: 36px
  button-secondary:
    backgroundColor: '{colors.surface-soft}'
    textColor: '{colors.ink}'
    typography: '{typography.button}'
    rounded: '{rounded.sm}'
    padding: 0 14px
    height: 36px
  button-ghost:
    backgroundColor: transparent
    textColor: '{colors.ink-soft}'
    typography: '{typography.button}'
    rounded: '{rounded.sm}'
    padding: 0 14px
    height: 36px
  badge:
    backgroundColor: '{colors.primary-soft}'
    textColor: '{colors.accent}'
    typography: '{typography.body-sm}'
    rounded: '{rounded.full}'
    padding: 2px 8px
  resume-sheet:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    typography: '{typography.body-md}'
    rounded: '{rounded.sheet}'
    shadow: '{shadow.md}'
  section-header:
    textColor: '{colors.ink}'
    typography: '{typography.heading-2}'
    borderColor: '{colors.hairline}'
  tech-tag:
    textColor: '{colors.primary-strong}'
    typography: '{typography.tech}'
  highlight:
    textColor: '{colors.primary}'
    fontWeight: 700
  resume-dock:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    typography: '{typography.button}'
    borderColor: '{colors.hairline}'
    rounded: '{rounded.sm}'
    padding: 4px
    shadow: '{shadow.sm}'
  online-copy-card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    typography: '{typography.body-md}'
    rounded: '{rounded.lg}'
    padding: 16px
---

# 陈泽辉简历 · 品牌规范

## 概览

这是面向个人简历站点的**冷中性工作台**品牌。默认产品面为亮色：冷灰页底 `{colors.canvas}`、白色纸面 `{colors.surface}`、单一青绿 accent `{colors.primary}`。暗色维持同一层级，换成中性石墨面阶（不沿用 Forme / Tenon 的蓝黑，也不给底色染青），accent 只留给标题与数字。打印永远强制白纸。

品牌辨识来自「简历版面」mark 与清楚的纸面层级，而不是摄影横幅、装饰条或高饱和渐变。字标使用中文姓名 **陈泽辉**，Noto Sans SC 600、字距 0。

核心特征：

- 青绿 `#00696e` 是唯一交互品牌色，用于 CTA、焦点、选中与 mark；不引入第二 accent。
- 面阶必须可读：canvas / background < muted stage < surface card < surface-soft popover。
- UI 用 IBM Plex Sans；中文回落 Noto Sans SC / PingFang SC / Microsoft YaHei；meta、eyebrow、代码与 `.tech` 用 IBM Plex Mono。
- 默认交互圆角 6px；mark、卡片 14px；大型覆盖面 22px；简历纸面圆角 0。
- 分隔主要依赖面阶与细线，阴影保持轻量。

## 与 Tenon / Forme 的同族关系

本品牌与 Tenon、Forme 共用冷中性工作台体系、IBM Plex 字体、面阶、间距、圆角与阴影语言。三者必须保持可辨：

- 主色青绿 `#00696e`（约 183°）；Forme 天青蓝 `#0b57d0`（约 217°）；Tenon 钴蓝 `#2647e0`（约 229°）。色相与两个兄弟分开，mark 几何与中文字标继续保持可辨。
- 唯一 mark 是「简历版面」；不得复用 Forme 的字段栈或 Tenon 的 Cluster graph。
- 文案围绕姓名、职位、经历、项目、打印与线上复制；Tenon 围绕 canvas / node / connection；Forme 围绕 screen / field / material。

## 范围：品牌包与产品主题

`DESIGN.md` 是**品牌包**真源：`brand/mark.svg`、`brand/logo.svg`、`brand/preview.html` 与营销表面。产品主题分两处：

| 关注点 | 品牌包 | 简历正文 `resume.css` | 工具型 UI `ui.css` |
| --- | --- | --- | --- |
| 识别核 primary | `#00696e` | `--color-classic-accent` | `--primary` / `--ring` |
| 亮色 ink-faint | 家族 muted `#8b93a1` | `#6b7280`（12px 联系方式与打印需 AA） | `--muted-foreground` |
| 暗色 primary | `#00696e`（mark 恒定） | 文字 `#6cb8bc`；按钮 `#0e7f84` + 白字 | `#0e7f84` + 白字，ring `#6cb8bc` |
| 暗色 accent 用途 | — | 标题条 `#2f6467`，`.tech` 回正文色 `#d3d8dc` | — |
| 暗色 ink-soft | `#b2b9bf` | `#b2b9bf` | `#b2b9bf` |
| 暗色面阶 | `#0b0d0e` → `#23272a`（中性石墨） | paper / sheet `#191c1e` | `#0b0d0e` / `#191c1e` / `#23272a` |
| 打印 accent | — | `#005055` / `#00383c`，线 `#ccd2da` | 不参与打印 |

改识别核要同时改品牌包与两边产品主题；只改纸面或工具 chrome 面阶时只改对应 CSS。

## 颜色

### 品牌与交互

- **Primary** `{colors.primary}`：CTA、mark、焦点、链接、简历职位色。
- **Primary Strong** `{colors.primary-strong}`：primary 的 hover / pressed；`.tech` 深色文字。
- **Primary Soft** `{colors.primary-soft}` / `{colors.primary-soft-dark}`：badge、软选中底。
- **Accent Text Dark** `{colors.accent-text-dark}`：暗色表面只用于姓名职位、指标数字、`.hl` 高亮与链接；实心按钮用 `{colors.primary-fill-dark}` + 白字，不用浅青填充。
- **暗色克制**：section 标题条用 `{colors.rule-dark}`，技术标签用 `{colors.tech-dark}`（靠 Mono 区分，不着色），避免满屏青色。
- **On Primary / On Mark** `{colors.on-primary}`：青绿上的白色文字与几何。

### 面阶与语义

- 亮色：canvas `{colors.canvas}` → muted `{colors.muted}` → surface `{colors.surface}` → surface-soft `{colors.surface-soft}`。
- 暗色：canvas `{colors.canvas-dark}` → muted `{colors.muted-dark}` → surface `{colors.surface-dark}` → surface-soft `{colors.surface-soft-dark}`。
- **Ink Faint** `{colors.ink-faint}`：联系方式等小字，产品主题保持 `#6b7280`，不降到家族 muted 的 `#8b93a1`。
- 状态色只表达语义：warning `{colors.warning}`、success `{colors.success}`、destructive `{colors.destructive}`。
- 不用暖纸色，不把 warning 黄色当作装饰 accent。

## 排版

- UI / body：IBM Plex Sans，中文回落 Noto Sans SC。
- 字标：Noto Sans SC 600，字距 0（中文不加负字距）。
- meta / eyebrow / code / `.tech`：IBM Plex Mono。
- 字标与标题用句式 / title case；不得使用全大写宽字距字标。
- 正文基准 14px / 1.5；密集 UI 13px；按钮 14px / 500；代码 12.5px。
- 中文正文行高不低于 1.5。

## 布局

- 基础单位 4px；间距梯为 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64。
- 简历纸面内边距约 `clamp(28px, 5vw, 60px)`；工具控件间距 8px。
- 品牌预览最大宽度约 1080px；简历页以居中 A4 纸面组织；线上版以单列复制卡片组织。
- 先折叠列，再缩小字号；不要把 14px 正文压到不可读。

## 高程与形状

- 页底与 canvas 无阴影；纸面用 `{shadow.md}`。
- 底部工具条用 `{shadow.sm}`；dialog / popover 使用 `{shadow.md}` 或 `{shadow.lg}`。
- 默认交互圆角 `{rounded.sm}` 6px；微型嵌套 2 / 4px；mark 与卡片 14px；大型覆盖面 22px；简历纸面 `{rounded.sheet}` 0；pill 只给 badge / toggle。
- 不以厚光晕或大面积渐变制造深度。

## 组件

- **Primary Button**：青绿填充、白字、高 36px、6px 圆角；hover 用 primary-strong。
- **Secondary Button**：surface-soft 填充、ink 文字、可加 hairline。
- **Ghost Button**：透明底、ink-soft 文字。
- **Badge**：primary-soft 底 + accent 文字，full radius。
- **Resume Sheet**：白色（或暗色 surface）纸面，圆角 0，hairline 边，`{shadow.md}`；打印时去边与影。
- **Section Header**：ink 标题 + hairline 底边。
- **Tech Tag**（`.tech`）：Mono、primary-strong 色、无底无边。
- **Highlight**（`.hl`）：primary 色、字重 700。
- **Resume Dock**：全站唯一的浮动工具条，surface 底 + hairline + `{shadow.sm}`，6px 圆角、4px 内边距，内部控件 2px 微型嵌套圆角。只停靠底部：线上版卡片右上角是复制按钮，顶部浮层会在滚动时盖住它。内容按路由给出：版本切换（当前项 surface-soft 底，其余 ink-soft 文字）→ 竖向 hairline → 主题切换图标。打印时隐藏。打印走浏览器 `Ctrl/Cmd + P`。
- **Online Copy Card**：surface 卡、14px 圆角，承载分段复制文案。

## 品牌 mark 与字标

- **Mark**：「简历版面」—— 青绿 `rx=14` 圆角方块，白色标题条、右上头像块与两行正文条。
- **语义**：指向一页带照片的简历文档；16px 下应先读成「文档块」，不要求辨认头像语义。
- **字标**：mark + 「陈泽辉」，Noto Sans SC 600，字距 0。
- **尺寸**：64 默认、32 favicon、16 compact。
- favicon（`public/favicon.svg`）必须跟随 `brand/mark.svg`。

## 打印

- 打印永远强制亮色白纸，压过暗色主题。
- 打印 accent 用 `{colors.print-accent}` / `{colors.print-accent-deep}`；分隔线 `{colors.print-line}`。
- ink 保持 `#111827`；纸面与页底保持 `#ffffff`。
- 工具栏、导航等 `.no-print` 元素隐藏；纸面去边、去影、圆角 0。
- 最小字号不低于约 9pt，保证招聘平台与黑白打印可读。

## 应做 / 不应做

### 应做

- 保持青绿为唯一交互 accent，软底从 brand ramp 生成。
- 保持 muted / canvas 与 surface 纸面的亮度差。
- 使用中文字标「陈泽辉」与 Noto Sans SC 600。
- 品牌色变化时同步 `resume.css`、`ui.css` 与 `brand/preview.html`。
- 打印路径始终验证白纸 + 深色 ink。

### 不应做

- 不复用 Forme 字段栈或 Tenon Cluster graph mark。
- 不引入暖奶油纸底、橙色第二 accent 或摄影主视觉。
- 不把 card 与 muted 设成同阶。
- 不把所有控件做成 pill；不在长正文使用 Mono。
- 不让暗色主题泄漏进打印。

## 响应式

- `< 768px`：纸面内边距收缩；display-lg 降到约 28px。
- `768–1024px`：纸面居中，联系方式可双列。
- 工具条：`< 640px` 为底部通栏（左右 12px），版本切换平分宽度，控件高 40px；`≥ 640px` 停靠右下角（20px），控件高 36px。两页底部都留约 96px，末尾内容不被遮挡。
- 密集工具条按钮最低 36px；触控优先表面建议 40–44px；图标按钮命中区至少 32px。

## 迭代指南

1. 一次只改一个关注点：颜色、排版、圆角或组件。
2. 文档引用 token（如 `{colors.primary}`），新代码不散落十六进制。
3. 明暗两态保持同一语义角色，只允许值变化。
4. 先保证层级清楚，再增加色彩强度。
5. 识别核改动同步品牌包与产品主题；纸面或工具 chrome 面阶改动只落对应 CSS。
6. 任何 accent 改动后跑一遍打印预览。

## 已知缺口

- 营销落地页不在本规范范围；需要时扩展本文件，不创建第二套 accent。
- 字体装载策略由宿主决定；预览页与站点入口为方便使用 Google Fonts。
- 简历纸面的分页与防截断规则在 `resume.css` 的 `@media print` 中，尚未逐组件枚举进本文件。
