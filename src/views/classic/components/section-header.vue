<script setup lang="ts">
defineProps<{
  title: string
  sub?: string
  /** 这一节的固定链接 `#/#<anchor>`，和所在 section 的 id 一致 */
  anchor: string
}>()
</script>

<template>
  <div class="break-avoid mt-8 mb-3.5 flex items-end justify-between gap-3 border-b-2 border-classic-rule pb-2">
    <h2 class="group m-0 font-classic-sans text-[18px] font-bold leading-none text-classic-ink">
      <a :href="`#/#${anchor}`" class="no-underline">
        {{ title }}
        <span
          class="ml-1.5 font-classic-mono text-[13px] font-medium text-classic-ink-faint opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 print:hidden"
          aria-hidden="true"
          >#</span
        >
      </a>
    </h2>
    <span v-if="sub" class="hidden text-[11px] text-classic-ink-faint sm:inline">
      {{ sub }}
    </span>
  </div>
</template>
