# 双版本 AI-First 前端负责人简历设计

日期：2026-07-11

## 背景

目标岗位要求 8 年以上前端经验、Vue3 / React、前端架构与性能治理、复杂问题解决、团队协作，以及 Vibe-Coding 能力。现有经典版简历已经具备 10 年+ 前端经历、Vue3 架构、多端交付、CI/CD、组件化、低代码和 Agent Skills 等证据，但团队管理与 AI 编码工程化尚未进入首屏主叙事。

本次不覆盖经典版，而是在 `src/views` 下建立两套可独立演进的简历：默认展示新的 AI-First 版本，经典版保留独立访问入口。两份简历各自拥有数据、组件和样式，避免已有成果因改版被浪费。

候选人确认的事实边界：

- 目前直接带领 6 名前端，承担排期、分工、Code Review、培养与交付结果。
- GeorgeGroup Agent Skills 已由 6 人团队在真实项目中日常使用。
- 没有可写入简历的 React 项目经历。
- 没有可量化的浏览器或前端性能专项成果。

## 目标

新增定位为「前端负责人｜AI 编码工程化」的 AI-First 简历，用真实交付机制证明 Vibe-Coding 能力，同时保留 Vue3 架构、团队管理和复杂项目交付作为可信底座。经典版整体迁入独立 View，继续作为传统前端负责人版本使用。

成功标准：

1. 招聘方在首屏看到 10 年+、6 人团队、Vue3 架构和团队级 AI 编码实践。
2. Vibe-Coding 由 Agent Skills、安装链路、生成规范、质检脚本、Code Review 和 CI/CD 共同支撑，而不是工具名堆砌。
3. 不虚构 React 与性能专项经验，所有新增表述均可在面试中展开。
4. `/#/` 默认进入 AI-First，`/#/classic` 可直达经典版，两条地址均可分享和刷新。
5. 经典版保留现有内容、主题和打印能力；AI-First 使用完全独立的内容、组件与视觉。
6. 两版在桌面、移动端与打印视图均无内容溢出。

## 不做

- 不新增 React 项目或将“了解”包装成生产经验。
- 不声称“深入研究浏览器原理”或“精通性能优化”。
- 不编造效率百分比、缺陷率或其他未经记录的指标。
- 不把经典版组件或数据改造成两版共用的“大一统”简历模板。
- 不使用需要服务端回退配置的 HTML5 History 路由。
- 不在本次迁移中重写经典版项目内容；仅适配目录、路由、版本入口与必要的样式作用域。

## 双版本架构

采用 Vue Router Hash History。GitHub Pages 无需额外回退规则，两个版本均有稳定、可分享的 URL；路由级懒加载让两套独立页面按需加载。

### 目录架构图

```text
src/
├─ app.vue                         # 仅承载 RouterView + 版本导航
├─ main.ts                         # 创建应用、注册 Router
├─ router/
│  └─ index.ts                    # / → AI-First；/classic → 经典版
├─ shared/
│  ├─ components/
│  │  └─ resume-version-nav.vue   # AI-First / 经典版入口，打印时隐藏
│  └─ utils/
│     └─ experience.ts            # 经验年限同源计算
└─ views/
   ├─ ai-first/
   │  ├─ index.vue                # AI-First 页面入口
   │  ├─ types.ts
   │  ├─ data/
   │  │  └─ resume.ts             # AI-First 独立内容
   │  ├─ components/              # AI-First 独立组件
   │  └─ styles/
   │     └─ resume.css             # AI-First 独立视觉与打印规则
   └─ classic/
      ├─ index.vue                # 由现有 app.vue 迁入
      ├─ types.ts                 # 由现有 types.ts 迁入
      ├─ data/                    # 现有 resume.ts / themes.ts 迁入
      ├─ components/              # 现有简历组件迁入
      ├─ composables/             # 现有 use-theme.ts 迁入
      └─ styles/
         └─ resume.css             # 现有 main.css 迁入
```

### 路由与数据流

```text
main.ts
  └─ app.vue
      ├─ resume-version-nav.vue
      └─ RouterView
          ├─ /          → views/ai-first/index.vue  → AI 独立 data/components/styles
          └─ /classic   → views/classic/index.vue   → 经典独立 data/components/styles
```

- `app.vue` 不读取任何简历数据，只负责路由出口和跨版本导航。
- 两个 View 均使用动态导入，未知路由重定向到 AI-First。
- 路由元信息分别维护页面标题与 description，切换版本时同步更新。
- 共享层仅包含跨版本导航和经验年限算法，不共享简历类型、内容组件、主题或样式。

## 内容设计

### 首屏定位

- 标题：`前端负责人｜AI 编码工程化`
- 个人简介顺序：团队与年限 → Vue3 / 多端架构 → AI 产码闭环 → 业务交付范围。
- 顶部指标：
  - 自动计算的 `10 年+ 前端研发`
  - `6 人 前端团队`
  - `7 个 CI/CD 覆盖系统`
  - `分钟级 标准 CRUD 生成`

业务规模数据仍保留在对应项目结果中，不占用 AI-First 版本的首屏指标。

### 职业轨迹

保留从独立开发、资产沉淀、团队治理到架构体系的演进逻辑。2025 节点加入 6 人团队管理、AI 产码规范和多业务线交付，体现职责范围从技术方案扩大到团队结果。

### 精选项目

顺序调整为：

1. GeorgeGroup Agent Skills · AI 编码基建
2. 敬城集团前端架构体系路线图
3. Tenon 低代码画布引擎

AI 编码基建按“角色 / 动作 / 结果”重写：

- 角色：6 人前端团队在真实项目中日常使用的 AI 编码基建。
- 动作：人负责需求边界、架构与风险，Agent 按团队 Skills 生成代码，脚本、Review 与 CI/CD 负责质量兜底。
- 结果：标准 CRUD 与规范组件分钟级生成，团队共享同一套目录、组件和质量约束。

集团架构项目补充任务拆解、Code Review、工程规范和交付结果管理，证明“前端负责人”不仅是架构称谓。

Tenon 项目继续承担 Vue3、Schema、插件化与平台架构证据，不扩写尚未量化的业务结果。

### 精选项目引导文案

将 `System Building` 调整为 `AI-Native Frontend Delivery`。文案说明模板、组件、低代码、Agent Skills、质检与 CI/CD 如何形成统一交付链路，并明确人的决策责任与 AI 的执行边界。

### 核心能力

按招聘阅读优先级重排：

1. Vibe-Coding 与 Agent 工程化
2. 团队管理与技术领导力
3. Vue3 架构与组件体系
4. 跨端交付
5. 工程质量与复杂问题治理
6. 接口协作与研发提效

性能相关内容仅保留现有构建、懒加载、缓存、质量门禁等可解释实践，不使用“深入”“精通”等超出证据的表述。

## 视觉设计

### AI-First · Agent Control Plane

- 屏幕端使用深石墨背景与信号绿 / 青强调，形成 AI 工程控制台观感。
- 首屏以角色定位、四项证据指标和 AI 交付链路为核心，不复用经典版的编辑档案布局。
- 项目按“输入 / 约束 / Agent 执行 / 人工校验 / 交付结果”组织，强调 Vibe-Coding 的工程闭环。
- 状态标签、命令式小标题和模块边界服务于信息分层，不添加无意义终端装饰。
- 打印时切换为高对比浅色 A4，隐藏交互导航，确保招聘系统与纸面阅读清晰。

### 经典版

- 迁移现有编辑风工程档案布局、明暗主题和打印规则。
- 可增加 AI-First / 经典版入口，但不因新版本引入 Control Plane 的视觉语言。
- 迁移完成后允许独立优化，不与 AI-First 共享内容或展示组件。

## 文件迁移与新增范围

### 迁移经典版

- `src/app.vue` → `src/views/classic/index.vue`
- `src/types.ts` → `src/views/classic/types.ts`
- `src/data/*` → `src/views/classic/data/*`
- `src/components/*` → `src/views/classic/components/*`
- `src/composables/use-theme.ts` → `src/views/classic/composables/use-theme.ts`
- `src/styles/main.css` → `src/views/classic/styles/resume.css`
- `src/utils/experience.ts` → `src/shared/utils/experience.ts`

### 新增 AI-First

- `src/views/ai-first/index.vue`
- `src/views/ai-first/types.ts`
- `src/views/ai-first/data/resume.ts`
- `src/views/ai-first/components/*`
- `src/views/ai-first/styles/resume.css`

### 新增应用外壳

- `src/router/index.ts`
- `src/shared/components/resume-version-nav.vue`
- 重写根 `src/app.vue` 为路由外壳。
- 更新 `src/main.ts`，注册 Router 并按路由同步 SEO 元信息。

## 容错与边界

- 未知 Hash 路径统一重定向至 AI-First。
- 页面级错误由现有应用错误处理器记录，不让单个组件错误静默失败。
- 版本导航使用真实路由链接，支持键盘访问，并在打印时隐藏。
- 两个 View 的根节点使用独立命名空间，避免主题变量和打印规则互相污染。
- AI-First 数据不完整时不回退或混用经典版数据，缺失信息应在开发阶段被类型检查发现。

## 验证

1. 运行 `pnpm build`，确认 Vue、Router、TypeScript 与 Vite 生产构建通过。
2. 检查编辑文件的 IDE 诊断，不引入新的错误或警告。
3. 验证 `/#/`、`/#/classic` 可直达、刷新、前进后退和双向切换。
4. 验证未知路由回退 AI-First，页面标题与 description 随版本切换。
5. 在桌面与移动端分别检查两版页面，无横向溢出或内容遮挡。
6. 验证经典版明暗主题及原有工具栏功能。
7. 验证 AI-First 深色屏幕效果与浅色打印效果。
8. 分别导出两版 PDF，确认版本导航隐藏、分页与防截断规则有效。
9. 搜索 AI-First 新增文案，确认没有 React 实战、性能专项或未经确认的量化结论。

## 验收条件

- 简历首屏形成“10 年+ 前端负责人 + 6 人团队 + Vue3 架构 + 团队级 Vibe-Coding”的明确定位。
- AI 编码能力体现为可复用、可安装、可约束、可质检的工程体系。
- JD 中无法真实匹配的 React 与性能专项不被伪造。
- AI-First 与经典版均位于 `src/views`，拥有独立数据、组件、样式和打印规则。
- `/#/` 默认展示 AI-First，`/#/classic` 稳定保留经典版。
- 两版之间有明确入口，任一版本都不会因另一版上线而丢失。
- 构建通过，两版页面与 PDF 均无明显回归。
