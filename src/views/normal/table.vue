<template>
  <div class="main-container">
    <TableHeader :can-collapsed="false">
      <template slot="right">
        <el-button
          v-if="isInited('addItemModel')"
          type="primary"
          size="mini"
          icon="el-icon-plus"
          @click="onAddItem"
        >添加
        </el-button>
        <el-button
          v-if="isInited('deleteItemsModel')"
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
            label="名称"
            prop="nickName"
          />
          <el-table-column
            align="center"
            label="头像"
          >
            <template slot-scope="scope">
              <div class="avatar-container">
                <el-image
                  :src="scope.row.avatar"
                  class="avatar"
                  :class="{'avatar-vip' : scope.row.vip === 1}"
                />
                <img
                  v-if="scope.row.vip === 1"
                  class="vip"
                  :src="require('@/assets/img_vip_icon.png')"
                />
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="性别"
            prop="gender"
          >
            <template slot-scope="scope">
              <div class="gender-container flex justify-center align-center">
                <img
                  class="gender-icon"
                  :src="scope.row.gender === 0 ? require('@/assets/icon_sex_man.png') : require('@/assets/icon_sex_woman.png')"
                />
                <span>{{ scope.row.gender === 0 ? '男' : '女' }}</span>
              </div>
            </template>
          </el-table-column>
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
            label="地址"
            prop="address"
          />
          <el-table-column
            align="center"
            label="上次登录时间"
            prop="lastLoginTime"
            width="160px"
          />
          <el-table-column
            align="center"
            label="上次登录IP"
            prop="lastLoginIp"
            width="130px"
          />
          <el-table-column
            align="center"
            label="操作"
          >
            <el-link
              v-if="isInited('updateItemModel')"
              type="primary"
              :underline="false"
            >编辑</el-link>
            <el-link
              v-if="isInited('deleteItemsModel')"
              type="danger"
              :underline="false"
            >删除</el-link>
          </el-table-column>
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
    <Dialog ref="dialog">
      <template>
        <SingleUpload
          action="http://test.youcanedu.net:8881/yx/uploadSpellingTextBookCoverImage"
          :headers="{'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJBdXRob3JpemF0aW9uIjoiUk9MRV9hZG1pbiwiLCJ1c2VyRW50aXR5SWQiOjE4LCJ1c2VyRW50aXR5TmFtZSI6IueuoeeQhuWRmCIsInVzZXJFbnRpdHlQaG9uZSI6IjE4ODAwMDAwMDA4Iiwic3ViIjoi566h55CG5ZGYIiwiZXhwIjoxNjE2MTQ2MjQwfQ.TZS59WlhzJwkbk60OhE7xJMJ2XlIY3gBo_Cnh8yqCooKfyquS_IbSH-d6___nVNAhrMzNq3qDMM2sTZpiQ2IDA`}"
          file-name="textBookCoverFile"
          :extra-style="{width: '100px', height: '100px'}"
          :multiple="true"
          image-path="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3721808636,3193833342&fm=15&gp=0.jpg"
          :before-upload="beforeUpload"
          @onSingleSuccess="onSingleSuccess"
        >
          <template slot="tip">
            asdf
          </template>
        </SingleUpload>
      </template>
    </Dialog>
  </div>
</template>

<script>
import TableMixin, { PageModelMixin } from '@/mixins/TableMixin'
import {
  GetDataMixin,
  AddItemMixin,
  DeleteItemsMixin,
  UpdateItemMixin
} from '@/mixins/ActionMixin'
import SingleUpload from '@/components/common/SingleUpload.vue'
export default {
  name: 'Table',
  components: { SingleUpload },
  mixins: [
    TableMixin,
    PageModelMixin,
    GetDataMixin,
    AddItemMixin,
    DeleteItemsMixin,
    UpdateItemMixin
  ],
  data() {
    return {
      userModel: {
        address: '',
        avatar: '',
        gender: 0,
        id: 1,
        lastLoginIp: '',
        lastLoginTime: '',
        nickName: '',
        status: 0,
        vip: 1
      }
    }
  },
  mounted() {
    this.initGetData({
      url: this.$urlPath.getTableList,
      params: this.withPageInfoData(),
      beforeAction: () => {
        this.tableLoading = true
      },
      afterAction: () => {
        this.tableLoading = false
      },
      onResult: (res) => {
        this.handleSuccess(res)
      }
    }).then(() => {
      this.getData()
    })
    this.initUpdateItem({
      url: this.$urlPath.getTableList,
      addData: () => {
        return this.userModel
      },
      onUpdateItem: (item) => {
        this.$refs.dialog.show().then(() => {
          this.doUpdateItem()
        })
      }
    })
    this.initAddItem({
      url: this.$urlPath.getTableList,
      addData: () => {
        console.log('调用了data')
        return {}
      },
      onAddItem: () => {
        this.$refs.dialog
          .show(() => {
            this.userModel.address = ''
            this.userModel.avatar = ''
            this.userModel.gender = 0
            this.userModel.lastLoginIp = ''
            this.userModel.lastLoginTime = ''
            this.userModel.nickName = ''
            this.userModel.status = 1
            this.userModel.vip = 1
          })
          .then(() => {
            this.doAddItem()
          })
      }
    })
    this.initDeleteItems({
      url: this.$urlPath.getTableList
    })
  },
  methods: {
    onSingleSuccess({ res }) {
      if (res.status !== 200) {
        this.$errorMsg(res.msg)
      } else {
        this.path = ''
      }
    },
    beforeUpload(file) {
      const size = file.size
      if (size / 1024 > 500) {
        this.$errorMsg('上传文件最大不能超过500K')
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-container {
  position: relative;
  width: 30px;
  margin: 0 auto;
  vertical-align: middle;
  .avatar {
    width: 100%;
    border-radius: 50%;
  }
  .avatar-vip {
    border: 2px solid #cece1e;
  }
  .vip {
    position: absolute;
    top: 0;
    right: -9px;
    width: 15px;
    transform: rotate(60deg);
  }
}
.gender-container {
  .gender-icon {
    width: 20px;
  }
}
</style>
