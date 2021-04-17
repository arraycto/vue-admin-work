<template>
  <div class="main-container">
    <el-card :body-style="{padding: '5px'}">
      <template #header>
        <el-link>文章标题</el-link>
      </template>
      <el-input
        class="title-input"
        placeholder="请输入文章标题"
      />
    </el-card>
    <el-card
      :body-style="{padding: '5px'}"
      class="margin-top-xs"
    >
      <template #header>
        <div class="flex">
          <el-link>文章内容</el-link>
          <div class="flex-sub"></div>
          <el-button
            type="primary"
            size="mini"
          >获取HTML</el-button>
          <el-button
            type="warning"
            size="mini"
          >获取JSON</el-button>
        </div>
      </template>
      <RichTextEditor
        ref="richTextEditor"
        :height="400"
      />
    </el-card>
  </div>
</template>

<script>
import RichTextEditor from '@/components/common/RichTextEditor'
export default {
  name: 'RichText',
  components: { RichTextEditor },
  methods: {
    getContent() {
      this.$refs.richTextEditor.getContent()
    }
  }
}
</script>

<style lang="scss" scoped>
.title-input {
  ::v-deep .el-input__inner {
    border: none !important;
  }
}
</style>
