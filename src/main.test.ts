import { describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => {
  let resolveReady!: () => void
  const ready = new Promise<void>((resolve) => {
    resolveReady = resolve
  })
  const config: { errorHandler?: (...args: unknown[]) => void } = {}
  const app = {
    config,
    mount: vi.fn(),
    use: vi.fn()
  }
  const router = {
    afterEach: vi.fn(),
    isReady: vi.fn(() => ready)
  }

  return {
    app,
    router,
    ready,
    resolveReady,
    createApp: vi.fn(() => app),
    createResumeRouter: vi.fn(() => router)
  }
})

vi.mock('vue', () => ({ createApp: mocks.createApp }))
vi.mock('./app.vue', () => ({ default: {} }))
vi.mock('./router', () => ({ createResumeRouter: mocks.createResumeRouter }))
vi.mock('./router/route-meta', () => ({ applyRouteMeta: vi.fn() }))

describe('application startup', () => {
  it('preserves startup hooks and waits for the initial route before mounting', async () => {
    await import('./main')

    expect(mocks.router.afterEach).toHaveBeenCalledOnce()
    expect(mocks.app.use).toHaveBeenCalledWith(mocks.router)
    expect(mocks.app.config.errorHandler).toEqual(expect.any(Function))
    expect(mocks.router.isReady).toHaveBeenCalledOnce()
    expect(mocks.app.mount).not.toHaveBeenCalled()

    mocks.resolveReady()
    await mocks.ready
    await vi.waitFor(() => expect(mocks.app.mount).toHaveBeenCalledWith('#app'))
  })
})
