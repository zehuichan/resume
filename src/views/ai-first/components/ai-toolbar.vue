<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Link, Moon, Printer, Sun } from '@lucide/vue'
import { useTheme } from '../composables/use-theme'

const { current, setTheme, sync } = useTheme()
const isDark = computed(() => current.value === 'dark')

const printResume = () => window.print()
const toggleTheme = () => setTheme(isDark.value ? 'light' : 'dark')

onMounted(sync)
</script>

<template>
  <aside class="ai-toolbar ai-no-print" aria-label="简历操作">
    <button
      class="ai-toolbar__button ai-toolbar__button--primary"
      type="button"
      aria-label="打印简历"
      title="打印 / 导出 PDF"
      @click="printResume"
    >
      <Printer :size="15" />
      <span>导出 PDF</span>
    </button>

    <button
      class="ai-toolbar__icon-button"
      type="button"
      :title="isDark ? '切换到亮色' : '切换到暗色'"
      :aria-label="isDark ? '切换到亮色主题' : '切换到暗黑主题'"
      :aria-pressed="isDark"
      @click="toggleTheme"
    >
      <Sun v-if="isDark" :size="17" />
      <Moon v-else :size="17" />
    </button>

    <a
      class="ai-toolbar__icon-button"
      href="https://github.com/zehuichan"
      target="_blank"
      rel="noreferrer"
      title="GitHub"
      aria-label="GitHub"
    >
      <Link :size="17" />
    </a>
  </aside>
</template>
