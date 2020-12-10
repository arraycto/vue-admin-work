<template>
  <div class="side-bar-container">
    <Logo />
    <el-scrollbar style="height:100%">
      <el-menu
        mode="vertical"
        :collapse="collapse"
        :background-color="variables.menuBg"
        text-color="#ffffff"
        :unique-opened="false"
        :collapse-transition="false"
      >
        <template v-for="item of routes">
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
    variables() {
      return variables
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
