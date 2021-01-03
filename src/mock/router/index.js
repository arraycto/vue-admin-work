import { baseAddress } from '@/api/url'
import Mock from 'mockjs'
import { baseData } from '../base'

export const adminRoutes = [
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
  }
]
Mock.mock(RegExp(baseAddress + '/getMenu' + '.*'), function () {
  baseData.data = adminRoutes
  return Mock.mock(baseData)
})
