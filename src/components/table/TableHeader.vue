<template>
  <div
    id="tableHeaderContainer"
    class="table-header-container"
  >
    <el-card
      :body-style="{padding: '0px'}"
      shadow="hover"
    >
      <div
        slot="header"
        class="wrapper"
      >
        <el-link
          :underline="false"
          @click="collapsed"
        >{{ title }}
          <i :class="showSearchContent ? 'el-icon-caret-bottom' : 'el-icon-caret-top'" />
        </el-link>
        <div class="left-wrapper">
          <slot name="left" />
        </div>
        <div class="flex-sub" />
        <div class="right-wrapper">
          <slot name="right" />
        </div>
      </div>
      <el-collapse-transition>
        <div v-if="showSearchContent">
          123456
        </div>
      </el-collapse-transition>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TableHeader',
  props: {
    title: {
      type: String,
      default: '列表数据'
    }
  },
  data() {
    return {
      showSearchContent: true
    }
  },
  mounted() {
    this.$store.dispatch('app/setTableHeaderHeight', document.getElementById('tableHeaderContainer').offsetHeight)
  },
  methods: {
    collapsed() {
      this.showSearchContent = !this.showSearchContent
      // 等动画执行完成，再获取高度，否则获取的高度是不准确的
      setTimeout(_ => {
        this.$store.dispatch('app/setTableHeaderHeight', document.getElementById('tableHeaderContainer').offsetHeight)
      }, 350)
    }
  }
}
</script>

<style lang="scss" scoped>
.table-header-container {
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    .left-wrapper {
      margin-left: 5px;
    }
  }
}
</style>
