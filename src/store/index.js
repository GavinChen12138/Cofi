import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //添加是否登陆的状态
  state: {
    count: 0,
    isLogin: false,
  },
  getters: {},
  mutations: {
    // 定义mutations
    changeLoginStatus(state, payload) {
      state.isLogin = payload;
    },
  },
  actions: {},
  modules: {},
});
