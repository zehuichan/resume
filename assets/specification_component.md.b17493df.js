import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.138f466d.js";const m=JSON.parse('{"title":"组件规范","description":"","frontmatter":{},"headers":[],"relativePath":"specification/component.md","filePath":"specification/component.md","lastUpdated":1696771939000}'),l={name:"specification/component.md"},o=p(`<h1 id="组件规范" tabindex="-1">组件规范 <a class="header-anchor" href="#组件规范" aria-label="Permalink to &quot;组件规范&quot;">​</a></h1><h2 id="辅助函数" tabindex="-1">辅助函数 <a class="header-anchor" href="#辅助函数" aria-label="Permalink to &quot;辅助函数&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">camelizeRE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">-(</span><span style="color:#79B8FF;">\\w</span><span style="color:#DBEDFF;">)</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">camelize</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  str.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(camelizeRE, (</span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> c.</span><span style="color:#B392F0;">toUpperCase</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">kebabCase</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  str</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">(</span><span style="color:#79B8FF;">[A-Z]</span><span style="color:#DBEDFF;">)</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">g</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;-$1&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">^</span><span style="color:#DBEDFF;">-</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">withInstall</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  options.</span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">app</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(options.name, options)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// app.component(kebabCase(\`\${options.name}\`), options)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// or</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// app.component(camelize(\`-\${options.name}\`), options)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> options</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">camelizeRE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#032F62;"> /-(</span><span style="color:#005CC5;">\\w</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">camelize</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">str</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  str.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(camelizeRE, (</span><span style="color:#E36209;">_</span><span style="color:#24292E;">, </span><span style="color:#E36209;">c</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> c.</span><span style="color:#6F42C1;">toUpperCase</span><span style="color:#24292E;">())</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">kebabCase</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">str</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">  str</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/(</span><span style="color:#005CC5;">[A-Z]</span><span style="color:#032F62;">)/</span><span style="color:#D73A49;">g</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;-$1&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">toLowerCase</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">^</span><span style="color:#032F62;">-/</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">withInstall</span><span style="color:#24292E;">(</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  options.</span><span style="color:#6F42C1;">install</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">app</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(options.name, options)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// app.component(kebabCase(\`\${options.name}\`), options)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// or</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// app.component(camelize(\`-\${options.name}\`), options)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> options</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="组件目录规范" tabindex="-1">组件目录规范 <a class="header-anchor" href="#组件目录规范" aria-label="Permalink to &quot;组件目录规范&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">└─VUpload</span></span>
<span class="line"><span style="color:#e1e4e8;">    │  index.js</span></span>
<span class="line"><span style="color:#e1e4e8;">    │</span></span>
<span class="line"><span style="color:#e1e4e8;">    └─src</span></span>
<span class="line"><span style="color:#e1e4e8;">            VUpload.vue</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">└─VUpload</span></span>
<span class="line"><span style="color:#24292e;">    │  index.js</span></span>
<span class="line"><span style="color:#24292e;">    │</span></span>
<span class="line"><span style="color:#24292e;">    └─src</span></span>
<span class="line"><span style="color:#24292e;">            VUpload.vue</span></span></code></pre></div><h2 id="整体代码" tabindex="-1">整体代码 <a class="header-anchor" href="#整体代码" aria-label="Permalink to &quot;整体代码&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// index.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { withInstall } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> _VUpload </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./src/VUpload.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">VUpload</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">withInstall</span><span style="color:#E1E4E8;">(_VUpload)</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> VUpload</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// index.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { withInstall } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> _VUpload </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./src/VUpload.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">VUpload</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">withInstall</span><span style="color:#24292E;">(_VUpload)</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> VUpload</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  // do something...</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineComponent } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineComponent</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;VUpload&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    modelValue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Array,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    disabled: Boolean</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">props</span><span style="color:#E1E4E8;">, { </span><span style="color:#FFAB70;">emit</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// do something...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  // do something...</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineComponent } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineComponent</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;VUpload&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    modelValue: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Array,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    disabled: Boolean</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">(</span><span style="color:#E36209;">props</span><span style="color:#24292E;">, { </span><span style="color:#E36209;">emit</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// do something...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,8),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{m as __pageData,h as default};
