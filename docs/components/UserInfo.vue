<template>
  <div class="user-info">
    <div class="avatar">
      <img src="/avatar.png" alt="">
    </div>
    <div class="user-info__content">
      <div class="name">陈泽辉</div>
      <div class="desc">高级前端-广州兴工</div>
      <div class="desc">{{ new Date().getFullYear() - 2015 }}年前端 | 本科 | 1991-05</div>
    </div>
    <div class="action">18-22k</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserInfo'
})
</script>

<style lang="scss">
.user-info {
  display: flex;

  .avatar {
    position: relative;
    flex: none;
    width: 80px;
    height: 80px;
    margin-right: 1.6rem;
  }

  .user-info__content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .action {
    color: var(--vp-c-brand);
    font-size: 16px;
    font-weight: bold;
  }

  .name {
    font-size: 22px;
    font-weight: bold;
  }

  .desc {
    font-size: 14px;
  }
}
</style>
