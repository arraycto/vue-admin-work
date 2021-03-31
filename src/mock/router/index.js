import { getMenuList } from '@/api/url'
import Mock from 'mockjs'
import { baseData } from '../base'

export const adminRoutes = [
  {
    menuUrl: '/authority',
    menuName: '权限管理',
    children: [
      {
        menuUrl: '/authority/department',
        menuName: '部门管理'
      },
      {
        menuUrl: '/authority/user',
        menuName: '用户管理'
      },
      {
        menuUrl: '/authority/role',
        menuName: '角色管理'
      },
      {
        menuUrl: '/authority/menu',
        menuName: '菜单管理'
      }
    ]
  },
  {
    menuUrl: '/normal',
    menuName: '常用组件',
    children: [
      {
        menuUrl: '/normal/table',
        menuName: '表格操作'
      },
      {
        menuUrl: '/normal/table-search',
        menuName: '表格搜索'
      },
      {
        menuUrl: '/normal/from',
        menuName: '表单操作'
      },
      {
        menuUrl: '/normal/tip',
        menuName: '通知提示'
      },
      {
        menuUrl: '/normal/grid-list',
        menuName: '卡片列表'
      },
      {
        menuUrl: '/normal/editor',
        menuName: '编辑器',
        children: [
          {
            menuUrl: '/normal/editor/richtext',
            menuName: '富文本'
          },
          {
            menuUrl: '/normal/editor/markdown',
            menuName: 'markdown'
          }
        ]
      }
    ]
  },
  {
    menuUrl: '/pages',
    menuName: '页面详情',
    children: [
      {
        menuUrl: '/pages/success',
        menuName: '成功页面'
      },
      {
        menuUrl: '/pages/fail',
        menuName: '失败页面'
      },
      {
        menuUrl: '/pages/404',
        menuName: '404'
      },
      {
        menuUrl: '/pages/403',
        menuName: '403'
      },
      {
        menuUrl: '/pages/500',
        menuName: '500'
      }
    ]
  }
]
Mock.mock(RegExp(getMenuList), function () {
  baseData.data = adminRoutes
  return Mock.mock(baseData)
})
