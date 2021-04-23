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
      <div class="header-layout-wrapper">
        <NavBar
          v-if="showNavBar"
          ref="navBar"
        />
        <TagView
          v-if="showTagView"
          ref="tagView"
        />
      </div>
      <section
        class="main-content-wrapper"
        :style="{'background-color': $styleVariables[`theme_${themeId}_mainBg`],
                 'padding-top': paddingTop + 'px'
        }"
      >
        <AppMain />
      </section>
    </div>
    <Setting />
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import TagView from './components/TagView'
import AppMain from './components/AppMain'
import Setting from '../components/common/Setting'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar,
    TagView,
    AppMain,
    Setting
  },
  data() {
    return {
      hiddenSideBarStyle: {
        display: ''
      },
      paddingTop: parseInt(this.$styleVariables.navBarHeight) + parseInt(this.$styleVariables.tagViewHeight) + 10
    }
  },
  computed: {
    ...mapGetters({
      hiddenSideBar: 'app/isCollapseSideBar',
      themeId: 'app/getTheme',
      isMobileScreen: 'app/isMobileScreen'
    }),
    ...mapState({
      showNavBar: (state) => state.app.showNavBar,
      showTagView: (state) => state.app.showTagView
    })
  },
  watch: {
    showNavBar(newVal) {
      setTimeout(_ => {
        const navBarHeight = this.$refs.navBar ? this.$refs.navBar.$el.getBoundingClientRect().height : 0
        const tagViewHeight = this.$refs.tagView ? this.$refs.tagView.$el.getBoundingClientRect().height : 0
        this.paddingTop = navBarHeight + tagViewHeight + 10
      }, 0)
    },
    showTagView(newVal) {
      setTimeout(_ => {
        const navBarHeight = this.$refs.navBar ? this.$refs.navBar.$el.getBoundingClientRect().height : 0
        const tagViewHeight = this.$refs.tagView ? this.$refs.tagView.$el.getBoundingClientRect().height : 0
        this.paddingTop = navBarHeight + tagViewHeight + 10
      }, 0)
    },
    hiddenSideBar(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.hiddenSideBarStyle.display = 'none'
        }, 300)
      } else {
        this.hiddenSideBarStyle.display = ''
      }
    },
    $route(route) {
      if (this.isMobileScreen && !this.hiddenSideBar) {
        this.$store.dispatch('app/toggleCollapseSideBar')
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
@import "~@/styles/variables.scss";
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
    height: 100%;
    position: relative;
    box-sizing: border-box;
    margin-left: $app-left-menu-width;
    transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    .header-layout-wrapper {
      position: fixed;
      top: 0;
      left: $app-left-menu-width;
      right: 0;
      z-index: 999;
      transition: left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .main-content-wrapper {
      width: 100%;
      height: 100%;
      padding: 5px;
      overflow-x: hidden;
    }
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
      .header-layout-wrapper {
        left: 0;
      }
    }
    .show-app-main {
      margin-left: 0;
      .header-layout-wrapper {
        left: 0;
      }
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
  @media screen and (min-width: 768px) {
    .hidden-app-main {
      margin-left: 54px;
      .header-layout-wrapper {
        left: 54px;
      }
    }
    .hiden-side-bar {
      width: 54px !important;
    }
    .show-app-main {
      margin-left: $app-left-menu-width;
      .header-layout-wrapper {
        left: $app-left-menu-width;
      }
    }
  }
  @media screen and (min-width: 992px) {
    .shadow {
      display: none;
    }
  }
}
</style>
