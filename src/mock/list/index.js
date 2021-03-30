import Mock, { Random } from 'mockjs'
import { baseData } from '../base'
import { getDepartmentList, getTableList, getCardList, getCommentList, addDepartment, getRoleList } from '@/api/url.js'

const totalSize = 30

function computePageSize(totalSize, page, pageSize) {
  return Math.abs(totalSize - pageSize * page >= 0 ? pageSize : totalSize - pageSize * page)
}

Mock.mock(RegExp(getDepartmentList), function ({ body }) {
  return Mock.mock({
    ...baseData,
    totalSize,
    'data': [
      {
        'id': 1,
        'name': '总裁办',
        'depCode': 'dp_code_manager', // 0男 1女
        'order|+1': 1, // 0不是 1是
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss'),
        'status': 1 // 0 禁用 1正常
      },
      {
        'id': 2,
        'name': '市场部',
        'depCode': 'dp_code_marketing', // 0男 1女
        'order|+1': 1, // 0不是 1是
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss'),
        'status': 1, // 0 禁用 1正常,
        children: [
          {
            'id': 3,
            'name': '市场一部',
            'depCode': 'dp_code_marketing_1', // 0男 1女
            'order|+1': 1, // 0不是 1是
            'createTime': Random.now('yyyy-MM-dd HH:mm:ss'),
            'status': 1 // 0 禁用 1正常
          },
          {
            'id': 4,
            'name': '市场二部',
            'depCode': 'dp_code_marketing_2', // 0男 1女
            'order|+1': 1, // 0不是 1是
            'createTime': Random.now('yyyy-MM-dd HH:mm:ss'),
            'status': 1 // 0 禁用 1正常
          }
        ]
      },
      {
        'id': 5,
        'name': '技术部',
        'depCode': 'dp_code_technology', // 0男 1女
        'order|+1': 1, // 0不是 1是
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss'),
        'status': 1 // 0 禁用 1正常
      },
      {
        'id': 6,
        'name': '销售部',
        'depCode': 'dp_code_sale', // 0男 1女
        'order|+1': 1, // 0不是 1是
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss'),
        'status': 1 // 0 禁用 1正常
      }
    ]
  })
})

Mock.mock(RegExp(getRoleList), function () {
  return Mock.mock({
    ...baseData,
    'data': [
      {
        'id': 1,
        'name': '管理员',
        'roleCode': 'ROLE_manager',
        'description': '管理员',
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss')
      },
      {
        'id': 1,
        'name': '教研员',
        'roleCode': 'ROLE_teacher',
        'description': '教研员',
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss')
      },
      {
        'id': 1,
        'name': '市场运营',
        'roleCode': 'ROLE_market',
        'description': '市场运营',
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss')
      },
      {
        'id': 1,
        'name': '技术开发',
        'roleCode': 'ROLE_dev',
        'description': '技术开发',
        'createTime': Random.now('yyyy-MM-dd HH:mm:ss')
      }
    ]
  })
})

Mock.mock(RegExp(addDepartment), function () {
  return Mock.mock({ ...baseData, data: '' })
})

Mock.mock(RegExp(getTableList), function ({ body }) {
  const { page, pageSize = 10 } = JSON.parse(body)
  const size = computePageSize(totalSize, page, pageSize)
  return Mock.mock({
    ...baseData,
    totalSize,
    [`data|${size}`]: [
      {
        'id|+1': 1,
        'nickName': function () {
          return Random.name()
        },
        'avatar': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201411%2F29%2F20141129194517_5Z2Lu.png&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615013287&t=832537ff575fa5c5bb2e65b71c2b52fb',
        'gender|0-1': 0, // 0男 1女
        'vip|0-1': 0, // 0不是 1是
        'address': function () {
          return Random.city(true)
        },
        'lastLoginTime': Random.now('yyyy-MM-dd HH:mm:ss'),
        'lastLoginIp': function () {
          return Random.ip()
        },
        'status|0-1': 1 // 0 禁用 1正常
      }
    ]
  })
})

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
        'images|0-1': [
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614997807&t=e4575554687c70298c5eaa1c44d7e39a',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa2.att.hudong.com%2F27%2F81%2F01200000194677136358818023076.jpg&refer=http%3A%2F%2Fa2.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614997807&t=9e2da5ff5bfc30d8de5374a3beebe493',
          'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg'
        ],
        'status|0-1': 1 // 对外展示状态 0 不展示，1 展示
      }
    ]
  })
})
