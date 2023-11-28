import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.44b1ab64.js";const h=JSON.parse('{"title":"项目规范","description":"","frontmatter":{},"headers":[],"relativePath":"specification/project.md","filePath":"specification/project.md","lastUpdated":1701182408000}'),p={name:"specification/project.md"},l=e(`<h1 id="项目规范" tabindex="-1">项目规范 <a class="header-anchor" href="#项目规范" aria-label="Permalink to &quot;项目规范&quot;">​</a></h1><p>一个项目的起步，离不开优秀的文档目录架构，下面截取我日常开发的一些目录结构。</p><h2 id="readme-md" tabindex="-1">README.md <a class="header-anchor" href="#readme-md" aria-label="Permalink to &quot;README.md&quot;">​</a></h2><p>项目起步文档，简述你的项目背景，用到的技术栈，如何快速上手等等。</p><h2 id="vite-vue3-架构" tabindex="-1">Vite + Vue3 架构 <a class="header-anchor" href="#vite-vue3-架构" aria-label="Permalink to &quot;Vite + Vue3 架构&quot;">​</a></h2><p>适用于 <code>pc</code> 、 <code>h5</code> 、<code>公众号</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">root:.</span></span>
<span class="line"><span style="color:#e1e4e8;">│  .gitignore</span></span>
<span class="line"><span style="color:#e1e4e8;">│  index.html</span></span>
<span class="line"><span style="color:#e1e4e8;">│  package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">│  README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  vite.config.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├─build # 编译相关</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─compress.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─html.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─plugin.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─proxy.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─utils.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├─public # 静态资源</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">└─src</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  App.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  main.js</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─api # api接口</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─assets  # 图片、视频、音频、字体等资源</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─images</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─logo</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  └─styles</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─components # 组件库</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─enums # 前端枚举</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─hooks # hook方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─install # 指令、插件</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─directives</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  └─plugins</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─layouts # 骨架</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─blank</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  └─default</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─router # 路由</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─store # store</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─utils # 工具方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    └─pages(views) # 页面</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">root:.</span></span>
<span class="line"><span style="color:#24292e;">│  .gitignore</span></span>
<span class="line"><span style="color:#24292e;">│  index.html</span></span>
<span class="line"><span style="color:#24292e;">│  package.json</span></span>
<span class="line"><span style="color:#24292e;">│  README.md</span></span>
<span class="line"><span style="color:#24292e;">│  vite.config.js</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├─build # 编译相关</span></span>
<span class="line"><span style="color:#24292e;">│  ├─compress.js</span></span>
<span class="line"><span style="color:#24292e;">│  ├─html.js</span></span>
<span class="line"><span style="color:#24292e;">│  ├─plugin.js</span></span>
<span class="line"><span style="color:#24292e;">│  ├─proxy.js</span></span>
<span class="line"><span style="color:#24292e;">│  └─utils.js</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├─public # 静态资源</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">└─src</span></span>
<span class="line"><span style="color:#24292e;">    │  App.vue</span></span>
<span class="line"><span style="color:#24292e;">    │  main.js</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─api # api接口</span></span>
<span class="line"><span style="color:#24292e;">    ├─assets  # 图片、视频、音频、字体等资源</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─images</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─logo</span></span>
<span class="line"><span style="color:#24292e;">    │  └─styles</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─components # 组件库</span></span>
<span class="line"><span style="color:#24292e;">    ├─enums # 前端枚举</span></span>
<span class="line"><span style="color:#24292e;">    ├─hooks # hook方法</span></span>
<span class="line"><span style="color:#24292e;">    ├─install # 指令、插件</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─directives</span></span>
<span class="line"><span style="color:#24292e;">    │  └─plugins</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─layouts # 骨架</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─blank</span></span>
<span class="line"><span style="color:#24292e;">    │  └─default</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─router # 路由</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─store # store</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─utils # 工具方法</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    └─pages(views) # 页面</span></span></code></pre></div><h2 id="taro-vue3-架构" tabindex="-1">Taro + Vue3 架构 <a class="header-anchor" href="#taro-vue3-架构" aria-label="Permalink to &quot;Taro + Vue3 架构&quot;">​</a></h2><p>仅适用于 <code>小程序</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">root:.</span></span>
<span class="line"><span style="color:#e1e4e8;">│  .editorconfig</span></span>
<span class="line"><span style="color:#e1e4e8;">│  .gitignore</span></span>
<span class="line"><span style="color:#e1e4e8;">│  babel.config.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│  jsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">│  package.json</span></span>
<span class="line"><span style="color:#e1e4e8;">│  project.config.json # 微信小程序</span></span>
<span class="line"><span style="color:#e1e4e8;">│  project.alipay.json # 支付宝小程序</span></span>
<span class="line"><span style="color:#e1e4e8;">│  README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">├─config # 环境变量和模式</span></span>
<span class="line"><span style="color:#e1e4e8;">│      dev.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│      index.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│      prod.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│      stage.js</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">└─src</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  app.config.js # 全局配置</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  app.js # 入口文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  index.html # html</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─api # api接口</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─assets  # 图片、视频、音频、字体等资源</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─fonts</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─images</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─styles</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  └─tabs</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─components # 公共组件</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─hooks # hook方法</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─install # 指令、插件</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  ├─directives</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  └─nutui</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─pages # 页面</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├─store # store</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    └─utils # 工具方法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">root:.</span></span>
<span class="line"><span style="color:#24292e;">│  .editorconfig</span></span>
<span class="line"><span style="color:#24292e;">│  .gitignore</span></span>
<span class="line"><span style="color:#24292e;">│  babel.config.js</span></span>
<span class="line"><span style="color:#24292e;">│  jsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">│  package.json</span></span>
<span class="line"><span style="color:#24292e;">│  project.config.json # 微信小程序</span></span>
<span class="line"><span style="color:#24292e;">│  project.alipay.json # 支付宝小程序</span></span>
<span class="line"><span style="color:#24292e;">│  README.md</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">├─config # 环境变量和模式</span></span>
<span class="line"><span style="color:#24292e;">│      dev.js</span></span>
<span class="line"><span style="color:#24292e;">│      index.js</span></span>
<span class="line"><span style="color:#24292e;">│      prod.js</span></span>
<span class="line"><span style="color:#24292e;">│      stage.js</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">└─src</span></span>
<span class="line"><span style="color:#24292e;">    │  app.config.js # 全局配置</span></span>
<span class="line"><span style="color:#24292e;">    │  app.js # 入口文件</span></span>
<span class="line"><span style="color:#24292e;">    │  index.html # html</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─api # api接口</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─assets  # 图片、视频、音频、字体等资源</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─fonts</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─images</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─styles</span></span>
<span class="line"><span style="color:#24292e;">    │  └─tabs</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─components # 公共组件</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─hooks # hook方法</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─install # 指令、插件</span></span>
<span class="line"><span style="color:#24292e;">    │  ├─directives</span></span>
<span class="line"><span style="color:#24292e;">    │  └─nutui</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─pages # 页面</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    ├─store # store</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    └─utils # 工具方法</span></span></code></pre></div>`,10),o=[l];function c(t,i,r,y,d,u){return n(),a("div",null,o)}const j=s(p,[["render",c]]);export{h as __pageData,j as default};
