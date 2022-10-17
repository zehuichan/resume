---
layout: doc
---

# Framework

## Vue2.0生命周期

1. `beforeCreate` 创建前。此时，组件实例刚刚创建，还未进行数据观测和事件配置，拿不到任何数据。
2. `created` 创建完成。实例已经完成了数据观测，属性和方法的计算(比如props、methods、data、computed和watch此时已经拿得到)，
未挂载到DOM，不能访问到el属性，el属性，ref属性内容为空数组常用于简单的ajax请求，页面的初始化。
3. `beforeMount` 挂载前。挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM）。编译模板，把data里面的数据和模板生成html，
完成了el和data 初始化，注意此时还没有挂在html到页面上。
4. `mounted` 挂载完成。也就是模板中的HTML渲染到HTML页面中，此时可以通过DOM API获取到DOM节点，$ref属性可以访问常用于获取VNode信息和操作，ajax请求，mounted只会执行一次。
5. `beforeUpdate` 在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，不会触发附加地重渲染过程。
6. `updated` 更新后。在由于数据更改导致地虚拟DOM重新渲染和打补丁之后调用。
7. `beforeDestroy` 销毁前。在实例销毁之前调用，实例仍然完全可用。（一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件）
8. `destroyed` 销毁后。在实例销毁之后调用，调用后，vue实列指示的所有东西都会解绑，所有的事件监听器会被移除。
9. `activated` 在keep-alive组件激活时调用
10. `deactivated` 在keep-alive组件停用时调用

Coming soon...
