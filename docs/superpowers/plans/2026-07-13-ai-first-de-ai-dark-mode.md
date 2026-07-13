# AI-First 去 AI 味 + 明暗主题 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Strip AI-First resume chrome/jargon, center Vibe-Coding in copy, and add light-default + dark toggle aligned with classic.

**Architecture:** Keep the existing ai-first module tree and component topology. Rewrite copy in `data/resume.ts`, replace control-plane labels in Vue templates, add a local `useTheme` mirror of classic (shared `resume-theme` key), flip CSS to light defaults with `data-theme='dark'` overrides, and extend `index.html` antiflicker to ai-first.

**Tech Stack:** Vue 3.5, TypeScript, Vitest, Vue Test Utils, `@lucide/vue`, CSS variables under `html[data-resume='ai-first']`

**Spec:** `docs/superpowers/specs/2026-07-13-ai-first-de-ai-dark-mode-design.md`

**Global constraints:**
- Do not restructure modules or share a theme package across views.
- Do not edit classic resume content/styles except via shared `resume-theme` / `data-theme` behavior already used by classic.
- Do not invent React / performance claims.
- Do not create git commits unless the user explicitly asks.
- Prefer 2-space indent, no semicolons, single quotes (match repo).

---

## File Map

| File | Responsibility |
|---|---|
| `src/views/ai-first/data/resume.ts` | Profile, pipeline, cases, capabilities, closing copy |
| `src/views/ai-first/data/resume.test.ts` | Data contract tests |
| `src/views/ai-first/ai-first-view.test.ts` | View + print CSS tests; theme smoke if added |
| `src/views/ai-first/index.vue` | Section titles; remove system bar |
| `src/views/ai-first/components/ai-case-card.vue` | Chinese field labels |
| `src/views/ai-first/components/delivery-pipeline.vue` | Chinese aria / OUTPUT label |
| `src/views/ai-first/components/ai-resume-header.vue` | Contact panel label |
| `src/views/ai-first/components/ai-toolbar.vue` | Print + theme toggle + GitHub |
| `src/views/ai-first/types.ts` | Add `ThemeId` / `Theme` |
| `src/views/ai-first/data/themes.ts` | Theme list for toolbar |
| `src/views/ai-first/data/index.ts` | Re-export resume + themes (create if missing) |
| `src/views/ai-first/composables/use-theme.ts` | Mirror classic theme composable |
| `src/views/ai-first/styles/resume.css` | Light default + dark overrides |
| `index.html` | Antiflicker for ai-first too |

---

### Task 1: Red-green the copy contract tests

**Files:**
- Modify: `src/views/ai-first/data/resume.test.ts`
- Modify: `src/views/ai-first/ai-first-view.test.ts`
- Modify: `src/views/ai-first/data/resume.ts` (minimal later in this task after red)

- [ ] **Step 1: Update data test expectations to the approved positioning**

Replace the first test in `resume.test.ts` with:

```typescript
it('uses the approved Vibe-Coding positioning and evidence', () => {
  expect(aiResume.profile.eyebrow).toBe('VIBE-CODING')
  expect(aiResume.profile.title).toBe('前端负责人｜把 AI 产码跑进真实项目')
  expect(aiResume.profile.summary).toContain('Vibe-Coding')
  expect(aiResume.metrics.map((metric) => metric.value)).toContain('6')
  expect(aiResume.metrics.map((metric) => metric.value)).toContain('7')
  expect(aiResume.cases[0]?.name).toBe('GeorgeGroup Agent Skills · AI 编码基建')
  expect(aiResume.capabilities[0]?.label).toBe('Vibe-Coding')
  expect(aiResume.closing).toContain('边界')
  expect(aiResume.closing).not.toMatch(/Human sets the boundary/i)
})
```

Keep the other two tests (no overclaim; Human/Agent/System owners).

- [ ] **Step 2: Update view test hero title expectation**

In `ai-first-view.test.ts`, change:

```typescript
expect(wrapper.get('[data-testid="ai-hero"]').text()).toContain(
  '前端负责人｜把 AI 产码跑进真实项目',
)
```

Add assertions that chrome strings are gone:

```typescript
expect(wrapper.text()).not.toContain('CONTROL PLANE')
expect(wrapper.text()).not.toContain('ACP://')
expect(wrapper.text()).not.toContain('SYS.01')
expect(wrapper.text()).not.toContain('MISSION RECORDS')
expect(wrapper.text()).toContain('Vibe-Coding 怎么跑')
expect(wrapper.text()).toContain('代表案例')
```

- [ ] **Step 3: Run tests — expect FAIL**

```bash
pnpm test:run src/views/ai-first
```

Expected: FAIL on title / eyebrow / closing / section heading assertions.

- [ ] **Step 4: Rewrite `aiResume` copy in `data/resume.ts`**

Use these values (exact strings):

```typescript
profile: {
  name: '陈泽辉',
  eyebrow: 'VIBE-CODING',
  title: '前端负责人｜把 AI 产码跑进真实项目',
  avatar: 'avatar.png',
  experienceStartYear: 2015,
  meta: ['广州', '本科', '随时到岗'],
  summary:
    '10 年+ 前端研发，带 6 人团队。以 Vue3 与多端架构为交付底座，把 Skills、上下文约束、质检脚本、Code Review、CI/CD 串成 Vibe-Coding 闭环，让 AI 生成的代码能稳定合进真实项目。',
  contacts: [/* keep existing email + github */],
},
```

Pipeline (keep owners; rewrite labels/details/outputs):

```typescript
pipeline: [
  {
    index: '01',
    label: '定边界',
    owner: 'Human',
    detail: '确认需求范围、架构取舍和不能碰的风险。',
    output: '任务约定',
  },
  {
    index: '02',
    label: '喂规范',
    owner: 'System',
    detail: '把项目规范、组件约定、OpenAPI 和示例放进上下文。',
    output: '受控上下文',
  },
  {
    index: '03',
    label: 'Agent 生成',
    owner: 'Agent',
    detail: '按 Skills 生成 CRUD、组件和配套代码。',
    output: '候选实现',
  },
  {
    index: '04',
    label: 'Review',
    owner: 'Human',
    detail: '质检脚本、类型检查和 Code Review 一起验结果。',
    output: '可合并代码',
  },
  {
    index: '05',
    label: '上线',
    owner: 'System',
    detail: 'CI/CD 发布，监控承接上线后的质量反馈。',
    output: '生产交付',
  },
],
```

Capabilities first item stays Vibe-Coding; tighten proof if needed:

```typescript
{ label: 'Vibe-Coding', proof: '把个人提示词经验收成可安装 Skills、受控上下文、质检脚本和交付门禁。' },
```

Closing:

```typescript
closing: '先定边界，再让 Agent 加速，最后用系统和 Review 兜底。',
```

Keep cases / metrics / classicEvidence facts unchanged unless wording is obviously control-plane jargon.

- [ ] **Step 5: Strip chrome from `index.vue` section headings**

Remove the entire `.ai-system-bar` block.

For each section heading, drop `__index` and `__overline` nodes; keep a single Chinese title:

```vue
<div class="ai-section-heading">
  <div class="ai-section-heading__copy">
    <h2 id="ai-evidence-title" class="ai-section-heading__title">可信交付读数</h2>
  </div>
  <span class="ai-section-heading__rule" aria-hidden="true"></span>
</div>
```

Titles:

- `可信交付读数`
- `Vibe-Coding 怎么跑`
- `代表案例`
- `能力`
- Field evidence: remove overline; title `业务硬证据`

Footer: replace signature with `陈泽辉` or remove `__signature` line.

- [ ] **Step 6: Relabel case / pipeline / header chrome**

`ai-case-card.vue`:

```vue
<div class="ai-case-card__index" aria-hidden="true">
  案例 {{ String(index + 1).padStart(2, '0') }}
</div>
<!-- dt labels: -->
场景 / 约束 / Agent 执行 / 我把关
<!-- outcome: -->
<span class="ai-case-card__outcome-label">结果</span>
```

`delivery-pipeline.vue`:

```vue
<ol class="ai-pipeline" aria-label="Vibe-Coding 交付步骤">
...
<span class="ai-pipeline-stage__output-label">产出</span>
```

`ai-resume-header.vue`: change `SECURE CHANNELS` → `联系方式`.

- [ ] **Step 7: Re-run tests**

```bash
pnpm test:run src/views/ai-first
```

Expected: data + view copy assertions PASS. Theme tests may still be absent.

---

### Task 2: Theme composable + toolbar toggle

**Files:**
- Modify: `src/views/ai-first/types.ts`
- Create: `src/views/ai-first/data/themes.ts`
- Create: `src/views/ai-first/data/index.ts` (if missing; export resume + themes)
- Create: `src/views/ai-first/composables/use-theme.ts`
- Modify: `src/views/ai-first/components/ai-toolbar.vue`
- Modify: `src/views/ai-first/ai-first-view.test.ts`
- Modify: `index.html`

- [ ] **Step 1: Add theme types**

Append to `types.ts`:

```typescript
export type ThemeId = 'light' | 'dark'

export interface Theme {
  id: ThemeId
  label: string
  swatch: string
}
```

- [ ] **Step 2: Create `data/themes.ts`**

```typescript
import type { Theme } from '../types'

export const themes: readonly Theme[] = [
  { id: 'light', label: 'Light', swatch: '#0f7a4a' },
  { id: 'dark', label: 'Dark', swatch: '#34d399' },
]
```

- [ ] **Step 3: Create `composables/use-theme.ts`**

Copy `src/views/classic/composables/use-theme.ts` verbatim, only adjusting imports to `../types` and `../data` (via `data/index.ts` or `../data/themes`). Keep `STORAGE_KEY = 'resume-theme'` and `DEFAULT_THEME = 'light'`.

- [ ] **Step 4: Write a failing toolbar/theme test**

Add to `ai-first-view.test.ts`:

```typescript
it('toggles data-theme between light and dark from the toolbar', async () => {
  document.documentElement.dataset.theme = 'light'
  const wrapper = mount(AiFirstResumeView)

  const toggle = wrapper.get('button[aria-label="切换到暗黑主题"]')
  await toggle.trigger('click')

  expect(document.documentElement.dataset.theme).toBe('dark')
  expect(localStorage.getItem('resume-theme')).toBe('dark')

  await wrapper.get('button[aria-label="切换到亮色主题"]').trigger('click')
  expect(document.documentElement.dataset.theme).toBe('light')
})
```

Before this suite (or in this test), clear storage:

```typescript
localStorage.removeItem('resume-theme')
```

- [ ] **Step 5: Run test — expect FAIL**

```bash
pnpm test:run src/views/ai-first/ai-first-view.test.ts
```

Expected: FAIL — missing theme toggle button.

- [ ] **Step 6: Rewrite `ai-toolbar.vue`**

```vue
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Link, Moon, Printer, Sun } from '@lucide/vue'
import { useTheme } from '../composables/use-theme'

const { current, setTheme, sync } = useTheme()
const isDark = computed(() => current.value === 'dark')

const printResume = () => window.print()
const toggleTheme = () => setTheme(isDark.value ? 'light' : 'dark')

onMounted(sync)
</script>

<template>
  <aside class="ai-toolbar ai-no-print" aria-label="简历操作">
    <button
      class="ai-toolbar__button ai-toolbar__button--primary"
      type="button"
      aria-label="打印简历"
      title="打印 / 导出 PDF"
      @click="printResume"
    >
      <Printer :size="15" />
      <span>导出 PDF</span>
    </button>

    <button
      class="ai-toolbar__icon-button"
      type="button"
      :title="isDark ? '切换到亮色' : '切换到暗色'"
      :aria-label="isDark ? '切换到亮色主题' : '切换到暗黑主题'"
      :aria-pressed="isDark"
      @click="toggleTheme"
    >
      <Sun v-if="isDark" :size="17" />
      <Moon v-else :size="17" />
    </button>

    <a
      class="ai-toolbar__icon-button"
      href="https://github.com/zehuichan"
      target="_blank"
      rel="noreferrer"
      title="GitHub"
      aria-label="GitHub"
    >
      <Link :size="17" />
    </a>
  </aside>
</template>
```

Remove `CONTROL PLANE ONLINE` entirely. Add minimal CSS for `__icon-button` / `__button--primary` in `resume.css` if existing toolbar styles only cover the old single button (Task 3 can polish visuals; functionality first).

- [ ] **Step 7: Extend `index.html` antiflicker**

Replace the theme block so both versions set `data-theme`:

```javascript
;(function () {
  var hashPath = window.location.hash.slice(1).split(/[?#]/)[0]
  var isClassic = hashPath === '/classic' || hashPath === '/classic/'
  document.documentElement.dataset.resume = isClassic ? 'classic' : 'ai-first'

  var theme = 'light'
  try {
    if (localStorage.getItem('resume-theme') === 'dark') theme = 'dark'
  } catch (e) {
    /* ignore */
  }
  document.documentElement.dataset.theme = theme
})()
```

- [ ] **Step 8: Re-run theme test — expect PASS**

```bash
pnpm test:run src/views/ai-first/ai-first-view.test.ts
```

---

### Task 3: Light default CSS + dark overrides

**Files:**
- Modify: `src/views/ai-first/styles/resume.css`

- [ ] **Step 1: Change root token block to light defaults**

Replace the opening `html[data-resume='ai-first']` block (currently dark-only) with light paper tokens, e.g.:

```css
html[data-resume='ai-first'] {
  color-scheme: light;
  --ai-bg: #f7f4ee;
  --ai-panel: #ffffff;
  --ai-panel-strong: #f3f0e8;
  --ai-ink: #161a17;
  --ai-ink-soft: #3d4340;
  --ai-ink-faint: #747b76;
  --ai-signal: #0f7a4a;
  --ai-signal-cool: #0f766e;
  --ai-line: #e5e8e2;
  --ai-grid: rgba(15, 122, 74, 0.06);
  --toolbar-bg: rgba(247, 244, 238, 0.92);
}
```

Tone down or remove `.ai-resume::before` scanline and heavy radial neon glows for light mode (keep subtle or `display:none` on the scanline overlay).

- [ ] **Step 2: Add dark override block immediately after**

```css
html[data-resume='ai-first'][data-theme='dark'] {
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
  --toolbar-bg: rgba(7, 11, 9, 0.88);
}
```

- [ ] **Step 3: Toolbar styles for new buttons**

Ensure `.ai-toolbar` uses `var(--toolbar-bg)`, flex row with gap, border `var(--ai-line)`. Primary button uses `--ai-signal` background and light text. Icon buttons are square hit targets ≥36px.

- [ ] **Step 4: Keep `@media print` forcing light tokens** (already present around line 1152). Confirm `color-scheme: light` and light `--ai-*` remain; no dependence on `data-theme` for print.

- [ ] **Step 5: Section heading CSS**

If styles assumed `__index` / `__overline` for layout, adjust `.ai-section-heading` so a single title + rule still aligns (flex gap OK with missing children).

- [ ] **Step 6: Manual visual check**

```bash
pnpm dev
```

Open `/#/` — light paper default. Toggle moon — dark. Refresh — theme persists. Open print preview — light. Switch to `/#/classic` — same theme preference.

- [ ] **Step 7: Full test run**

```bash
pnpm test:run
```

Expected: all green.

---

### Task 4: Final acceptance checklist (no code)

- [ ] **Step 1: Spec coverage check**

Confirm each spec row is done:

| Spec item | Task |
|---|---|
| Vibe-Coding page header | Task 1 |
| Chinese section titles / no SYS shell | Task 1 |
| Pipeline human wording | Task 1 |
| Case field labels | Task 1 |
| Chinese closing | Task 1 |
| Light default + dark toggle | Tasks 2–3 |
| Shared `resume-theme` + antiflicker | Task 2 |
| Print light | Task 3 |
| Tests updated | Tasks 1–2 |

- [ ] **Step 2: Ask user whether to commit**

Do not commit unless explicitly requested. Suggested message if asked:

```text
feat(ai-first): de-AI copy, vibe-coding focus, and light/dark theme
```

---

## Self-Review

1. **Spec coverage:** Content, chrome, theme, antiflicker, print, tests each map to a task above.
2. **Placeholders:** None — copy strings and CSS tokens are concrete.
3. **Types:** `ThemeId` / `Theme` / `themes` / `useTheme` naming matches classic and later toolbar usage.
4. **Extra chrome found during planning:** `SECURE CHANNELS`, pipeline `OUTPUT`, case `CASE /` — included in Task 1.
