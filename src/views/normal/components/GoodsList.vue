<template>
  <div class="goods-list-container">
    <div class="goods-wrapper">
      <el-row :gutter="10">
        <el-col
          v-for="item of dataList"
          :key="item.id"
          :span="6"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            shadow="hover"
          >
            <div class="padding text-center">
              <el-image
                style="width: 90%; height: 180px"
                :src="item.image"
                fit="cover"
              />
            </div>
            <div style="padding: 14px">
              <div class="goods-title text-cut-l2">
                {{ item.description }}
              </div>
              <div class="flex justify-between align-center margin-top-xs">
                <span class="text-price text-red text-df">
                  {{ Number(item.price).toFixed(2) }}
                </span>
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
import TableMixin, { PageModelMixin } from '@/mixins/TableMixin'
import { GetDataMixin } from '@/mixins/ActionMixin'
export default {
  name: 'GoodsList',
  mixins: [TableMixin, PageModelMixin, GetDataMixin],
  mounted() {
    this.initGetData({
      url: this.$urlPath.getCardList,
      params: {
        page: this.pageModel.currentPage,
        pageSize: this.pageModel.pageSize
      },
      onResult: (res) => {
        this.handleSuccess(res)
      }
    }).then(_ => {
      this.getData()
    })
  }
}
</script>

<style lang="scss" scoped>
.el-col-6 + .el-col-6 {
  margin-bottom: 10px;
}
.goods-list-container {
  height: calc(100vh - 130px);
  margin-right: -15px;
  overflow-x: hidden;
  overflow-y: auto;
  .goods-wrapper {
    padding: 5px 10px;
    margin-bottom: 40px;
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
