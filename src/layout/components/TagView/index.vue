<template>
  <div
    ref="tagScollerContainer"
    class="tag-view-container tag-view-theme"
  >
    <!-- <el-scrollbar
      ref="scrollBar"
      style="width: 100%; min-height: 24px"
    >
      <div class="tag-view-content">
        <el-tag
          v-for="item in visitedRoutes"
          :ref="item.path"
          :key="item.path"
          :effect="isActive(item) ? 'dark' : 'plain'"
          size="small"
          class="tag-item"
          :closable="isAffix(item) ? false: true"
          @click="clickRoute(item)"
          @close="removeRoute(item)"
          @contextmenu.native.prevent="onContextMenu(item, $event)"
        >
          {{ item.meta.title }}
        </el-tag>
      </div>
    </el-scrollbar> -->
    <el-tabs
      id="tagViewTab"
      v-model="currentTab"
      type="card"
      class="padding-left-sm padding-right-sm"
      @tab-click="clickRoute"
      @tab-remove="removeRoute"
      @contextmenu.native.prevent="onContextMenu(currentTab, $event)"
    >
      <el-tab-pane
        v-for="item of visitedRoutes"
        :key="item.path"
        :label="item.meta.title"
        :name="item.path"
        :closable="!isAffix(item)"
      />
    </el-tabs>
    <ul
      v-show="showContextMenu"
      class="contex-menu-wrapper"
      :style="contextMenuStyle"
    >
      <li @click="refreshRoute">
        <el-link
          icon="el-icon-refresh"
          :underline="false"
        >刷新页面</el-link>
      </li>
      <li :disabled="showLeftMenu">
        <el-link
          :disabled="showLeftMenu"
          icon="el-icon-back"
          :underline="false"
          @click="closeLeft"
        >关闭左侧</el-link>
      </li>
      <li :disabled="showRightMenu">
        <el-link
          :disabled="showRightMenu"
          icon="el-icon-right"
          :underline="false"
          @click="closeRight"
        >关闭右侧</el-link>
      </li>
      <li>
        <el-link
          icon="el-icon-close"
          :underline="false"
          @click="closeAll"
        >关闭所有</el-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import path from 'path'
export default {
  name: 'TagView',
  data() {
    return {
      currentTab: this.$route.path,
      contextMenuStyle: {
        left: 0,
        top: 0
      },
      showContextMenu: false,
      selectRoute: null,
      showLeftMenu: true,
      showRightMenu: true
    }
  },
  computed: {
    ...mapGetters({
      visitedRoutes: 'router/getVisistedRoute',
      allRoutes: 'user/getRoutes'
    })
  },
  watch: {
    $route(newVal) {
      this.addRoute()
    },
    visitedRoutes() {
      this.$store.dispatch('router/persistentVisitedRoutes')
    },
    showContextMenu(val) {
      if (val) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.initRoute()
    this.addRoute()
  },
  methods: {
    initRoute() {
      const affixRoutes = this.filterAffixRoute(this.allRoutes, '/')
      affixRoutes.forEach((it) => {
        this.$store.dispatch('router/addRoute', it)
      })
      this.$store.dispatch('router/restoreVisitedRoutes')
    },
    filterAffixRoute(tempRoute, basePath) {
      const tmp = []
      tempRoute.forEach((it) => {
        if (!it.hidden && it.meta && it.meta.affix) {
          const tempPath = path.resolve(basePath, it.path)
          tmp.push({
            fullPath: tempPath,
            path: tempPath,
            name: it.name,
            meta: { ...it.meta }
          })
        }
        if (it.children) {
          const result = this.filterAffixRoute(it.children, it.path)
          if (result.length > 0) {
            tmp.push(...result)
          }
        }
      })
      return tmp
    },
    clickRoute(instance) {
      this.$router.push({ path: instance.name })
    },
    addRoute() {
      const { name, path } = this.$route
      if (name) {
        this.currentTab = path
        this.$store.dispatch('router/addRoute', this.$route)
        // this.$nextTick((_) => {
        //   this.$refs.scrollBar && this.$refs.scrollBar.$refs.wrap.scrollTo({
        //     behavior: 'smooth',
        //     left: this.$refs[this.$route.path][0].$el.offsetLeft
        //   })
        // })
      }
    },
    removeRoute(name) {
      const tempRoute = this.visitedRoutes.find((it) => it.path === name)
      this.$store.dispatch('router/removeRoute', tempRoute)
      this.$nextTick((_) => {
        const tmp = this.visitedRoutes.find((it) => {
          return it.path === this.$route.path
        })
        if (!tmp) {
          this.$router.push({
            path: this.visitedRoutes[this.visitedRoutes.length - 1].path
          })
        }
      })
    },
    isAffix(tempRoute) {
      return tempRoute.meta && tempRoute.meta.affix
    },
    isActive(tempRoute) {
      return tempRoute && tempRoute.path === this.$route.path
    },
    isLeftLast(tempRoute) {
      return this.visitedRoutes.indexOf(tempRoute) === 0
    },
    isRightLast(tempRoute) {
      return (
        this.visitedRoutes.indexOf(tempRoute) === this.visitedRoutes.length - 1
      )
    },
    onContextMenu(item, ctx) {
      const { clientX, clientY } = ctx
      const { x } = this.$el.getBoundingClientRect()
      const parentElementRect = document
        .getElementById('tagViewTab')
        .getElementsByClassName('el-tabs__nav is-top')[0]
        .getBoundingClientRect()
      if (clientX < parentElementRect.x) {
        return
      }
      if (clientX > parentElementRect.x + parentElementRect.width) {
        return
      }
      this.selectRoute = null
      this.selectRoute = this.visitedRoutes.find((it) => {
        const { x, width } = document
          .getElementById('tab-' + it.path)
          .getBoundingClientRect()
        if (x < clientX && clientX < x + width) {
          return it
        }
      })
      if (this.selectRoute) {
        this.showLeftMenu = this.isLeftLast(this.selectRoute)
        this.showRightMenu = this.isRightLast(this.selectRoute)
        const screenWidth = document.body.clientWidth
        this.contextMenuStyle.left =
          (clientX + 130 > screenWidth
            ? clientX - 130 - x - 15
            : clientX - x + 15) + 'px'
        this.contextMenuStyle.top = clientY + 'px'
        this.showContextMenu = true
      }
    },
    closeMenu() {
      this.showContextMenu = false
    },
    refreshRoute(item) {
      this.$router.replace({ path: '/redirect' + this.$route.path })
    },
    closeLeft() {
      if (!this.selectRoute) {
        return
      }
      this.$store
        .dispatch('router/delLeftRoute', this.selectRoute)
        .then((_) => {
          this.$nextTick((_) => {
            if (!this.isActive(this.selectRoute)) {
              this.$router.push({ path: this.selectRoute.path })
            }
          })
        })
    },
    closeRight() {
      if (!this.selectRoute) {
        return
      }
      this.$store
        .dispatch('router/delRightRoute', this.selectRoute)
        .then((_) => {
          this.$nextTick((_) => {
            if (!this.isActive(this.selectRoute)) {
              this.$router.push({ path: this.selectRoute.path })
            }
          })
        })
    },
    closeAll() {
      this.$store.dispatch('router/delAllRoute', this.selectRoute).then((_) => {
        this.$nextTick((_) => {
          this.$router.push({ path: this.visitedRoutes[0].path })
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.tag-view-container {
  box-shadow: 0 10px 10px -10px #d0d0d0;
  height: $tagViewHeight;
  line-height: $tagViewHeight;
  white-space: nowrap;
  z-index: 10;
  background-color: #f5f7f9;
  ::v-deep {
    .el-tabs__header {
      margin: 0 !important;
      border-bottom: none !important;
    }
    .el-tabs--card > .el-tabs__header {
      .el-tabs__nav {
        border: none !important;
      }
      .el-tabs__item {
        border-left: none !important;
        background-color: #ffffff;
        height: calc(#{$tagViewHeight} - 10px);
        line-height: calc(#{$tagViewHeight} - 10px);
        border-radius: 2px;
      }
      .is-focus {
        box-shadow: none !important;
        border: none !important;
      }
    }

    .el-tabs__item + .el-tabs__item {
      margin-left: 5px;
    }
  }
  .tag-view-content {
    .tag-item {
      margin-right: 5px;
    }
    ::v-deep {
      .el-tag {
        border-radius: 0 !important;
      }
      .el-tag:hover {
        cursor: pointer;
      }
      .el-tag--small {
        padding: 0 5px;
      }
      .el-icon-close {
        right: 0;
      }
    }
  }
  .contex-menu-wrapper {
    position: absolute;
    width: 130px;
    z-index: 9999;
    list-style: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    background-color: white;
    padding-left: 0;
    & > li {
      width: 100%;
      line-height: 40px;
      padding-left: 15px;
    }
    & > li:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
