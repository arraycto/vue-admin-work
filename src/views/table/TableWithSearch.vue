<template>
  <div class="main-container">
    <TableHeader
      :can-collapsed="true"
      :search-model="searchModel"
      @doSearch="doSearch"
      @resetSearch="resetSearch"
    >
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
          icon="el-icon-warning-outline"
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
  name: 'TableWithSearch',
  mixins: [TableMixin],
  data() {
    return {
      searchModel: [
        {
          id: 1,
          name: 'name',
          label: '学生姓名',
          value: '',
          type: 'input',
          placeholder: '请输入学生姓名',
          span: 8
        },
        {
          id: 2,
          name: 'sex',
          label: '学生姓别',
          value: '',
          type: 'select',
          placeholder: '请输入学生姓名',
          selectOptions: [
            {
              id: 0,
              value: '男'
            },
            {
              id: 1,
              value: '女'
            }
          ],
          span: 8
        },
        {
          id: 3,
          name: 'datetimerange',
          label: '日期范围',
          value: '',
          type: 'date-range',
          span: 8
        },
        {
          id: 4,
          name: 'date',
          label: '选择日期',
          value: '',
          type: 'date'
        },
        {
          id: 5,
          name: 'datetime',
          label: '选择日期',
          value: '',
          type: 'datetime'
        },
        {
          id: 6,
          name: 'time',
          label: '选择时间',
          value: '',
          type: 'time'
        }
      ],
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
  },
  methods: {
    extraParams() {
      return {
        extra: 'extra'
      }
    }
  }
}
</script>

