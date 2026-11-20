---
version: alpha
name: chenzehui-resume
description: 陈泽辉简历站的设计规范。工具界面（底部工具条、线上版、快捷键清单）照 Linear 的手感：中性灰阶，主色青绿只给主按钮、链接和聚焦，层次靠底色和 1px 线。A4 简历纸面是例外，保留自己的排版和青绿强调；打印永远是白纸。
assets:
  mark: ./brand/mark.svg
  logo: ./brand/logo.svg
  preview: ./brand/preview.html
colors:
  # 工具界面 · 浅色（src/shared/styles/ui.css 的 :root）
  background: '#fafafa'
  muted: '#f5f5f5'
  accent: '#f0f0f0'
  selected: '#e4e4e4'
  border: '#e5e5e5'
  card: '#ffffff'
  foreground: '#1f1f1f'
  muted-foreground: '#444746'
  primary: '#00696e'
  on-primary: '#ffffff'
  primary-soft: '#d2e9ea'
  link: '#00696e'
  ok: '#2e7d4f'
  warn: '#946000'
  bad: '#b3261e'
  done: '#5f6b7a'
  ok-soft: '#eef5f1'
  warn-soft: '#f6f2eb'
  bad-soft: '#f9eeed'
  done-soft: '#f2f3f4'
  # 工具界面 · 深色（ui.css 的 .dark）
  background-dark: '#131314'
  card-dark: '#1e1f20'
  popover-dark: '#282a2c'
  accent-dark: '#333537'
  selected-dark: '#3a3c3e'
  border-dark: '#444746'
  foreground-dark: '#e3e3e3'
  muted-foreground-dark: '#c4c7c5'
  primary-dark: '#0e7f84'
  primary-soft-dark: '#1d4547'
  link-dark: '#6cb8bc'
  ring-dark: '#6cb8bc'
  ok-dark: '#6dd58c'
  warn-dark: '#f6c35b'
  bad-dark: '#f2b8b5'
  done-dark: '#a3adba'
  ok-soft-dark: '#29382f'
  warn-soft-dark: '#3c3628'
  bad-soft-dark: '#3c3435'
  done-soft-dark: '#313336'
  # 简历纸面（例外，src/views/classic/styles/resume.css）
  sheet-paper: '#ffffff'
  sheet-ink: '#111827'
  sheet-ink-soft: '#5b6472'
  sheet-ink-faint: '#6b7280'
  sheet-accent: '#00696e'
  sheet-tech: '#005055'
  sheet-line: 'rgba(17, 24, 39, 0.1)'
  sheet-paper-dark: '#191c1e'
  sheet-ink-dark: '#e4e7e9'
  sheet-ink-soft-dark: '#b2b9bf'
  sheet-ink-faint-dark: '#858d94'
  sheet-accent-dark: '#6cb8bc'
  sheet-rule-dark: '#2f6467'
  sheet-tech-dark: '#d3d8dc'
  # 打印（压过深色，永远白纸）
  print-ink-soft: '#374151'
  print-ink-faint: '#5f6773'
  print-accent: '#005055'
  print-tech: '#00383c'
  print-line: '#ccd2da'

typography:
  ui-title:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
  ui-body:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  ui-label:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
  ui-caption:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
  kbd:
    fontFamily: 'IBM Plex Mono, ui-monospace, Consolas, monospace'
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1
  sheet-name:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 2.8rem
    fontWeight: 700
    lineHeight: 1.15
  sheet-section:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1
  sheet-body:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.7
  sheet-meta:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 11.5px
    fontWeight: 400
    lineHeight: 1.6
  sheet-highlight:
    fontFamily: 'IBM Plex Sans, Noto Sans SC, PingFang SC, Microsoft YaHei, system-ui, sans-serif'
    fontSize: 1em
    fontWeight: 700
    lineHeight: 1.7
  sheet-tech:
    fontFamily: 'IBM Plex Mono, ui-monospace, Consolas, monospace'
    fontSize: 0.84em
    fontWeight: 600
    lineHeight: 1.4

rounded:
  none: 0px
  sm: 4px
  md: 6px
  xl: 10px
  mark: 14px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  sheet: 60px

components:
  page:
    backgroundColor: '{colors.background}'
    textColor: '{colors.foreground}'
    typography: '{typography.ui-body}'
  page-dark:
    backgroundColor: '{colors.background-dark}'
    textColor: '{colors.foreground-dark}'
  page-secondary-text:
    backgroundColor: '{colors.muted}'
    textColor: '{colors.muted-foreground}'
  page-secondary-text-dark:
    backgroundColor: '{colors.background-dark}'
    textColor: '{colors.muted-foreground-dark}'
  card:
    backgroundColor: '{colors.card}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.xl}'
    padding: '{spacing.md}'
  card-title:
    backgroundColor: '{colors.card}'
    textColor: '{colors.foreground}'
    typography: '{typography.ui-title}'
  card-dark:
    backgroundColor: '{colors.card-dark}'
    textColor: '{colors.foreground-dark}'
  popover-dark:
    backgroundColor: '{colors.popover-dark}'
    textColor: '{colors.foreground-dark}'
  row-hover:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.foreground}'
  row-hover-dark:
    backgroundColor: '{colors.accent-dark}'
    textColor: '{colors.foreground-dark}'
  current-item:
    backgroundColor: '{colors.selected}'
    textColor: '{colors.foreground}'
    typography: '{typography.ui-label}'
    rounded: '{rounded.md}'
  current-item-dark:
    backgroundColor: '{colors.selected-dark}'
    textColor: '{colors.foreground-dark}'
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.ui-label}'
    rounded: '{rounded.md}'
    height: 36px
  button-primary-dark:
    backgroundColor: '{colors.primary-dark}'
    textColor: '{colors.on-primary}'
  button-ghost:
    backgroundColor: '{colors.card}'
    textColor: '{colors.muted-foreground}'
    typography: '{typography.ui-label}'
    rounded: '{rounded.md}'
    height: 36px
  link:
    backgroundColor: '{colors.background}'
    textColor: '{colors.link}'
  link-dark:
    backgroundColor: '{colors.background-dark}'
    textColor: '{colors.link-dark}'
  text-selection:
    backgroundColor: '{colors.primary-soft}'
    textColor: '{colors.foreground}'
  text-selection-dark:
    backgroundColor: '{colors.primary-soft-dark}'
    textColor: '{colors.foreground-dark}'
  divider:
    backgroundColor: '{colors.border}'
    height: 1px
  divider-dark:
    backgroundColor: '{colors.border-dark}'
    height: 1px
  focus-ring-dark:
    backgroundColor: '{colors.ring-dark}'
    width: 3px
  kbd:
    backgroundColor: '{colors.card}'
    textColor: '{colors.muted-foreground}'
    typography: '{typography.kbd}'
    rounded: '{rounded.sm}'
    height: 20px
  badge-ok:
    backgroundColor: '{colors.ok-soft}'
    textColor: '{colors.ok}'
    typography: '{typography.ui-caption}'
    rounded: '{rounded.sm}'
  badge-warn:
    backgroundColor: '{colors.warn-soft}'
    textColor: '{colors.warn}'
  badge-bad:
    backgroundColor: '{colors.bad-soft}'
    textColor: '{colors.bad}'
  badge-done:
    backgroundColor: '{colors.done-soft}'
    textColor: '{colors.done}'
  badge-ok-dark:
    backgroundColor: '{colors.ok-soft-dark}'
    textColor: '{colors.ok-dark}'
  badge-warn-dark:
    backgroundColor: '{colors.warn-soft-dark}'
    textColor: '{colors.warn-dark}'
  badge-bad-dark:
    backgroundColor: '{colors.bad-soft-dark}'
    textColor: '{colors.bad-dark}'
  badge-done-dark:
    backgroundColor: '{colors.done-soft-dark}'
    textColor: '{colors.done-dark}'
  resume-dock:
    backgroundColor: '{colors.card}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.xl}'
    padding: '{spacing.xxs}'
  command-tooltip:
    backgroundColor: '{colors.card}'
    textColor: '{colors.foreground}'
    typography: '{typography.ui-caption}'
    rounded: '{rounded.md}'
  shortcut-list:
    backgroundColor: '{colors.card}'
    textColor: '{colors.foreground}'
    rounded: '{rounded.xl}'
    width: 640px
  copy-block:
    backgroundColor: '{colors.background}'
    textColor: '{colors.foreground}'
    typography: '{typography.ui-body}'
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
  copy-block-active:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.foreground}'
  copy-failed:
    backgroundColor: '{colors.card}'
    textColor: '{colors.bad}'
  resume-sheet:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.sheet-ink}'
    typography: '{typography.sheet-body}'
    rounded: '{rounded.none}'
    padding: '{spacing.sheet}'
  sheet-name:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.sheet-ink}'
    typography: '{typography.sheet-name}'
  sheet-section-header:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.sheet-ink}'
    typography: '{typography.sheet-section}'
  sheet-rule:
    backgroundColor: '{colors.sheet-accent}'
    height: 1px
  sheet-line:
    backgroundColor: '{colors.sheet-line}'
    height: 1px
  sheet-secondary:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.sheet-ink-soft}'
  sheet-meta:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.sheet-ink-faint}'
    typography: '{typography.sheet-meta}'
  sheet-highlight:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.sheet-accent}'
    typography: '{typography.sheet-highlight}'
  sheet-tech:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.sheet-tech}'
    typography: '{typography.sheet-tech}'
  resume-sheet-dark:
    backgroundColor: '{colors.sheet-paper-dark}'
    textColor: '{colors.sheet-ink-dark}'
  sheet-secondary-dark:
    backgroundColor: '{colors.sheet-paper-dark}'
    textColor: '{colors.sheet-ink-soft-dark}'
  sheet-meta-dark:
    backgroundColor: '{colors.sheet-paper-dark}'
    textColor: '{colors.sheet-ink-faint-dark}'
  sheet-highlight-dark:
    backgroundColor: '{colors.sheet-paper-dark}'
    textColor: '{colors.sheet-accent-dark}'
  sheet-tech-dark:
    backgroundColor: '{colors.sheet-paper-dark}'
    textColor: '{colors.sheet-tech-dark}'
  sheet-rule-dark:
    backgroundColor: '{colors.sheet-rule-dark}'
    height: 1px
  print-secondary:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.print-ink-soft}'
  print-meta:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.print-ink-faint}'
  print-highlight:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.print-accent}'
  print-tech:
    backgroundColor: '{colors.sheet-paper}'
    textColor: '{colors.print-tech}'
  print-line:
    backgroundColor: '{colors.print-line}'
    height: 1px
  brand-mark:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    rounded: '{rounded.mark}'
    size: 64px
---

# 陈泽辉简历 · 设计规范

## Overview

一份给招聘方看的中文技术简历，两张页面加一条底部工具条：

- **简历**（`/#/`）：A4 纸面，打印或存 PDF 投递。纸面是**例外**，保留自己的排版、字号和青绿强调，下面工具界面的规矩不管它（见 [规划](docs/规划.md) 的「产品基调」）。
- **线上版**（`/#/online`）：按招聘平台的栏目分段复制。
- **底部工具条**：两页切换、复制为 Markdown、快捷键清单。

工具界面照 Linear 的手感：中性灰阶，主色青绿 `{colors.primary}` 只给主按钮、链接、聚焦和文字选区；层次靠底色和 1px 线，不靠阴影；没有设置项，明暗跟系统走；键盘能走完全部操作。

品牌识别只有两样：「简历版面」mark（`brand/mark.svg`，favicon 跟它）和中文字标「陈泽辉」（Noto Sans SC 600，字距 0）。主色和 Forme 天青蓝 `#0b57d0`、Tenon 钴蓝 `#2647e0` 的色相分开，mark 不复用两者的字段栈和 Cluster graph。

## Colors

先定角色再定色值。色值只写在 `src/shared/styles/ui.css`（工具界面）和 `src/views/classic/styles/resume.css`（纸面和打印）里，组件和页面只用角色类名（`bg-selected`、`text-muted-foreground`）。对比度按 WCAG 2.x 算，正文要求 ≥ 4.5:1，聚焦框等非文字元素 ≥ 3:1。

### 工具界面

| 角色 | 令牌 | 浅色 | 深色 | 用在哪 |
| --- | --- | --- | --- | --- |
| 页面底 | `background` | `#fafafa` | `#131314` | 两页的页面底、未选中的复制块 |
| 次要底 | `muted` | `#f5f5f5` | `#1e1f20` | 次要区块 |
| 悬停、键盘停留 | `accent` | `#f0f0f0` | `#333537` | 幽灵按钮悬停、线上版 J/K 停着的复制块 |
| 当前项 | `selected` | `#e4e4e4` 配 `#1f1f1f` | `#3a3c3e` 配 `#e3e3e3` | 工具条上「当前在哪一页」 |
| 线 | `border` | `#e5e5e5` | `#444746` | 卡片边框、分隔线、按键框 |
| 卡片 | `card` / `popover` | `#ffffff` | `#1e1f20` / `#282a2c` | 卡片、工具条、提示、快捷键清单 |
| 正文 / 次要字 | `foreground` / `muted-foreground` | `#1f1f1f` / `#444746` | `#e3e3e3` / `#c4c7c5` | |
| 主色 | `primary` | `#00696e` | `#0e7f84` | 主按钮底、聚焦框（`ring`，深色 `#6cb8bc`） |
| 链接字 | `link` | `#00696e` | `#6cb8bc` | 链接；深色主色当字只有 3.9:1，单独取浅一档 |
| 浅主色 | `primary-soft` | `#d2e9ea` | `#1d4547` | 只给文字选区 |
| 状态四色 | `ok` `warn` `bad` `done` 和 `*-soft` | 绿黄红灰 | 同 | 只表示状态，例如「复制失败」用 `bad` |

- 灰阶四档逐档变深：页面底 → 次要底 → 悬停 → 当前项。深色里当前项 `#3a3c3e` 比悬停 `#333537` 深一档，两者同时出现分得开。
- 当前项用墨色灰底，不用主色。一页最多一个主色按钮；现在两页都没有，工具条上全是幽灵按钮。

对比度（实算）：

| 前景 | 背景 | 比值 |
| --- | --- | --- |
| 主色字 `#00696e` | 白 `#ffffff` / 页面底 `#fafafa` / 次要底 `#f5f5f5` / 悬停 `#f0f0f0` / `#ececec` | 6.47 / 6.20 / 5.93 / 5.68 / 5.48 |
| 白字 | 主色 `#00696e` / 深色主色 `#0e7f84` | 6.47 / 4.79 |
| 正文 `#1f1f1f` | `#fafafa` / `#ffffff` / `#e4e4e4` | 15.79 / 16.48 / 12.96 |
| 次要字 `#444746` | `#fafafa` / `#ffffff` / `#f0f0f0` / `#e4e4e4` | 9.00 / 9.39 / 8.24 / 7.39 |
| 深色正文 `#e3e3e3` | `#131314` / `#1e1f20` / `#282a2c` / `#3a3c3e` | 14.47 / 12.86 / 11.22 / 8.63 |
| 深色次要字 `#c4c7c5` | `#131314` / `#1e1f20` / `#333537` | 10.90 / 9.69 / 7.23 |
| 深色链接 `#6cb8bc` | `#131314` / `#1e1f20` / `#282a2c` | 8.15 / 7.25 / 6.32 |
| 状态字（浅） `ok` `warn` `bad` `done` | 各自的 `*-soft` | 4.56 / 4.79 / 5.75 / 4.88 |
| 状态字（深） | 各自的 `*-soft` | 6.79 / 7.36 / 7.09 / 5.58 |

### 简历纸面（例外）

纸面保留青绿强调：姓名下的职位、指标数字、`==高亮==`、标题条都是 `{colors.sheet-accent}`，技术词用 Mono 和 `{colors.sheet-tech}`。深色把强调降到 `{colors.sheet-accent-dark}`，标题条用 `{colors.sheet-rule-dark}`，技术词回到正文色，避免满屏青色。纸面外的页面底跟工具界面同一个 `background`。

| 前景 | 背景 | 比值 |
| --- | --- | --- |
| 强调 `#00696e` / 次要字 `#5b6472` / 小字 `#6b7280` | 纸 `#ffffff` | 6.47 / 5.98 / 4.83 |
| 深色强调 `#6cb8bc` / 次要字 `#b2b9bf` / 小字 `#858d94` | 深色纸 `#191c1e` | 7.52 / 8.63 / 5.08 |

### 打印

打印压过深色主题，永远白纸深字：强调 `{colors.print-accent}`，技术词 `{colors.print-tech}`，分隔线 `{colors.print-line}`，小字 `{colors.print-ink-faint}`，最小字号 9pt，黑白打印也读得清。

## Typography

- 字体：IBM Plex Sans，中文回落 Noto Sans SC → PingFang SC → Microsoft YaHei；按键、代码、技术词用 IBM Plex Mono。网页字体不挡首屏，连不上 Google 时用系统中文字体（见「速度和加载」）。
- 工具界面字号只有四档：11（按键）、12（分组名、提示、徽标）、14（正文、按钮）、16（卡片标题、清单标题）。不为单个元素发明新档。
- 纸面字号在 `resume.css` 和 `views/classic` 里，按 A4 排版定（姓名 2.8rem、栏目 18px、正文 13px、小字 11.5px），不受上面四档约束。
- 中文正文行高不低于 1.5；字标和标题不用全大写宽字距。

## Layout

- 间距基数 4px：4 / 8 / 12 / 16 / 24 / 32；纸面内边距 `clamp(28px, 5vw, 60px)`。
- 简历：居中的 A4 纸面。线上版：单列卡片，每段一个复制块，内容和业绩在宽屏并排两列。
- 底部工具条：`< 640px` 是底部通栏（左右 12px），两页切换平分宽度，控件高 40px，不显示快捷键按钮；`≥ 640px` 停靠右下角 20px，控件高 36px。两页底部都留约 96px，末尾内容不被挡住。
- 窄屏先折叠列，再缩字号。

## Elevation

- 层次靠底色和 1px `border`：页面底 `#fafafa` 上放白卡片，卡片不加阴影。
- 阴影只给浮在内容上面的东西：底部工具条（`shadow-sm`，它一直浮在页面上）、悬停提示和快捷键清单（`shadow-md` / `shadow-lg`）。
- 纸面的投影是纸面例外的一部分，打印时去掉。
- 不用渐变、发光、插画。

## Shapes

| 档 | 值 | 给谁 |
| --- | --- | --- |
| `sm` | 4px | 徽标、按键框、行内代码 |
| `md` | 6px | 按钮、输入框、复制块、悬停提示 |
| `xl` | 10px | 卡片、底部工具条、快捷键清单 |

纸面圆角 0；mark 是 64 格里的 `rx=14`，只属于品牌资产。

## Components

- **底部工具条**（`resume-dock.vue`）：全站唯一的浮层工具条。依次是「简历」「线上版」（当前页 `selected` 灰底）→ 竖线 →「复制为 Markdown」→ 键盘图标（打开快捷键清单）。打印时隐藏，打印交给浏览器 `Ctrl P`。
- **悬停提示**（`command-tooltip.vue`）：只用 CSS，悬停 300ms 后或键盘聚焦时淡入；内容是命令名加按键，都从命令表读。
- **快捷键清单**（`shortcut-list.vue`）：浏览器自带的 `<dialog>`，按分组排两列；当前页用不了的行置灰，不隐藏。
- **复制块**（`copy-block.vue`）：标题、右上角「复制」按钮、`<pre>` 正文。键盘停着时正文底变 `accent`。复制成功按钮写「已复制」，1.6 秒后复原；失败写「复制失败」（`bad` 色），并把正文全选，方便手动 `Ctrl C`。
- **栏目标题**（简历）：标题本身是固定链接 `#/#<栏目>`，悬停或聚焦时后面出现一个 `#`，打印不显示。
- **按键框**（`Kbd`）：白底、1px 线、4px 圆角、11px 等宽字，一个键一个框。
- **按钮**：工具界面只用幽灵按钮（透明底、次要字、悬停 `accent`）；颜色过渡 150ms，没有阴影。
- **徽标**：4px 圆角；状态徽标用状态色字配 `*-soft` 底。

## 键盘和命令

- 全站一张命令表：`src/shared/commands/commands.ts`。每条写名字、分组、按键；悬停提示、快捷键清单和按键监听都从这里读，页面里不另写按键文字。
- 「什么时候能用」看有没有页面登记处理函数（`useCommand`）：线上版挂着时 J/K/C/Esc 才能用，清单里它们才不置灰。
- 单键和 `G` 开头的两键（第二键 1.5 秒内）只在没在打字时响应；带 `Ctrl` / `Alt` / `⌘` 的组合键原样交给浏览器。
- `Esc`：先关快捷键清单；线上版没有弹层时，取消选中当前复制块。
- 没有命令面板：命令一共 8 条，一张 `?` 清单装得下。

| 分组 | 命令 | 按键 |
| --- | --- | --- |
| 跳转 | 去简历 / 去线上版 | `G R` / `G O` |
| 线上版 | 下一段 / 上一段 / 复制这一段 / 不选这一段 | `J` / `K` / `C` / `Esc` |
| 通用 | 复制为 Markdown / 全部快捷键 | `M` / `?` |

## 速度和加载

- 预算看首屏传输体积（gzip）：首屏 JS ≤ 72 KB，CSS ≤ 19 KB，算 `index.html` 引用的文件加最重的那张页面。`pnpm run budget` 检查，部署流水线在构建后跑，超了不发布。
- 全站是静态页，没有接口请求，没有骨架和转圈。复制是本地操作，按钮上直接给结果。
- 网页字体按 `media="print"` 加载，到了再换成 `all`，不阻塞首屏：连不上 Google 的网络会卡到超时，阻塞的话要白屏约 30 秒。
- 弹层和提示只淡入淡出（150ms），不缩放、不滑动；`prefers-reduced-motion` 下纸面的动效关掉。

## 文案

- 页面上的字只有标题和字段名、数据、按钮。不写副标题、标语和「点这里复制」之类的说明；线上版顶部只写「项目 N · 工作经历 M」。
- 留下的说明只有报错：复制失败时屏幕阅读器读出「浏览器没给剪贴板权限，换 Chrome 或 Edge 打开再试」，提示里也写这句。
- 一个东西一个名字：「简历」（纸面页）、「线上版」（分段复制页）、「复制为 Markdown」、「快捷键」。

## Do's and Don'ts

- Do：工具界面的色值只走令牌；改颜色同时改 `ui.css`、`resume.css` 和 `brand/preview.html`，改完跑 `pnpm --package=@google/design.md@0.4.0 dlx designmd lint DESIGN.md`。
- Do：新命令先加进命令表，再在页面里用 `useCommand` 登记。
- Do：打印路径每次都看一眼：白纸、深字、工具条隐藏。
- Don't：当前项用主色；一页放两个主色按钮。
- Don't：给卡片加阴影，用渐变、发光或插画制造层次。
- Don't：加主题开关之类的设置项；明暗只跟系统。
- Don't：在页面里写操作说明或弹 `alert`；失败就在原地说。
- Don't：让深色主题漏进打印。
