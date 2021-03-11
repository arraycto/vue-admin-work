<template>
  <div class="main-container">
    <div class="box-wrapper">
      <div class="flex">
        <el-card
          class="box-card personal-box"
          :body-style="{ padding: '10px' }"
        >
          <div class="info-wrapper">
            <div class="avatar-wrapper">
              <a class="avatar">
                <img :src="avatar" />
              </a>
              <div
                class="camera-layer flex justify-center align-center"
                @click="uploadAvatar"
              >
                <i class="el-icon-camera-solid text-white text-sl"></i>
              </div>
            </div>
            <div class="text-xl text-black">
              admin
            </div>
            <div class="des-wrapper">
              <i class="el-icon-edit"></i>
              冰冻三尺，非一日之寒，成大事者不拘小节。
            </div>
            <div class="text-wrapper">
              <div class="label">
                昵称：
              </div>
              <div class="value">
                蝴蝶飞呀飞
              </div>
            </div>
            <div class="text-wrapper">
              <div class="label">
                性别：
              </div>
              <div class="value">
                男
              </div>
            </div>
            <div class="text-wrapper">
              <div class="label">
                生日：
              </div>
              <div class="value">
                2021-1-1
              </div>
            </div>
            <div class="text-wrapper">
              <div class="label">
                部门：
              </div>
              <div class="value">
                研发部
              </div>
            </div>
            <div>
              <el-tag
                effect="dark"
                size="mini"
              >技术控</el-tag>
              <el-tag
                effect="dark"
                size="mini"
              >爱学习</el-tag>
              <el-tag
                effect="dark"
                size="mini"
              >大嘴巴</el-tag>
              <el-tag
                effect="dark"
                size="mini"
              >宅男</el-tag>
              <el-tag
                type="info"
                effect="dark"
                size="mini"
              >嘚嘚没完</el-tag>
              <el-tag
                type="info"
                effect="dark"
                size="mini"
              >UP主</el-tag>
              <el-tag
                type="info"
                effect="dark"
                size="mini"
              >手机控</el-tag>
            </div>
          </div>
        </el-card>
        <el-card
          class="box-card personal-box flex-sub margin-left"
          :body-style="{ padding: '10px' }"
        >
          <div
            slot="header"
            class="flex justify-between align-center"
          >
            <span class="text-sm text-black">消息中心</span>
            <el-button
              style="padding: 3px 0"
              type="text"
            >查看更多
              <i class="el-icon-d-arrow-right"></i>
            </el-button>
          </div>
          <div
            v-for="(item, index) of messages"
            :key="index"
            class="message-wrapper flex align-center"
          >
            <div
              class="notify"
              :class="{'bg-red red-tip' : item.status === 0, 'bg-green' : item.status === 1}"
            ></div>
            <div class="flex-sub margin-left">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="content">
                {{ item.content }}
              </div>
            </div>
          </div>
        </el-card>
      </div>
      <div class="margin-top">
        <el-card>sdfasd</el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Personal',
  data() {
    return {
      messages: [
        {
          title: '重要通知：今天要加班，一堆bug等着修改，请全体家人们注意',
          content: '为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。',
          status: 0 // 0未读 1已读
        },
        {
          title: '重要通知：今天要加班，一堆bug等着修改，请全体家人们注意',
          content: '为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。',
          status: 1 // 0未读 1已读
        },
        {
          title: '重要通知：今天要加班，一堆bug等着修改，请全体家人们注意',
          content: '为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。',
          status: 1 // 0未读 1已读
        },
        {
          title: '重要通知：今天要加班，一堆bug等着修改，请全体家人们注意',
          content: '为了配合市场家人们努力开单，从今天开始，技术部及教研老师们要努力加班，全力配合市场的家人们多多开单。谢谢大家的支持与配合。',
          status: 1 // 0未读 1已读
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      avatar: 'user/getAvatar'
    })
  },
  methods: {
    uploadAvatar() {
      console.log('asdfasd')
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes opacity2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
.red-tip {
  animation: 1s opacity2 0s infinite;
}
.el-tag--dark + .el-tag--dark {
  margin-left: 10px;
  margin-top: 10px;
}
.box-wrapper {
  padding: 1rem;
  .personal-box {
    width: 30%;
    .info-wrapper {
      text-align: center;
      .avatar-wrapper {
        display: inline-block;
        width: 6rem;
        height: 6rem;
        margin-top: 20px;
        position: relative;
        .avatar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform-origin: bottom;
          z-index: 1;
          transition: all 0.5s ease-in-out;
          & > img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid rgb(245, 241, 7);
          }
        }
        .avatar:hover {
          transform: rotate(180deg);
        }
        .camera-layer {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 50%;
        }
      }
      .des-wrapper {
        width: 70%;
        margin: 0 auto;
        font-size: 14px;
        color: #555;
        padding: 15px;
      }
      .text-wrapper {
        color: #666;
        font-size: 0.8rem;
        margin-top: 10px;
        width: 50%;
        margin: 0 auto;
        .label {
          display: inline-block;
          width: 40%;
          text-align: right;
        }
        .value {
          display: inline-block;
          width: 60%;
          text-align: left;
        }
      }
      .text-wrapper + .text-wrapper {
        margin-top: 15px;
      }
    }
  }
  .message-wrapper {
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 10px;
    .notify {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
    .title {
      color: #555;
      font-size: 1rem;
    }
    .content {
      color: #888;
      font-size: 0.8rem;
      margin-top: 10px;
      line-height: 1rem;
    }
  }
  .message-wrapper + .message-wrapper {
    margin-top: 10px;
  }
}
</style>
