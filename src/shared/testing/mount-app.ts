import { flushPromises, mount } from '@vue/test-utils'
import { h } from 'vue'
import { createMemoryHistory, RouterView } from 'vue-router'
import { createResumeRouter } from '../../router'
import ResumeDock from '../components/resume-dock.vue'

/** jsdom 的 <dialog> 没有 showModal / close：补成只切 open 属性，close 时照浏览器发 close 事件 */
function polyfillDialog() {
  const proto: Partial<HTMLDialogElement> = HTMLDialogElement.prototype
  if (proto.showModal) return
  proto.showModal = function (this: HTMLDialogElement) {
    this.setAttribute('open', '')
  }
  proto.close = function (this: HTMLDialogElement) {
    this.removeAttribute('open')
    this.dispatchEvent(new Event('close'))
  }
}

/** 按 app.vue 的样子挂上页面和底部工具条；挂在 body 上，聚焦和键盘才和浏览器里一样 */
export async function mountApp(path = '/') {
  polyfillDialog()
  const router = createResumeRouter(createMemoryHistory())
  await router.push(path)
  await router.isReady()

  const wrapper = mount(
    { render: () => [h(RouterView), h(ResumeDock)] },
    { global: { plugins: [router] }, attachTo: document.body }
  )
  await flushPromises()
  return { router, wrapper }
}

/** jsdom 没有剪贴板：装上一个，返回拆掉它的函数；`writeText` 失败时还会走 execCommand，一并换掉 */
export function stubClipboard(writeText: (text: string) => Promise<void>, execCommandResult = false) {
  const execCommand = document.execCommand
  Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true })
  document.execCommand = () => execCommandResult
  return () => {
    Reflect.deleteProperty(navigator, 'clipboard')
    document.execCommand = execCommand
  }
}

export async function press(key: string, init: KeyboardEventInit = {}) {
  window.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...init }))
  await flushPromises()
}
