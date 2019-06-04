import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'principal-layout',
    plans: [],
    type_class: []
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    },
    SET_PLANS (state, newPlan) {
      state.plans = newPlan
    },
    SET_TYPE_CLASS (state, newType_class) {
      state.type_class = newType_class
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
