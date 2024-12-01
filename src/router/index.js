import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// 路由配置,数组对象
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
];
// 创建路由实例对象
const router = createRouter({
  history: createWebHistory(),
  routes, // 键与之值相同，可以简写
});
export default router;
