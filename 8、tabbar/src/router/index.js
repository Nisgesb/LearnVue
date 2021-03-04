import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/view/home/home.vue')
const category = () => import('../components/view/category/category.vue')
const cart = () => import('../components/view/cart/cart.vue')
const profile = () => import('../components/view/profile/profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'home'
    },

    {
      path: '/home',
      component: home
    },

    {
      path: '/category',
      component: category
    },

    {
      path: '/cart',
      component: cart
    },

    {
      path: '/profile',
      component: profile
    },
    
  ],
  mode: 'history'
})
