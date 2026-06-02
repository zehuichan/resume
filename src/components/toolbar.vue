<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Check, Code, Palette, Printer } from '@lucide/vue'
import type { ThemeId } from '../types'
import { useTheme } from '../composables/use-theme'

const { current, themes, setTheme, sync } = useTheme()

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const print = () => window.print()

const toggle = () => {
  open.value = !open.value
}

const choose = (id: ThemeId) => {
  setTheme(id)
  open.value = false
}

const onPointerDown = (e: PointerEvent) => {
  if (open.value && root.value && !root.value.contains(e.target as Node)) open.value = false
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  sync()
  document.addEventListener('pointerdown', onPointerDown)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onPointerDown)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div
    ref="root"
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

    <div class="relative">
      <button
        type="button"
        title="切换主题 / Theme"
        aria-label="切换主题"
        aria-haspopup="menu"
        :aria-expanded="open"
        class="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
        :class="open && 'bg-paper-soft text-ink'"
        @click="toggle"
      >
        <Palette :size="17" />
      </button>

      <div
        v-if="open"
        role="menu"
        aria-label="主题"
        class="absolute bottom-full right-0 mb-3 w-44 rounded-2xl border border-line bg-paper/95 p-1.5 shadow-[0_18px_44px_-18px_rgba(31,27,22,0.55)] backdrop-blur"
      >
        <button
          v-for="t in themes"
          :key="t.id"
          type="button"
          role="menuitemradio"
          :aria-checked="current === t.id"
          :title="t.label"
          class="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-[13px] text-ink-soft transition-colors hover:bg-paper-soft hover:text-ink"
          :class="current === t.id && 'bg-paper-soft text-ink'"
          @click="choose(t.id)"
        >
          <span
            class="h-3.5 w-3.5 flex-none rounded-full border border-line"
            :style="{ backgroundColor: t.swatch }"
          />
          <span class="font-medium">{{ t.label }}</span>
          <Check v-if="current === t.id" :size="14" class="ml-auto text-seal" />
        </button>
      </div>
    </div>

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
