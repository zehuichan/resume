<script setup lang="ts">
defineProps<{ index: string; zh: string; en: string }>()
</script>

<template>
  <div class="break-avoid flex items-baseline gap-3 mt-12 mb-6 first:mt-0">
    <span class="font-mono text-[13px] font-semibold text-seal tabular-nums">{{ index }}</span>
    <h2 class="font-display text-[23px] font-semibold text-ink leading-none m-0">{{ zh }}</h2>
    <span class="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint translate-y-[-1px]">
      {{ en }}
    </span>
    <span class="flex-1 h-px bg-line" />
  </div>
</template>
