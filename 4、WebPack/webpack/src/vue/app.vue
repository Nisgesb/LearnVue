<template>
  <div>
    <h1 class="title">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "我是app",
    }
  },
}
</script>

<style>
  .title{
    color: red;
  }
</style>