<template>
  <tabbar>

    <tabbar-item path="home">
      <img slot="item-icon" src="../../assets/img/home.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>

    <tabbar-item path="profile">
      <img slot="item-icon" src="../../assets/img/account.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/account-avtive.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>

  </tabbar>
</template>

<script>
import tabbar from './tabbar.vue'
import tabbarItem from './tabbarItem.vue'

export default {
  components: {
    tabbar,
    tabbarItem
  },

}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>