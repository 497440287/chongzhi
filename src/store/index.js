import { createStore } from 'vuex'

const requireModules = require.context('./modules', false, /\.js$/)
const modules = {}
requireModules.keys().forEach(key => {
  if (requireModules(key).name) {
    modules[requireModules(key).name] = requireModules(key).default
  }
})

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ...modules
  }
})
