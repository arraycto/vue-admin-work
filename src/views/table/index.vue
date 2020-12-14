<template>
  <div class="table-container">
    <TableHeader title="基本操作">
      <template slot="left">
        <el-button size="mini">添加</el-button>
      </template>
      <template slot="right">
        <el-button size="mini">删除</el-button>
      </template>
    </TableHeader>
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>

<style lang="scss" scoped>
</style>
