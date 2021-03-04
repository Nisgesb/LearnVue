import VueRouter from "vue-router"
import Vue from 'vue'

// import home from "../components/home.vue"
// import about from "../components/about.vue"
// import user from "../components/user.vue"

// 路由懒加载
const home = () => import ('../components/home.vue')
const homeNews = () => import('../components/homeNews.vue')
const homeMessage = () => import('../components/homeMessage.vue')

const about = () => import ('../components/about.vue') 
const user = () => import ('../components/user.vue') 
const profile = () => import('../components/profile.vue')


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home',
      
    },
    {
      path: '/home',
      component: home,
      children: [
        {
          path: 'news',
          component: homeNews
        },
        {
          path: 'message',
          component: homeMessage
        }
      ],
      meta: {
        title: '首页'
      },
      
    },
    {
      path: '/about',
      component: about,
      beforeEnter: (to, from, next) => {
        console.log('我是 about 路由里面的钩子函数')
        next()
      },
      meta: {
        title: '关于'
      },
    },
    {
      path: "/user/:userName",
      component: user,
      meta: {
        title: '用户'
      }
    },
    {
      path: "/profile",
      component: profile,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history',
  
  // linkActiveClass: 'ActiveBtn'
})

// router.afterEach((to, from) => {
//   console.log(from);
//   document.title = to.matched[0].meta.title
// })

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router