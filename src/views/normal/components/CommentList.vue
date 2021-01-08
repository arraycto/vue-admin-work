<template>
  <div class="comment-list-container">
    <div class="comment-wrapper">
      <div
        v-for="item in 10"
        :key="item"
        class="item-wrapper bg-white"
      >
        <div class="header-wrapper">
          <div class="avatar-wrapper">
            <img
              class="avatar"
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww3.sinaimg.cn%2Fmw690%2F6961aadegy1gh12eaw4hqj20u00u00ur.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612678330&t=45378148b54935c8b87fbc24aaedc9e6"
            >
            <img
              class="vip"
              :src="require('@/assets/img_vip_icon.png')"
            >
          </div>
          <div class="nick-wrapper">
            <span class="nick-name">天青色等烟雨</span>
            <el-rate
              v-model="rate"
              disabled
              text-color="#ff9900"
            />
          </div>
        </div>
        <div class="content-wrapper">
          特别好，内容非常非常的详细！特别是逐句翻译，简直太棒了，可以一句一句的学习，京东自营买的，是正版，超级厚的一本，字体印刷啥的都很清晰，内容也很丰富，特别适合学习，总体来说很不错，可以涨知识，学习就更好啦！
          特别好，内容非常非常的详细！特别是逐句翻译，简直太棒了，可以一句一句的学习，京东自营买的，是正版，超级厚的一本，字体印刷啥的都很清晰，内容也很丰富，特别适合学习，总体来说很不错，可以涨知识，学习就更好啦！
        </div>
        <el-row :gutter="5">
          <el-row :span="3">
            <img
              src=""
              alt=""
            >
          </el-row>
        </el-row>
      </div>
    </div>
    <TableFooter
      :current-page="pageModel.currentPage"
      :page-size="pageModel.pageSize"
      :total-size="pageModel.totalSize"
      @pageSizeChanged="pageSizeChanged"
      @currentChanged="currentChanged"
    />
  </div>
</template>

<script>
import TableMixin from '@/mixins/TableMixin'
export default {
  name: 'CommentList',
  mixins: [TableMixin],
  data() {
    return {
      rate: 2.0
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-list-container {
  height: calc(100vh - 122px);
  margin-right: -15px;
  overflow-x: hidden;
  overflow-y: auto;
  .comment-wrapper {
    padding: 5px 10px;
    margin-bottom: 45px;
    .item-wrapper {
      padding: 10px;
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
      border-radius: 5px;
      .header-wrapper {
        display: flex;
        justify-content: start;
        .avatar-wrapper {
          position: relative;
          .avatar {
            border-radius: 50%;
            width: 40px;
            height: 40px;
            border: 3px solid #f5f5f5;
          }
          .vip {
            position: absolute;
            top: -13px;
            right: -13px;
            width: 30px;
            height: 30px;
            transform: rotate(45deg);
          }
        }
        .nick-wrapper {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .nick-name {
            font-size: 14px;
            color: #333;
            font-weight: 700;
          }
        }
      }
      .content-wrapper {
        color: #555;
        font-size: 14px;
        margin: 5px 0;
        line-height: 20px;
      }
    }
  }
  ::v-deep .table-footer-container {
    margin: 0 5px;
  }
}
</style>
