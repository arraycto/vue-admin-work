<template>
  <div class="main-container">
    <TableHeader :can-collapsed="false">
      <template
        v-if="actionModel"
        slot="right"
      >
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-plus"
          @click="actionModel.addItem"
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
                @click="actionModel.editItem(scope.row)"
              >编辑</el-link>
              <el-link
                type="danger"
                :underline="false"
                @click="actionModel.deleteItems(scope.row)"
              >删除</el-link>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </TableBody>
    <Dialog
      ref="dialog"
      :validate-form="actionModel.validateForm"
      :title="departmentModel.title"
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
const DP_CODE_FLAG = 'dp_code_'
export default {
  name: 'Department',
  mixins: [TableMixin],
  data() {
    return {
      departmentModel: {
        title: '',
        itemId: 0,
        name: '',
        depCode: '',
        order: 1,
        status: true
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    initSetup() {
      return {
        loadDataUrl: this.$urlPath.getDepartmentList,
        getData: this.getData,
        addUrl: '',
        addItem: this.addItem,
        editUrl: '',
        editItem: this.editItem,
        deleteUrl: '',
        deleteItems: this.deleteItems,
        validateFormHandler: this.validateForm
      }
    },
    getData() {
      this.$post({
        url: this.actionModel.loadDataUrl
      }).then((res) => {
        this.handleSuccess(res)
      })
    },
    addItem() {
      this.$refs.dialog
        .show(() => {
          this.departmentModel.title = '添加部门信息'
          this.departmentModel.name = ''
          this.departmentModel.depCode = ''
          this.departmentModel.status = true
          this.departmentModel.order = 1
        })
        .then(() => {
          this.dataList.push({
            id: 1000,
            name: this.departmentModel.name,
            depCode: DP_CODE_FLAG + this.departmentModel.depCode,
            status: this.departmentModel.status ? 1 : 0,
            order: this.departmentModel.order,
            createTime: '2021-01-01 12:00:11'
          })
        })
    },
    editItem(item) {
      this.$refs.dialog
        .show(() => {
          this.departmentModel.title = '编辑部门信息'
          this.departmentModel.itemId = item.id
          this.departmentModel.name = item.name
          this.departmentModel.depCode = item.depCode.replace(DP_CODE_FLAG, '')
          this.departmentModel.order = item.order
          this.departmentModel.status = parseInt(item.status) === 1
        })
        .then(() => {
          item.name = this.departmentModel.name
          item.depCode = DP_CODE_FLAG + this.departmentModel.depCode
          item.order = this.departmentModel.order
          item.status = this.departmentModel.status ? 1 : 0
          this.$refs.dialog.close()
        })
    },
    deleteItems(item) {
      this.$showConfirmDialog('是否要删除此部门信息，删除后不可恢复？')
        .then(() => {
          this.dataList.splice(this.dataList.indexOf(item), 1)
        })
    },
    validateForm() {
      if (!this.departmentModel.name) {
        this.$errorMsg('请输入部门名称')
        return false
      }
      if (!this.departmentModel.depCode) {
        this.$errorMsg('请输入部门编码')
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.table-container {
  bottom: 8px;
}
</style>
