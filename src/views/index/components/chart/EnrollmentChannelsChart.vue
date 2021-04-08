<template>
  <el-card
    class="flex-sub chart-item-container"
    :body-style="{padding: 0}"
    shadow="never"
  >
    <template #header>
      <div class="text-bold text-black">
        招生渠道分析图
      </div>
    </template>
    <div
      ref="channelsChart"
      class="chart-item"
    >
    </div>
  </el-card>

</template>

<script>
import * as eCharts from 'echarts'
export default {
  name: 'EnrollmentChannelsChart',
  data() {
    return {
      chartInstance: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.chartInstance = eCharts.init(this.$refs.channelsChart)
      const option = {
        grid: {
          left: '12%',
          right: '5%',
          top: '5%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true,
              length: 5,
              length2: 5,
              smooth: true
            },
            data: [
              { value: 1969, name: '线上' },
              { value: 743, name: '相推' },
              { value: 1594, name: '电话' },
              { value: 1347, name: '地推' },
              { value: 635, name: '直播' }
            ]
          }
        ]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item-container {
  width: 100%;
  height: 215px;
  .chart-item {
    height: 180px;
  }
}
</style>
