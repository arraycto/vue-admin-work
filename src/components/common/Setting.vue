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
      size="20%"
    >
      <div class="padding">
        <el-divider content-position="center">主题风格设置</el-divider>
        <el-row :gutter="5">
          <el-col
            v-for="(item, index) of styleExampleList"
            :key="index"
            :span="8"
          >
            <StyleExample
              :checked="item.checked"
              :left-bg="item.leftBg"
              :right-top-bg="item.rightTopBg"
              :right-bottom-bg="item.rightBottomBg"
              @click.native="exampleClick(item)"
            />
          </el-col>
        </el-row>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import StyleExample from './StyleExample'
export default {
  name: 'Setting',
  components: {
    StyleExample
  },
  data() {
    return {
      opened: false,
      styleExampleList: [
        {
          leftBg: '#000000',
          rightTopBg: '#ffffff',
          rightBottomBg: '#f5f5f5',
          checked: true,
          themeId: 'dark-side'
        },
        {
          leftBg: '#ffffff',
          rightTopBg: '#ffffff',
          rightBottomBg: '#f5f5f5',
          checked: false,
          themeId: 'light'
        },
        {
          leftBg: '#047fff',
          rightTopBg: '#ffffff',
          rightBottomBg: '#f5f5f5',
          checked: false,
          themeId: 'blue'
        },
        {
          leftBg: '#000000',
          rightTopBg: '#333333',
          rightBottomBg: '#555555',
          checked: false,
          themeId: 'dark'
        }
      ]
    }
  },
  methods: {
    openDrawer() {
      this.opened = !this.opened
    },
    exampleClick(item) {
      this.styleExampleList.forEach(it => {
        it.checked = it === item
      })
      this.$store.dispatch('app/changeTheme', item.themeId)
    }
  }
}
</script>

<style lang="scss" scoped>
.set-container {
  position: fixed;
  right: 0;
  top: 0;
  margin-top: calc(50vh - 25px);
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
.el-col + .el-col {
  margin-bottom: 30px;
}
</style>
