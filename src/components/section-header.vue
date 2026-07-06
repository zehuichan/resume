<script setup lang="ts">
defineProps<{ index: string; title: string; sub?: string }>()
</script>

<template>
  <div class="break-avoid mt-8 mb-3.5 grid grid-cols-[auto_1fr] items-end gap-x-3 gap-y-2 border-b border-line pb-2">
    <span class="font-mono text-[10.5px] font-bold leading-none text-accent">{{ index }}</span>
    <div class="flex min-w-0 items-end justify-between gap-3">
      <h2 class="m-0 font-sans text-[18px] font-bold leading-none tracking-[-0.02em] text-ink">{{ title }}</h2>
      <span v-if="sub" class="hidden font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint sm:inline">
        {{ sub }}
      </span>
    </div>
  </div>
</template>
