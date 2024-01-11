import{_ as e,c as o,o as a,U as t}from"./chunks/framework.dVB0s8Io.js";const h=JSON.parse('{"title":"Framework","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"interview/framework.md","filePath":"interview/framework.md","lastUpdated":1704984338000}'),r={name:"interview/framework.md"},d=t('<h1 id="framework" tabindex="-1">Framework <a class="header-anchor" href="#framework" aria-label="Permalink to &quot;Framework&quot;">​</a></h1><h2 id="vue2-0生命周期" tabindex="-1">Vue2.0生命周期 <a class="header-anchor" href="#vue2-0生命周期" aria-label="Permalink to &quot;Vue2.0生命周期&quot;">​</a></h2><ol><li><code>beforeCreate</code> 创建前。此时，组件实例刚刚创建，还未进行数据观测和事件配置，拿不到任何数据。</li><li><code>created</code> 创建完成。实例已经完成了数据观测，属性和方法的计算(比如props、methods、data、computed和watch此时已经拿得到)， 未挂载到DOM，不能访问到el属性，el属性，ref属性内容为空数组常用于简单的ajax请求，页面的初始化。</li><li><code>beforeMount</code> 挂载前。挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM）。编译模板，把data里面的数据和模板生成html， 完成了el和data 初始化，注意此时还没有挂在html到页面上。</li><li><code>mounted</code> 挂载完成。也就是模板中的HTML渲染到HTML页面中，此时可以通过DOM API获取到DOM节点，$ref属性可以访问常用于获取VNode信息和操作，ajax请求，mounted只会执行一次。</li><li><code>beforeUpdate</code> 在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，不会触发附加地重渲染过程。</li><li><code>updated</code> 更新后。在由于数据更改导致地虚拟DOM重新渲染和打补丁之后调用。</li><li><code>beforeDestroy</code> 销毁前。在实例销毁之前调用，实例仍然完全可用。（一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件）</li><li><code>destroyed</code> 销毁后。在实例销毁之后调用，调用后，vue实列指示的所有东西都会解绑，所有的事件监听器会被移除。</li><li><code>activated</code> 在keep-alive组件激活时调用</li><li><code>deactivated</code> 在keep-alive组件停用时调用</li></ol><p>Coming soon...</p>',4),i=[d];function c(l,n,s,m,_,f){return a(),o("div",null,i)}const u=e(r,[["render",c]]);export{h as __pageData,u as default};
