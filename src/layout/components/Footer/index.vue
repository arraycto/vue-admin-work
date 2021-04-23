<template>
  <el-card
    :body-style="{padding: '0'}"
    shadow="never"
  >
    <div class="footer-container flex justify-center align-center padding">
      <img
        v-if="showLogo"
        :src="require('@/assets/work_logo.png')"
      />
      <span class="margin-left text-gray">Copyright
        <svg-icon icon-class="copy-right" /> Vue Admin Work 2021
      </span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'PageFooter',
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  & img {
    width: 20px;
  }
}
</style>
