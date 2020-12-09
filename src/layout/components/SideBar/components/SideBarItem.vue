<template>
  <div class="side-bar-item-container">
    <router-link :to="{ path: resolvePath(routeItem.path) }">
      <el-menu-item :index="routeItem.path">
        <svg-icon icon-class="chat" />
        <span class="title">{{ routeItem.meta.title }}</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SideBarItem',
  props: {
    routeItem: {
      type: Object,
      require: true,
      default: null
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    resolvePath(temPath) {
      return path.resolve(this.basePath, temPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-item-container{
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  .title{
    margin-left: 15px;
  }
}
</style>
