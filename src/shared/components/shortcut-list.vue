<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { X } from '@lucide/vue'
import { commandGroups, commands } from '../commands/commands'
import { isCommandAvailable } from '../commands/use-commands'
import { cn } from '../lib/utils'
import { Button } from '../ui/button'
import CommandKeys from './command-keys.vue'

const open = defineModel<boolean>('open', { required: true })

/**
 * 用浏览器自带的 <dialog>：模态和焦点圈在里面由浏览器做，
 * 不为一张清单把整套弹层库和 Vue 的 Teleport、Transition 带进首屏。
 * Esc 自己接：浏览器只认真实按键触发的 cancel，代码派发的按键（自动化、测试）关不掉它。
 */
const dialog = ref<HTMLDialogElement>()

watch(open, (value) => {
  if (value && !dialog.value!.open) dialog.value!.showModal()
  if (!value && dialog.value!.open) dialog.value!.close()
})

/** 点在内容框外面（落在 dialog 自身的背景上）就关 */
function closeOnBackdrop(event: MouseEvent) {
  if (event.target === dialog.value) open.value = false
}

const groups = computed(() =>
  commandGroups.map((group) => ({ group, items: commands.filter((c) => c.group === group) }))
)
</script>

<template>
  <dialog
    ref="dialog"
    data-slot="shortcut-list"
    aria-labelledby="shortcut-list-title"
    class="m-auto w-[min(640px,calc(100vw-2rem))] rounded-xl border border-border bg-popover p-0 text-popover-foreground opacity-0 shadow-lg transition-opacity duration-150 backdrop:bg-black/20 open:opacity-100 starting:open:opacity-0"
    @close="open = false"
    @keydown.esc.prevent="open = false"
    @click="closeOnBackdrop"
  >
    <div class="flex items-center justify-between border-b border-border py-2 pr-2 pl-5">
      <h2 id="shortcut-list-title" class="text-base font-semibold">快捷键</h2>
      <Button variant="ghost" size="icon" class="text-muted-foreground" aria-label="关闭" @click="open = false">
        <X />
      </Button>
    </div>
    <div class="grid gap-6 px-5 py-4 sm:grid-cols-2">
      <section v-for="{ group, items } in groups" :key="group" class="flex flex-col gap-1">
        <h3 class="text-muted-foreground mb-1 text-xs font-medium">{{ group }}</h3>
        <div
          v-for="command in items"
          :key="command.id"
          data-slot="shortcut-row"
          :data-available="isCommandAvailable(command.id)"
          :class="
            cn(
              'flex h-8 items-center justify-between gap-3 text-sm',
              !isCommandAvailable(command.id) && 'text-muted-foreground opacity-50'
            )
          "
        >
          <span>{{ command.label }}</span>
          <CommandKeys :id="command.id" />
        </div>
      </section>
    </div>
  </dialog>
</template>
