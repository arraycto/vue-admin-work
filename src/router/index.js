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
        component: () => import('@/views/personal'),
        meta: {
          title: '我的信息'
        }
      },
      {
        path: 'mini',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置'
        }
      }
    ]
  }
  // {
  //   path: '/system',
  //   component: Layout,
  //   meta: {
  //     title: '系统管理'
  //   }
  // }
]

const router = new VueRouter({
  routes
})
export default router
