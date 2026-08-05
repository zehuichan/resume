# 陈泽辉的简历

一份数据驱动、打印优先的中文技术简历。视觉采用白色 A4 纸张、深灰正文与单一低饱和蓝色强调，减少装饰以保证国内招聘平台预览、黑白打印和 PDF 导出时的可读性。

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
pnpm dev      # 本地开发
pnpm build    # 生产构建，产物在 dist/
pnpm preview  # 预览构建产物
```

## 维护内容

默认简历：`/#/`（招聘版 · 前端负责人）
Agent 版：`/#/ai-first`（转行 Agent 应用开发工程师）

右上角可在「招聘版 / Agent 版」之间切换；两版版式一致，仅内容定位不同。

招聘版内容：`src/views/classic/data/resume.ts`
Agent 版内容：`src/views/ai-first/data/resume.ts`

Agent 版复用招聘版布局与样式，内容独立维护。行内用反引号包裹的文本（如 `` `vue3` ``）会自动渲染为技术标签。经验年限由各自数据文件中的 `profile.experienceStartYear` 自动计算。

## 目录结构

```
.
├─ index.html             # 引入 Google Fonts
├─ vite.config.ts         # base 已设为 /resume/（GitHub Pages 项目站点）
├─ public/                # avatar.png、favicon.svg
└─ src/
   ├─ app.vue              # 路由出口
   ├─ router/              # 页面路由与标题
   ├─ shared/              # 版本切换与共享工具
   └─ views/
      ├─ ai-first/         # Agent 版内容（布局复用招聘版）
      └─ classic/          # 招聘版内容、组件与样式
```

## 导出 PDF

右下角「导出 PDF」按钮（或 `Ctrl/Cmd + P`）调用浏览器打印，已针对 A4 做了分页与防截断处理；打印时自动隐藏工具栏、去除纸张投影。

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并将 `dist/` 发布到 `gh-pages` 分支（Pages Source = 从 `gh-pages` 分支部署）。
如部署到自定义域名或仓库根路径，请相应调整 `vite.config.ts` 中的 `base`。
