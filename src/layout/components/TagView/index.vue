<template>
  <div
    ref="tagScollerContainer"
    class="tag-view-container"
  >
    <div class="tag-view-content">
      <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark"
        size="small"
        class="tag-item"
      >
        {{ item.label }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'TagView',
  data() {
    return {
      items: [
        {
          label: '菜单管理'
        }
      ]
    }
  },
  mounted() {
    new BScroll(this.$refs.tagScollerContainer, {
      scrollX: true,
      probeType: 3,
      freeScroll: true
    })
  }
}
</script>

<style lang="scss" scoped>
.tag-view-container {
  padding: 5px 10px;
  margin-top: 5px;
  background-color: #fff;
  border-bottom: #f5f5f5 solid 1px;
  white-space: nowrap;
  overflow: hidden;
  .tag-view-content {
    display: inline-block;
    .tag-item {
      margin-left: 5px;
    }
  }
}
</style>
