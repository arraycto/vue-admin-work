<template>
  <div class="logo-container">vue-admin-work</div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.logo-container {
  height: 50px;
  line-height: 50px;
  background-color: $menuDarkBg;
  color: #ffffff;
  text-align: center;
  overflow: hidden;
}
</style>
