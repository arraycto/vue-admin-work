<template>
  <div class="main-container">
    <el-card
      :body-style="{ padding: 0 }"
      shadow="never"
      class="container"
    >
      <div class="text-center"><i class="el-icon-error icon"></i></div>
      <div class="result">
        提交失败
      </div>
      <div class="tip">
        请核对并修改以下信息后，再重新提交。
      </div>
      <div class="text-center reason">
        <div class="title">您提交的内容有如下错误：</div>
        <div class="reason-item"><i class="el-icon-circle-close text-red margin-right-xs"></i>您的账户已被冻结
          <el-link
            :underline="false"
            type="primary"
            class="margin-left"
          >立即解冻<i class="el-icon-arrow-right"></i></el-link>
        </div>
        <div class="reason-item"><i class="el-icon-circle-close text-red margin-right-xs"></i>您的账户还不具备申请资格
          <el-link
            :underline="false"
            type="primary"
            class="margin-left"
          >立即升级<i class="el-icon-arrow-right"></i></el-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Fail'
}
</script>

<style lang="scss" scoped>
.container {
  height: calc(100vh - 49px - 55px);
  padding: 50px;
  .icon {
    color: #ed4014;
    font-size: 100px;
    margin: 30px 0;
  }
  .result {
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
    line-height: 1.8;
    text-align: center;
  }
  .tip {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.6;
    text-align: center;
  }
  .reason {
    padding: 24px 40px;
    text-align: left;
    background: #f8f8f9;
    border-radius: 4px;
    margin-top: 30px;
    .title {
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 16px;
    }
    .reason-item {
      color: rgba(0, 0, 0, 0.55);
      font-size: 14px;
    }
    .reason-item + .reason-item {
      margin-top: 15px;
    }
  }
}
</style>

