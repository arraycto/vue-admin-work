<template>
  <div class="main-container">
    <TableHeader :can-collapsed="false">
      <template slot="right">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-plus"
          @click="addItem"
        >添加
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
          row-key="id"
          :tree-props="{children: 'children'}"
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
            label="部门名称"
            prop="name"
          />
          <el-table-column
            align="center"
            label="部门编号"
            prop="depCode"
          />
          <el-table-column
            align="center"
            label="排序"
            prop="order"
          />
          <el-table-column
            align="center"
            label="状态"
          >
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                :active-value="1"
                :inactive-value="0"
              />
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="创建时间"
            prop="createTime"
            width="160px"
          />
          <el-table-column
            align="center"
            label="操作"
          >
            <template slot-scope="scope">
              <el-link
                type="primary"
                :underline="false"
                @click="editItem(scope.row)"
              >编辑</el-link>
              <el-link
                type="danger"
                :underline="false"
              >删除</el-link>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </TableBody>
    <Dialog
      ref="dialog"
      :title="departmentModel.actionModel === 'add' ? '添加部门' : '编辑部门'"
    >
      <template slot="body">
        <el-form
          v-model="departmentModel"
          label-width="80px"
          label-position="right"
        >
          <el-form-item label="部门名称">
            <el-col :span="20">
              <el-input
                v-model="departmentModel.name"
                size="small"
                placeholder="请输入部门名称"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="部门编号">
            <el-col :span="20">
              <el-input
                v-model="departmentModel.depCode"
                size="small"
                placeholder="请输入部门编号"
              >
                <template slot="prepend">dp_code_</template>
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="排序">
            <el-col :span="20">
              <el-input-number
                v-model="departmentModel.order"
                :step="1"
                :min="1"
                size="small"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="状态">
            <el-col :span="20">
              <el-switch v-model="departmentModel.status" />
            </el-col>
          </el-form-item>
        </el-form>
      </template>
    </Dialog>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableMixin'
import { mergeObject } from '@/utils/utils'
const DP_CODE_FLAG = 'dp_code_'
export default {
  name: 'Department',
  mixins: [TableMixin],
  data() {
    return {
      departmentModel: mergeObject({
        itemId: 0,
        name: '',
        depCode: '',
        order: 1,
        status: true
      })
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$post({
        url: this.$urlPath.getDepartmentList
      }).then((res) => {
        this.handleSuccess(res)
      })
    },
    addItem() {
      this.departmentModel.actionModel = 'add'
      this.departmentModel.name = ''
      this.departmentModel.depCode = ''
      this.departmentModel.status = true
      this.departmentModel.order = 1
      this.$refs.dialog.show()
    },
    editItem(item) {
      this.tempItem = item
      this.departmentModel.actionModel = 'edit'
      this.departmentModel.itemId = item.id
      this.departmentModel.name = item.name
      this.departmentModel.depCode = item.depCode.replace(DP_CODE_FLAG, '')
      this.departmentModel.order = item.order
      this.departmentModel.status = parseInt(item.status) === 1
      this.$refs.dialog.show()
    },
    onDialogConfirm() {
      if (!this.departmentModel.name) {
        this.$errorMsg('请输入部门名称')
        return false
      }
      if (this.departmentModel.actionModel === 'add') {
        this.dataList.push({
          id: 1000,
          name: this.departmentModel.name,
          depCode: DP_CODE_FLAG + this.departmentModel.depCode,
          status: this.departmentModel.status ? 1 : 0,
          order: this.departmentModel.order,
          createTime: '2021-01-01 12:00:11'
        })
      } else {
        this.tempItem.name = this.departmentModel.name
        this.tempItem.depCode = DP_CODE_FLAG + this.departmentModel.depCode
        this.tempItem.order = this.departmentModel.order
        this.tempItem.status = this.departmentModel.status ? 1 : 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table-container {
  bottom: 8px;
}
</style>
