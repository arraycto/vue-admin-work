<template>
  <div class="main-container">
    <div
      id="echart"
      style="width: 100px; height: 100px"
    ></div>
  </div>
</template>

<script>
import { getData } from '@/model/BaseModel'
export default {
  name: 'Index',
  data() {
    return {
      actionModel: {}
    }
  },
  mounted() {
    // this.getData1()
    this.getData({
      url: '2312',
      method: 'put'
    })
  },
  methods: {
    getData,
    getData1() {
      const myChart = this.$echarts.init(document.getElementById('echart'))
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
