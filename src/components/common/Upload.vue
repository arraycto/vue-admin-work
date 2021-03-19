<template>
  <div class="upload-container">
    <el-upload
      v-if="multiple"
      class="upload-wrapper"
      drag
      :action="action"
      multiple
      :data="extraData"
      :headers="headers"
      :on-success="handleMultipleSuccess"
      :on-error="handleMultipleError"
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
      :headers="headers"
      :name="singleFileName"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        class="single"
        :style="singleStyle"
      />
      <i
        v-else
        class="el-icon-plus single-uploader-icon"
        :style="singleStyle"
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
    singleImagePath: {
      type: String,
      default: ''
    },
    singleStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    singleFileName: {
      type: String,
      default: 'file'
    }
  },
  data() {
    return {
      imageUrl: this.singleImagePath
    }
  },
  methods: {
    handleSingleSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.$emit('onSingleSuccess', res)
    },
    handleSingleError(err, file, fileList) {
      this.$errorMsg(`文件：${file.name} 上传失败：${err}`)
    },
    handleMultipleSuccess(res, file, fileList) {
      console.log(res)
      console.log(file)
      console.log(fileList)
    },
    handleMultipleError(err, file, fileList) {
      console.log(err)
      console.log(file)
      console.log(fileList)
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
