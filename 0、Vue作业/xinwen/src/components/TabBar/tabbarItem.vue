<template>
    <div class="tabbar-item" @click="tabbarItemClick()">
      <div v-if="!isActive"> <slot name="item-icon"></slot> </div>
      <div v-else> <slot name="item-icon-active"></slot> </div>
      <div :style="ActiveStyle"> <slot name="item-text"></slot> </div>
    </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },

 computed: {
   isActive() {
     return this.$route.path.indexOf(this.path) != -1
   },
   ActiveStyle() {
     return this.isActive? {color: this.activeColor} : {}
   }
 },
 methods: {
   tabbarItemClick(){
    this.$router.replace(this.path)
   }
 },
}
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    /* margin-left: 65px; */
    margin-top: 9px;
    font-weight: bold;
  }
</style>