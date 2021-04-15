<template>
  <div class="main-container">
    <el-card
      :body-style="{padding: '5px'}"
      shadow="hover"
    >
      <el-steps
        :active="activeStep"
        align-center
        class="steps-wrapper"
      >
        <el-step title="填写转账信息" />
        <el-step title="确认转账信息" />
        <el-step title="完成" />
      </el-steps>
    </el-card>
    <el-card
      :body-style="{padding: '5px'}"
      shadow="hover"
      class="margin-top-xs"
    >
      <div class="title text-center padding">请填写转账信息</div>
      <el-form
        :model="accountInfo"
        label-width="120px"
        class="form-wrapper"
        size="small"
      >
        <el-form-item label="付款账户：">
          <el-select
            v-model="accountInfo.account"
            placeholder="请输入付款账户"
            style="width: 100%"
          >
            <el-option
              label="vue-admin-work@work.com"
              :value="accountInfo.account"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="收款账户：">
          <el-input
            v-model="accountInfo.otherAccount"
            placeholder="请输入收款账户"
            class="input-with-select"
          >
            <el-select
              slot="prepend"
              v-model="accountInfo.type"
              placeholder="请选择"
            >
              <el-option
                v-for="item of accountInfo.types"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="收款人姓名：">
          <el-input
            v-model="accountInfo.receiveName"
            placeholder="请输入收款人姓名"
          />
        </el-form-item>
        <el-form-item label="转账金额：">
          <el-input
            v-model="accountInfo.receiveName"
            placeholder="请输入转账金额"
          />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'StepForm',
  data() {
    return {
      activeStep: 1,
      accountInfo: {
        account: 'vue-admin-work@work.com',
        otherAccount: '',
        receiveName: '',
        type: 0,
        types: [
          {
            label: '微信',
            value: 0
          },
          {
            label: '支付宝',
            value: 1
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-step__title {
  font-size: 14px;
}
::v-deep .input-with-select .el-input-group__prepend {
  background-color: #fff;
  width: 90px;
}
@media screen and (max-width: 768px) {
  .steps-wrapper {
    width: 100%;
    margin: 0 auto;
  }
  .form-wrapper {
    width: 90%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 768px) {
  .steps-wrapper {
    width: 60%;
    margin: 0 auto;
  }
  .form-wrapper {
    width: 50%;
    margin: 0 auto;
  }
}
</style>
