<script setup lang="ts">
function printResume(): void {
  window.print()
}
</script>

<template>
  <aside class="ai-toolbar ai-no-print" aria-label="简历操作">
    <span class="ai-toolbar__status">
      <span class="ai-toolbar__status-dot" aria-hidden="true"></span>
      CONTROL PLANE ONLINE
    </span>
    <button class="ai-toolbar__button" type="button" aria-label="打印 AI 简历" @click="printResume">
      <span class="ai-toolbar__button-icon" aria-hidden="true">⌁</span>
      PRINT / PDF
    </button>
  </aside>
</template>
