<template>
  <div
    class="my-notice-container"
    :class="{ 'tran-wrapper': isShow }"
  >
    <div class="flex justify-between title-wrapper">
      <span class="title text-bold">提示</span>
      <span
        class="el-icon-close text-lg"
        @click="close"
      ></span>
    </div>
    <div class="content-wrapper">
      您当前正在浏览 vue admin work 的示例，可能需要以下服务：
    </div>
    <div class="padding-tb">
      <el-button
        size="mini"
        type="primary"
        icon="el-icon-shopping-cart-full"
      >购买授权</el-button>
      <el-button
        size="mini"
        type="danger"
        icon="el-icon-setting"
        @click="showProjectInfo"
      >项目信息</el-button>
      <el-button
        size="mini"
        icon="el-icon-chat-dot-square"
        @click="showProjectInfo"
      >咨询</el-button>
    </div>
    <Dialog
      ref="projectInfoDialog"
      title="vue-admin-work项目基本配置信息"
    >
      <template>
        <ProjectInfo />
      </template>
    </Dialog>
  </div>
</template>

<script>
import ProjectInfo from './ProjectInfo'
export default {
  name: 'MyNotice',
  components: { ProjectInfo },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    setTimeout((_) => {
      this.isShow = true
    }, 1500)
  },
  methods: {
    showProjectInfo() {
      this.$refs.projectInfoDialog.show()
    },
    show() {
      this.isShow = true
    },
    close() {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.my-notice-container {
  position: fixed;
  top: 20px;
  right: -320px;
  z-index: 9999;
  width: 320px;
  border-radius: 5px;
  padding: 0 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  transition: right 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  .title-wrapper {
    padding: 10px 0;
    border-bottom: 1px solid #e2e2e2;
  }
  .content-wrapper {
    padding: 10px 0 0 0;
    color: #555;
    line-height: 18px;
  }
}
.tran-wrapper {
  right: 10px;
  transition: right 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
