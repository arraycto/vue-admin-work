<template>
  <div class="order-list-container">
    <div class="order-wrapper">
      sadf
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
  name: 'OrderList',
  mixins: [TableMixin]
}
</script>

<style lang="scss" scoped>
.el-col-6 + .el-col-6 {
  margin-bottom: 10px;
}
.order-list-container {
  height: calc(100vh - 122px);
  margin-right: -15px;
  overflow-x: hidden;
  overflow-y: auto;
  .order-wrapper {
    padding: 5px 10px;
    margin-bottom: 45px;
  }
  ::v-deep .table-footer-container {
    margin: 0 5px;
  }
}
</style>
