<template>
  <div class="table-header-container">
    <el-card
      :body-style="{padding: '0px'}"
      shadow="hover"
    >
      <div
        slot="header"
        class="wrapper"
      >
        <span>{{ title }}</span>
        <div class="left-wrapper">
          <slot name="left" />
        </div>
        <div class="flex-sub" />
        <div class="right-wrapper">
          <slot name="right" />
        </div>
      </div>
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
