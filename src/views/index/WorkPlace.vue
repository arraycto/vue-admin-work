<template>
  <div class="main-container">
    <el-card
      :body-style="{padding: '10px'}"
      shadow="hover"
    >
      <div class="text-bold text-xl text-black">工作台</div>
      <div class="flex margin-top">
        <div class="avatar-wrapper">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2017%2F1226%2F3b0685e61c1ae93065e5f45a7348058e41f1c671_size1091_w700_h656.gif&refer=http%3A%2F%2Fd.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617935122&t=37e2a9aa01824978dc36373f168ae76e" />
        </div>
        <div class="flex flex-direction justify-around margin-left">
          <div class="text-black text-xl">早上好，Andy，青春只有一次，别让自己过得不精彩</div>
          <div class="text-grey text-sm"><i class="el-icon-heavy-rain"></i> 今日有小雨，出门别忘记带伞哦~</div>
        </div>
        <div class="flex-sub"></div>
        <div class="flex flex-direction justify-around align-end item-action">
          <div class="text-gray">项目数</div>
          <div class="text-xl">12</div>
        </div>
        <div class="flex flex-direction justify-around align-end item-action">
          <div class="text-gray">待办项</div>
          <div class="text-xl">3/20</div>
        </div>
        <div class="flex flex-direction justify-around align-end item-action">
          <div class="text-gray">当前日期</div>
          <div class="text-xl">{{ currentDate }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
const date = new Date()
export default {
  name: 'WorkPlace',
  data() {
    return {
      currentDate:
        date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  width: 5rem;
  height: 5rem;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid yellowgreen;
  }
}
.item-action {
  position: relative;
  padding: 0 30px;
}
.item-action::after {
  position: absolute;
  top: 20%;
  right: 0;
  height: 60%;
  content: '';
  display: block;
  width: 1px;
  background-color: #e0e0e0;
}
div:last-child::after {
  width: 0;
}
</style>
