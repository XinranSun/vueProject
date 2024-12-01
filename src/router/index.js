import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
// 路由配置,数组对象
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index.vue"),
  },
];
// 创建路由实例对象
const router = createRouter({
  history: createWebHashHistory(),
  routes, // 键与之值相同，可以简写
});
export default router;
