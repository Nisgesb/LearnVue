<template>
  <div>
    <h2>我是用户界面</h2>
    <p>欢迎您，{{$route.params.userName}}</p>
  </div>
</template>

<script>
export default {
  name: "user",
  computed:{
    userName() {
      // 这个对应的额是index.js上配置的routes 和 path 上的 /: 后面的内容
      return this.$route.params.userName
    }
  }
}
</script>

<style>

</style>