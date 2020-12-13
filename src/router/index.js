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
          title: '我的信息',
          affix: true
        }
      },
      {
        path: 'mini',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置0'
        }
      },
      {
        path: 'mini2',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置1'
        }
      },
      {
        path: 'mini3',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置2'
        }
      },
      {
        path: 'mini4',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置3'
        }
      },
      {
        path: 'mini5',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置4'
        }
      },
      {
        path: 'mini6',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置5'
        }
      },
      {
        path: 'mini8',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置7'
        }
      },
      {
        path: 'mini9',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置8'
        }
      },
      {
        path: 'mini10',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置9'
        }
      },
      {
        path: 'mini11',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置10'
        }
      },
      {
        path: 'mini12',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置11'
        }
      },
      {
        path: 'mini13',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置12'
        }
      },
      {
        path: 'mini14',
        component: () => import('@/views/system'),
        meta: {
          title: '系统设置13'
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
