import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PurchaseView from "@/views/PurchaseView.vue";
import MyView from "@/views/MyView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/purchase",
    name: "purchase",
    component: PurchaseView,
  },
  {
    path: "/my",
    name: "my",
    component: MyView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
