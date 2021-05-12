<template>
  <div class="main-container">
    <el-row :gutter="20">
      <el-col
        v-for="(item, index) of list"
        :key="index"
        :xs="12"
        :sm="6"
        :xl="4"
        :lg="4"
      >
        <div class="item text-center flex justify-center align-center">
          <span :class="[item.class]">{{ item.label }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CssAnimation',
  data() {
    return {
      list: [
        {
          label: 'Pillars-1',
          class: 'pillars-1'
        },
        {
          label: 'Pillars-2',
          class: 'pillars-2'
        },
        {
          label: 'Pillars-3',
          class: 'pillars-3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  background-color: darkslateblue;
  color: #fff;
  min-height: 100px;
  border-radius: 5px;
  font-size: 18px;
  .pillars-1 {
    position: relative;
  }
  .pillars-1::before {
    position: absolute;
    top: 0px;
    left: -8px;
    bottom: 0px;
    width: 2px;
    content: '';
    background-color: rgb(24, 144, 255);
    transition: transform 0.5s ease 0s;
    transform: scaleY(0);
    transform-origin: center top;
  }
  .pillars-1:hover::before {
    transform: scaleY(1);
    transition: transform 0.5s ease 0s;
  }
}
</style>
