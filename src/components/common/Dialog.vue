<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%"
  >
    <div>这是一段信息</div>
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
        @click="dialogVisible = false"
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
    }
  }
}
</script>

<style>
</style>
