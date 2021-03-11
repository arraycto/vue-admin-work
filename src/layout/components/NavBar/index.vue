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
        :src="avatar"
        class="toolbar-avatar"
      />
    </div>
    <div class="nick-wrapper">
      <el-dropdown @command="handleCommand">
        <span
          class="el-dropdown-link"
          style="cursor: pointer"
        >
          {{ userName }}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">
            <span>
              <i
                class="el-icon-user"
                style="font-size: 18px"
              ></i>
              个人中心
            </span>
          </el-dropdown-item>
          <el-dropdown-item
            divided
            command="logout"
          >
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
      collapse: 'app/isCollapseSideBar',
      avatar: 'user/getAvatar',
      userName: 'user/getUserName'
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
    },
    handleCommand(type) {
      if (type === 'personal') {
        this.$router.push({ name: 'personalCenter' })
      } else if (type === 'logout') {
        this.$router.push({ name: 'personal' })
      }
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
