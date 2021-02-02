import Mock, { Random } from 'mockjs'
import { baseData } from '../base'

Mock.mock(RegExp('http://localhost:8080/getCardList'), function ({ body }) {
  const { pageSize = 10 } = JSON.parse(body)
  return Mock.mock({
    ...baseData,
    totalSize: 30,
    [`data|${pageSize}`]: [
      {
        'id|+1': 1,
        'image': Random.image('300x600', '#50B347', '#FFF', 'vue-admin-work'),
        'description': Random.csentence(50, 200),
        'price|1000-9999': 100
      }
    ]
  })
})
