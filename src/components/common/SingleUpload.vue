<template>
  <div class="upload-container">
    <el-upload
      :action="action"
      :show-file-list="false"
      :on-success="handleSingleSuccess"
      :on-error="handleSingleError"
      :data="extraData"
      :headers="headers"
      :name="fileName"
      :before-upload="beforeUpload"
    >
      <img
        v-if="imagePath"
        :src="imagePath"
        class="single"
        :style="extraStyle"
      />
      <i
        v-else
        class="el-icon-plus single-uploader-icon"
        :style="extraStyle"
      ></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'SingleUpload',
  props: {
    action: {
      type: String,
      default: ''
    },
    headers: {
      type: Object,
      default: () => {
        return {}
      }
    },
    extraData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    imagePath: {
      type: String,
      default: ''
    },
    extraStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    fileName: {
      type: String,
      default: 'file'
    },
    beforeUpload: {
      type: Function,
      default: function () {}
    }
  },
  methods: {
    handleSingleSuccess(res, file) {
      this.$emit('onSingleSuccess', { res, file })
    },
    handleSingleError(err, file) {
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
  .single-uploader-icon {
    font-size: 50px;
    color: #8c939d;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .single-uploader-icon:hover {
    color: #409eff;
  }
  .single {
    width: 150px;
    height: 150px;
    display: block;
  }
}
</style>
