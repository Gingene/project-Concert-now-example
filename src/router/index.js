import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SilverfungiView from "../views/SilverfungiView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/silverfungi",
      name: "silverfungi",
      component: SilverfungiView,
    },
    {
      path: "/concerts",
      name: "concerts",
      component: () => import("../views/front/ConcertsView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      redirect: "/",
    },
  ],
});

export default router;
