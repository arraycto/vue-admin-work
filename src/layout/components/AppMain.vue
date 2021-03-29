<template>
  <div class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      cachedViews: []
    }
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
$top: $navBarHeight + 35;
.app-main {
  position: absolute;
  top: $top;
  left: 0;
  right: 0;
  overflow-y: hidden;
  height: calc(100vh - #{$top});
  width: 100%;
  background-color: #f5f5f5;
  padding: 5px;
  overflow-x: hidden;
}
</style>
