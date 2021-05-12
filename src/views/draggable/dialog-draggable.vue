<template>
  <div class="main-container">
    <div
      class="bg-white flex justify-center align-center"
      style="height: 100%"
    >
      <el-button
        type="primary"
        size="small"
        @click="$refs.dialog.show()"
      >打开拖拽对话框</el-button>
    </div>
    <Dialog
      ref="dialog"
      v-draggable
    >
      <template>
        <div>12</div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import draggable from '@/directive/draggable'
export default {
  name: 'DialogDraggable',
  directives: { draggable }
}
</script>

<style lang="scss" scoped>
</style>
