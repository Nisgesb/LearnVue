<template>
 <div>
   <one></one>
   <two></two>
 </div>
</template>

<script>
import one from "@/components/one.vue"
import Two from './components/two.vue'
export default {
  components: { 
    one,
    Two 
  },
  name: 'App'
}
</script>

<style>

</style>
