import Vue from "vue"
import {sum} from './js/math'
import css from './css/css.css'
// import less from './css/less.less'
require('./css/less.less')
import app from "./vue/app.vue"

let name = '我是main';



new Vue({
  el: "#app",
  template: "<app></app>",
  components: {
    app
  }
  
})

console.log(sum(3,77));
