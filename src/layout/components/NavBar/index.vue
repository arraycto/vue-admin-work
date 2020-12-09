<template>
  <div class="nav-bar-container">
    <Hamburger :is-open="collapse" />
    <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div />
  </div>
</template>

<script>
import Hamburger from '../Hamburger'
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  components: {
    Hamburger
  },
  computed: {
    ...mapGetters({
      collapse: 'app/isCollapseSideBar'
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.nav-bar-container {
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0,21,41,0.08);
  .breadcrumb{
    margin-left: 10px;
  }
}
</style>
