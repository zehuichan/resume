<script setup lang="ts">
import type { CopyField } from '@/shared/lib/online-resume-copy'
import { copyLabels, type CopyStatus } from '@/shared/composables/use-copy-feedback'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'

defineProps<{
  title: string
  copyKey: string
  field: CopyField
  status: CopyStatus
  active: boolean
  /** 与同一行的另一段等高 */
  stretch?: boolean
}>()

defineEmits<{ copy: [] }>()
</script>

<template>
  <div class="flex min-w-0 flex-col gap-2">
    <div class="flex items-center justify-between gap-3">
      <h3 class="text-sm font-semibold">{{ title }}</h3>
      <Button
        variant="outline"
        size="xs"
        :data-copy-key="copyKey"
        :class="status === 'failed' && 'text-bad hover:text-bad'"
        @click="$emit('copy')"
      >
        {{ copyLabels[status] }}
      </Button>
    </div>
    <pre
      :data-copy-text="copyKey"
      :class="
        cn(
          'text-foreground rounded-md border border-border px-4 py-3 font-sans text-sm leading-relaxed break-words whitespace-pre-wrap transition-colors duration-150',
          active ? 'bg-accent' : 'bg-background',
          stretch && 'h-full'
        )
      "
      >{{ field.text }}</pre
    >
  </div>
</template>
