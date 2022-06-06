import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    // 定义mutations
    addCoffee(state, payload) {
      state.coffee += payload;
    },
  },
  actions: {},
  modules: {},
});
