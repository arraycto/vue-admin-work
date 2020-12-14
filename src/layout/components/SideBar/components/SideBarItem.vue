<template>
  <div class="side-bar-item-container">
    <router-link
      v-if="hasNoChild()"
      :to="resolvePath(routeItem.path)"
    >
      <el-menu-item
        :index="resolvePath(routeItem.path)"
        :class="{'hiden-side-bar' : isCollapse}"
      >
        <svg-icon :icon-class="(routeItem.meta && routeItem.meta.icon) || 'sub-menu'" />
        <span class="item-title">{{ routeItem.meta && routeItem.meta.title }}</span>
      </el-menu-item>
    </router-link>
    <el-submenu
      v-else
      :index="resolvePath(routeItem.path)"
      popper-append-to-body
      :class="{'hiden-side-bar' : isCollapse}"
    >
      <template slot="title">
        <svg-icon :icon-class="(routeItem.meta && routeItem.meta.icon) || 'menu'" />
        <span
          slot="title"
          class="item-title"
        >{{ routeItem.meta && routeItem.meta.title }}</span>
      </template>
      <SideBarItem
        v-for="child of routeItem.children"
        :key="child.path"
        :route-item="child"
        :base-path="resolvePath(routeItem.path)"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters({
      isCollapse: 'app/isCollapseSideBar'
    })
  },
  methods: {
    hasNoChild() {
      if (!this.routeItem) {
        return true
      }
      if (this.routeItem.children && this.routeItem.children.length > 0) {
        const tempRoutes = this.routeItem.children.filter(it => {
          return !it.hidden
        })
        if (tempRoutes.length === 0) {
          return true
        }
        if (tempRoutes.length === 1 && !tempRoutes[0].path) {
          return true
        }
        return false
      }
      return true
    },
    resolvePath(tempPath) {
      return path.resolve(this.basePath, tempPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-item-container {
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
  .item-title {
    margin-left: 15px;
  }
}
</style>
