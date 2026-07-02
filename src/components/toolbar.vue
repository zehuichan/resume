<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Code, Moon, Printer, Sun } from '@lucide/vue'
import { useTheme } from '../composables/use-theme'

const { current, setTheme, sync } = useTheme()

const isDark = computed(() => current.value === 'dark')

const print = () => window.print()
const toggleTheme = () => setTheme(isDark.value ? 'kami' : 'dark')

onMounted(sync)
</script>

<template>
  <div
    class="no-print fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full border border-line bg-paper/90 px-1.5 py-1.5 shadow-[0_8px_28px_-10px_rgba(31,27,22,0.4)] backdrop-blur"
  >
    <button
      type="button"
      title="打印 / 导出 PDF"
      class="group flex items-center gap-2 rounded-full bg-seal px-4 py-2 text-[13px] font-medium text-paper transition-transform hover:scale-[1.03] active:scale-95"
      @click="print"
    >
      <Printer :size="15" />
      <span>导出 PDF</span>
    </button>

    <button
      type="button"
      :title="isDark ? '切换到亮色 / 紙 Kami' : '切换到暗黑'"
      :aria-label="isDark ? '切换到亮色主题' : '切换到暗黑主题'"
      :aria-pressed="isDark"
      class="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
      @click="toggleTheme"
    >
      <Sun v-if="isDark" :size="17" />
      <Moon v-else :size="17" />
    </button>

    <a
      href="https://github.com/zehuichan"
      target="_blank"
      rel="noreferrer"
      title="GitHub"
      class="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
    >
      <Code :size="17" />
    </a>
  </div>
</template>
