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
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    show({ beforeShowAction, beforeResolveAction }) {
      return new Promise((resolve) => {
        beforeShowAction && beforeShowAction()
        this.beforeResolveAction = beforeResolveAction
        this.dialogVisible = true
        this.resolve = resolve
      })
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
      if (this.beforeResolveAction) {
        if (this.beforeResolveAction()) {
          this.resolve && this.resolve()
        }
      } else {
        this.resolve && this.resolve()
      }
    }
  }
}
</script>

<style>
</style>
