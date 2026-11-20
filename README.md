# 陈泽辉的简历

一份数据驱动、打印优先的中文技术简历。工具界面照 Linear 的手感：中性灰阶、键盘能走完全部操作、没有设置项；白色 A4 纸面保留青绿 `#00696e` 强调，IBM Plex Sans + Noto Sans SC，保证招聘平台预览与黑白打印时的可读性。

功能、验收和「不做」：[`docs/规划.md`](./docs/规划.md)。接手改代码先读 [`AGENTS.md`](./AGENTS.md)。

## 品牌

设计规范：[`DESIGN.md`](./DESIGN.md)。预览页：[`brand/preview.html`](./brand/preview.html)（可本地直接打开，或加 `?theme=dark` 看暗色）。

资产：

- [`brand/mark.svg`](./brand/mark.svg) — 「简历版面」mark
- [`brand/logo.svg`](./brand/logo.svg) — mark + 字标「陈泽辉」
- [`public/favicon.svg`](./public/favicon.svg) — 跟随 mark

产品主题分两处：简历正文在 `src/views/classic/styles/resume.css`，工具型 UI 在 `src/shared/styles/ui.css`。识别核改动需同步品牌包与两边主题。

## 技术栈

- [Vue 3](https://vuejs.org/) + `<script setup>`
- [Vite](https://vitejs.dev/) 构建
- [TypeScript](https://www.typescriptlang.org/) 类型化内容
- [Tailwind CSS v4](https://tailwindcss.com/)（`@tailwindcss/vite`，CSS-first `@theme` 配置）
- [@lucide/vue](https://lucide.dev/) 图标组件

## 本地开发

需要 [Node.js](https://nodejs.org/) `^20.19.0 || >=22.12.0` 与 [pnpm](https://pnpm.io/) `>=10`（版本见 `package.json` 的 `packageManager` 字段）。

```bash
pnpm install
pnpm dev         # 本地开发
pnpm test:run    # 单元测试
pnpm build       # 生产构建，产物在 dist/
pnpm run budget  # 构建后查首屏体积预算
pnpm preview     # 预览构建产物
```

## 维护内容

简历：`/#/`（前端负责人）；线上版：`/#/online`

底部工具条（桌面停靠右下角，移动端通栏）可在「简历 / 线上版」之间切换、把整份简历复制为 Markdown；明暗跟系统走。线上版用于复制 BOSS 直聘等平台所需的分段文案。按 `?` 看全部快捷键（`G R` / `G O` 切页，线上版 `J` / `K` 选段、`C` 复制）。简历的栏目标题可以直接链接，例如 `/#/#projects`。

简历内容：`src/views/classic/data/resume.ts`
线上补充：`src/views/classic/data/online.ts`

行内用反引号包裹的文本（如 `` `vue3` ``）会自动渲染为技术标签。经验年限由 `profile.experienceStartYear` 自动计算。

每段公司经历的 `keywords` 是行业词加实际用过的技术，PDF 上显示为「关键词」一行，线上版复制成「技能标签」；精选项目的 `learning` 显示为「项目收获」一行。两者都只写真实用过、真实想过的，面试时要讲得出来。

## 目录结构

```
.
├─ AGENTS.md              # 接手须知：规矩、改需求的流程、命令
├─ DESIGN.md              # 设计规范
├─ docs/规划.md           # 功能、验收、不做、技术方案、测试
├─ brand/                 # mark.svg · logo.svg · preview.html
├─ index.html             # 首帧明暗脚本；Google Fonts（IBM Plex + Noto Sans SC）不阻塞首屏
├─ scripts/               # check-budget.mjs：首屏体积预算
├─ vite.config.ts         # base 已设为 /resume/（GitHub Pages 项目站点）
├─ public/                # avatar.png、favicon.svg
└─ src/
   ├─ app.vue              # 路由出口
   ├─ router/              # 页面路由与标题
   ├─ shared/              # 底部工具条、命令表（commands/）与共享工具
   └─ views/
      ├─ classic/          # 简历：内容数据、组件与纸面样式
      └─ online/           # 线上版：分段复制页
```

## 打印

`Ctrl/Cmd + P` 调用浏览器打印。样式已针对 A4 做了分页与防截断处理；打印时自动隐藏工具栏、去除纸张投影，并强制亮色白纸。

## 部署

推送到 `main` 分支后，GitHub Actions 依次跑测试、构建、首屏体积预算，全过才把 `dist/` 发布到 `gh-pages` 分支（Pages Source = 从 `gh-pages` 分支部署）。
如部署到自定义域名或仓库根路径，请相应调整 `vite.config.ts` 中的 `base`。
