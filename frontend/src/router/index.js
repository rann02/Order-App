import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import OrderHistory from "../pages/OrderHistory.vue";
import AddOrder from "../pages/AddOrder.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/create-order",
      name: "createOrder",
      component: AddOrder,
    },
    {
      path: "/orders",
      name: "order",
      component: OrderHistory,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name !== "login") {
    next("/");
  } else if (localStorage.access_token && to.name === "login") {
    next("/create-order");
  } else {
    next();
  }
});

export default router;
