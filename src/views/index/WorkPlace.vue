<template>
  <div class="main-container">
    <el-card
      :body-style="{padding: '10px'}"
      shadow="hover"
    >
      <div class="text-bold text-xl text-black">工作台</div>
      <div class="flex margin-top">
        <div class="avatar-wrapper">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2017%2F1226%2F3b0685e61c1ae93065e5f45a7348058e41f1c671_size1091_w700_h656.gif&refer=http%3A%2F%2Fd.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617935122&t=37e2a9aa01824978dc36373f168ae76e" />
        </div>
        <div class="flex flex-direction justify-around margin-left">
          <div class="text-black text-xl">早上好，Andy，青春只有一次，别让自己过得不精彩</div>
          <div class="text-grey text-sm"><i class="el-icon-heavy-rain"></i> 今日有小雨，出门别忘记带伞哦~</div>
        </div>
        <div class="flex-sub"></div>
        <div class="flex flex-direction justify-around align-end item-action">
          <div class="text-gray">项目数</div>
          <div class="text-xl">12</div>
        </div>
        <div class="flex flex-direction justify-around align-end item-action">
          <div class="text-gray">待办项</div>
          <div class="text-xl">3/20</div>
        </div>
        <div class="flex flex-direction justify-around align-end item-action">
          <div class="text-gray">当前日期</div>
          <div class="text-xl">{{ currentDate }}</div>
        </div>
      </div>
    </el-card>
    <div class="flex margin-top">
      <div style="flex: 3;">
        <el-card :body-style="{padding: '5px'}">
          <template #header>
            <div class=" margin-tb-10">
              <span class="text-black text-bold text-sm">
                <i class="el-icon-menu text-blue"></i>
                我的课程
              </span>
            </div>
          </template>
          <el-row>
            <el-col
              v-for="(item, index) of dataItems"
              :key="index"
              :span="8"
            >
              <ProjectItem :item="item" />
            </el-col>
          </el-row>
        </el-card>
        <el-card
          :body-style="{padding: '5px'}"
          class="margin-top"
        >
          <template #header>
            <div class=" margin-tb-10">
              <span class="text-black text-bold text-sm">
                <i class="el-icon-s-opportunity text-blue"></i>
                动态信息
              </span>
            </div>
          </template>
          <el-row
            v-for="(item, index) of trendsItems"
            :key="index"
          >
            <TrendsItem :item="item">
              <template #title="{title}">
                <div v-html="title"></div>
              </template>
            </TrendsItem>
          </el-row>
        </el-card>
      </div>
      <div style="flex: 2; background-color: green; height: 100px"></div>
    </div>
  </div>
</template>

<script>
import ProjectItem from './components/ProjectItem'
import TrendsItem from './components/TrendsItem'
import HTML5_PATH from '@/assets/img_html5.jpeg'
import CSS_PATH from '@/assets/img_css.jpeg'
import JAVASCRIPT_PATH from '@/assets/img_javascript.jpeg'
import REACT_PATH from '@/assets/img_react.jpeg'
import VUE_PATH from '@/assets/img_vue.jpeg'
import ANGULAR_PATH from '@/assets/img_angular.jpeg'
const date = new Date()
export default {
  name: 'WorkPlace',
  components: {
    ProjectItem,
    TrendsItem
  },
  data() {
    return {
      currentDate:
        date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate(),
      dataItems: [
        {
          title: 'HTML5',
          imagePath: HTML5_PATH
        },
        {
          title: 'CSS3',
          imagePath: CSS_PATH
        },
        {
          title: 'JavaScript',
          imagePath: JAVASCRIPT_PATH
        },
        {
          title: 'React',
          imagePath: REACT_PATH
        },
        {
          title: 'Vue',
          imagePath: VUE_PATH
        },
        {
          title: 'Angular',
          imagePath: ANGULAR_PATH
        }
      ],
      trendsItems: [
        {
          avatar:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F6.pic.paopaoche.net%2Fup%2F2016-4%2F2016411164044108.jpg&refer=http%3A%2F%2F6.pic.paopaoche.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619963947&t=37d66f12a45b731771754349ac2b2056',
          title:
            '<span><span class="margin-right text-blue">孙悟空</span>发表了一条动态<span class="margin-left text-blue">《看我七十二变》</span></span>'
        },
        {
          avatar:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.duoziwang.com%2F2018%2F13%2F03181154676032.jpg&refer=http%3A%2F%2Fimg.duoziwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619963922&t=69a793d41e2b5c8f07dae871827ced49',
          title:
            '<span><span class="margin-right text-blue">唐僧</span>赞了<span class="margin-left-sm text-blue">八戒</span><span class="margin-left text-blue">~今天晚上的猪头肉真香~</span></span>'
        },
        {
          avatar:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F6.pic.paopaoche.net%2Fup%2F2016-4%2F2016411164044108.jpg&refer=http%3A%2F%2F6.pic.paopaoche.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619963947&t=37d66f12a45b731771754349ac2b2056',
          title:
            '<span><span class="margin-right text-blue">孙悟空</span>发表了一条动态<span class="margin-left text-blue">《看我七十二变》</span></span>'
        },
        {
          avatar:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.duoziwang.com%2F2018%2F13%2F03181154676032.jpg&refer=http%3A%2F%2Fimg.duoziwang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619963922&t=69a793d41e2b5c8f07dae871827ced49',
          title:
            '<span><span class="margin-right text-blue">唐僧</span>赞了<span class="margin-left-sm text-blue">八戒</span><span class="margin-left text-blue">~今天晚上的猪头肉真香~</span></span>'
        },
        {
          avatar:
            'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          title:
            '<span><span class="margin-right text-blue">我</span>提交了请假申请'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  width: 5rem;
  height: 5rem;
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid yellowgreen;
  }
}
.item-action {
  position: relative;
  padding: 0 30px;
}
.item-action::after {
  position: absolute;
  top: 20%;
  right: 0;
  height: 60%;
  content: '';
  display: block;
  width: 1px;
  background-color: #e0e0e0;
}
div:last-child::after {
  width: 0;
}
</style>
