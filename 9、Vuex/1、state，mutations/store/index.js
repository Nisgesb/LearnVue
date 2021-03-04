import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 数据
    count: 100
  },
  mutations: { // 方法

    // 参数state 默认有的 执行的时候 自动传过来一个state参数
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },

    // 普通
    // addCount(state, count) {
    //   state.count += count
    // }

    // payload
    addCount(state, payload) {
      state.count += payload.count
    }
  },
  actions: { // 异步处理

  },
  getters: { // 计算属性
    
  },
  modules: {

  }
})

export default store