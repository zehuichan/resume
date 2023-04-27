import{_ as s,o as n,c as a,a as l}from"./app.f64bdfb4.js";const d=JSON.parse('{"title":"项目规范","description":"","frontmatter":{},"headers":[{"level":2,"title":"README.md","slug":"readme-md","link":"#readme-md","children":[]},{"level":2,"title":"Vite + Vue3 架构","slug":"vite-vue3-架构","link":"#vite-vue3-架构","children":[]},{"level":2,"title":"Taro + Vue3 架构","slug":"taro-vue3-架构","link":"#taro-vue3-架构","children":[]}],"relativePath":"specification/project.md","lastUpdated":1682580711000}'),p={name:"specification/project.md"},e=l(`<h1 id="项目规范" tabindex="-1">项目规范 <a class="header-anchor" href="#项目规范" aria-hidden="true">#</a></h1><p>一个项目的起步，离不开优秀的文档目录架构，下面截取我日常开发的一些目录结构。</p><h2 id="readme-md" tabindex="-1">README.md <a class="header-anchor" href="#readme-md" aria-hidden="true">#</a></h2><p>项目起步文档，简述你的项目背景，用到的技术栈，如何快速上手等等。</p><h2 id="vite-vue3-架构" tabindex="-1">Vite + Vue3 架构 <a class="header-anchor" href="#vite-vue3-架构" aria-hidden="true">#</a></h2><p>适用于 <code>pc</code> 、 <code>h5</code> 、<code>公众号</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">root:.</span></span>
<span class="line"><span style="color:#A6ACCD;">│  .gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;">│  index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">│  package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│  vite.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─build # 编译相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─compress.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─html.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─plugin.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  ├─proxy.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  └─utils.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─public # 静态资源</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">└─src</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  App.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  main.js</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─api # api接口</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─assets  # 图片、视频、音频、字体等资源</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─images</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─logo</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─styles</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─components # 组件库</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─enums # 前端枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─hooks # hook方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─install # 指令、插件</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─directives</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─layouts # 骨架</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─blank</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─default</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─router # 路由</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─store # store</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─utils # 工具方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    └─pages(views) # 页面</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="taro-vue3-架构" tabindex="-1">Taro + Vue3 架构 <a class="header-anchor" href="#taro-vue3-架构" aria-hidden="true">#</a></h2><p>紧适用于 <code>小程序</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">D:.</span></span>
<span class="line"><span style="color:#A6ACCD;">│  .editorconfig</span></span>
<span class="line"><span style="color:#A6ACCD;">│  .gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;">│  babel.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│  jsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│  project.config.json # 微信小程序</span></span>
<span class="line"><span style="color:#A6ACCD;">│  project.alipay.json # 支付宝小程序</span></span>
<span class="line"><span style="color:#A6ACCD;">│  README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">├─config # 环境变量和模式</span></span>
<span class="line"><span style="color:#A6ACCD;">│      dev.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│      index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│      prod.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│      stage.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│</span></span>
<span class="line"><span style="color:#A6ACCD;">└─src</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  app.config.js # 全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  app.js # 入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  index.html # html</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─api # api接口</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─assets  # 图片、视频、音频、字体等资源</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─fonts</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─images</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─styles</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─tabs</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─components # 公共组件</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─hooks # hook方法</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─install # 指令、插件</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  ├─directives</span></span>
<span class="line"><span style="color:#A6ACCD;">    │  └─nutui</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─pages # 页面</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├─store # store</span></span>
<span class="line"><span style="color:#A6ACCD;">    │</span></span>
<span class="line"><span style="color:#A6ACCD;">    └─utils # 工具方法</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),o=[e];function c(t,i,A,C,r,y){return n(),a("div",null,o)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
