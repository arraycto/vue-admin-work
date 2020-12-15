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
$top: 75px;
.app-main {
  position: absolute;
  top: $top;
  left: 0;
  right: 0;
  overflow-y: scroll;
  height: calc(100vh - #{$top});
  width: 100%;
  background-color: #f5f5f5;
  overflow-x: hidden;
}
</style>
