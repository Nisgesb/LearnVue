<template>
  <div class="tabbar-item" @click="barItemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabbarItem',
  data() {
    return {
      
    }
  },
  props: {
    path: String,
    activeColor: {
      tpye: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    barItemClick() {
      this.$router.replace(this.path)
    }
  },
}
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    margin-top: 5px;
    font-weight: bold;
  }

  .active{
    color: red;
  }
</style>