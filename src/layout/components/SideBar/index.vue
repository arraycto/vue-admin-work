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
        :background-color="variables.menuBg"
        text-color="#bfcbd9"
        :unique-opened="false"
        :collapse-transition="false"
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
import { routes } from '@/router/index'
export default {
  name: 'SideBar',
  components: {
    Logo,
    SideBarItem
  },
  data() {
    return {
      routes
    }
  },
  computed: {
    ...mapGetters({
      collapse: 'app/isCollapseSideBar'
    }),
    filterRoutes() {
      return routes.filter(it => !it.hidden)
    },
    variables() {
      return variables
    },
    routePath() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.side-bar-container {
  height: 100%;
  box-sizing: border-box;
}
.title {
  margin-left: 10px;
}
</style>
