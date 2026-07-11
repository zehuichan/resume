<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Link, Moon, Printer, Sun } from '@lucide/vue'
import { useTheme } from '../composables/use-theme'

const { current, setTheme, sync } = useTheme()

const isDark = computed(() => current.value === 'dark')

const print = () => window.print()
const toggleTheme = () => setTheme(isDark.value ? 'light' : 'dark')

onMounted(sync)
</script>

<template>
  <div
    class="no-print fixed bottom-5 right-5 z-50 flex items-center gap-1 border border-classic-line bg-[var(--toolbar-bg)] px-1.5 py-1.5 backdrop-blur"
  >
    <button
      type="button"
      title="打印 / 导出 PDF"
      class="group flex items-center gap-2 bg-classic-accent px-4 py-2 font-classic-mono text-[11.5px] font-bold uppercase tracking-[0.1em] text-classic-paper transition-colors hover:bg-classic-accent-deep active:scale-95"
      @click="print"
    >
      <Printer :size="15" />
      <span>导出 PDF</span>
    </button>

    <button
      type="button"
      :title="isDark ? '切换到 Light Spec' : '切换到 Dark Spec'"
      :aria-label="isDark ? '切换到亮色主题' : '切换到暗黑主题'"
      :aria-pressed="isDark"
      class="flex h-9 w-9 items-center justify-center text-classic-ink-soft transition-colors hover:bg-classic-paper-soft hover:text-classic-accent"
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
      class="flex h-9 w-9 items-center justify-center text-classic-ink-soft transition-colors hover:bg-classic-paper-soft hover:text-classic-accent"
    >
      <Link :size="17" />
    </a>
  </div>
</template>
