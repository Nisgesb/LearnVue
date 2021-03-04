<template>
  <div>
    <tabbar>
      <tabbar-item path="home" >
        <img slot="item-icon" src="@/assets/img/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets//img/home-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>

      <tabbar-item path="category">
        <img slot="item-icon" src="@/assets/img/all-fill.svg" alt="">
        <img slot="item-icon-active" src="@/assets//img/all-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>

      <tabbar-item path="cart">
        <img slot="item-icon" src="@/assets/img/cart- full.svg" alt="">
        <img slot="item-icon-active" src="@/assets//img/cart- active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>

      <tabbar-item path="profile">
        <img slot="item-icon" src="@/assets/img/account.svg" alt="">
        <img slot="item-icon-active" src="@/assets//img/account-avtive.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar/tabbar.vue'
import tabbarItem from '@/components/tabbar/tabbarItem.vue'
export default {
  name: 'mainTabBar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>

</style>