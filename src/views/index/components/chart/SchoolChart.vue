<template>
  <el-card
    class="flex-sub chart-item-container"
    :body-style="{padding: 0}"
    shadow="never"
  >
    <template #header>
      <div class="text-bold text-black">
        全国合作校区分布图
      </div>
    </template>
    <div
      ref="schoolChart"
      class="chart-item"
    >
    </div>
  </el-card>

</template>

<script>
import * as eCharts from 'echarts'
import chinaData from '@/assets/data/china.json'
export default {
  name: 'SchoolChart',
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
      this.chartInstance = eCharts.init(this.$refs.schoolChart)
      eCharts.registerMap('china', chinaData)
      const option = {
        series: [
          {
            type: 'map',
            map: 'china',
            coordinateSystem: 'geo',
            itemStyle: {
              areaColor: '#0083ce',
              borderColor: '#0066ba',
              emphasis: {
                borderWidth: 0,
                borderColor: '#0066ba',
                areaColor: '#F06C00',
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        data: [{
          name: '北京',
          value: 10
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
  height: calc(215px * 2 + 10px);
  .chart-item {
    height: calc(180px * 2);
  }
}
</style>
