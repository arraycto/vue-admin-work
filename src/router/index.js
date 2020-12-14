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
    redirect: '/index',
    hidden: true
  },
  {
    path: '/index',
    component: Layout,
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
  },
  {
    path: '/normal',
    component: Layout,
    meta: {
      title: '常用功能'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/table'),
        meta: {
          title: '表格操作'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
export default router
