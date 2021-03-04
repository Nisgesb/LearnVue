<template>
  <div>
    <p>{{$store.state.count}}</p>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
  </div>
</template>

<script>
export default {
  methods: {
    addition(){
      this.$store.commit('increment')
    },
    // 普通传递
    // addCount(count){
    //   this.$store.commit('addCount', count)
    // },
    
    // 特殊传递 （payload）
    addCount(count) {
      this.$store.commit({
        type: "addCount",
        count: count
      })
    },
    subtraction(){
      this.$store.commit('decrement')
    }
  },
}
</script>

<style>

</style>