<template>
  <div class="upload-container">
    <el-upload
      v-if="multiple"
      class="upload-wrapper"
      drag
      :action="action"
      multiple
      :data="extraData"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div
        slot="tip"
        class="el-upload__tip"
      >
        <slot name="tip"></slot>
      </div>
    </el-upload>
    <el-upload
      v-else
      :action="action"
      :show-file-list="false"
      :on-success="handleSingleSuccess"
      :on-error="handleSingleError"
      :data="extraData"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        class="avatar"
      />
      <i
        v-else
        class="el-icon-plus avatar-uploader-icon"
      ></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    action: {
      type: String,
      default: ''
    },
    extraData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      imageUrl: ''
    }
  },
  methods: {
    handleSingleSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    handleSingleError(err, file, fileList) {
      this.$errorMsg(`文件：${file.name} 上传失败：${err}`)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-upload {
  border: 1px dashed #8c939d;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
::v-deep .el-upload:hover {
  border-color: #409eff;
}
.upload-container {
  text-align: center;
  .upload-wrapper {
    width: 100%;
    height: 100%;
  }
  .avatar-uploader-icon {
    font-size: 50px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar-uploader-icon:hover {
    color: #409eff;
  }
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
}
</style>
