import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fetchRouter: [],
    allRouter: [],
    fetched: false
  },
  mutations: {
    setState (state, payload) {
      const { key, value } = payload
      state[key] = value
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [persistedState({
    paths: ['fetchRouter', 'allRouter']
  })]
})
