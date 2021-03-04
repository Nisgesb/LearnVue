<template>
  <div id="app">
    <button @click="test()">test1</button>
    <button @click="testJson()">testJson</button>
  </div>
</template>

<script>

import {request, jsonTest} from './network/request'

export default {
  name: 'App',
  data() {
    return {
      requested: null
    }
  },
  methods: {
    // test() {
    //   request({
    //     url: "/home/multidata"
    //   }).then(res => {
    //     console.log(res);
    //   }).then(err => {
    //     console.log(err);
    //   })
    // },
    testJson() {
      jsonTest({
        url: '../static/json.json'
      }).then(res => {
        console.log(res);
      })
    }
  },
}
</script>

<style>

</style>
