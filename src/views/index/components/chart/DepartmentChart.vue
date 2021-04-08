<template>
  <el-card
    class="flex-sub chart-item-container"
    :body-style="{padding: 0}"
    shadow="never"
  >
    <template #header>
      <div class="text-bold text-black">
        公司各部门人员数量
      </div>
    </template>
    <div
      ref="departmentChart"
      class="chart-item"
    >
    </div>
  </el-card>

</template>

<script>
import * as eCharts from 'echarts'
export default {
  name: 'DepartmentChart',
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
      this.chartInstance = eCharts.init(this.$refs.departmentChart)
      const option = {
        tooltip: {
          trigger: 'item'
        },
        radar: {
          name: {
            textStyle: {
              color: '#333',
              fontSize: 10,
              backgroundColor: '#f5f5f5',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '销售', max: 50 },
            { name: '管理', max: 5 },
            { name: '技术', max: 4 },
            { name: '客服', max: 3 },
            { name: '人资', max: 5 },
            { name: '运营', max: 10 }
          ],
          radius: 60,
          nameGap: 8
        },
        series: [{
          name: '公司部门人员配备',
          type: 'radar',
          data: [
            {
              value: [30, 3, 4, 3, 5, 8],
              itemStyle: {
                color: '#a8efeb'
              },
              areaStyle: {
                opacity: 0.8,
                color: new eCharts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgba(234, 214, 238, 1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(168, 239, 235, 1)'
                  }
                ])
              }
            }
          ]
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
  height: 215px;
  .chart-item {
    height: 180px;
  }
}
</style>
