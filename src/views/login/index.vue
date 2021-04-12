<template>
  <div class="login-container">
    <div
      ref="loginWrapper"
      class="login-bg-wrapper"
    >
      <img :src="$isMobile ? ImageMobileBg1 : ImageBg1" />
    </div>
    <div class="flex form-wrapper">
      <div class="left"></div>
      <div class="right">
        <div class="title">
          欢迎来到vue-admin-work
        </div>
        <div class="form-container">
          <div class="item-wrapper">
            <el-input
              v-model="username"
              placeholder="请输入用户名/手机号"
              prefix-icon="el-icon-user"
              clearable
            />
          </div>
          <div class="item-wrapper margin-top-lg">
            <el-input
              v-model="password"
              placeholder="请输入密码"
              type="password"
              clearable
              prefix-icon="el-icon-lock"
            />
          </div>
          <div class="flex-sub"></div>
          <div class="margin-top-lg">
            <el-button
              type="primary"
              class="login"
              @click="login"
            >
              登录
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageBg1 from '@/assets/img_login_bg_01.jpg'
import ImageBg2 from '@/assets/img_login_bg_02.jpg'
import ImageBg3 from '@/assets/img_login_bg_03.jpg'
import ImageMobileBg1 from '@/assets/img_login_mobile_bg_01.jpg'
import Cookies from 'js-cookie'
export default {
  name: 'Login',
  data() {
    return {
      username: 'admin',
      password: '123456',
      ImageBg1,
      ImageBg2,
      ImageBg3,
      ImageMobileBg1,
      redirect: ''
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
        }
      },
      immediate: true
    }
  },
  methods: {
    login() {
      if (!this.username) {
        this.$errorMsg('请输入用户名')
        return
      }
      if (!this.password) {
        this.$errorMsg('请输入密码')
        return
      }
      this.$post({
        url: this.$urlPath.login,
        data: {
          username: this.username,
          password: this.password
        }
      })
        .then((res) => {
          Cookies.set('admin-token', '1212', {
            expires: 1
          })
          this.$router.push({ path: this.redirect || '/index/main' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  .login-bg-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .form-wrapper {
    position: absolute;
    top: 18.5%;
    left: 0;
    right: 0;
    bottom: 15.8%;
    @media screen and (max-width: 768px) {
      .left {
        display: none;
      }
      .right {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .title {
          display: block;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          color: #5497ff;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
        }
        .form-container {
          width: 80%;
          height: 60%;
          margin-bottom: 10%;
          text-align: center;
          background: rgba(183, 183, 183, 0.2);
          padding: 5%;
          border-radius: 5px;
          border: 2px solid #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .item-wrapper {
            width: 100%;
          }
          .login {
            width: 90%;
          }
        }
      }
    }
    @media screen and (min-width: 768px) and (max-width: 992px) {
      .left {
        display: none;
      }
      .right {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .title {
          display: block;
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          color: #5497ff;
        }
        .form-container {
          width: 50%;
          height: 60%;
          margin-bottom: 10%;
          text-align: center;
          background: rgba(183, 183, 183, 0.2);
          padding: 5%;
          border-radius: 5px;
          border: 2px solid #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .item-wrapper {
            width: 100%;
          }
          .login {
            width: 90%;
          }
        }
      }
    }
    @media screen and (min-width: 992px) {
      .left {
        display: block;
        flex: 1;
      }
      .right {
        margin-left: 10%;
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .title {
          display: block;
          font-size: 24px;
          font-weight: bold;
          color: #5497ff;
          margin-bottom: 15%;
        }
        .item-wrapper {
          width: 48%;
        }
        .login {
          width: 48%;
        }
      }
    }
  }
}
</style>
