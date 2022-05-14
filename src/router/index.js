import { createRouter, createWebHistory } from "vue-router";
import orderView from "../views/orderView.vue";
import purchaseView from "../views/purchaseView.vue";
import myView from "../views/myView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: orderView,
    },
    {
      path: "/purchase",
      name: "purchase",
      component: purchaseView,
    },
    {
      path: "/my",
      name: "my",
      component: myView,
    }
  ],
});

export default router;
