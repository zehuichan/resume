<template>
  <div class="divider divider-vertical"></div>
</template>

<script setup>

</script>

<style lang="scss">
.divider {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  border-block-start: 1px solid var(--border-color);
}

.divider-vertical {
  position: relative;
  top: -0.06em;
  display: inline-block;
  height: 0.9em;
  margin: 0 0.6em;
  vertical-align: middle;
  border-top: 0;
  border-inline-start: 1px solid var(--border-color);
}
</style>
