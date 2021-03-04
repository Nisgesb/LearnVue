<template>
  <div>
    <h2>{{msg}}</h2>
    <button class="btn">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: '我是组件app',
    }
  },
}
</script>

<style>
.btn{
  width: 100px;
  height: 100px;
}
</style>