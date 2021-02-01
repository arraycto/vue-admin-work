import Mock from 'mockjs'
import baseData from '../base'

Mock.mock(RegExp('http://localhost:8080/getCardList'), {
  ...baseData,
  'data|1-10': [
    {
      'id|+1': 100,
      // 排队号
      'Lineno': 'A' + '@integer(10, 100)',
      // 提货司机
      'driversName': '@cname()',
      // 提货单号
      'takeNumbers|1000-9999': 1000,
      // 车牌号
      'licenseNumbers': /[京][A-Z]\d{5,7}/,
      // 碱品规格
      'speciFication': '@integer(60, 1000)' + 'kg',
      // 提货地点
      'dealplace': '新线'
    }
  ]
})
