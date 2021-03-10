<template>
  <div class="nav-bar-container">
    <Hamburger :is-open="collapse" />
    <el-breadcrumb
      class="breadcrumb"
      separator-class="el-icon-arrow-right"
    >
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-for="item of breadcrumbs"
          :key="item.path"
        >
          <span class="breadcrumb-title">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <div class="flex-sub"></div>
    <div class="icon-wrapper">
      <svg-icon
        icon-class="search"
        class="icon-class"
      />
    </div>
    <div class="icon-wrapper">
      <svg-icon
        icon-class="message"
        class="icon-class"
      />
    </div>
    <div
      class="icon-wrapper"
      @click="onScreenFull"
    >
      <svg-icon
        icon-class="screenfull"
        class="icon-class"
      />
    </div>
    <div class="avatar-wrapper">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2017%2F1226%2F3b0685e61c1ae93065e5f45a7348058e41f1c671_size1091_w700_h656.gif&refer=http%3A%2F%2Fd.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617935122&t=37e2a9aa01824978dc36373f168ae76e"
        class="toolbar-avatar"
      />
    </div>
    <div class="nick-wrapper">
      <el-dropdown>
        <span class="el-dropdown-link">
          admin<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span>
              <i
                class="el-icon-user"
                style="font-size: 18px"
              ></i>
              个人中心
            </span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span>
              <i
                class="el-icon-switch-button"
                style="font-size: 18px"
              ></i>
              退出登录
            </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from '../Hamburger'
import { mapGetters } from 'vuex'
import screenfull from 'screenfull'
export default {
  name: 'NavBar',
  components: {
    Hamburger
  },
  data() {
    return {
      breadcrumbs: []
    }
  },
  computed: {
    ...mapGetters({
      collapse: 'app/isCollapseSideBar'
    })
  },
  watch: {
    $route(newVal) {
      this.generateBreadcrumb()
    }
  },
  created() {
    this.generateBreadcrumb()
  },
  methods: {
    generateBreadcrumb() {
      this.breadcrumbs = this.$route.matched.filter((it) => {
        return it.meta && it.meta.title
      })
    },
    onScreenFull() {
      if (!screenfull.isEnabled) {
        this.$errorMsg('当前浏览器不支持全屏操作')
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.nav-bar-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  padding: 10px;
  height: $navBarHeight;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .breadcrumb {
    margin-left: 10px;
    .breadcrumb-title {
      font-size: 14px;
      color: #666666;
    }
  }
  .icon-wrapper {
    display: inline-block;
    width: 2.5rem;
    color: #333;
    .icon-class {
      font-size: 1.3rem;
    }
  }
  .avatar-wrapper {
    width: 2.2rem;
    height: 2.2rem;
    margin-left: 0.4rem;
    .toolbar-avatar {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
  .nick-wrapper {
    margin-left: 0.4rem;
    color: #333333;
    .arrow {
      transform: rotate(0deg);
      transition: transform 0.3s;
    }
    .arrow:hover {
      transform: rotate(180deg);
    }
  }
}
</style>
