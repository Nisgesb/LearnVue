<template>
  <div>
    <h2 class="title" key="hometitle">{{msg}}</h2>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '我是home组件',
      path: '/home/news'
    }
  },

  // 当keep-alive的时候只会 create 一次 所以 用 activated 来代替 create 
  // 如果没有 keep-alive activated 不会调用
  activated() {
    // 等于这个 -> history.pushState 到data.path
    this.$router.push(this.path)
    console.log("activated");
  },
  beforeRouteLeave (to, from, next) {
    // console.log("leave");
    // console.log(this.$route.path);
    this.path = this.$route.path
    next()
  },
}
</script>

<style scoped>
.title{
  color: cadetblue
}
</style>