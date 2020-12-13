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
        <router-link
          v-for="item in visitedRoutes"
          :ref="item.path"
          :key="item.path"
          :to="item.path"
          @click.native="tagClick(item)"
        >
          <el-tag
            :effect="isActive(item) ? 'dark' : 'plain'"
            size="small"
            class="tag-item"
          >
            {{ item.meta.title }}
          </el-tag>
        </router-link>
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
    addRoute() {
      this.$store.dispatch('CacheRoute/addRoute', this.$route)
      this.$nextTick(_ => {
        this.$refs.scrollBar.$refs.wrap.scrollTo({
          behavior: 'smooth',
          left: this.$refs[this.$route.path][0].$el.offsetLeft
        })
      })
    },
    isActive(tempRoute) {
      return tempRoute && tempRoute.path === this.$route.path
    },
    tagClick(item) {
    }
  }
}
</script>

<style lang="scss" scoped>
.tag-view-container {
  position: absolute;
  top: 40px;
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
    }
  }
}
</style>
