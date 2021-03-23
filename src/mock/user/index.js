import { updateUserInfo } from '@/api/url'
import Mock from 'mockjs'
import { baseData } from '../base'
import { adminRoutes } from '../router'

Mock.mock(RegExp('http://localhost:8080/login'), function (options) {
  const username = JSON.parse(options.body).username
  if (username === 'admin') {
    baseData.data = adminRoutes
  }
  return Mock.mock(baseData)
})

Mock.mock(RegExp(updateUserInfo), function (options) {
  console.log(options)
  return Mock.mock({ ...baseData, msg: '更新信息成功' })
})
