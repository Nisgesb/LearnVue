import less from './css/less.less'
import css from './css/css.css'
import Vue from 'vue'
import app from './vue/app.vue'

new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    app
  }
})