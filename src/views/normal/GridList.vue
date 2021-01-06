<template>
  <div class="main-container">
    <el-tabs
      v-model="activeName"
      class="wrapper"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="商品管理"
        name="first"
        lazy
      >
        <GoodsList />
      </el-tab-pane>
      <el-tab-pane
        label="订单管理"
        name="second"
        lazy
      >
        <OrderList />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GoodsList from './components/GoodsList'
import OrderList from './components/OrderList'
export default {
  name: 'GridList',
  components: { GoodsList, OrderList },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick() { }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__header {
  background-color: #fff;
  margin-bottom: 5px;
  padding: 0 10px;
}
.wrapper {
  position: relative;
}
</style>
