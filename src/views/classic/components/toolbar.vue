<script setup lang="ts">
import { Link, Printer } from '@lucide/vue'

const print = () => window.print()
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
