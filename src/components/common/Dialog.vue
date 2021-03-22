<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="40%"
  >
    <slot></slot>
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
    show({ autoClose = false, beforeShowAction, onConfirmCallback }) {
      beforeShowAction && beforeShowAction()
      this.autoClose = autoClose
      this.onConfirmCallback = onConfirmCallback
      this.dialogVisible = true
    },
    close(afterAction) {
      this.dialogVisible = false
      afterAction && afterAction()
    },
    toggle() {
      this.dialogVisible = !this.dialogVisible
    },
    onConfirm() {
      if (this.autoClose) {
        this.dialogVisible = false
      }
      this.onConfirmCallback && this.onConfirmCallback()
    }
  }
}
</script>
