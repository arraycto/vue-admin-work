<template>
  <div class="contact-container">
    <div class="code-wrapper">
      <img :src="require('@/assets/qrcode.jpg')" />
    </div>
    <span>关注公众号<strong class="margin-left-xs">知码前端</strong></span>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  text-align: center;
  .code-wrapper {
    width: 80%;
    margin: 0 auto;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
