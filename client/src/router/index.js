import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from "@/views/Catalog";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Catalog
  },
  {
    path: '/detail/:id',
    component: () => import('@/views/Detail')
  },
  {
    path: '/about',
    component: () => import('@/views/About')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart')
  },
  {
    path: '/admin',
    component: () => import('@/views/Admin')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
