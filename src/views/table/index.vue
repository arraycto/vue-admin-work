<template>
  <div class="main-container">
    <TableHeader
      ref="tableHeader"
      title="基本操作"
    >
      <template slot="left">
        <el-button size="mini">添加</el-button>
      </template>
      <template slot="right">
        <el-button size="mini">删除</el-button>
      </template>
    </TableHeader>
    <TableBody>
      <template slot="table">
        <el-table
          :data="list"
          :header-cell-style="tableConfig.headerCellStyle"
          :size="tableConfig.size"
          :stripe="tableConfig.stripe"
          :border="tableConfig.border"
        >
          <el-table-column
            align="center"
            label="序号"
            fixed="left"
            width="80"
          >
            <template slot-scope="scope">
              {{ scope.$index + 1 }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="标题"
            prop="name"
          />
          <el-table-column
            align="center"
            label="昵称"
            prop="nickName"
          />
          <el-table-column
            align="center"
            label="性别"
            prop="sex"
          />
        </el-table>
      </template>
    </TableBody>
    <TableFooter />
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableMixin'
export default {
  name: 'Table',
  mixins: [TableMixin],
  data() {
    return {
      list: [
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        },
        {
          name: '标题',
          nickName: '昵称',
          sex: '性别'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
