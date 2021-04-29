<template>
  <transition
    name="fade-transform"
    mode="out-in"
  >
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.router.cachedRoute
    },
    key() {
      return this.$route.path
    }
  }
}
</script>
