<template>
  <div>
    <p>{{$store.getters.squareCount}}</p>
    <p>{{$store.getters.ageOlderThen18}}</p>
    <p>{{$store.getters.ageOlderThen(1)}}</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>