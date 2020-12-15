<template>
  <div
    ref="tagScollerContainer"
    class="tag-view-container"
  >
    <el-scrollbar
      ref="scrollBar"
      style="width: 100%"
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
        >
          {{ item.meta.title }}
        </el-tag>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
// import BScroll from '@better-scroll/core'
import { mapGetters } from 'vuex'
import { routes } from '@/router'
import path from 'path'
export default {
  name: 'TagView',
  computed: {
    ...mapGetters({
      visitedRoutes: 'CacheRoute/getVisistedRoute'
    })
  },
  watch: {
    $route(newVal) {
      this.addRoute()
    }
  },
  mounted() {
    this.initRoute()
    this.addRoute()
    // new BScroll(this.$refs.tagScollerContainer, {
    //   scrollX: true,
    //   probeType: 3,
    //   freeScroll: true
    // })
  },
  methods: {
    initRoute() {
      const affixRoutes = this.filterAffixRoute(routes, '/')
      affixRoutes.forEach(it => {
        this.$store.dispatch('CacheRoute/addRoute', it)
      })
    },
    filterAffixRoute(tempRoute, basePath) {
      const tmp = []
      tempRoute.forEach(it => {
        if (it.meta && it.meta.affix) {
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
    clickRoute(tempRoute) {
      this.$router.push({ path: tempRoute.path })
    },
    addRoute() {
      this.$store.dispatch('CacheRoute/addRoute', this.$route)
      this.$nextTick(_ => {
        this.$refs.scrollBar.$refs.wrap.scrollTo({
          behavior: 'smooth',
          left: this.$refs[this.$route.path][0].$el.offsetLeft
        })
      })
    },
    removeRoute(tempRoute) {
      this.$store.dispatch('CacheRoute/removeRoute', tempRoute)
      this.$nextTick(_ => {
        const tmp = this.visitedRoutes.find(it => {
          return it.path === this.$route.path
        })
        if (!tmp) {
          this.$router.push({ path: this.visitedRoutes[this.visitedRoutes.length - 1].path })
        }
      })
    },
    isAffix(tempRoute) {
      return tempRoute.meta && tempRoute.meta.affix
    },
    isActive(tempRoute) {
      return tempRoute && tempRoute.path === this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-view-container {
  position: absolute;
  top: 38px;
  left: 0;
  right: 0;
  padding: 5px 10px;
  background-color: #fff;
  border-bottom: #f5f5f5 solid 1px;
  white-space: nowrap;
  overflow: hidden;
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
}
</style>
