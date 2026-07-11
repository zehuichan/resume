import vue from '@vitejs/plugin-vue'
import { defineConfig, type UserConfig } from 'vite'
import type { InlineConfig } from 'vitest/node'

const config = {
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true
  }
} satisfies UserConfig & { test: InlineConfig }

export default defineConfig(config)
