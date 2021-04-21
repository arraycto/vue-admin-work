<template>
  <div class="set-container">
    <div
      class="tip-wrapper flex justify-center align-center"
      @click="openDrawer"
    >
      <i class="el-icon-setting"></i>
    </div>
    <el-drawer
      :visible.sync="opened"
      :with-header="false"
      direction="rtl"
      size="15%"
    >
      <div class="flex justify-between padding">
        <span></span>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      opened: false
    }
  },
  methods: {
    openDrawer() {
      this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.set-container {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .tip-wrapper {
    width: 50px;
    height: 50px;
    border: 1px solid #409eff;
    background-color: #409eff;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    font-size: 30px;
    color: #fff;
  }
}
</style>
