import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import useUserStore from "@/store/modules/user";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    redirect: "h5",
    children: [
      {
        path: "h5",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: {
          title: "首页",
          isTabPage: true,
        },
      },
    ],
  },
];

const redirectRoutes: RouteRecordRaw[] = [{ path: "/:pathMatch(.*)*", redirect: "/" }];

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    ...redirectRoutes, // 重定向放在最后一项，不需要可去掉
  ],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

router.beforeEach(({ meta }, _, next) => {
  const userStore = useUserStore();
  if (meta.loginAuth && !userStore.isLogin) {
    next({ name: "Login" });
  } else {
    next();
  }
});

router.afterEach((to) => {
  const title = (to.meta && to.meta.title) || import.meta.env.VUE_APP_TITLE;
  document.title = title;
});

export default router;
