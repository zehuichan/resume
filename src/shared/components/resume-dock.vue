<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter, type RouteLocationRaw } from 'vue-router'
import { Keyboard } from '@lucide/vue'
import type { CommandId } from '../commands/commands'
import { runCommand, useCommand, useShortcutListener } from '../commands/use-commands'
import { useCopyFeedback } from '../composables/use-copy-feedback'
import { useTheme } from '../composables/use-theme'
import { resolveResumeSource } from '../data/resume-sources'
import { buildResumeMarkdown } from '../lib/resume-markdown'
import { cn } from '../lib/utils'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import CommandTooltip from './command-tooltip.vue'
import ShortcutList from './shortcut-list.vue'

type ViewId = 'classic' | 'online'

interface ViewItem {
  id: ViewId
  label: string
  to: RouteLocationRaw
  command: CommandId
}

const views: ViewItem[] = [
  { id: 'classic', label: '简历', to: '/', command: 'go-resume' },
  { id: 'online', label: '线上版', to: '/online', command: 'go-online' }
]

const route = useRoute()
const router = useRouter()

const current = computed<ViewId>(() => (route.name === 'online' ? 'online' : 'classic'))

const shortcutsOpen = ref(false)

const markdown = useCopyFeedback()
const markdownStatus = computed(() => markdown.statusOf('markdown'))
const markdownLabel = computed(
  () => ({ idle: '复制为 Markdown', copied: '已复制', failed: '复制失败' })[markdownStatus.value]
)
const markdownNote = computed(() =>
  markdownStatus.value === 'failed' ? '浏览器没给剪贴板权限，换 Chrome 或 Edge 打开再试' : undefined
)

function copyMarkdown() {
  return markdown.copy('markdown', buildResumeMarkdown(resolveResumeSource().resume))
}

useCommand('go-resume', () => router.push('/'))
useCommand('go-online', () => router.push('/online'))
useCommand('copy-markdown', copyMarkdown)
useCommand('show-shortcuts', () => (shortcutsOpen.value = true))
useShortcutListener(() => shortcutsOpen.value)

const { sync } = useTheme()
onMounted(sync)
</script>

<template>
  <!-- 停靠在底部：线上版滚到顶部的卡片右上角正是复制按钮，顶部浮层会盖住它 -->
  <div
    data-slot="resume-dock"
    class="fixed inset-x-3 bottom-3 z-40 flex items-center gap-1 rounded-xl border border-border bg-card p-1 text-card-foreground shadow-sm print:hidden sm:inset-x-auto sm:right-5 sm:bottom-5"
  >
    <nav class="flex flex-1 items-center gap-1 sm:flex-none" aria-label="简历版本">
      <CommandTooltip v-for="view in views" :id="view.command" :key="view.id" class="flex-1 sm:flex-none">
        <Button
          as-child
          variant="ghost"
          :class="
            cn(
              'h-10 flex-1 px-3.5 sm:h-9 sm:flex-none',
              current === view.id
                ? 'bg-selected text-selected-foreground hover:bg-selected hover:text-selected-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )
          "
        >
          <RouterLink :to="view.to" :aria-current="current === view.id ? 'page' : undefined">
            {{ view.label }}
          </RouterLink>
        </Button>
      </CommandTooltip>
    </nav>

    <Separator orientation="vertical" class="mx-1 data-[orientation=vertical]:h-5" />

    <CommandTooltip id="copy-markdown" :note="markdownNote">
      <Button
        type="button"
        variant="ghost"
        data-slot="copy-markdown"
        :class="
          cn(
            'h-10 px-3.5 sm:h-9',
            markdownStatus === 'failed' ? 'text-bad hover:text-bad' : 'text-muted-foreground hover:text-foreground'
          )
        "
        @click="copyMarkdown"
      >
        {{ markdownLabel }}
        <span v-if="markdownNote" class="sr-only">：{{ markdownNote }}</span>
      </Button>
    </CommandTooltip>

    <CommandTooltip id="show-shortcuts">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        class="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
        aria-label="全部快捷键"
        @click="runCommand('show-shortcuts')"
      >
        <Keyboard />
      </Button>
    </CommandTooltip>

    <ShortcutList v-model:open="shortcutsOpen" />
  </div>
</template>
