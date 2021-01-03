<template>
  <div class="main-container">
    <MarkdownEditor
      ref="markdownEditor"
      :initial-value="editorText"
      :options="editorOptions"
      height="500px"
      initial-edit-type="markdown"
      preview-style="vertical"
    />
    <el-button @click="getHTML">getHTML</el-button>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor as MarkdownEditor } from '@toast-ui/vue-editor'
export default {
  name: 'Markdown',
  components: {
    MarkdownEditor
  },
  data() {
    return {
      editorText: '# This is markdown editor.\n Hello World.',
      editorOptions: {
        usageStatistics: false,
        hideModeSwitch: false
      }
    }
  },
  methods: {
    getHTML() {
      const html = this.$refs.markdownEditor.invoke('getHtml')
      console.log(html)
    }
  }
}
</script>

<style>
</style>
