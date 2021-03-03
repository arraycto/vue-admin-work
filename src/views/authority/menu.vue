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
            label="菜单名称"
            prop="name"
          />
          <el-table-column
            align="center"
            label="菜单地址"
            prop="url"
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
      :title="menuModel.title"
    >
      <template slot="body">
        <el-form
          v-model="menuModel"
          label-width="80px"
          label-position="right"
        >
          <el-form-item label="上级菜单">
            <el-col :span="20">
              <el-select
                v-model="menuModel.name"
                size="small"
                placeholder="请输入菜单名称"
                style="width: 100%"
              >
                <el-option
                  v-for="(item, index) of 5"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="菜单名称">
            <el-col :span="20">
              <el-input
                v-model="menuModel.name"
                size="small"
                placeholder="请输入菜单名称"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="菜单地址">
            <el-col :span="20">
              <el-input
                v-model="menuModel.url"
                size="small"
                placeholder="请输入菜单地址"
              >
                <template slot="prepend">/</template>
              </el-input>
            </el-col>
          </el-form-item>
        </el-form>
      </template>
    </Dialog>
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableMixin'
import { currentDate, uuid } from '@/utils/utils'
export default {
  name: 'Menu',
  mixins: [TableMixin],
  data() {
    return {
      menuModel: {
        title: '',
        id: uuid(),
        name: '',
        parentItem: null,
        url: '',
        createTime: ''
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    initSetup() {
      return {
        loadParentMenuUrl: this.$urlPath.getParentMenuList,
        loadDataUrl: this.$urlPath.getMenuList,
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
      this.$refs.dialog.show(() => {
        this.menuModel.title = '添加菜单信息'
        this.menuModel.name = ''
        this.menuModel.url = ''
      }).then(() => {
        this.dataList.push({
          id: uuid,
          name: this.menuModel.name,
          url: this.menuModel.url,
          createTime: currentDate()
        })
      })
    },
    editItem(item) {
      this.$refs.dialog.show(() => {
        this.menuModel.title = '编辑菜单信息'
        this.menuModel.name = item.name
        this.menuModel.url = item.roleCode
      }).then(() => {
        item.name = this.menuModel.name
        item.url = this.menuModel.url
      })
    },
    deleteItems(item) {
      this.$showConfirmDialog('是否要删除此菜单信息，删除后不可恢复？')
        .then(() => {
          this.dataList.splice(this.dataList.indexOf(item), 1)
        })
    },
    validateForm() {
      if (!this.menuModel.name) {
        this.$errorMsg('请输入菜单名称')
        return false
      }
      if (!this.menuModel.url) {
        this.$errorMsg('请输入菜单地址')
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

