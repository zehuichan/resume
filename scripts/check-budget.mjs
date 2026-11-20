// 首屏体积预算：pnpm build 之后跑，超了就以非零退出，CI 部署前拦下。
// 首屏 = index.html 直接引的入口文件 + 一张页面自己的懒加载文件（取最重的一页）。
// 预算按 gzip 后的字节数算，比现状留约 15% 余量；要加预算先写清楚为什么值得。
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'

const BUDGET_KB = { js: 72, css: 19 }
const PAGES = ['classic', 'online']

const dist = process.argv[2] ?? 'dist'
const assets = join(dist, 'assets')
const files = readdirSync(assets)

const gzipKb = (file) => gzipSync(readFileSync(join(assets, file))).length / 1024
const ofType = (list, ext) => list.filter((file) => file.endsWith(`.${ext}`))

const html = readFileSync(join(dist, 'index.html'), 'utf8')
const entry = [...html.matchAll(/assets\/([^"]+\.(?:js|css))"/g)].map((m) => m[1])
const pageFiles = (page) => files.filter((file) => file.startsWith(`${page}-`))

let failed = false
for (const ext of ['js', 'css']) {
  const entryKb = ofType(entry, ext).reduce((sum, file) => sum + gzipKb(file), 0)
  const pages = PAGES.map((page) => ({
    page,
    kb: entryKb + ofType(pageFiles(page), ext).reduce((sum, file) => sum + gzipKb(file), 0)
  }))
  const heaviest = pages.reduce((a, b) => (b.kb > a.kb ? b : a))
  const over = heaviest.kb > BUDGET_KB[ext]
  failed ||= over

  const detail = pages.map((p) => `${p.page} ${p.kb.toFixed(1)}`).join(' / ')
  console.log(
    `${over ? '超出' : '通过'}  首屏 ${ext.toUpperCase()} ${heaviest.kb.toFixed(1)} KB，预算 ${BUDGET_KB[ext]} KB（${detail}）`
  )
}

if (failed) process.exit(1)
