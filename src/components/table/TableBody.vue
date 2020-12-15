<template>
  <el-card
    :body-style="{padding: 0}"
    class="table-container"
    :style="cardStyle"
  >
    <slot name="table" />
  </el-card>
</template>

<script>
import TableBodyMixin from '@/mixins/TableBodyMixin'
export default {
  name: 'TableBody',
  mixins: [TableBodyMixin]
}
</script>

<style lang="scss" scoped>
</style>
