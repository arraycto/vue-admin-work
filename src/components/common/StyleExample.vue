<template>
  <div
    class="style-example-container"
    :class="{ 'circle-tip': checked }"
  >
    <div
      class="left"
      :style="{'background-color': leftBg}"
    ></div>
    <div class="right">
      <div
        class="right-top"
        :style="{'background-color': rightTopBg}"
      ></div>
      <div
        class="right-bottom"
        :style="{'background-color': rightBottomBg}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StyleExample',
  props: {
    leftBg: {
      type: String,
      default: '#000'
    },
    rightTopBg: {
      type: String,
      default: '#ff0000'
    },
    rightBottomBg: {
      type: String,
      default: '#f5f5f5'
    },
    checked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
$border-radius: 4px;
.style-example-container {
  width: 60px;
  height: 50px;
  border-radius: $border-radius;
  background-color: transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .left {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    display: inline-block;
    width: 30%;
    height: 100%;
  }
  .right {
    border-top-right-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    display: inline-block;
    width: 70%;
    height: 100%;
    .right-top {
      height: 20%;
      border-top-right-radius: $border-radius;
    }
    .right-bottom {
      height: 80%;
      border-bottom-right-radius: $border-radius;
    }
  }
}
.circle-tip::after {
  content: "";
  display: block;
  margin: 0 auto;
  margin-top: 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgb(3, 190, 50);
  text-align: center;
}
</style>
