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
            label="角色名称"
            prop="name"
          />
          <el-table-column
            align="center"
            label="角色编号"
            prop="roleCode"
          />
          <el-table-column
            align="center"
            label="角色描述"
            prop="description"
          />
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
      v-if="actionModel"
      ref="dialog"
      :validate-form="actionModel.validateFormHandler"
      :title="roleModel.title"
    >
      <template>
        <el-form
          v-model="roleModel"
          label-width="80px"
          label-position="right"
        >
          <el-form-item label="角色名称">
            <el-col :span="20">
              <el-input
                v-model="roleModel.name"
                size="small"
                placeholder="请输入角色名称"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="角色编号">
            <el-col :span="20">
              <el-input
                v-model="roleModel.roleCode"
                size="small"
                placeholder="请输入角色编号"
              >
                <template slot="prepend">ROLE_</template>
              </el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="角色描述">
            <el-col :span="20">
              <el-input
                v-model="roleModel.description"
                size="small"
                placeholder="请输入角色描述"
              />
            </el-col>
          </el-form-item>
        </el-form>
      </template>
    </Dialog>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableMixin'
import { uuid } from '@/utils/utils'
import { GetDataMixin } from '@/mixins/ActionMixin'
const ROLE_CODE_FLAG = 'ROLE_'
export default {
  name: 'Role',
  mixins: [TableMixin, GetDataMixin],
  data() {
    return {
      roleModel: {
        title: '',
        id: 0,
        name: '',
        roleCode: '',
        description: ''
      }
    }
  },
  mounted() {
    this.initGetData({
      url: this.$urlPath.getRoleList,
      params: {},
      onResult: (res) => {
        this.handleSuccess(res)
      },
      onError: (error) => {
        this.$errorMsg(error)
      }
    }).then(_ => {
      this.getData()
    })
  },
  methods: {
    addItem() {
      this.$refs.dialog.show(() => {
        this.roleModel.title = '添加角色信息'
        this.roleModel.name = ''
        this.roleModel.roleCode = ''
        this.roleModel.description = ''
      }).then(() => {
        this.dataList.push({
          id: uuid,
          name: this.roleModel.name,
          roleCode: ROLE_CODE_FLAG + this.roleModel.roleCode,
          description: this.roleModel.description,
          createTime: '2021-01-01 12:00:11'
        })
      })
    },
    editItem(item) {
      this.$refs.dialog.show(() => {
        this.roleModel.title = '编辑角色信息'
        this.roleModel.name = item.name
        this.roleModel.roleCode = item.roleCode
        this.roleModel.description = item.description
      }).then(() => {
        item.name = this.roleModel.name
        item.roleModel = ROLE_CODE_FLAG + this.roleModel.roleCode
        item.description = this.roleModel.description
      })
    },
    deleteItems(item) {
      this.$showConfirmDialog('是否要删除此角色信息，删除后不可恢复？')
        .then(() => {
          this.dataList.splice(this.dataList.indexOf(item), 1)
        })
    },
    validateForm() {
      if (!this.roleModel.name) {
        this.$errorMsg('请输入角色名称')
        return false
      }
      if (!this.roleModel.roleCode) {
        this.$errorMsg('请输入角色编码')
        return false
      }
      if (!this.roleModel.description) {
        this.$errorMsg('请输入角色描述')
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

