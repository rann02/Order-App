import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import OrderHistory from "../pages/OrderHistory.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    // {
    //   path: "/add-order",
    //   name: "addCustomer",
    //   component: <div>HELOO</div>,
    // },
    {
      path: "/orders",
      name: "order",
      component: OrderHistory,
    },
  ],
});

export default router;
