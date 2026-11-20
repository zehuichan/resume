# AGENTS.md

陈泽辉的中文技术简历站：「简历」（A4 纸面，打印或存 PDF）和「线上版」（按招聘平台栏目分段复制）两张页面，加一条底部工具条。Vue 3 + Vite + Tailwind v4 + shadcn-vue，静态部署到 GitHub Pages。

## 规矩

- 产品手感照 Linear 的 14 条规矩，逐条落点见 [规划](docs/规划.md) 的「产品基调」；功能、验收和「不做」也在那里。
- 视觉（颜色角色、对比度、字号、圆角、按键样子、文案）按 [DESIGN.md](DESIGN.md)。A4 纸面是例外，保留自己的排版。
- 内容只改 `src/views/classic/data`；简历、线上版、Markdown 都从这里读，不在页面里另写一份。
- 按键只加在命令表 `src/shared/commands/commands.ts`，页面用 `useCommand` 登记处理函数；不在页面里写按键文字。
- 色值只写在 `src/shared/styles/ui.css`（工具界面）和 `src/views/classic/styles/resume.css`（纸面和打印）；改颜色同时改 `brand/preview.html`。
- 页面上不写操作说明，不弹 `alert` 和确认框；失败在原地说原因和下一步。
- 不加设置项。明暗只跟系统。
- 首屏体积有预算（`pnpm run budget`）；加依赖前先看它进不进首屏的公共包。

## 改需求的流程

1. 先改 [规划](docs/规划.md)：功能的「做什么 / 验收 / 不做 / 页面」，碰到规矩写不下的进「不做」并写原因。
2. 视觉有变化就改 DESIGN.md，跑 `pnpm --package=@google/design.md@0.4.0 dlx designmd lint DESIGN.md`，不留新警告。
3. 改代码，补规划「测试」表里对应的用例。
4. 跑下面的检查；键盘相关的改动在浏览器里用纯键盘走一遍。
5. 提交用 conventional commits（`feat:` `fix:` `refactor:` `docs:` `test:` `chore:`），一个提交一件事。

## 命令

```bash
pnpm install
pnpm dev          # 本地开发
pnpm test:run     # 单元测试
pnpm build        # 类型检查 + 构建
pnpm run budget   # 构建后查首屏体积，超了退出码 1
pnpm preview      # 预览构建产物
```

推到 `main` 后 `.github/workflows/deploy.yml` 依次跑测试、构建、体积预算，全过才发布到 `gh-pages`。
