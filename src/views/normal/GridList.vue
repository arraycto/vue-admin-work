<template>
  <div class="main-container">
    <el-tabs
      v-model="activeName"
      class="wrapper"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="商品管理"
        name="first"
      >
        <div class="goods-wrapper">
          <el-row :gutter="10">
            <el-col
              v-for="item in 4"
              :key="item"
              :span="6"
            >
              <el-card
                :body-style="{ padding: '0px' }"
                shadow="hover"
              >
                <el-image
                  style="width: 100%; height: 250px"
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  fit="cover"
                />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="flex justify-between align-center">
                    <time class="time">2020-10-10</time>
                    <i class="el-icon-more" />
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col
              v-for="item in 4"
              :key="item"
              :span="6"
            >
              <el-card
                :body-style="{ padding: '0px' }"
                shadow="hover"
              >
                <el-image
                  style="width: 100%; height: 250px"
                  src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                  fit="cover"
                />
                <div style="padding: 14px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom clearfix">
                    <time class="time">2020-10-10</time>
                    <el-button
                      type="text"
                      class="button"
                    >操作按钮</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
        <TableFooter
          :current-page="pageModel.currentPage"
          :page-size="pageModel.pageSize"
          :total-size="pageModel.totalSize"
          @pageSizeChanged="pageSizeChanged"
          @currentChanged="currentChanged"
        />
      </el-tab-pane>
      <el-tab-pane
        label="订单管理"
        name="second"
      >配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableMixin'
export default {
  name: 'GridList',
  mixins: [TableMixin],
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick() { }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__header {
  background-color: #fff;
  margin-bottom: 5px;
  padding: 0 10px;
}
.el-row + .el-row {
  margin-top: 10px;
}
.wrapper {
  position: relative;
  .goods-wrapper {
    padding: 5px 10px;
  }
  ::v-deep .table-footer-container {
    margin: 10px;
    position: relative;
    left: 0;
    right: 0;
  }
}
</style>
