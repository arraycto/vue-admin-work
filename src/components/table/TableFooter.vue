<template>
  <el-card
    :body-style="{padding: 0}"
    class="table-footer-container"
  >
    <!-- <el-pagination
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    /> -->
  </el-card>
</template>

<script>
export default {
  name: 'TableFooter'
}
</script>

<style lang="scss" scoped>
</style>
