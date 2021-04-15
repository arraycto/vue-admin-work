import { getMenuList } from '@/api/url'
import Mock from 'mockjs'
import { baseData } from '../base'

export const adminRoutes = [
  {
    menuUrl: '/authority',
    menuName: '系统管理',
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
    menuUrl: '/list',
    menuName: '列表页面',
    children: [
      {
        menuUrl: '/list/table',
        menuName: '表格操作'
      },
      {
        menuUrl: '/list/table-search',
        menuName: '表格搜索'
      },
      {
        menuUrl: '/list/grid-list',
        menuName: '卡片列表'
      }
    ]
  },
  {
    menuUrl: '/form',
    menuName: '表单页面',
    children: [
      {
        menuUrl: '/form/from',
        menuName: '表单操作'
      },
      {
        menuUrl: '/form/AdvanceFrom',
        menuName: '高级表单'
      },
      {
        menuUrl: '/form/StepForm',
        menuName: '分步表单'
      },
      {
        menuUrl: '/form/tip',
        menuName: '通知提示'
      }
    ]
  },
  {
    menuUrl: '/pages',
    menuName: '结果页面',
    children: [
      {
        menuUrl: '/pages/success',
        menuName: '成功页面'
      },
      {
        menuUrl: '/pages/fail',
        menuName: '失败页面'
      }
    ]
  },
  {
    menuUrl: '/exception',
    menuName: '异常页面',
    children: [
      {
        menuUrl: '/exception/404',
        menuName: '404'
      },
      {
        menuUrl: '/exception/403',
        menuName: '403'
      },
      {
        menuUrl: '/exception/500',
        menuName: '500'
      }
    ]
  },
  {
    menuUrl: '/editor',
    menuName: '编辑器',
    children: [
      {
        menuUrl: '/editor/richtext',
        menuName: '富文本'
      },
      {
        menuUrl: '/editor/markdown',
        menuName: 'markdown'
      }
    ]
  }
]
Mock.mock(RegExp(getMenuList), function () {
  baseData.data = adminRoutes
  return Mock.mock(baseData)
})
