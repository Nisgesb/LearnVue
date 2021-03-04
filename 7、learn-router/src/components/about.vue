<template>
  <div>
    <h3 class="title" key="abouttitle">{{msg}}</h3>
  </div>
  
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      msg: '我是about组件'
    }
  },
 
}
</script>

<style scoped>
.title{
  color: brown;
}
</style>