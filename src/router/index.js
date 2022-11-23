import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/user";
//This way of import the components is better to reduce the core file of the bundle and improve performance
const Home = () => import("@/views/Home.vue");
const About = () => import("@/views/About.vue");
const Manage = () => import("@/views/Manage.vue");
const Song = () => import("@/views/Song.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "/about",
    path: "/about",
    component: About,
  },
  {
    name: "Manage",
    //Other solution for the redirect
    // alias: "/manage",
    path: "/manage-music",
    component: Manage,
    //3 options, in each route, here or in the component.
    // beforeEnter: (to, from, next) => {
    //   next();
    // },
    meta: {
      requiresAuth: true,
    },
  },
  // {
  //   path: "/manage",
  //   redirect: { name: "Manage" },
  // },
  { name: "song", path: "/song/:id", component: Song },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

//3 options, in each route, here or in the component.
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
