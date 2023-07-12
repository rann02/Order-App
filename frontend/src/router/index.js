import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
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
    // {
    //   path: "/orders",
    //   name: "array",
    //   component: <div>Hollla</div>,
    // },
  ],
});

export default router;
