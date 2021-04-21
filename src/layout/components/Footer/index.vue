<template>
  <el-card
    :body-style="{padding: '0'}"
    shadow="never"
    class="margin-top-xs"
  >
    <div class="footer-container flex justify-center align-center padding">
      <img :src="require('@/assets/work_logo.png')" />
      <span class="margin-left text-gray">Copyright
        <svg-icon icon-class="copy-right" /> Vue Admin Work 2021
      </span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
.footer-container {
  & img {
    width: 20px;
  }
}
</style>
