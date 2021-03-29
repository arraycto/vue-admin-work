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
  color: #ffffff;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
