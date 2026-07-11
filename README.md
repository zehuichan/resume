# 陈泽辉的简历

一份数据驱动的单页简历，编辑风工程档案设计。默认皮肤「红石 / Redstone」为暖纸底 + 锈红强调的编辑风格（呼应同名分享 talk 的设计语言），另含暗色 / Linear / Vercel / Notion 共 5 套皮肤一键切换，支持一键导出 PDF。

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

默认简历：`/#/`（AI-First）
经典简历：`/#/classic`

AI-First 内容：`src/views/ai-first/data/resume.ts`
经典版内容：`src/views/classic/data/resume.ts`

两个版本有意保持独立，不共享内容组件或样式。维护时请只修改对应版本目录，避免一个版本的内容或视觉变更影响另一个版本。

经典版行内用反引号包裹的文本（如 `` `vue3` ``）会自动渲染为技术标签。两个版本的经验年限都由各自数据文件中的 `profile.experienceStartYear` 自动计算，按需分别修改起算年份即可。

## 目录结构

```
.
├─ index.html             # 引入 Google Fonts
├─ vite.config.ts         # base 已设为 /resume/（GitHub Pages 项目站点）
├─ public/                # avatar.png、favicon.svg
└─ src/
   ├─ app.vue              # 路由出口
   ├─ router/              # 双版本路由与页面标题
   ├─ shared/              # 版本导航与共享工具
   └─ views/
      ├─ ai-first/         # AI-First 内容、组件与样式
      └─ classic/          # 经典版内容、组件与样式
```

## 导出 PDF

右下角「导出 PDF」按钮（或 `Ctrl/Cmd + P`）调用浏览器打印，已针对 A4 做了分页与防截断处理；打印时自动隐藏工具栏、去除纸张投影。

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并将 `dist/` 发布到 `gh-pages` 分支（Pages Source = 从 `gh-pages` 分支部署）。
如部署到自定义域名或仓库根路径，请相应调整 `vite.config.ts` 中的 `base`。
