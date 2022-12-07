import { createRouter, createWebHistory } from "vue-router";
import CoinsHome from "../views/CoinsHome.vue";
const routes = [
  {
    path: "/",
    name: "CoinsHome",
    component: CoinsHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
