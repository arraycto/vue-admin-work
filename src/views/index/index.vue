<template>
  <div class="main-container">
    <el-row :gutter="10">
      <el-col
        v-for="(item, index) of dataList"
        :key="index"
        :xs="24"
        :sm="12"
        :md="6"
      >
        <DataItem :data-model="item">
          <template
            v-if="index === 0"
            #extra="{ extra }"
          >
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
          <template
            v-else-if="index === 1"
            #extra="{ extra }"
          >
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
          <template
            v-else-if="index === 2"
            #extra="{ extra }"
          >
            <el-progress
              :text-inside="true"
              :stroke-width="15"
              :percentage="extra.data"
              status="exception"
            />
          </template>
          <template
            v-else-if="index === 3"
            #extra
          >
            <div
              id="echart"
              style="height: 100%; width: 100%"
            ></div>
          </template>
        </DataItem>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col
        :xs="24"
        :sm="6"
      >
        <div
          class="flex flex-direction"
          style="height: 100px"
        >
          <div
            class="flex-sub"
            style="background-color: red"
          ></div>
          <div
            class="flex-sub"
            style="background-color: green"
          ></div>
        </div>
      </el-col>
      <el-col
        :xs="24"
        :md="12"
      >
        <div style="background-color: blue; height: 100px"></div>
      </el-col>
      <el-col
        :xs="24"
        :sm="6"
      >
        <div
          class="flex flex-direction"
          style="height: 100px"
        >
          <div
            class="flex-sub"
            style="background-color: red"
          ></div>
          <div
            class="flex-sub"
            style="background-color: green"
          ></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DataItem from './components/DataItem'
import * as eCharts from 'echarts'
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  components: { DataItem },
  data() {
    return {
      dataList: [
        {
          title: '今日访问量',
          data: '+1000',
          bottomTitle: '总访问量',
          totalSum: '100万+',
          extra: {
            data: 1000,
            data1: 2350
          }
        },
        {
          title: '新增用户',
          data: '+500',
          bottomTitle: '总用户量',
          totalSum: '200万+',
          extra: {
            data: 700,
            data1: 968
          }
        },
        {
          title: '当月销售额',
          data: '￥50000',
          bottomTitle: '累计销售额',
          totalSum: '2000万+',
          extra: {
            data: 80
          }
        },
        {
          title: '当月订单量',
          data: '189笔',
          bottomTitle: '累计订单量',
          totalSum: '1万+',
          extra: {
            data: 80
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      collapse: 'app/isCollapseSideBar'
    })
  },
  watch: {
    collapse(newVal) {
      setTimeout(() => {
        this.chart.resize()
      }, 200)
    }
  },
  mounted() {
    this.initECharts()
  },
  methods: {
    initECharts() {
      this.chart = eCharts.init(document.getElementById('echart'))
      const option = {
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          x: '-5%',
          y: 0,
          x2: '-5%',
          y2: 0
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false }
        },
        yAxis: [
          {
            type: 'value',
            splitLine: { show: false }
          }
        ],
        series: [
          {
            data: [82, 93, 90, 74, 82, 60, 50],
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
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
          }
        ]
      }
      this.chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row + .el-row {
  margin-top: 10px;
}
</style>
