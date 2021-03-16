<template>
  <div class="main-container">
    <TableHeader
      :can-collapsed="likeSearchModel.conditionItems && likeSearchModel.conditionItems.length !== 0"
      :search-model="likeSearchModel.conditionItems"
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
          :data="dataList"
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
import { LikeSearchMixin } from '@/mixins/ActionMixin'
export default {
  name: 'TableWithSearch',
  mixins: [TableMixin, LikeSearchMixin],
  created() {
    this.initLikeSearchModel({
      url: this.$urlPath.getCommentList,
      conditionItems: [
        {
          name: 'name',
          label: '学生姓名',
          value: '',
          type: 'input',
          placeholder: '请输入学生姓名',
          span: 8
        },
        {
          name: 'sex',
          label: '学生姓别',
          value: '',
          type: 'select',
          placeholder: '请选择学生性别',
          associatedOption: 'school',
          selectOptions: [
            {
              label: '男',
              value: 0
            },
            {
              label: '女',
              value: 1
            }
          ],
          span: 8,
          onChange: (res, associatedOption) => {
            if (associatedOption) {
              const item = this.likeSearchModel.conditionItems.find(
                (it) => it.name === associatedOption
              )
              item.selectOptions.push({
                label: '山东大学',
                value: 0
              })
            }
          }
        },
        {
          name: 'school',
          label: '选择学校',
          value: '',
          type: 'select',
          selectOptions: [],
          span: 8
        },
        {
          name: 'date',
          label: '选择日期',
          value: '',
          type: 'date'
        },
        {
          name: 'datetime',
          label: '选择日期',
          value: '',
          type: 'datetime'
        },
        {
          name: 'time',
          label: '选择时间',
          value: '',
          type: 'time'
        }
      ],
      extraParams: () => {
        return {
          page: this.pageModel.currentPage,
          pageSize: this.pageModel.pageSize
        }
      },
      onSearchResult: (res) => {
        console.log(res)
        console.log(res.dada.length)
      },
      onSearchError: (error) => {
        console.log(error)
      }
    })
  }
}
</script>
