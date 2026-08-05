<script setup lang="ts">
defineProps<{ title: string; sub?: string }>()
</script>

<template>
  <div class="break-avoid mt-8 mb-3.5 flex items-end justify-between gap-3 border-b-2 border-classic-accent pb-2">
    <h2 class="m-0 font-classic-sans text-[18px] font-bold leading-none text-classic-ink">{{ title }}</h2>
    <span v-if="sub" class="hidden text-[11px] text-classic-ink-faint sm:inline">
      {{ sub }}
    </span>
  </div>
</template>
