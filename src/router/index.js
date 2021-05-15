import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/Home')
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/Register"),
    meta: { title: "注册" },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/Login"),
    meta: { title: "登录" },
  },
  {
    path: "/post/create",
    name: "post-create",
    component: () => import("@/views/post/Create"),
    meta: { title: "xinxifabu",requireAuth: true },
  },
  {
    path: "/post/:id",
    name: "post-detail",
    component: () => import("@/views/post/Detail"),
    // meta: { title: "xinxifabu",requireAuth: true },
  },
]

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  routes
})

export default router
