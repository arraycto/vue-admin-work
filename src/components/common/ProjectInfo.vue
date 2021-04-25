<template>
  <div class="project-container">
    <el-row class="row-wrapper">
      <el-col :span="6">
        vue
      </el-col>
      <el-col :span="6">
        {{ vueVersion }}
      </el-col>
      <el-col :span="6">
        vuex
      </el-col>
      <el-col :span="6">
        {{ vuexVersion }}
      </el-col>
    </el-row>
    <el-row class="row-wrapper">
      <el-col :span="6">
        vue-router
      </el-col>
      <el-col :span="6">
        {{ vueRouterVersion }}
      </el-col>
      <el-col :span="6">
        echarts
      </el-col>
      <el-col :span="6">
        {{ echartsVersion }}
      </el-col>
    </el-row>
    <el-row class="row-wrapper">
      <el-col :span="6">
        element-ui
      </el-col>
      <el-col :span="6">
        {{ elementVersion }}
      </el-col>
      <el-col :span="6">
        axios
      </el-col>
      <el-col :span="6">
        {{ axiosVersion }}
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ProjectInfo',
  data() {
    return {
      vueVersion: '^' + require('vue/package.json').version,
      vuexVersion: '^' + require('vuex/package.json').version,
      vueRouterVersion: '^' + require('vue-router/package.json').version,
      elementVersion: '^' + require('element-ui/package.json').version,
      echartsVersion: '^' + require('echarts/package.json').version,
      axiosVersion: '^' + require('axios/package.json').version
    }
  }
}
</script>

<style lang="scss" scoped>
.project-container {
  border: 1px solid #ececec;
  .row-wrapper {
    border-bottom: 1px solid #ececec;
    & > div {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(odd) {
      background-color: #f5f5f5;
      color: #333;
      font-size: 14px;
    }
    & > div:nth-child(even) {
      color: #000;
      font-size: 14px;
    }
  }
  & > div.row-wrapper:last-child {
    border: none;
  }
}
</style>
