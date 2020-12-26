import Mock from 'mockjs'
import { baseData } from '../base'

export const adminRoutes = [
  {
    menuUrl: '/table',
    menuName: '常用组件',
    children: [
      {
        menuUrl: '/table/index',
        menuName: '表格操作'
      },
      {
        menuUrl: '/table/table-search',
        menuName: '表格操作',
        hidden: false
      }
    ]
  }
]
Mock.mock(RegExp('http://localhost:8080/getMenu' + '.*'), function () {
  baseData.data = adminRoutes
  return Mock.mock(baseData)
})
