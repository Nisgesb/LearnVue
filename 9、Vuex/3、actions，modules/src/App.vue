<template>
  <div id="app">
    <p>{{$store.state.count}}</p>
    <button @click="updateCount(5)">+5</button>
    <button @click="getdataCount2">getdataCount2</button>
    <button @click="getModules">getModules</button>
    <span>--------------------------------------</span>
    <!-- mudules 上的数据 -->
    <p>{{$store.state.a.count}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    updateCount(count) {
      this.$store.dispatch("aUpdataCount", count) 
    },
    getdataCount2() {
      this.$store.commit("getdataCount2")
    },
    getModules() {
      this.$store.dispatch("getModules")
    }
  },
}
</script>

<style>

</style>
