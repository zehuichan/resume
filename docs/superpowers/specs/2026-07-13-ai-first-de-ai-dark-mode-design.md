# AI-First 去 AI 味 + 明暗主题设计

日期：2026-07-13  
关联：`docs/superpowers/specs/2026-07-11-ai-first-resume-design.md`（双版本架构不变，本文件只覆盖本次改版）

## 背景

AI-First 简历已上线，但视觉与文案偏「控制台 / 赛博运维」：`CONTROL PLANE ONLINE`、`ACP://RESUME`、`SYS.0x`、英文 overline、常驻深色网格等。招聘方读到的第一感觉是 AI 产品壳，而不是「会用 Vibe-Coding 交付真实项目的前端负责人」。

同时，经典版已支持浅色默认 + 暗黑切换；AI-First 仅常驻深色，且 `index.html` 防闪烁脚本只对 classic 写入 `data-theme`。

## 目标

在**不重框模块结构**的前提下：

1. 去掉控制台壳与英文运维话术，正文语气改为人话。
2. 页头与能力主线突出 **Vibe-Coding**（Skills → 上下文 → 生成 → Review → CI/CD）。
3. AI-First 支持 **浅色默认 + 可切换暗黑**，交互对齐经典版工具栏。

成功标准：

1. 首屏第一信号是 Vibe-Coding / 把 AI 产码跑进真实项目，而不是 ACP / CONTROL PLANE。
2. 章节标题为中文人话；案例字段标签中文化。
3. 默认浅色可读；一键切暗色；刷新不闪；打印强制浅色。
4. 现有模块顺序保留：读数 → 交付五步 → 案例 → 能力 → 业务硬证据。
5. `pnpm test:run` 中 ai-first 相关断言随文案更新后仍通过。

## 不做

- 不重框成「Vibe-Coding 一页纸」（不删模块、不改组件树拓扑）。
- 不抽跨视图共享主题包；仅镜像经典版 `useTheme` 模式，共用 `resume-theme` storage key。
- 不改经典版内容、样式与路由。
- 不虚构 React / 性能专项 / 未经记录的量化指标。
- 不把版本导航（AI-First / 经典版）改造成主题控件。

## 决策记录

| 议题 | 选择 |
|---|---|
| 暗黑模式形态 | 浅色默认 + 工具栏切换暗黑 |
| 去 AI 味力度 | 去壳 + 重写语气，主线突出 Vibe-Coding |
| 落地路径 | 就地打磨（复用现有模块与组件） |

## 内容与文案

### 页头

- `eyebrow`：`VIBE-CODING`（替换 `AI-NATIVE FRONTEND LEAD`）
- `title`：`前端负责人｜把 AI 产码跑进真实项目`（替换「AI 编码工程化」岗位口号）
- `summary`：保留 10 年+、6 人团队、Vue3 底座与 Skills / 质检 / Review / CI/CD 闭环；用「Vibe-Coding」作为主词，避免「控制回路 / 产码规范」堆砌感。

### 章节标题（`index.vue`）

| 现文案 | 新文案 |
|---|---|
| SYS.01 + LIVE EVIDENCE + 可信交付读数 | 去掉 SYS / overline；标题保留「可信交付读数」或等价中文 |
| SYS.02 + DELIVERY PROTOCOL + 人机协同控制回路 | 「Vibe-Coding 怎么跑」 |
| SYS.03 + MISSION RECORDS + 生产级案例档案 | 「代表案例」 |
| SYS.04 + CAPABILITY MATRIX + 能力与验证 | 「能力」 |
| FIELD-PROVEN / CLASSIC DELIVERY + 业务交付硬证据 | 「业务硬证据」 |

删除顶栏 `ACP://RESUME` / `BUILD.2026`。

### 交付五步

保留 5 段 `pipeline` 与 `Human | Agent | System` owner。label / detail / output 改为短句人话，叙事线：

`定边界 → 喂规范 → Agent 生成 → Review → 上线`

### 案例卡（`ai-case-card.vue`）

数据字段名不变。展示标签改为：

| 现标签 | 新标签 |
|---|---|
| CASE / 01 | 案例 01（或去掉英文 CASE） |
| 01 / INPUT | 场景 |
| 02 / CONSTRAINTS | 约束 |
| 03 / AGENT EXECUTION | Agent 执行 |
| 04 / HUMAN REVIEW | 我把关 |
| VERIFIED OUTCOME | 结果 |

第一案例仍为 GeorgeGroup Agent Skills；能力列表第一项仍为 Vibe-Coding。

### 收尾

去掉英文口号 `Human sets the boundary...`，改为中文，例如：

> 先定边界，再让 Agent 加速，最后用系统和 Review 兜底。

页脚签名去掉全大写英文规格行，改为低调中文或省略。

## 主题与暗黑

### Token

- `html[data-resume='ai-first']`：默认改为 **light**（纸感浅底、石墨字、墨绿强调）；去掉常驻赛博绿网格 / scanline 作为默认装饰。
- `html[data-resume='ai-first'][data-theme='dark']`：覆盖为暗色 token（可沿用现有暗色变量，去掉控制台装饰）。
- 打印（`@media print`）：强制浅色变量，避免黑底 PDF。

### 状态

- 在 `ai-first` 内新增与经典版同构的 `composables/use-theme.ts`（或等价逻辑）。
- Storage key：`resume-theme`；DOM：`document.documentElement.dataset.theme`。
- 与经典版共用同一 key：两版切换主题状态一致（可接受，且避免双 key 分叉）。
- `index.html` 防闪烁脚本：对 **ai-first 与 classic 均**根据 `resume-theme` 写入 `data-theme`（当前仅 classic 写入）。

### 工具栏

`ai-toolbar.vue`：

- 去掉 `CONTROL PLANE ONLINE` 状态灯。
- 提供：导出 PDF · 明暗切换（Sun/Moon）· GitHub 外链。
- 挂载时 `sync()`，与防闪烁脚本对齐。

## 改动范围

| 区域 | 文件 |
|---|---|
| 文案 | `src/views/ai-first/data/resume.ts`、`data/resume.test.ts` |
| 页面壳 | `src/views/ai-first/index.vue` |
| 案例标签 | `src/views/ai-first/components/ai-case-card.vue` |
| 工具栏 / 主题 | `components/ai-toolbar.vue`、新建 `composables/use-theme.ts` |
| 样式 | `src/views/ai-first/styles/resume.css` |
| 防闪烁 | `index.html` |
| 视图测试 | `src/views/ai-first/ai-first-view.test.ts`（若断言旧壳文案则更新） |

## 测试与验收

1. 更新 `resume.test.ts` 中 title / 定位相关断言。
2. 视图测试不再依赖 `CONTROL PLANE`、`SYS.`、`MISSION` 等壳字符串。
3. 手动：默认浅色 → 切暗色 → 刷新保持 → 打印预览为浅色。
4. `pnpm test:run` 通过。

## 风险

- 浅色默认后，若仍残留高饱和 signal/cool 色块，可能显得花；实现时以「纸感 + 单强调色」为准，暗色再提高对比。
- 共用 `resume-theme` 意味着从经典版切到 AI-First 会继承主题；这是预期行为。
