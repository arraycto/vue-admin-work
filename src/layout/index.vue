<template>
  <div
    class="app-container"
    :class="[`theme-${themeId}`]"
  >
    <div
      class="side-bar-wrapper side-bar-theme"
      :class="[hiddenSideBar ? 'hiden-side-bar' : 'show-side-bar']"
    >
      <SideBar />
    </div>
    <div
      class="shadow"
      :class="{'close-shadow': hiddenSideBar}"
      :style="hiddenSideBarStyle"
      @click="closeSideBar"
    ></div>
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
  data() {
    return {
      hiddenSideBarStyle: {
        display: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      hiddenSideBar: 'app/isCollapseSideBar',
      themeId: 'app/getTheme'
    })
  },
  watch: {
    hiddenSideBar(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.hiddenSideBarStyle.display = 'none'
        }, 300)
      } else {
        this.hiddenSideBarStyle.display = ''
      }
    }
  },
  methods: {
    closeSideBar() {
      this.$store.dispatch('app/toggleCollapseSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.app-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100vh;
  .side-bar-wrapper {
    height: 100%;
    width: $app-left-menu-width;
    transition: width 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1001;
  }
  .app-main-wrapper {
    position: relative;
    box-sizing: border-box;
    margin-left: $app-left-menu-width;
    transition: margin-left 0.3s;
  }
  .show-side-bar {
    width: $app-left-menu-width;
  }
  @media screen and (max-width: 768px) {
    .hiden-side-bar {
      width: 0 !important;
    }
    .hidden-app-main {
      margin-left: 0;
    }
    .show-app-main {
      margin-left: 0;
    }
    .shadow {
      display: block;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: black;
      opacity: 0.4;
      visibility: visible;
      z-index: 1000;
    }
    .close-shadow {
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    .hidden-app-main {
      margin-left: 54px;
    }
    .hiden-side-bar {
      width: 54px !important;
    }
    .show-app-main {
      margin-left: $app-left-menu-width;
    }
  }
  @media screen and (min-width: 992px) {
    .hidden-app-main {
      margin-left: 54px;
    }
    .show-app-main {
      margin-left: $app-left-menu-width;
    }
    .shadow {
      display: none;
    }
  }
}
</style>
