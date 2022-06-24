<template>
  <div class="doc-simulator" :style="bodyStyle">
    <iframe :src="src" frameborder="0" />
  </div>
</template>

<script>
export default {
  name: 'DocSimulator',
  props: {
    src: String,
    bodyStyle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.doc-simulator {
  box-sizing: border-box;
  width: 360px;
  min-width: 360px;
  overflow: hidden;
  background: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .19);

  iframe {
    display: block;
    width: 100%;
  }
}
</style>