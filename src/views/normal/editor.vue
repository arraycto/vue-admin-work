<template>
  <div class="level-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Editor'
}
</script>

<style lang="scss" scoped>
.level-container {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
