<template>
  <div class="app-container">
    <div
      class="side-bar-wrapper"
      :class="[hiddenSideBar ? 'hidden-side-bar' : 'show-side-bar']"
    >
      <SideBar />
    </div>
    <div
      class="app-main-wrapper"
      :class="[hiddenSideBar ? 'hidden-app-main' : 'show-app-main']"
    >
      <NavBar />
      <TagView />
      <AppMain />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import TagView from './components/TagView'
import AppMain from './components/AppMain'
import { mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar,
    TagView,
    AppMain
  },
  computed: {
    ...mapGetters({
      hiddenSideBar: 'app/isCollapseSideBar'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
  .side-bar-wrapper {
    height: 100%;
    width: $app-left-menu-width;
    transition: width 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: $menuBg;
    overflow: hidden;
    z-index: 1001;
  }
  .app-main-wrapper {
    margin-left: $app-left-menu-width;
    background-color: #fff;
    transition: margin-left 0.3s;
  }
  .hidden-side-bar {
    width: 54px;
  }
  .hidden-app-main {
    margin-left: 54px;
  }
  .show-side-bar {
    width: $app-left-menu-width;
  }
  .show-app-main {
    margin-left: $app-left-menu-width;
  }
}
</style>
