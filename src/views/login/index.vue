<template>
  <div>
    <el-input
      v-model="username"
      placeholder="请输入用户名"
    />
    <el-input
      v-model="password"
      placeholder="请输入密码"
      type="password"
    />
    <el-button
      type="primary"
      @click="login"
    >
      登录
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$post({
        url: this.$urlPath.login,
        data: {
          username: 'admin',
          password: '123456'
        }
      }).then(res => {
        this.$router.push({ path: '/' })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
</style>
