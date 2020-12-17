<template>
  <el-card
    :body-style="{padding: 0}"
    class="table-footer-container"
  >
    <el-pagination
      :current-page.sync="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout=" $isMobile ? 'total, pager, jumper' : 'total, sizes, prev, pager, next, jumper'"
      :total="totalSize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    />
  </el-card>
</template>

<script>
export default {
  name: 'TableFooter',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: function () {
        return [10, 20, 30, 40]
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    totalSize: {
      type: Number,
      default: 10
    }
  },
  methods: {
    handleSizeChange(pageSize) {
      this.$emit('pageSizeChanged', pageSize)
    },
    handleCurrentChange(currentPage) {
      this.$emit('currentChanged', currentPage)
    },
    prevClick(currentPage) {
      this.$emit('currentChanged', currentPage)
    },
    nextClick(currentPage) {
      this.$emit('currentChanged', currentPage)
    }
  }
}
</script>
