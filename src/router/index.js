import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

// const constantRoutes = [
//   {
//     path: '/',
//     component: Layout
//   }
// ]

export const routes = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/personal',
    component: Layout,
    meta: {
      title: '个人中心'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/personal')
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    meta: {
      title: '系统管理'
    }
  }
]

import path from 'path'
console.log(path.resolve('/personal', '/index'))

const router = new VueRouter({
  routes
})
export default router
