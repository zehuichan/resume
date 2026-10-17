<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink, useRoute, type RouteLocationRaw } from 'vue-router'
import { Moon, Sun } from '@lucide/vue'
import { useTheme } from '@/shared/composables/use-theme'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Separator } from '@/shared/ui/separator'

type ViewId = 'classic' | 'online'

interface ViewItem {
  id: ViewId
  label: string
  to: RouteLocationRaw
}

const views: ViewItem[] = [
  { id: 'classic', label: '简历', to: '/' },
  { id: 'online', label: '线上版', to: '/online' }
]

const route = useRoute()

const current = computed<ViewId>(() => (route.name === 'online' ? 'online' : 'classic'))

const { isDark, toggle, sync } = useTheme()

const themeLabel = computed(() => (isDark.value ? '切换到亮色主题' : '切换到暗色主题'))

onMounted(sync)
</script>

<template>
  <!-- 停靠在底部：线上版滚到顶部的卡片右上角正是复制按钮，顶部浮层会盖住它 -->
  <div
    data-slot="resume-dock"
    class="fixed inset-x-3 bottom-3 z-40 flex items-center gap-1 rounded-md border border-border bg-card p-1 text-card-foreground shadow-sm print:hidden sm:inset-x-auto sm:right-5 sm:bottom-5"
  >
    <nav class="flex flex-1 items-center gap-1 sm:flex-none" aria-label="简历版本">
      <Button
        v-for="view in views"
        :key="view.id"
        as-child
        variant="ghost"
        :class="
          cn(
            'h-10 flex-1 rounded-xs px-3.5 sm:h-9 sm:flex-none',
            current === view.id
              ? 'bg-secondary text-secondary-foreground hover:bg-secondary dark:bg-accent dark:hover:bg-accent'
              : 'text-muted-foreground hover:bg-transparent hover:text-foreground'
          )
        "
      >
        <RouterLink :to="view.to" :aria-current="current === view.id ? 'page' : undefined">
          {{ view.label }}
        </RouterLink>
      </Button>
    </nav>

    <Separator orientation="vertical" class="mx-1 data-[orientation=vertical]:h-5" />

    <Button
      type="button"
      variant="ghost"
      size="icon"
      class="size-10 rounded-xs text-muted-foreground hover:text-foreground sm:size-9"
      :title="themeLabel"
      :aria-label="themeLabel"
      :aria-pressed="isDark"
      @click="toggle"
    >
      <Sun v-if="isDark" />
      <Moon v-else />
    </Button>
  </div>
</template>
