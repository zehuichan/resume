<script setup lang="ts">
import { computed } from 'vue'
import { commandById, type CommandId } from '../commands/commands'
import CommandKeys from './command-keys.vue'

const props = defineProps<{
  id: CommandId
  /** 盖过命令名的一句话，比如复制失败的原因 */
  note?: string
}>()

const label = computed(() => props.note ?? commandById(props.id).label)
</script>

<template>
  <!--
    纯 CSS 的悬停提示：工具条固定在右下角，提示一律向上、右对齐，不需要定位库。
    鼠标停 300ms 或键盘停到里面的按钮时淡入；hover 变体只在有鼠标的设备上生效，触屏不弹。
  -->
  <span class="group/tip relative inline-flex">
    <slot />
    <span
      role="tooltip"
      aria-hidden="true"
      data-slot="command-tooltip"
      class="pointer-events-none absolute right-0 bottom-full z-50 mb-2 flex items-center gap-2 rounded-md border border-border bg-popover px-2 py-1 text-xs whitespace-nowrap text-popover-foreground opacity-0 shadow-md transition-opacity duration-150 group-hover/tip:opacity-100 group-hover/tip:delay-300 group-has-[:focus-visible]/tip:opacity-100"
    >
      <span>{{ label }}</span>
      <CommandKeys :id="id" />
    </span>
  </span>
</template>
