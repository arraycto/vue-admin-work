<template>
  <div class="main-container">
    <TableHeader :can-collapsed="false">
      <template slot="right">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-plus"
        >添加
        </el-button>
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
        >删除
        </el-button>
      </template>
    </TableHeader>
    <TableBody ref="tableBody">
      <template slot="table">
        <el-table
          ref="table"
          v-loading="tableLoading"
          :data="list"
          :header-cell-style="tableConfig.headerCellStyle"
          :size="tableConfig.size"
          :stripe="tableConfig.stripe"
          :border="tableConfig.border"
          :height="tableConfig.height"
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
