import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/',
    name: 'root',
    redirect: '/index',
    hidden: true
  },
  {
    path: '/index',
    name: 'index',
    component: Layout,
    hidden: false,
    meta: {
      title: '控制面板',
      icon: 'index',
      affix: true
    },
    children: [
      {
        path: '',
        component: () => import('@/views/index'),
        meta: {
          title: '首页'
        }
      }
    ]
  }
]

export const asyncRoutes = [
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
export default router
