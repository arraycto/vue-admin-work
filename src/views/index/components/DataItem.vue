<template>
  <el-card :body-style="{padding: '15px'}">
    <div
      slot="header"
      class="flex align-center justify-between"
    >
      <span class="text-black text-bold text-sm">{{ dataModel.title }}</span>
    </div>
    <div
      style="height: 130px"
      class="flex flex-direction justify-between"
    >
      <div class="flex flex-direction justify-center">
        <span class="text-xxl text-black">{{ dataModel.data }}</span>
      </div>
      <div class="flex-sub flex flex-direction justify-center">
        <slot
          name="extra"
          :extra="dataModel.extra"
        ></slot>
      </div>
      <div class="divide"></div>
      <div class="flex justify-between align-center">
        <span class="text-grey text-sm">{{ dataModel.bottomTitle }}</span>
        <span class="text-grey text-sm">{{ dataModel.totalSum }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'DataItem',
  props: {
    dataModel: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.divide {
  margin: 10px 0;
  border-bottom: 1px solid #f5f5f5;
}
</style>
