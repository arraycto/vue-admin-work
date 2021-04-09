<template>
  <div class="side-bar-container">
    <Logo />
    <el-scrollbar
      style="height:100%"
      wrap-class="scrollbar-wrapper"
    >
      <el-menu
        :default-active="routePath"
        mode="vertical"
        :collapse="collapse"
        :background-color="variables[`theme${themeId}_menuBg`]"
        :text-color="variables[`theme${themeId}_menuColor`]"
        :unique-opened="false"
        :collapse-transition="false"
        @select="onPathSelect"
      >
        <template v-for="item of filterRoutes">
          <SideBarItem
            :key="item.path"
            :route-item="item"
            :base-path="item.path"
          />
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import Logo from './logo'
import SideBarItem from './components/SideBarItem'
export default {
  name: 'SideBar',
  components: {
    Logo,
    SideBarItem
  },
  computed: {
    ...mapGetters({
      collapse: 'app/isCollapseSideBar',
      themeId: 'app/getTheme',
      routes: 'user/getRoutes'
    }),
    filterRoutes() {
      return this.routes.filter(it => !it.hidden)
    },
    variables() {
      return variables
    },
    routePath() {
      return this.$route.path
    }
  },
  methods: {
    onPathSelect() {
      if (this.$isMobile) {
        this.$store.dispatch('app/closeCollapseSideBar')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.side-bar-container {
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.title {
  margin-left: 10px;
}
</style>
