# Dual Resume Views Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Preserve the current resume as a classic view while making a new AI-First resume the default, with independent content, components, styles, print output, and shareable Hash Router URLs.

**Architecture:** Move the existing application intact into `src/views/classic`, build a separate Agent Control Plane resume under `src/views/ai-first`, and connect both through a minimal router shell. Only the version navigation and experience-year utility are shared; all resume data, presentation components, and visual styles remain version-owned.

**Tech Stack:** Vue 3.5, Vue Router Hash History, TypeScript 6 strict mode, Vite 8, Tailwind CSS 4, Vitest, Vue Test Utils, jsdom, `@lucide/vue`.

## Global Constraints

- Default route: `/#/` renders AI-First.
- Classic route: `/#/classic` renders the preserved classic resume.
- Use Hash History because Vite deploys to GitHub Pages under `base: '/resume/'`.
- Both route components must be dynamically imported.
- AI-First and classic must not share resume types, resume data, content components, themes, or page styles.
- Shared code is limited to `resume-version-nav.vue` and `getExperienceYears()`.
- AI-First title is exactly `前端负责人｜AI 编码工程化`.
- Team size is exactly `6 人`; never use `4–6 人`.
- Do not claim React production experience or measurable browser/performance work.
- Screen theme for AI-First is Agent Control Plane; print output is high-contrast light A4.
- Keep source filenames kebab-case, Vue components in `<script setup lang="ts">`, 2-space indentation, no semicolons, single quotes, and 120-character lines.
- Do not create Git commits unless the user explicitly requests them.

---

## File Map

### Application shell

- Modify `src/app.vue`: router outlet only.
- Modify `src/main.ts`: register router, retain global error handling, synchronize route metadata.
- Modify `index.html`: set the initial resume version before first paint.
- Create `src/router/index.ts`: routes, redirects, SEO metadata.
- Create `src/router/route-meta.ts`: route metadata synchronization.
- Create `src/shared/components/resume-version-nav.vue`: accessible route switcher.

### Shared utility

- Move `src/utils/experience.ts` to `src/shared/utils/experience.ts`.
- Create `src/shared/utils/experience.test.ts`.

### Classic view

- Move `src/app.vue` content to `src/views/classic/index.vue`.
- Move `src/types.ts` to `src/views/classic/types.ts`.
- Move `src/data/*` to `src/views/classic/data/*`.
- Move `src/components/*` to `src/views/classic/components/*`.
- Move `src/composables/use-theme.ts` to `src/views/classic/composables/use-theme.ts`.
- Move `src/styles/main.css` to `src/views/classic/styles/resume.css`.
- Create `src/views/classic/classic-view.test.ts`.

### AI-First view

- Create `src/views/ai-first/index.vue`.
- Create `src/views/ai-first/types.ts`.
- Create `src/views/ai-first/data/resume.ts`.
- Create `src/views/ai-first/components/ai-rich-text.vue`.
- Create `src/views/ai-first/components/ai-resume-header.vue`.
- Create `src/views/ai-first/components/delivery-pipeline.vue`.
- Create `src/views/ai-first/components/evidence-metric.vue`.
- Create `src/views/ai-first/components/ai-case-card.vue`.
- Create `src/views/ai-first/components/ai-toolbar.vue`.
- Create `src/views/ai-first/components/index.ts`.
- Create `src/views/ai-first/styles/resume.css`.
- Create `src/views/ai-first/ai-first-view.test.ts`.
- Create `src/views/ai-first/data/resume.test.ts`.

### Tooling

- Modify `package.json`: add Vue Router and test scripts.
- Create `vitest.config.ts`.

---

### Task 1: Add the Test Harness and Preserve the Experience Utility

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Move: `src/utils/experience.ts` → `src/shared/utils/experience.ts`
- Create: `src/shared/utils/experience.test.ts`

**Interfaces:**
- Produces: `getExperienceYears(startYear: number, referenceDate?: Date): number`
- Produces: `pnpm test:run`

- [ ] **Step 1: Install runtime and test dependencies**

Run:

```bash
pnpm add vue-router
pnpm add -D vitest @vue/test-utils jsdom
```

Expected: `package.json` and `pnpm-lock.yaml` update without peer-dependency errors.

- [ ] **Step 2: Add test scripts**

Add these entries under `scripts` in `package.json`:

```json
"test": "vitest",
"test:run": "vitest run"
```

- [ ] **Step 3: Create the Vitest configuration**

Create `vitest.config.ts`:

```ts
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})
```

- [ ] **Step 4: Write the utility regression test before moving the file**

Create `src/shared/utils/experience.test.ts`:

```ts
import { describe, expect, it } from 'vitest'
import { getExperienceYears } from './experience'

describe('getExperienceYears', () => {
  it('calculates completed calendar-year distance', () => {
    expect(getExperienceYears(2015, new Date('2026-07-11'))).toBe(11)
  })

  it('never returns a negative value', () => {
    expect(getExperienceYears(2030, new Date('2026-07-11'))).toBe(0)
  })
})
```

- [ ] **Step 5: Run the test and confirm the expected failure**

Run:

```bash
pnpm vitest run src/shared/utils/experience.test.ts
```

Expected: FAIL because `src/shared/utils/experience.ts` does not exist.

- [ ] **Step 6: Move the utility without changing behavior**

Move `src/utils/experience.ts` to `src/shared/utils/experience.ts`. Preserve this implementation:

```ts
export function getExperienceYears(startYear: number, referenceDate: Date = new Date()): number {
  return Math.max(0, referenceDate.getFullYear() - startYear)
}
```

- [ ] **Step 7: Run the utility tests**

Run:

```bash
pnpm vitest run src/shared/utils/experience.test.ts
```

Expected: 2 tests pass.

---

### Task 2: Move the Classic Resume into Its Own View

**Files:**
- Create from move: `src/views/classic/index.vue`
- Create from move: `src/views/classic/types.ts`
- Create from move: `src/views/classic/data/index.ts`
- Create from move: `src/views/classic/data/resume.ts`
- Create from move: `src/views/classic/data/themes.ts`
- Create from move: `src/views/classic/components/*.vue`
- Create from move: `src/views/classic/components/index.ts`
- Create from move: `src/views/classic/composables/use-theme.ts`
- Create from move: `src/views/classic/styles/resume.css`
- Modify: `src/app.vue`
- Modify: `src/main.ts`
- Create: `src/views/classic/classic-view.test.ts`

**Interfaces:**
- Produces: default Vue component `ClassicResumeView`
- Consumes: `getExperienceYears()` from `src/shared/utils/experience.ts`

- [ ] **Step 1: Write the classic view regression test**

Create `src/views/classic/classic-view.test.ts`:

```ts
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ClassicResumeView from './index.vue'

describe('ClassicResumeView', () => {
  it('preserves the current resume identity and representative project', () => {
    const wrapper = mount(ClassicResumeView)

    expect(wrapper.get('h1').text()).toBe('陈泽辉')
    expect(wrapper.text()).toContain('敬城集团前端架构体系路线图')
    expect(wrapper.text()).toContain('Tenon 低代码画布引擎')
  })
})
```

- [ ] **Step 2: Run the test and confirm the expected failure**

Run:

```bash
pnpm vitest run src/views/classic/classic-view.test.ts
```

Expected: FAIL because `src/views/classic/index.vue` does not exist.

- [ ] **Step 3: Move classic-owned files**

Move the existing files according to this exact mapping:

```text
src/app.vue                         → src/views/classic/index.vue
src/types.ts                       → src/views/classic/types.ts
src/data/*                         → src/views/classic/data/*
src/components/*                   → src/views/classic/components/*
src/composables/use-theme.ts       → src/views/classic/composables/use-theme.ts
src/styles/main.css                → src/views/classic/styles/resume.css
```

Delete the now-empty `src/data`, `src/components`, `src/composables`, `src/styles`, and `src/utils` directories.

- [ ] **Step 4: Repair classic imports**

Keep view-local imports relative to `src/views/classic`. Change only the shared utility import in `resume-header.vue`:

```ts
import { getExperienceYears } from '../../../shared/utils/experience'
```

The moved `index.vue` must continue to import:

```ts
import { resume } from './data'
import { CompactProjectItem, ProjectItem, ResumeHeader, RichText, SectionHeader, Toolbar } from './components'
import type { Project } from './types'
import './styles/resume.css'
```

- [ ] **Step 5: Temporarily make the root app render the classic view**

Replace `src/app.vue` with:

```vue
<script setup lang="ts">
import ClassicResumeView from './views/classic/index.vue'
</script>

<template>
  <ClassicResumeView />
</template>
```

- [ ] **Step 6: Point the entry file at classic-owned CSS and data**

Until routing is introduced, update `src/main.ts` imports to:

```ts
import { createApp } from 'vue'
import App from './app.vue'
import { resume } from './views/classic/data'
import { getExperienceYears } from './shared/utils/experience'
```

Keep the existing metadata function, error handler, mount call, and `syncDescriptionMeta()` call unchanged.

- [ ] **Step 7: Namespace classic page-level CSS**

Add `class="classic-resume"` to the outer wrapper in `src/views/classic/index.vue`. Keep component styles and print rules behaviorally unchanged. Apply these selector migrations throughout the moved stylesheet:

```text
:root                              → html[data-resume='classic']
:root[data-theme='dark']           → html[data-resume='classic'][data-theme='dark']
body                               → html[data-resume='classic'] body
body::before                       → html[data-resume='classic'] body::before
a                                  → .classic-resume a
::selection                        → .classic-resume ::selection
::-webkit-scrollbar                → .classic-resume ::-webkit-scrollbar
::-webkit-scrollbar-thumb          → .classic-resume ::-webkit-scrollbar-thumb
::-webkit-scrollbar-thumb:hover    → .classic-resume ::-webkit-scrollbar-thumb:hover
```

The resulting theme selectors begin with:

```css
html[data-resume='classic'] {
  color-scheme: light;
}

html[data-resume='classic'][data-theme='dark'] {
  color-scheme: dark;
}
```

Set `document.documentElement.dataset.resume = 'classic'` in the temporary root app on mount so the namespaced rules apply during this task.

- [ ] **Step 8: Run focused tests and the production build**

Run:

```bash
pnpm vitest run src/shared/utils/experience.test.ts src/views/classic/classic-view.test.ts
pnpm build
```

Expected: 3 tests pass and the Vite production build exits with code 0.

---

### Task 3: Define and Validate the AI-First Resume Data

**Files:**
- Create: `src/views/ai-first/types.ts`
- Create: `src/views/ai-first/data/resume.ts`
- Create: `src/views/ai-first/data/resume.test.ts`

**Interfaces:**
- Produces: `AiResume`
- Produces: `aiResume: AiResume`
- Consumes later: all AI-First presentational components

- [ ] **Step 1: Define the AI-owned data model**

Create `src/views/ai-first/types.ts`:

```ts
export interface AiContact {
  label: string
  value: string
  href: string
}

export interface AiProfile {
  name: string
  eyebrow: string
  title: string
  avatar: string
  experienceStartYear: number
  meta: string[]
  summary: string
  contacts: AiContact[]
}

export interface EvidenceMetric {
  value: string
  unit: string
  label: string
  detail: string
}

export interface DeliveryStage {
  index: string
  label: string
  owner: 'Human' | 'Agent' | 'System'
  detail: string
  output: string
}

export interface AiCase {
  name: string
  kind: string
  period: string
  role: string
  signal: string
  input: string
  constraints: string
  agentExecution: string
  humanReview: string
  outcome: string
  tech: string[]
}

export interface Capability {
  label: string
  proof: string
}

export interface AiResume {
  profile: AiProfile
  metrics: EvidenceMetric[]
  pipeline: DeliveryStage[]
  cases: AiCase[]
  capabilities: Capability[]
  classicEvidence: string[]
  closing: string
}
```

- [ ] **Step 2: Write factual-boundary tests before creating the data**

Create `src/views/ai-first/data/resume.test.ts`:

```ts
import { describe, expect, it } from 'vitest'
import { aiResume } from './resume'

describe('aiResume', () => {
  it('uses the approved AI-First positioning and evidence', () => {
    expect(aiResume.profile.title).toBe('前端负责人｜AI 编码工程化')
    expect(aiResume.metrics.map((metric) => metric.value)).toContain('6')
    expect(aiResume.metrics.map((metric) => metric.value)).toContain('7')
    expect(aiResume.cases[0]?.name).toBe('GeorgeGroup Agent Skills · AI 编码基建')
  })

  it('does not overclaim unsupported experience', () => {
    const content = JSON.stringify(aiResume)

    expect(content).not.toMatch(/React.{0,12}(生产|项目|实战)/i)
    expect(content).not.toMatch(/精通性能|性能专家|深入研究浏览器/)
    expect(content).not.toContain('4–6')
  })

  it('keeps human and agent responsibilities explicit', () => {
    expect(aiResume.pipeline.some((stage) => stage.owner === 'Human')).toBe(true)
    expect(aiResume.pipeline.some((stage) => stage.owner === 'Agent')).toBe(true)
    expect(aiResume.pipeline.some((stage) => stage.owner === 'System')).toBe(true)
  })
})
```

- [ ] **Step 3: Run the data test and confirm the expected failure**

Run:

```bash
pnpm vitest run src/views/ai-first/data/resume.test.ts
```

Expected: FAIL because `src/views/ai-first/data/resume.ts` does not exist.

- [ ] **Step 4: Create the complete AI-First data object**

Create `src/views/ai-first/data/resume.ts` with these exact content requirements:

```ts
import type { AiResume } from '../types'

export const aiResume: AiResume = {
  profile: {
    name: '陈泽辉',
    eyebrow: 'AI-NATIVE FRONTEND LEAD',
    title: '前端负责人｜AI 编码工程化',
    avatar: 'avatar.png',
    experienceStartYear: 2015,
    meta: ['广州', '本科', '随时到岗'],
    summary:
      '10 年+ 前端研发与 6 人团队管理经验。以 Vue3 与多端架构为交付底座，把 Agent Skills、上下文约束、质检脚本、Code Review、CI/CD 与监控串成团队级 Vibe-Coding 闭环，让 AI 生成代码能够稳定进入真实项目。',
    contacts: [
      {
        label: 'Email',
        value: 'jasonchenzehui@gmail.com',
        href: 'mailto:jasonchenzehui@gmail.com'
      },
      {
        label: 'GitHub',
        value: 'github.com/zehuichan',
        href: 'https://github.com/zehuichan'
      }
    ]
  },
  metrics: [
    { value: '6', unit: '人', label: '前端团队', detail: '排期、分工、Review、培养与交付结果' },
    { value: '7', unit: '个', label: 'CI/CD 覆盖系统', detail: 'ERP3、CSS、QMS、LMS、SRM、FSSC、FIMS' },
    { value: '分钟级', unit: '', label: '标准 CRUD 生成', detail: 'Skills 约束生成，脚本与人工 Review 兜底' }
  ],
  pipeline: [
    {
      index: '01',
      label: 'Define',
      owner: 'Human',
      detail: '负责人确认需求边界、架构取舍和不可接受风险。',
      output: '任务契约'
    },
    {
      index: '02',
      label: 'Context',
      owner: 'System',
      detail: '项目规范、组件约束、OpenAPI 与示例代码进入上下文。',
      output: '受控上下文'
    },
    {
      index: '03',
      label: 'Generate',
      owner: 'Agent',
      detail: 'Agent 按 Skills 生成 CRUD、组件与配套代码。',
      output: '候选实现'
    },
    {
      index: '04',
      label: 'Verify',
      owner: 'Human',
      detail: '质检脚本、类型检查与 Code Review 共同验证结果。',
      output: '可合并代码'
    },
    {
      index: '05',
      label: 'Deliver',
      owner: 'System',
      detail: 'CI/CD 发布并由监控承接上线后的质量反馈。',
      output: '生产交付'
    }
  ],
  cases: [
    {
      name: 'GeorgeGroup Agent Skills · AI 编码基建',
      kind: 'AI 工程化',
      period: '2025.09 - 至今',
      role: '方向负责人',
      signal: '6 人团队日常使用',
      input: '团队在 Cursor、Claude Code 中生成 CRUD 与业务组件，但目录、写法和质量标准不一致。',
      constraints: '生成结果必须遵循既有 Vue3 架构、组件规范、OpenAPI 接入方式和代码审查边界。',
      agentExecution: '建设 Skills 仓与 npx skills 安装链路，沉淀 vue-vben-crud、vue-components-practices 和质检脚本。',
      humanReview: '负责人定义需求边界、架构取舍与风险，成员通过 Review 校验业务正确性，脚本负责机械规则。',
      outcome: '标准 CRUD 与规范组件可分钟级生成，6 人团队共享同一套目录、组件和质量约束。',
      tech: ['Cursor', 'Claude Code', 'Agent Skills', 'OpenAPI', 'CI/CD']
    },
    {
      name: '敬城集团前端架构体系路线图',
      kind: '架构与团队治理',
      period: '2025.09 - 至今',
      role: '前端负责人',
      signal: '7 个系统自动化交付',
      input: '后台、H5、小程序与低代码需求并行增长，各项目重复搭建模板、组件、权限和发布流程。',
      constraints: '统一架构必须兼顾多端差异、存量系统迁移、团队能力梯度和持续交付稳定性。',
      agentExecution: '将模板、组件矩阵、Tenon、Agent Skills、CI/CD 与监控组织为五层前端能力路线图。',
      humanReview: '负责 6 人团队排期分工、技术方案、Code Review、成员培养和跨项目交付结果。',
      outcome: '形成项目初始化到发布监控的统一资产链路，CI/CD 覆盖 ERP3、CSS、QMS、LMS、SRM、FSSC、FIMS。',
      tech: ['Vue3', 'Vite', 'Monorepo', 'GitLab CI/CD', 'Monitoring']
    },
    {
      name: 'Tenon 低代码画布引擎',
      kind: '低代码平台',
      period: '2026.07 - 至今',
      role: '架构主导',
      signal: '@tenon/plugin 一行接入',
      input: '集团中后台存在大量表单、表格、详情与流程页面，需要降低重复开发成本。',
      constraints: '可视化搭建必须嵌入现有 pro-code 系统，不能牺牲源码工程的扩展性和发布链路。',
      agentExecution: '设计 @tenon/* monorepo、Schema 协议、设计器、渲染器、物料与插件分层。',
      humanReview: '主导协议边界、插件接口、运行时装填策略和与后台模板的集成方案。',
      outcome: '形成 /__tenon__/ 设计器、TenonRenderer、物料注册与 GitLab npm 私服发布链路。',
      tech: ['Vue3', 'TypeScript', 'Schema', 'Vite Plugin', 'GitLab npm']
    }
  ],
  capabilities: [
    { label: 'Vibe-Coding', proof: '把提示词经验升级为可安装 Skills、受控上下文、质检脚本与交付门禁。' },
    { label: '团队管理', proof: '直接带领 6 名前端，负责排期、分工、Review、培养和结果交付。' },
    { label: 'Vue3 架构', proof: '从启动模板、组件矩阵到 Schema、物料与插件体系，持续沉淀可复用资产。' },
    { label: '跨端交付', proof: '覆盖后台、H5、公众号、小程序与低代码平台，多业务线并行推进。' },
    { label: '工程质量', proof: '通过请求层、权限、异常兜底、类型检查、CI/CD 与监控前移质量。' },
    { label: '复杂问题', proof: '能从业务约束定位架构边界，拆解方案并推动团队完成生产交付。' }
  ],
  classicEvidence: [
    '中视 ETC：日均发行 10000+，累计服务用户 100 万。',
    '4S 店 SaaS：独立交付支付宝双端，单店月保养 GMV 40 万。',
    '科技成果平台：前站、后台、专家小程序与直播平台四个子系统按期上线。'
  ],
  closing: 'Human sets the boundary. Agent accelerates the path. System guards the result.'
}
```

- [ ] **Step 5: Run the AI data tests**

Run:

```bash
pnpm vitest run src/views/ai-first/data/resume.test.ts
```

Expected: 3 tests pass.

---

### Task 4: Build the Independent Agent Control Plane View

**Files:**
- Create: `src/views/ai-first/components/ai-rich-text.vue`
- Create: `src/views/ai-first/components/ai-resume-header.vue`
- Create: `src/views/ai-first/components/evidence-metric.vue`
- Create: `src/views/ai-first/components/delivery-pipeline.vue`
- Create: `src/views/ai-first/components/ai-case-card.vue`
- Create: `src/views/ai-first/components/ai-toolbar.vue`
- Create: `src/views/ai-first/components/index.ts`
- Create: `src/views/ai-first/index.vue`
- Create: `src/views/ai-first/styles/resume.css`
- Create: `src/views/ai-first/ai-first-view.test.ts`

**Interfaces:**
- Consumes: `aiResume: AiResume`
- Produces: default Vue component `AiFirstResumeView`
- Produces DOM landmarks: `[data-testid="ai-hero"]`, `[data-testid="ai-pipeline"]`, three `[data-testid="ai-case"]`

- [ ] **Step 1: Write the view composition test**

Create `src/views/ai-first/ai-first-view.test.ts`:

```ts
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AiFirstResumeView from './index.vue'

describe('AiFirstResumeView', () => {
  it('renders the approved hero, pipeline, cases, and classic evidence', () => {
    const wrapper = mount(AiFirstResumeView)

    expect(wrapper.get('[data-testid="ai-hero"]').text()).toContain('前端负责人｜AI 编码工程化')
    expect(wrapper.get('[data-testid="ai-pipeline"]').text()).toContain('Human')
    expect(wrapper.get('[data-testid="ai-pipeline"]').text()).toContain('Agent')
    expect(wrapper.findAll('[data-testid="ai-case"]')).toHaveLength(3)
    expect(wrapper.text()).toContain('日均发行 10000+')
  })
})
```

- [ ] **Step 2: Run the test and confirm the expected failure**

Run:

```bash
pnpm vitest run src/views/ai-first/ai-first-view.test.ts
```

Expected: FAIL because the AI view and its components do not exist.

- [ ] **Step 3: Implement content-agnostic AI components**

Implement each component with typed props:

```ts
// ai-resume-header.vue
defineProps<{ profile: AiProfile }>()

// evidence-metric.vue
defineProps<{ metric: EvidenceMetric }>()

// delivery-pipeline.vue
defineProps<{ stages: DeliveryStage[] }>()

// ai-case-card.vue
defineProps<{ project: AiCase; index: number }>()
```

`ai-rich-text.vue` must independently tokenize backticks, `**bold**`, and `==highlight==`; do not import the classic component. `ai-toolbar.vue` must expose a print button using `window.print()` and remain hidden under print media.

Create `src/views/ai-first/components/index.ts`:

```ts
export { default as AiCaseCard } from './ai-case-card.vue'
export { default as AiResumeHeader } from './ai-resume-header.vue'
export { default as AiRichText } from './ai-rich-text.vue'
export { default as AiToolbar } from './ai-toolbar.vue'
export { default as DeliveryPipeline } from './delivery-pipeline.vue'
export { default as EvidenceMetric } from './evidence-metric.vue'
```

- [ ] **Step 4: Compose the AI-First page**

`src/views/ai-first/index.vue` must:

1. Import `./styles/resume.css`.
2. Render a root `<div class="ai-resume">`.
3. Render `AiResumeHeader` inside `[data-testid="ai-hero"]`.
4. Render three `EvidenceMetric` components plus a computed experience metric from `getExperienceYears()`.
5. Render `DeliveryPipeline` inside `[data-testid="ai-pipeline"]`.
6. Render all three cases with `[data-testid="ai-case"]`.
7. Render capabilities and classic business evidence as separate sections.
8. Render `AiToolbar`.
9. Use semantic `header`, `main`, `section`, `article`, and `footer` landmarks.

- [ ] **Step 5: Implement Agent Control Plane styling**

Create `src/views/ai-first/styles/resume.css` with these required tokens and page behaviors:

```css
@import 'tailwindcss';

html[data-resume='ai-first'] {
  color-scheme: dark;
  --ai-bg: #070b09;
  --ai-panel: #0d1410;
  --ai-panel-strong: #111c16;
  --ai-ink: #eef7f1;
  --ai-ink-soft: #a7b7ad;
  --ai-ink-faint: #68766e;
  --ai-signal: #4ade80;
  --ai-signal-cool: #67e8f9;
  --ai-line: #223128;
  --ai-grid: rgba(74, 222, 128, 0.07);
}

html[data-resume='ai-first'] body {
  margin: 0;
  color: var(--ai-ink);
  background-color: var(--ai-bg);
  background-image:
    linear-gradient(var(--ai-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--ai-grid) 1px, transparent 1px);
  background-size: 28px 28px;
}

.ai-resume {
  min-height: 100vh;
  font-family: 'Noto Sans SC', system-ui, sans-serif;
}

.ai-shell {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 40px 0 72px;
}

.ai-panel {
  border: 1px solid var(--ai-line);
  background: color-mix(in srgb, var(--ai-panel) 92%, transparent);
}

.ai-signal {
  color: var(--ai-signal);
}

.ai-cool-signal {
  color: var(--ai-signal-cool);
}

@page {
  size: A4;
  margin: 11mm 13mm;
}

@media print {
  html[data-resume='ai-first'] {
    color-scheme: light;
    --ai-bg: #ffffff;
    --ai-panel: #ffffff;
    --ai-panel-strong: #f3f7f4;
    --ai-ink: #111713;
    --ai-ink-soft: #354239;
    --ai-ink-faint: #657269;
    --ai-signal: #08783f;
    --ai-signal-cool: #09677b;
    --ai-line: #ccd7cf;
    --ai-grid: transparent;
  }

  html[data-resume='ai-first'] body {
    background: #ffffff;
  }

  .ai-shell {
    width: auto;
    padding: 0;
  }

  .ai-no-print {
    display: none !important;
  }

  .ai-break-avoid {
    break-inside: avoid;
  }
}
```

Complete the page styling with `ai-`-prefixed classes only. Required responsive breakpoints are `900px` and `600px`. Below `600px`, metric, pipeline, and case grids become one column and no element may use a fixed width wider than the viewport.

- [ ] **Step 6: Run focused AI tests**

Run:

```bash
pnpm vitest run src/views/ai-first/data/resume.test.ts src/views/ai-first/ai-first-view.test.ts
```

Expected: 4 tests pass.

---

### Task 5: Add Hash Routing, Version Navigation, and Route Metadata

**Files:**
- Create: `src/router/index.ts`
- Create: `src/router/route-meta.ts`
- Create: `src/router/index.test.ts`
- Create: `src/router/route-meta.test.ts`
- Create: `src/shared/components/resume-version-nav.vue`
- Modify: `src/app.vue`
- Modify: `src/main.ts`
- Modify: `index.html`

**Interfaces:**
- Produces: `createResumeRouter(history?: RouterHistory): Router`
- Produces: `applyRouteMeta(meta: RouteMeta): void`
- Consumes: `ClassicResumeView`, `AiFirstResumeView`

- [ ] **Step 1: Write router behavior tests**

Create `src/router/index.test.ts`:

```ts
import { createMemoryHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import { createResumeRouter } from './index'

describe('resume router', () => {
  it('uses AI-First as the default and preserves the classic route', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/')
    expect(router.currentRoute.value.name).toBe('ai-first')

    await router.push('/classic')
    expect(router.currentRoute.value.name).toBe('classic')
  })

  it('redirects unknown paths to AI-First', async () => {
    const router = createResumeRouter(createMemoryHistory())

    await router.push('/missing')
    expect(router.currentRoute.value.name).toBe('ai-first')
  })
})
```

- [ ] **Step 2: Write metadata tests**

Create `src/router/route-meta.test.ts`:

```ts
import { describe, expect, it } from 'vitest'
import { applyRouteMeta } from './route-meta'

describe('applyRouteMeta', () => {
  it('updates title, description, theme color, and resume namespace', () => {
    applyRouteMeta({
      title: 'AI Resume',
      description: 'AI-First description',
      themeColor: '#070b09',
      resumeVersion: 'ai-first'
    })

    expect(document.title).toBe('AI Resume')
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe('AI-First description')
    expect(document.querySelector('meta[name="theme-color"]')?.getAttribute('content')).toBe('#070b09')
    expect(document.documentElement.dataset.resume).toBe('ai-first')
  })
})
```

- [ ] **Step 3: Run router tests and confirm the expected failures**

Run:

```bash
pnpm vitest run src/router/index.test.ts src/router/route-meta.test.ts
```

Expected: FAIL because router modules do not exist.

- [ ] **Step 4: Implement the router**

Create `src/router/index.ts`:

```ts
import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouterHistory,
  type RouteRecordRaw
} from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ai-first',
    component: () => import('../views/ai-first/index.vue'),
    meta: {
      title: '陈泽辉 · 前端负责人｜AI 编码工程化',
      description: '陈泽辉 · 10 年+ 前端研发 · 6 人团队管理 · Vue3 架构与团队级 Vibe-Coding',
      themeColor: '#070b09',
      resumeVersion: 'ai-first'
    }
  },
  {
    path: '/classic',
    name: 'classic',
    component: () => import('../views/classic/index.vue'),
    meta: {
      title: '陈泽辉 · 前端负责人',
      description: '陈泽辉 · 10 年+ Vue3、多端架构、组件化与 CI/CD 实战经验',
      themeColor: '#fafaf8',
      resumeVersion: 'classic'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'ai-first' }
  }
]

export function createResumeRouter(
  history: RouterHistory = createWebHashHistory(import.meta.env.BASE_URL)
): Router {
  return createRouter({ history, routes })
}
```

- [ ] **Step 5: Implement metadata synchronization**

Create `src/router/route-meta.ts`:

```ts
import type { RouteMeta } from 'vue-router'

export function applyRouteMeta(meta: RouteMeta): void {
  const title = String(meta.title ?? '陈泽辉 · 前端负责人')
  const description = String(meta.description ?? '陈泽辉的前端负责人简历')
  const themeColor = String(meta.themeColor ?? '#fafaf8')
  const resumeVersion = meta.resumeVersion === 'classic' ? 'classic' : 'ai-first'

  document.title = title
  document.documentElement.dataset.resume = resumeVersion
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor)
}
```

- [ ] **Step 6: Implement the version navigation**

Create `src/shared/components/resume-version-nav.vue` with two `RouterLink` entries:

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const current = computed(() => (route.name === 'classic' ? 'classic' : 'ai-first'))
</script>

<template>
  <nav class="resume-version-nav" aria-label="简历版本">
    <RouterLink to="/" :aria-current="current === 'ai-first' ? 'page' : undefined">AI-First</RouterLink>
    <RouterLink to="/classic" :aria-current="current === 'classic' ? 'page' : undefined">经典版</RouterLink>
  </nav>
</template>

<style scoped>
.resume-version-nav {
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 60;
  display: flex;
  gap: 2px;
  padding: 3px;
  border: 1px solid color-mix(in srgb, currentColor 20%, transparent);
  background: color-mix(in srgb, Canvas 88%, transparent);
  color: CanvasText;
  font: 600 11px/1 ui-monospace, monospace;
  backdrop-filter: blur(12px);
}

.resume-version-nav a {
  padding: 8px 10px;
  color: inherit;
  text-decoration: none;
}

.resume-version-nav a[aria-current='page'] {
  background: CanvasText;
  color: Canvas;
}

@media print {
  .resume-version-nav {
    display: none;
  }
}
</style>
```

- [ ] **Step 7: Convert the root app into the router shell**

Replace `src/app.vue`:

```vue
<script setup lang="ts">
import { RouterView } from 'vue-router'
import ResumeVersionNav from './shared/components/resume-version-nav.vue'
</script>

<template>
  <RouterView />
  <ResumeVersionNav />
</template>
```

- [ ] **Step 8: Register the router and metadata hook**

Replace `src/main.ts` with:

```ts
import { createApp } from 'vue'
import App from './app.vue'
import { createResumeRouter } from './router'
import { applyRouteMeta } from './router/route-meta'

const app = createApp(App)
const router = createResumeRouter()

app.config.errorHandler = (err, _instance, info) => {
  console.error('[resume] Uncaught error:', err, info)
}

router.afterEach((to) => applyRouteMeta(to.meta))
app.use(router)
app.mount('#app')
```

- [ ] **Step 9: Prevent first-paint theme flash**

Replace the inline script in `index.html` with logic that derives the initial version from the hash:

```html
<script>
  ;(function () {
    var isClassic = window.location.hash.indexOf('#/classic') === 0
    document.documentElement.dataset.resume = isClassic ? 'classic' : 'ai-first'

    if (isClassic) {
      var theme = 'light'
      try {
        if (localStorage.getItem('resume-theme') === 'dark') theme = 'dark'
      } catch (e) {
        /* localStorage 不可用时用默认值 */
      }
      document.documentElement.dataset.theme = theme
    }
  })()
</script>
```

- [ ] **Step 10: Run routing, view, and build verification**

Run:

```bash
pnpm test:run
pnpm build
```

Expected: all tests pass and the production build exits with code 0.

---

### Task 6: Verify Both Resume Experiences and Print Outputs

**Files:**
- Modify only files with verified visual defects from Tasks 2–5.
- Update: `README.md`

**Interfaces:**
- Validates: `/#/`, `/#/classic`, both print paths, responsive layouts, route metadata.

- [ ] **Step 1: Update maintenance documentation**

Update `README.md` so it states:

```text
默认简历：/#/（AI-First）
经典简历：/#/classic

AI-First 内容：src/views/ai-first/data/resume.ts
经典版内容：src/views/classic/data/resume.ts
```

Document that the versions intentionally do not share content components or styles.

- [ ] **Step 2: Start the production preview**

Run:

```bash
pnpm build
pnpm preview --host 127.0.0.1
```

Expected: preview starts on the configured Vite port with no console build errors.

- [ ] **Step 3: Verify AI-First at desktop and mobile widths**

Open `http://127.0.0.1:4173/resume/#/`.

Check at `1440 × 1000` and `390 × 844`:

- title reads `前端负责人｜AI 编码工程化`
- visible evidence includes `6 人`, `7 个`, and `分钟级`
- pipeline contains Human, Agent, and System ownership
- exactly three AI cases render
- no horizontal scrollbar
- no clipped controls or overlapping fixed navigation

- [ ] **Step 4: Verify the classic route and existing interactions**

Open `http://127.0.0.1:4173/resume/#/classic`.

Check:

- classic title and existing project content are intact
- light/dark toggle still works
- refreshing keeps the classic route
- version navigation returns to AI-First
- no AI Control Plane tokens leak into the classic page

- [ ] **Step 5: Verify route metadata and fallback**

Check:

- AI route title is `陈泽辉 · 前端负责人｜AI 编码工程化`
- classic route title is `陈泽辉 · 前端负责人`
- `/#/missing` redirects to `/#/`
- browser back and forward move between the two versions

- [ ] **Step 6: Verify both print layouts**

For each route, open print preview and confirm:

- version navigation and toolbars are hidden
- AI-First switches to a high-contrast light palette
- classic retains its existing light print palette
- project and case cards do not split across pages
- text is at least 9pt equivalent
- there is no blank trailing page

- [ ] **Step 7: Run final automated checks**

Run:

```bash
pnpm test:run
pnpm build
```

Expected: all tests pass and the build exits with code 0.

- [ ] **Step 8: Check edited-file diagnostics**

Read IDE diagnostics for:

```text
src/app.vue
src/main.ts
src/router/
src/shared/
src/views/ai-first/
src/views/classic/
```

Expected: no new errors or warnings.
