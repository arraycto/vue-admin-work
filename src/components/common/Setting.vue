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
      :size="isMobileScreen ? '75%' : '280px'"
    >
      <div class="padding margin-top">
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
        <div class="flex justify-between padding-left padding-right">
          <div
            v-for="(item, index) of primartyColorList"
            :key="index"
            class="color-wrapper"
            :class="{'circle' : item.checked}"
            :style="{'background-color': item.value}"
            @click="colorClick(item)"
          ></div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      isMobileScreen: 'app/isMobileScreen'
    })
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
      // import(`@/assets/theme/${item.name}/index.css`).then((res) => {
      //   console.log(res)
      // })
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
    content: '';
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: rgb(3, 190, 50);
    text-align: center;
  }
}
.example-wrapper + .example-wrapper {
  margin-bottom: 30px;
}
</style>
