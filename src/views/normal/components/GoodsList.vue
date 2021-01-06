<template>
  <div class="goods-list-container">
    <div class="goods-wrapper">
      <el-row :gutter="10">
        <el-col
          v-for="item in 15"
          :key="item"
          :span="6"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
          >
            <div class="padding text-center">
              <el-image
                style="width: 90%; height: 180px"
                src="https://img12.360buyimg.com/jdcms/s300x300_jfs/t1/168011/4/886/279158/5ff2b82fEc05a26fb/38b5f1c99150cddc.jpg.webp"
                fit="cover"
              />
            </div>
            <div style="padding: 14px;">
              <div class="goods-title text-cut-l2">HYUNDAI/现代 家庭影院ktv音响套装家用k歌点歌机电脑电视客厅卡拉ok全套专业功放音箱设备 8吋音响</div>
              <div class="flex justify-between align-center margin-top-xs">
                <span class="text-price text-red text-df">100.00</span>
                <i class="el-icon-more" />
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
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableMixin'
export default {
  name: 'GoodsList',
  mixins: [TableMixin]
}
</script>

<style lang="scss" scoped>
.el-col-6 + .el-col-6 {
  margin-bottom: 10px;
}
.goods-list-container {
  height: calc(100vh - 122px);
  margin-right: -15px;
  overflow-x: hidden;
  overflow-y: auto;
  .goods-wrapper {
    padding: 5px 10px;
    margin-bottom: 45px;
    .goods-title {
      color: #666666;
      font-size: 12px;
      line-height: 16px;
    }
  }
  ::v-deep .table-footer-container {
    margin: 0 5px;
  }
}
</style>
