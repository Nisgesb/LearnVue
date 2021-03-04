<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
}
</script>

<style scoped>
  .tabbar{
    display: flex;
    text-align: center;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    height: 80px;
    background-color: rgb(250, 250, 250);
    font-size: 12px;
    /* vertical-align: middle; */
    box-shadow: 0 -1px 2px rgba(59, 59, 59, 0.123);
  }
</style>