<template>
  <div class="set-container">
    <div
      class="tip-wrapper bg1 flex flex-direction justify-center align-center"
      @click="$emit('show-notice')"
    >
      <i class="el-icon-service"></i>
      <div>
        获取源码
      </div>
    </div>
    <div
      class="tip-wrapper bg2 flex flex-direction justify-center align-center"
      @click="openDrawer"
    >
      <i class="el-icon-s-tools"></i>
      <div>
        应用配置
      </div>
    </div>
    <el-drawer
      :visible.sync="opened"
      :with-header="false"
      direction="rtl"
      :size="isMobileScreen ? '75%' : '280px'"
    >
      <div class="wrapper padding margin-top">
        <div
          class="close-wrapper"
          @click="opened = false"
        >
          <i class="el-icon-close"></i>
        </div>
        <el-divider content-position="center">主题风格设置</el-divider>
        <el-row :gutter="5">
          <el-col
            v-for="(item, index) of styleExampleList"
            :key="index"
            :span="8"
            class="example-wrapper"
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
        <div class="flex justify-between padding-left padding-right padding-bottom">
          <div
            v-for="(item, index) of primartyColorList"
            :key="index"
            class="color-wrapper"
            :class="{'circle' : item.checked}"
            :style="{'background-color': item.value}"
            @click="colorClick(item)"
          ></div>
        </div>
        <el-divider content-position="center">内容区域设置</el-divider>
        <div class="flex justify-between padding-tb-sm">
          <span class="text-black">头部LOGO</span>
          <el-switch v-model="showLogo" />
        </div>
        <div class="flex justify-between padding-tb-sm">
          <span class="text-black">导航条</span>
          <el-switch v-model="showNavBar" />
        </div>
        <div class="flex justify-between padding-tb-sm">
          <span class="text-black">状态栏</span>
          <el-switch v-model="showTagView" />
        </div>
        <div class="flex justify-between padding-tb-sm">
          <span class="text-black">搜索</span>
          <el-switch v-model="showSearchBar" />
        </div>
        <div class="flex justify-between padding-tb-sm">
          <span class="text-black">消息</span>
          <el-switch v-model="showMessageBar" />
        </div>
        <div class="flex justify-between padding-tb-sm">
          <span class="text-black">全屏</span>
          <el-switch v-model="showFullScreenBar" />
        </div>
        <el-divider />
        <Contact style="margin-bottom: 25%" />
        <div class="footer">
          <PageFooter :show-logo="false" />
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StyleExample from './StyleExample'
import Contact from './Contact'
import PageFooter from '@/layout/components/Footer'
import '@/assets/theme/black/index.css'
import '@/assets/theme/red/index.css'
import '@/assets/theme/purple/index.css'
import '@/assets/theme/cyan/index.css'
import '@/assets/theme/blue/index.css'
import { toggleClass } from '@/utils/utils'
export default {
  name: 'Setting',
  components: {
    StyleExample,
    Contact,
    PageFooter
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
      ],
      primartyColorList: [
        {
          name: 'blue',
          value: '#409eff',
          checked: true
        },
        {
          name: 'black',
          value: '#0A243E',
          checked: false
        },
        {
          name: 'cyan',
          value: '#13C2C2',
          checked: false
        },
        {
          name: 'red',
          value: '#F5222D',
          checked: false
        },
        {
          name: 'purple',
          value: '#722ED1',
          checked: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      isMobileScreen: 'app/isMobileScreen',
      themeId: 'app/getTheme'
    }),
    showLogo: {
      get() {
        return this.$store.state.app.showLogo
      },
      set(val) {
        this.$store.dispatch('app/toggleComponent', {
          name: 'showLogo',
          state: val
        })
      }
    },
    showSearchBar: {
      get() {
        return this.$store.state.app.showSearchBar
      },
      set(val) {
        this.$store.dispatch('app/toggleComponent', {
          name: 'showSearchBar',
          state: val
        })
      }
    },
    showTagView: {
      get() {
        return this.$store.state.app.showTagView
      },
      set(val) {
        this.$store.dispatch('app/toggleComponent', {
          name: 'showTagView',
          state: val
        })
      }
    },
    showNavBar: {
      get() {
        return this.$store.state.app.showNavBar
      },
      set(val) {
        this.$store.dispatch('app/toggleComponent', {
          name: 'showNavBar',
          state: val
        })
      }
    },
    showMessageBar: {
      get() {
        return this.$store.state.app.showMessageBar
      },
      set(val) {
        this.$store.dispatch('app/toggleComponent', {
          name: 'showMessageBar',
          state: val
        })
      }
    },
    showFullScreenBar: {
      get() {
        return this.$store.state.app.showFullScreenBar
      },
      set(val) {
        this.$store.dispatch('app/toggleComponent', {
          name: 'showFullScreenBar',
          state: val
        })
      }
    }
  },
  methods: {
    openDrawer() {
      this.opened = !this.opened
    },
    exampleClick(item) {
      this.styleExampleList.forEach((it) => {
        it.checked = it === item
      })
      this.$store.dispatch('app/changeTheme', item.themeId)
    },
    colorClick(item) {
      this.primartyColorList.forEach((it) => {
        it.checked = it === item
      })
      toggleClass(document.body, 'theme_color_' + item.name)
    }
  }
}
</script>

<style lang="scss" scoped>
$width: 60px;
.set-container {
  position: fixed;
  right: 0;
  top: 0;
  margin-top: calc(50vh - 50px);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 5px;
  .tip-wrapper {
    width: $width;
    height: $width;
    border-radius: 4px;
    font-size: 10px;
    transition: color 0.15s ease, background-color 0.15s ease;
    & > i {
      font-size: 20px;
      margin-bottom: 8px;
    }
  }
  .tip-wrapper + .tip-wrapper {
    margin-top: 10px;
  }
  .bg1 {
    background-color: #e8f9f8;
    color: #1bc3bb;
  }
  .bg1:hover {
    background-color: #1bc3bb;
    color: #ffffff;
  }
  .bg2 {
    background-color: #ebf5ff;
    color: #3698fd;
  }
  .bg2:hover {
    background-color: #3698fd;
    color: #ffffff;
  }
  .wrapper {
    height: 100vh;
    overflow: auto;
    .close-wrapper {
      position: absolute;
      right: 5%;
      top: 1%;
      font-size: 20px;
    }
    .color-wrapper {
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #c1c1c1;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    .circle::after {
      content: "";
      display: block;
      margin: 0 auto;
      margin-top: 25px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgb(3, 190, 50);
      text-align: center;
    }
    .footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
.example-wrapper + .example-wrapper {
  margin-bottom: 30px;
}
</style>
