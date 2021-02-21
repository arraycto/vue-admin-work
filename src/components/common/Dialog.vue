<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="40%"
  >
    <slot name="body"></slot>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        size="mini"
        @click="dialogVisible = false"
      >取 消</el-button>
      <el-button
        type="primary"
        size="mini"
        @click="onConfirm"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    }
  },
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
    },
    onConfirm() {
      if (this.$parent && this.$parent.onDialogConfirm) {
        if (this.$parent.onDialogConfirm() !== false) {
          this.dialogVisible = false
        }
      } else {
        this.$emit('onDialogConfirm')
      }
    }
  }
}
</script>

<style>
</style>
