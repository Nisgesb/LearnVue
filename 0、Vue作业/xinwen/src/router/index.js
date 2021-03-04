import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../components/view/home/home.vue')
const profile = () => import('../components/view/profile/profile.vue')
const news = () => import('../components/view/home/news.vue')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
