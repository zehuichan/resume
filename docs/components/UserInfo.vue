<template>
  <div class="user-info">
    <div class="avatar">
      <img src="/avatar.png" alt="">
    </div>
    <div class="user-info__content">
      <div class="name">陈泽辉</div>
      <div class="desc">高级前端-广州兴工科技有限公司</div>
      <div class="desc">
        {{ new Date().getFullYear() - 2015 }}年前端
        <divider />
        本科
      </div>
      <div class="desc">EMail: jasonchenzehui@gmail.com</div>
      <div class="desc">Github: https://github.com/zehuichan</div>
    </div>
    <div class="action">面议</div>
  </div>
</template>

<script setup>
import Divider from './Divider.vue'

defineOptions({
  name: 'UserInfo'
})
</script>

<style lang="scss">
.user-info {
  display: flex;

  .avatar {
    position: relative;
    flex: none;
    width: 100px;
    height: 100px;
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
    line-height: 1.8;
  }
}
</style>
