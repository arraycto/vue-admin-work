<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
  />
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    show() {
      this.dialogVisible = true
    },
    close() {
      this.dialogVisible = false
    },
    toggle() {
      this.dialogVisible = !this.dialogVisible
    }
  }
}
</script>

<style>
</style>
