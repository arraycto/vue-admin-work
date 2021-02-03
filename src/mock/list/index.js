import Mock, { Random } from 'mockjs'
import { baseData } from '../base'
import { getCardList, getCommentList } from '@/api/url.js'

const totalSize = 30

function computePageSize(totalSize, page, pageSize) {
  return Math.abs(totalSize - pageSize * page >= 0 ? pageSize : totalSize - pageSize * page)
}

Mock.mock(RegExp(getCardList), function ({ body }) {
  const { page, pageSize = 10 } = JSON.parse(body)
  const size = computePageSize(totalSize, page, pageSize)
  return Mock.mock({
    ...baseData,
    totalSize,
    [`data|${size}`]: [
      {
        'id|+1': 1,
        'image': Random.image('300x600', '#50B347', '#FFF', 'vue-admin-work'),
        'description': function () {
          return Random.csentence(50, 200)
        },
        'price|1000-9999.2': 100
      }
    ]
  })
})

Mock.mock(RegExp(getCommentList), function ({ body }) {
  const { page, pageSize = 10 } = JSON.parse(body)
  const size = computePageSize(totalSize, page, pageSize)
  return Mock.mock({
    ...baseData,
    totalSize,
    [`data|${size}`]: [
      {
        'id|+1': 1,
        'avatar': Random.image('100x100', '#50B347', '#FFF', 'vue-admin-work'),
        'nickName': function () {
          return Random.cname()
        },
        content: function () {
          return Random.csentence(50, 200)
        },
        'rate|1-5': 5,
        'images|1-3': [Random.image('100x100', '#50B347', '#FFF', 'vue-admin-work')],
        'status|0-1': 1 // 对外展示状态 0 不展示，1 展示
      }
    ]
  })
})
