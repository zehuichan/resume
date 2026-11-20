import { flushPromises } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { resolveResumeSource } from '../../shared/data/resume-sources'
import { type AdvantageBlock, buildOnlineResumeBlocks } from '../../shared/lib/online-resume-copy'
import { mountApp, press, stubClipboard } from '../../shared/testing/mount-app'

const cleanups: (() => void)[] = []

async function mountOnline() {
  const mounted = await mountApp('/online')
  cleanups.push(() => mounted.wrapper.unmount())
  return mounted
}

const source = resolveResumeSource()
const copy = buildOnlineResumeBlocks(source.resume, source.extras)
const advantageText = copy.blocks.find((b): b is AdvantageBlock => b.kind === 'advantage')!.field.text

const focusedKey = () => (document.activeElement as HTMLElement | null)?.dataset.copyKey

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn()
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
})

afterEach(() => {
  cleanups.splice(0).forEach((cleanup) => cleanup())
  vi.restoreAllMocks()
})

describe('OnlineResumeView', () => {
  it('shows only titles, data and buttons: no instructions to the reader', async () => {
    await mountOnline()
    const text = document.body.textContent ?? ''

    expect(text).toContain(`项目 ${copy.projectCount} · 工作经历 ${copy.companyCount}`)
    expect(text).not.toContain('请删除')
    expect(text).not.toContain('仅作对照')
    expect(text).not.toContain('改文案请先改数据文件')
  })

  it('walks the copy blocks with J and K and copies the current one with C, keyboard only', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    cleanups.push(stubClipboard(writeText))
    await mountOnline()

    await press('j')
    expect(focusedKey()).toBe('advantage')

    await press('j')
    const second = focusedKey()
    expect(second).toMatch(/^company-content-/)

    await press('k')
    expect(focusedKey()).toBe('advantage')

    await press('c')
    expect(writeText).toHaveBeenLastCalledWith(advantageText)
    expect(document.activeElement?.textContent).toContain('已复制')

    await press('Escape')
    expect(focusedKey()).toBeUndefined()
  })

  it('starts from the last block with K and does not wrap past either end', async () => {
    await mountOnline()

    await press('k')
    expect(focusedKey()).toBe('education')

    await press('j')
    expect(focusedKey()).toBe('education')
  })

  it('selects the text in place when copying fails, so Ctrl C still works', async () => {
    cleanups.push(stubClipboard(vi.fn().mockRejectedValue(new Error('denied'))))
    const alert = vi.spyOn(window, 'alert').mockImplementation(() => {})
    await mountOnline()

    document.querySelector<HTMLButtonElement>('[data-copy-key="advantage"]')!.click()
    await flushPromises()

    expect(alert).not.toHaveBeenCalled()
    expect(document.querySelector('[data-copy-key="advantage"]')!.textContent).toContain('复制失败')
    expect(window.getSelection()?.toString()).toBe(advantageText)
  })
})
