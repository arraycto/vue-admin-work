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
import { convertData } from '@/assets/data/map.js'
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
      eCharts.registerMap('china', chinaData)
      this.chartInstance = eCharts.init(this.$refs.schoolChart)
      const scatterData = convertData()
      const option = {
        tooltip: {
          trigger: 'item'
        },
        geo: {
          type: 'map',
          map: 'china',
          itemStyle: {
            areaColor: '#0083ce',
            borderColor: '#0066ba',
            emphasis: {
              borderWidth: 0,
              borderColor: '#0066ba',
              areaColor: '#F06C00',
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          zoom: 1.2
        },
        legend: {
          left: '5%',
          bottom: '5%',
          orient: 'vetical'
        },
        series: [
          {
            type: 'scatter',
            name: '合作校区',
            coordinateSystem: 'geo',
            data: scatterData
              .sort((a, b) => {
                return b.value[2] - a.value[2]
              })
              .slice(6),
            hoverAnimation: true,
            encode: {
              value: 2
            },
            itemStyle: {
              color: '#1bff00'
            }
          },
          {
            type: 'effectScatter',
            name: '前六名合作校区',
            coordinateSystem: 'geo',
            data: scatterData
              .sort((a, b) => {
                return b.value[2] - a.value[2]
              })
              .slice(0, 6),
            symbolSize: function (val) {
              return val[2] / 10
            },
            itemStyle: {
              color: '#0ce88e'
            },
            encode: {
              value: 2
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true
            }
          }
        ]
      }
      this.chartInstance.setOption(option)
    },
    updateChart() {
      this.chartInstance.resize()
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
