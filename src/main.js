import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios"; // 安装axios后引入
import vuex from "vuex";
import vueQr from "vue-qr";

Vue.prototype.$axios = axios; // 将axios挂载到Vue的原型上，这样所有组件都可以使用this.$axios访问axios
Vue.use(vuex);
Vue.use(vueQr);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
