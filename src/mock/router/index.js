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
      }
    ]
  }
]
Mock.mock(RegExp(baseAddress + '/getMenu' + '.*'), function () {
  baseData.data = adminRoutes
  return Mock.mock(baseData)
})
