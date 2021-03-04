<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import Navigation from './components/navigation/navigation.vue'
import mainTabbar from './components/TabBar/mainTabbar.vue'


export default {
  components: { mainTabbar, Navigation },
  name: 'App'
}
</script>

<style scoped>

</style>
