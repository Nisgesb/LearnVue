import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modulesA = {
  state: {
    count: 0
  },
  actions: {
    getModules(context) {
      setTimeout(() => {
        console.log(context);
      }, 500);
    }
  },
  mutations: {
    getdataCount2(state) {
      console.log(state);
    }
  },
  getters: {

  }
}

const store = new Vuex.Store({
  state: {
    count: 100
  },
  actions: {
    aUpdataCount(context, count) {
      // 异步操作            必须通过actions
      setTimeout(() => {
        context.commit("updataCount", count)
      }, 1000);
    }
  },
  mutations: {
    updataCount(state, count) {
      state.count += count
    }
  },
  getters: {

  },
  modules: {
    a: modulesA
  }
})

export default store