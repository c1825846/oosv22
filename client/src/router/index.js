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
    component: () => import('@/views/Admin'),
    children: [
      {
        path: 'categories',
        component: () => import('@/views/AdminCategories'),
      },
      {
        path: 'orders',
        component: () => import('@/views/AdminOrders'),
      },
      {
        path: 'calls',
        component: () => import('@/views/AdminCalls'),
      },
      {
        path: 'items',
        component: () => import('@/views/AdminItems'),
      },
      {
        path: 'detail/:id?',
        component: () => import('@/views/AdminItemDetail'),
      },
      {
        path: 'login',
        component: () => import('@/views/AdminLogin'),
      },
    ]
  },
  {
    path: '/orderCall',
    component: () => import('@/views/OrderCall')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
