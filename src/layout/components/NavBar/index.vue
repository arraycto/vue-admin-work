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
        icon-class="screenfull"
        class="icon-class"
      />
    </div>
    <div class="icon-wrapper">
      <svg-icon
        icon-class="message"
        class="icon-class"
      />
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
@import '~@/styles/variables.scss';
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
}
</style>
