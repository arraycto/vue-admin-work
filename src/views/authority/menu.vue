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
          row-key="menuUrl"
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
            label="菜单名称"
            prop="menuName"
          />
          <el-table-column
            align="center"
            label="菜单地址"
            prop="menuUrl"
          />
          <el-table-column
            align="center"
            label="创建时间"
            prop="createTime"
            width="160px"
          >
            <template slot-scope="scope">
              <div>{{ scope.row.createTime || '--' }}</div>
            </template>
          </el-table-column>
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
                v-model="menuModel.parentItem"
                size="small"
                placeholder="请输入菜单名称"
                style="width: 100%"
              >
                <el-option
                  v-for="(item, index) of dataList"
                  :key="index"
                  :label="item.menuName"
                  :value="item.menuUrl"
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
                :disabled="menuModel.mode === 'edit'"
              >
                <template
                  v-if="menuModel.mode === 'add'"
                  slot="prepend"
                >{{ menuModel.parentItem ? menuModel.parentItem : '/' }}</template>
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
        mode: 'add',
        title: '',
        id: uuid(),
        name: '',
        parentItem: '',
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
        this.menuModel.mode = 'add'
        this.menuModel.id = uuid()
        this.menuModel.title = '添加菜单信息'
        this.menuModel.name = ''
        this.menuModel.url = ''
      }).then(() => {
        if (this.menuModel.parentItem) {
          const parentMenu = this.dataList.find(it => it.menuUrl === this.menuModel.parentItem)
          parentMenu.children || (parentMenu.children = [])
          parentMenu.children.push({
            id: this.menuModel.id,
            menuName: this.menuModel.name,
            menuUrl: this.menuModel.parentItem + '/' + this.menuModel.url,
            createTime: currentDate()
          })
        } else {
          this.dataList.push({
            id: this.menuModel.id,
            menuName: this.menuModel.name,
            menuUrl: '/' + this.menuModel.url,
            createTime: currentDate()
          })
        }
      })
    },
    editItem(item) {
      this.$refs.dialog.show(() => {
        this.menuModel.mode = 'edit'
        this.menuModel.title = '编辑菜单信息'
        this.menuModel.name = item.menuName
        this.menuModel.url = item.menuUrl
        this.menuModel.parentItem = '/' + item.menuUrl.split('/')[1]
      }).then(() => {
        item.menuName = this.menuModel.name
      })
    },
    deleteItems(item) {
      if (item.children && item.children.length > 0) {
        this.$errorMsg('当前菜单包含有子菜单，不可删除，请先删除子菜单')
      } else {
        // TODO (此处还有问题)
        this.$showConfirmDialog('是否要删除此菜单信息，删除后不可恢复？')
          .then(() => {
            this.dataList.splice(this.dataList.indexOf(item), 1)
          })
      }
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

