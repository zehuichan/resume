<template>
  <!--navbar-->
  <!--navbar-before-->
  <!--navbar-after-->
  <!--sidebar-->
  <!--sidebar-top-->
  <!--sidebar-bottom-->
  <!--page-->
  <!--page-top-->
  <!--page-bottom-->
  <Layout>
    <template #navbar-before>
      <HtmlToPdf/>
    </template>
  </Layout>
</template>

<script setup>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<style lang="css">

</style>