<template>
  <div class="main-container">
    <el-row :gutter="10">
      <el-col :span="6">
        <DataItem :data-model="dataModel1">
          <template #extra="{ extra }">
            <div class="margin-top">
              <div class="text-gray">
                较昨日新增：{{ extra.data }}
                <i class="el-icon-caret-top text-green"></i>
              </div>
              <div class="text-gray margin-top-sm">
                较上周新增：{{ extra.data1 }}
                <i class="el-icon-caret-top text-blue"></i>
              </div>
            </div>
          </template>
        </DataItem>
      </el-col>
      <el-col :span="6">
        <DataItem :data-model="dataModel2">
          <template #extra="{ extra }">
            <div class="margin-top">
              <div class="text-gray">
                较昨日新增：{{ extra.data }}
                <i class="el-icon-caret-top text-green"></i>
              </div>
              <div class="text-gray margin-top-sm">
                较上周新增：{{ extra.data1 }}
                <i class="el-icon-caret-top text-blue"></i>
              </div>
            </div>
          </template>
        </DataItem>
      </el-col>
      <el-col :span="6">
        <DataItem :data-model="dataModel3">
          <template #extra="{ extra }">
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="extra.data"
              status="exception"
            />
          </template>
        </DataItem>
      </el-col>
      <el-col :span="6">
        <DataItem :data-model="dataModel4">
          <template #extra>
            <div
              id="echart"
              style="height: 60px"
            ></div>
          </template>
        </DataItem>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DataItem from './components/DataItem'
import * as eCharts from 'echarts'
export default {
  name: 'Index',
  components: { DataItem },
  data() {
    return {
      dataModel1: {
        title: '今日访问量',
        data: '+1000',
        bottomTitle: '总访问量',
        totalSum: '100万+',
        extra: {
          data: 1000,
          data1: 2350
        }
      },
      dataModel2: {
        title: '新增用户',
        data: '+500',
        bottomTitle: '总用户量',
        totalSum: '200万+',
        extra: {
          data: 700,
          data1: 968
        }
      },
      dataModel3: {
        title: '当月销售额',
        data: '￥50000',
        bottomTitle: '累计销售额',
        totalSum: '2000万+',
        extra: {
          data: 80
        }
      },
      dataModel4: {
        title: '当月订单量',
        data: '189笔',
        bottomTitle: '累计订单量',
        totalSum: '1万+',
        extra: {
          data: 80
        }
      }
    }
  },
  mounted() {
    this.initECharts()
  },
  methods: {
    initECharts() {
      const chart = eCharts.init(document.getElementById('echart'))
      const option = {
        xAxis: {
          type: 'category'
        },
        yAxis: [{
          type: 'value'
        }],
        series: [{
          data: [82, 93, 90, 74, 82, 60, 50],
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 0
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8
          }
        }]
      }
      chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
