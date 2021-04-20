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
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/personal',
    name: 'personal',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'personalCenter',
        component: () => import('@/views/personal'),
        meta: {
          title: '个人中心'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'root',
    redirect: '/index/main',
    hidden: true
  },
  {
    path: '/index',
    name: 'index',
    component: Layout,
    hidden: false,
    meta: {
      title: 'Dashboard',
      icon: 'index'
    },
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/views/index'),
        meta: {
          title: '主控台',
          affix: true
        }
      },
      {
        path: 'workplace',
        name: 'workPlace',
        component: () => import('@/views/index/work-place'),
        meta: {
          title: '工作台'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404'),
    hidden: true
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
