<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + userName" tag="button">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: '张三', age: 18}}" tag="button">profile</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userName: "张三"
    }
  },
}
</script>

<style>
/* .router-link-active{
  
} */
</style>
