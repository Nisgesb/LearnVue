import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 100,
    people: [
      {name: 'zs', age: 18},
      {name: 'yb', age: 16},
      {name: 'pq', age: 19}
    ]
  },
  getters: {
    squareCount(state) {
      return state.count * state.count 
    },
    ageOlderThen18(state) {
      return state.people.filter(s => s.age >= 18)
    },
    ageOlderThen(state) {
      return age => {
        return state.people.filter(s => s.age > age)
      }
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
