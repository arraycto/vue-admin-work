<template>
  <div class="logo-container logo-border-bottom flex justify-center align-center">
    <img :src="require('@/assets/work_logo.png')" />
    <transition name="el-fade-in-linear">
      <span
        v-show="!collapse"
        class="margin-left-xs text-bold"
      >vue-admin-work</span>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Logo',
  computed: {
    ...mapGetters({
      collapse: 'app/isCollapseSideBar'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
.logo-container {
  height: 50px;
  line-height: 50px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  font-size: 18px;
  & > img {
    width: 30px;
  }
}
.theme-dark .logo-container {
  color: #fff;
}
</style>
