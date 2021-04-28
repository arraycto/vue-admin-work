<template>
  <el-dialog
    :title="innerTitle"
    :visible.sync="dialogVisible"
    :width="isMobileScreen ? '85%' : '45%'"
  >
    <div class="content-wrapper">
      <slot></slot>
    </div>
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
import { mapGetters } from 'vuex'
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    }
  },
  data() {
    return {
      dialogVisible: false,
      innerTitle: this.title
    }
  },
  computed: {
    ...mapGetters({
      isMobileScreen: 'app/isMobileScreen'
    })
  },
  methods: {
    show(config = {}) {
      config.beforeShowAction && config.beforeShowAction()
      this.autoClose = config.autoClose || false
      this.innerTitle = config.innerTitle || this.title || '提示'
      this.onConfirmCallback = config.onConfirmCallback
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

<style lang="scss" scoped>
.content-wrapper {
  max-height: 50vh;
  padding: 0 10px;
  overflow: auto;
}
</style>
