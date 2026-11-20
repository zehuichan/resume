import { flushPromises } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { resume } from '../../views/classic/data'
import { buildResumeMarkdown } from '../lib/resume-markdown'
import { mountApp, press, stubClipboard } from '../testing/mount-app'

const cleanups: (() => void)[] = []

async function mountDock(path = '/') {
  const mounted = await mountApp(path)
  cleanups.push(() => mounted.wrapper.unmount())
  return mounted
}

const dock = () => document.querySelector<HTMLElement>('[data-slot="resume-dock"]')!
const markdownButton = () => document.querySelector<HTMLButtonElement>('[data-slot="copy-markdown"]')!

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn()
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
})

afterEach(() => {
  cleanups.splice(0).forEach((cleanup) => cleanup())
  vi.restoreAllMocks()
})

describe('ResumeDock', () => {
  it('marks the current view among the version links', async () => {
    await mountDock('/online')
    const links = [...dock().querySelectorAll('nav a')]

    expect(links.map((link) => link.textContent?.trim())).toEqual(['简历', '线上版'])
    expect(links[0]!.getAttribute('aria-current')).toBeNull()
    expect(links[1]!.getAttribute('aria-current')).toBe('page')
  })

  it('offers no theme setting: the site follows the system', async () => {
    await mountDock()

    expect(dock().querySelector('button[aria-pressed]')).toBeNull()
    expect(dock().textContent).not.toMatch(/主题/)
  })

  it('jumps between the two pages with G R and G O', async () => {
    const { router } = await mountDock('/')

    await press('g')
    await press('o')
    expect(router.currentRoute.value.name).toBe('online')

    await press('g')
    await press('r')
    expect(router.currentRoute.value.name).toBe('classic')
  })

  it('does not react to single-key shortcuts while typing', async () => {
    const { router } = await mountDock('/')
    const input = document.createElement('input')
    document.body.append(input)
    cleanups.push(() => input.remove())

    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', bubbles: true }))
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'o', bubbles: true }))
    await flushPromises()

    expect(router.currentRoute.value.name).toBe('classic')
  })

  it('copies the whole resume as Markdown from the button and from M', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    cleanups.push(stubClipboard(writeText))
    await mountDock()

    markdownButton().click()
    await flushPromises()
    expect(writeText).toHaveBeenLastCalledWith(buildResumeMarkdown(resume))
    expect(markdownButton().textContent?.trim()).toBe('已复制')

    await press('m')
    expect(writeText).toHaveBeenCalledTimes(2)
  })

  it('says in place that copying failed, without a dialog', async () => {
    cleanups.push(stubClipboard(vi.fn().mockRejectedValue(new Error('denied'))))
    const alert = vi.spyOn(window, 'alert').mockImplementation(() => {})
    await mountDock()

    markdownButton().click()
    await flushPromises()

    expect(markdownButton().textContent).toMatch(/^\s*复制失败\s*：浏览器没给剪贴板权限/)
    expect(alert).not.toHaveBeenCalled()
  })

  it('opens the shortcut list with ? and greys out what this page cannot do', async () => {
    await mountDock('/')
    const list = document.querySelector<HTMLDialogElement>('[data-slot="shortcut-list"]')!
    expect(list.open).toBe(false)

    await press('?')
    const rows = [...list.querySelectorAll<HTMLElement>('[data-slot="shortcut-row"]')]
    const row = (label: string) => rows.find((r) => r.textContent?.includes(label))!

    expect(list.open).toBe(true)
    expect(rows.map((r) => r.textContent)).toHaveLength(8)
    expect(row('去线上版').dataset.available).toBe('true')
    expect(row('下一段').dataset.available).toBe('false')
  })

  it('closes the shortcut list with Esc', async () => {
    await mountDock('/')
    const list = document.querySelector<HTMLDialogElement>('[data-slot="shortcut-list"]')!

    await press('?')
    list.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
    await flushPromises()

    expect(list.open).toBe(false)
  })

  it('stops listening for shortcuts while the list is open, and listens again once it closes', async () => {
    const { router } = await mountDock('/')
    const list = document.querySelector<HTMLDialogElement>('[data-slot="shortcut-list"]')!

    await press('?')
    await press('g')
    await press('o')
    expect(router.currentRoute.value.name).toBe('classic')

    list.querySelector<HTMLButtonElement>('button[aria-label="关闭"]')!.click()
    await flushPromises()
    expect(list.open).toBe(false)

    await press('g')
    await press('o')
    expect(router.currentRoute.value.name).toBe('online')
  })

  it('stays out of print output and leaves printing to the browser', async () => {
    await mountDock()

    expect(dock().classList).toContain('print:hidden')
    expect(dock().textContent).not.toContain('导出 PDF')
  })
})
