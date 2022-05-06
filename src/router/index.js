import { createRouter, createWebHistory } from "vue-router";
import orderView from "../views/orderView.vue";
import purchaseView from "../views/purchaseView.vue";
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
  ],
});

export default router;
