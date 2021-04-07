<template>
  <div
    ref="salesChart"
    class="chart-item-container"
  >
  </div>
</template>

<script>
import * as eCharts from 'echarts'
export default {
  name: 'SalesChart',
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
      this.chartInstance = eCharts.init(this.$refs.salesChart)
      const option = {
        grid: {
          left: '-2%',
          right: '-2%',
          top: 0,
          bottom: 0,
          containLabel: false
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          splitLine: { show: false }
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            width: 0
          },
          areaStyle: {
            opacity: 0.8,
            color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }
            ])
          }
        }]
      }
      this.chartInstance.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item-container {
  width: 100%;
  height: 150px;
}
</style>
