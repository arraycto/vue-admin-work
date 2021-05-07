<div align="center"><img src="/Users/mac/Desktop/vue-admin-work/logo/WechatIMG9744.png" style="zoom:20%;" /></div>
<h1 align="center">vue-admin-work操作文档</h1>

###  介绍

**[vue-admin-work](http://qingqingxuan.gitee.io/vue-admin-work/)**是一款后台前端框架，是基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现。它使用了最新的前端技术栈，内置了动态路由，权限验证，把后台常用的一些操作进行了封装，只需要简单的配置就可以实现常用的功能，同时也提供了丰富的功能组件，最大程度上满足你在后台前端开发中遇到的业务场景。同时这也是一款适合有一定基础的同学想要提高自己的前端水平的学习框架。如果你之前是从事一些简单的切图只写一些静态页面（html+css），这也是一款非常适合你进入编程化前端的框架，实现高薪的梦想。无论是你想用来做什么这款框架都能帮到你。

#### 功能

```json
- 登录、注销
- Dashboard
	- 主页
	- 工作台
- 系统管理
  - 部门管理
  - 用户管理
	- 角色管理
	- 菜单管理
- 列表页面
	- 表格操作
	- 表格搜索
	- 卡片列表
- 表单页面
	- 表单操作
	- 高级表单
	- 分步表单
	- 通知提示
- 结果页面
	- 成功页面
	- 失败页面
- 异常页面
	- 404
	- 403
	- 500
- 编辑器
	- 富文本
	- markdown
- 其它功能
	- 打印
	- 外链
	- 二维码
	- 未完待续……

- 全局功能
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
	- 消息提醒
  - 自适应收缩侧边栏
	- 系统配置
```

#### 获取源码

> **重要提示**：
>
> **无论通过哪种方式都得需要你提前在自己的电脑上安装好[node](http://nodejs.cn/)环境，如不清楚安装过程，请上网查阅相关资料。这里假定你已经在电脑上安装好[node](http://nodejs.cn/)环境**

+ 通过git，需要你提前在自己的电脑上安装好git环境。如不清楚安装过程，请上网查阅相关资料。

  **这里假定你已经在电脑上安装好git环境**

  ```shell
  // 通过git克隆代码
  git clone *****
  // 进入项目目录
  cd vue-admin-work
  // 安装依赖
  npm install
  // 运行项目
  npm run serve
  ```

+ 通过压缩文件，直接把文件解压出来，然后

  ```shell
  // 进入项目目录
  cd vue-admin-work
  // 安装依赖
  npm install
  // 运行项目
  npm run serve
  ```

启动完成后会自动打开浏览器访问 [http://localhost:5566](http://localhost:9527/)， 代表运行成功。

![](./images/WX20210507-132800@2x.png)

#### 开发工具

本项目开发工具是：[**vscode**](https://code.visualstudio.com/) 。也是作者推荐的开发工具，结合一些丰富的插件让你在开发过程中体验更加美好

>推荐几款常用的开发**vue**的插件
>
>+ [vetur](https://github.com/vuejs/vetur) 开发vue项目必备插件
>+ **Auto Close Tag**  自动闭合HTML/XML标签
>+ **Auto Rename Tag**  自动完成另一侧标签的同步修改
>+ **Path Intellisense**  自动路径补全
>+ **HTML CSS Support**  让 html 标签上写class 智能提示当前项目所支持的样式

以上插件是作者常用的几款，并不代表必须只需要这些，在实际开发中根据个人情况来定。

#### 反馈

如果你在使用过程中有任何的问题或者有好的建议都可以给作者反应，作者会根据实际需求进行增加或者改进。

联系方式如下：

> **QQ客服：353087890**
>
> **QQ群：89165685**
>
> **微信公众号：知码前端**

| <img src="./images/BBC6F65A84F7D8EE82D4DF5FA098E9E2.png" style="zoom:33%;" /> | <img src="./images/qrcode_for_gh_31cb448b2597_258.jpg" style="zoom:100%;" />微信公众号 “知码前端” | <img src="./images/177DEDA37F71DA25271FFB9446E44251.png" style="zoom:33%;" /> |
| :----------------------------------------------------------- | :----------------------------------------------------------: | ------------------------------------------------------------ |

### 布局-流程

#### Layout布局

![](./images/WX20210507-143047@2x.png)

页面的整体布局包括：侧边栏、导航栏、快捷标签、主页面四个部分组成。基中侧边栏最上面是一个企业logo容器，可以根据实际情况更新logo 和 标题。

对应的源码是：**src/layout/index.vue**。

> 注：此 layout 以后有可能会单独抽出成为一个独立的项目，以方便添加更多的布局样式。

#### SPA工作流程

SPA的是全称是：**Single Page Application** 中文意思是：单页面应用

结合[**Vue Router**](https://router.vuejs.org/)看一下匹配过程：

+ 首先是 **App.vue**

  ```vue
  <template>
    <div id="app">
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  ```

  App.vue中的 **<router-view />**匹配到的组件是**Layout**，这里的**Layout**就是 **src/layout/index.vue**

+ 其次是 **Layout**(src/layout/index.vue)，部分源码如下：

  ```vue
  <template>
    <div>
      <div>
        <SideBar />
      </div>
      <div>
        <div class="header-layout-wrapper">
          <NavBar/>
          <TagView/>
        </div>
        <section>
          // 重点看一下
          <AppMain />
        </section>
      </div>
      <Setting />
    </div>
  </template>
  ```

  在**Layout**组件中包含了一下**AppMain**组件

+ 最后是**AppMain**，部分源码如下：

  ```vue
  <template>
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </template>
  ```

  可以看到**AppMain**中又包含了一个 <router-view/>组件，这样在**AppMain**又可以继续匹配路由了

+ 举例说明一下：

  在浏览器地址栏里输入以下链接是如何显示出页面的，这里忽略登录状态，假定用户已经登录，输入此链接会直接显出当前页面

  http://localhost:5566/#/index/main

  看一下部分路由表配置：

  ```js
  {
      path: '/index',
      name: 'index',
      component: Layout,
      hidden: false,
      meta: {
        title: 'Dashboard',
        icon: 'dashboard'
      },
      children: [
        {
          path: 'main',
          name: 'Main',
          component: () => import('@/views/index'),
          meta: {
            title: '主控台',
            affix: true,
            cacheable: true
          }
        }
      ]
    },
  ```

  当匹配到了 **'/index'** 路径是的时候，会加载对应的**Layout**组件，Layout组件中有一个AppMain组件，里面又包含了一个 <router-view />，同时可以看到路由表配置还有一个 **children**属性，完全匹配到**'/index/main'**路径的时候，path为'main'所对应的component组件被加载。

  大体就是这么一个匹配过程，具体的可以看 **[Vue Router](https://router.vuejs.org)**官网中[**嵌套路由文档**](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)

### 路由

路由和侧边栏是一个后台管理项目的重点，也是一个比较难理解的地方

#### 知识准备

+ **Vue Router知识**
+ **element-ui 中的 ElMenu组件和ElScrollbar组件**
+ **router-link和router-view组件**

#### 说明 

本项目路由生成的思路如下：

1. 用户登录成功之后获取**token**和**role**
2. 通过后台接口查询该用户所对应角色的菜单列表
3. 前端处理获取到的菜单列表，按一定的规则动态生成路由表
4. 通过**vue-router**实例的**.addRoutes()**方法动态添加路由

#### 原始路由信息

以**editor**角色为例，从后台获取的原始路由信息如下：

```js
[
  {
    // 菜单地址
    menuUrl: '/list',
    // 菜单名称
    menuName: '列表页面',
    // 菜单图图标
    icon: 'list',
    // 所包含的子菜单
    children: [
      {
        menuUrl: '/list/table',
        menuName: '表格操作'
      },
      {
        menuUrl: '/list/table-with-search',
        menuName: '表格搜索'
      },
      {
        menuUrl: '/list/grid-list',
        menuName: '卡片列表'
      }
    ]
  },
  {
    menuUrl: '/form',
    menuName: '表单页面',
    // 菜单提示信息
    tip: 'circle',
    icon: 'form',
    children: [
      {
        menuUrl: '/form/base-form-view',
        menuName: '表单操作',
        cacheable: true
      },
      {
        menuUrl: '/form/advance-form',
        menuName: '高级表单',
        cacheable: true
      },
      {
        menuUrl: '/form/step-form',
        menuName: '分步表单'
      },
      {
        menuUrl: '/form/tip',
        menuName: '通知提示'
      }
    ]
  },
  {
    menuUrl: '/editor',
    menuName: '编辑器',
    tip: '12',
    icon: 'editor',
    children: [
      {
        menuUrl: '/editor/rich-text',
        menuName: '富文本'
      },
      {
        menuUrl: '/editor/markdown',
        menuName: 'markdown'
      }
    ]
  },
  {
    menuUrl: '/other',
    menuName: '其它功能',
    children: [
      {
        menuUrl: '/other/print',
        menuName: '打印'
      },
      {
        menuUrl: 'http://www.baidu.com',
        menuName: '外链'
      },
      {
        menuUrl: '/other/qrcode',
        menuName: '二维码'
      }
    ]
  }
]
```

#### 前端路由信息配置项

从后台获取到的原始路由信息经过如下函数处理，最终生成我们所需要的路由信息：

```js

function generatorRoutes(res) {
  const tempRoutes = []
  res.forEach(it => {
    const route = {
      //url 信息
      path: it.menuUrl,
      // 设定路由的名字，建议一定要设置此name，因为有可能根据此配置跳转页面，在缓存页面的时候本项目也是采用此配置来保存的
      name: getNameByUrl(it.menuUrl),
      // 当设置 true 的时候该路由不会在侧边栏出现，如login 404 等页面
      hidden: !!it.hidden,
      // 对应的vue组件
      component: isMenu(it.menuUrl) ? Layout : getComponent(it.menuUrl),
      meta: {
        // 路由标签名字，主要用在 快捷标签 栏和导航栏中
        title: it.menuName,
        // 设置为true，标识着在 快捷标签 中不会有关闭按钮
        affix: !!it.affix,
        // 设置为true，标识着可以被<router-view/>组件缓存
        cacheable: !!it.cacheable,
        // 路由的图标信息
        icon: it.icon || '',
        // 路由的提示信息，目前有三种提示方式：new、小圆点、数字，对应的 tip：new、circle、12（具体的数字）
        tip: it.tip
      }
    }
    if (it.children) {
      // 子路由
      route.children = generatorRoutes(it.children)
    }
    tempRoutes.push(route)
  })
  return tempRoutes
}
```

> TIP
>
> <router-view />通过include缓存的时候是根据组件的name字段来缓存，所以最好是给每一个组件都设置一下name属性，而且要和route配置项中的name保持一致，因为在保存name的时候是根据route.name配置项来保存的

#### 最终路由表

经过上两步动态生成的路由表还不够，有一些页面是不需要动态生成的，也就是说是**不需要权限**的，如：**login页面** 、**404、500**等页面，当然本项目为了演示把**主页和工作页**也做成了固定页面，在实际项目根据需要自行添加删除。

在 **src/router/index.js**文件中所有的固定路由如下：

```js
export const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/personal',
    name: 'personal',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'personalCenter',
        component: () => import('@/views/personal'),
        meta: {
          title: '个人中心'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'root',
    redirect: '/index/main',
    hidden: true
  },
  {
    path: '/index',
    name: 'index',
    component: Layout,
    hidden: false,
    meta: {
      title: 'Dashboard',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'main',
        name: 'Main',
        component: () => import('@/views/index'),
        meta: {
          title: '主控台',
          affix: true,
          cacheable: true
        }
      },
      {
        path: 'workplace',
        name: 'WorkPlace',
        component: () => import('@/views/index/work-place'),
        meta: {
          title: '工作台',
          cacheable: true
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/exception/404'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
```

再把动态生成的路由信息通过 **.addRoutes()**方法添加到路由实例中就形成了本项目中所需要的所有路由信息表

```js
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.name === 'login') {
    next()
    NProgress.done()
  } else {
    if (!isTokenExpired()) {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    } else {
      const isEmptyRoute = store.getters['user/isEmptyRoutes']
      if (isEmptyRoute) {
        // 加载路由
        const accessRoutes = []
        getRoutes().then(async routes => {
          accessRoutes.push(...routes)
          await store.dispatch('user/saveRoutes', accessRoutes)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        })
      } else {
        next()
      }
    }
  }
})
```

### 侧边栏

#### 知识准备

- **[element-ui](https://element.eleme.cn/) 框架中的ElMenu组件**
- **[Vuex](https://vuex.vuejs.org/)**

#### 数据来源

通过上面的分析说明，当不同用户登录成功之后，会通过**role**来动态加载菜单，从而生成路由表。然后我们把生成的路由表信息存储到 **vuex** 中

#### 嵌套路由

本框架**通过递归的方式**支持多级路由的形式，不过为了用户的体验最好是不要超过三级路由，两级路由就已经满足了大部分的需求。如果在实际开发中真的需要三级路由，请不忘记在二级的页面中加入<router-view/>，如：

```vue
<template>
	<router-view />
</template>
```

#### 外链

通过配置路由项中的 **path** 属性来实现外链功能，本框架通过判断 **path** 属性值是否以 **https://** 或者 **http://** 开头，如果是以两种情况下开头，则会认为是外链，在点击菜单的时候就会打开一个新的页面打开链接

```js
{
  "path": "external-link",
  "component": Layout,
  "children": [
    {
      "path": "http://qingqingxuan.gitee.io/vue-admin-work/",
    }
  ]
}
```

#### 默认展开菜单

本框架并没有加入此功能，如果想要实现此功能，也很简单，只需要配置 **el-menu** 组件的 **default-openeds** 属性就好。具体参考 **[element-ui 中的 NavMenu 导航菜单](https://element.eleme.cn/#/zh-CN/component/menu)**

### 面包屑

#### 知识准备

+ **Element-ui 中 Breadcrumb 组件**
+ **Vue 中的 watch 用法**

#### 实现思路

通过 vue 组件中的 watch 监听 $route 变化来动态生成。部分源码如下：

```js
data() {
  return {
    breadcrumbs: []
  }
},
watch: {
  $route() {
    this.generateBreadcrumb()
  }
},
methods: {
  generateBreadcrumb() {
    this.breadcrumbs = xxxxx
  },
}
```

### 快捷标签

#### 知识准备

+ **element-ui 中 Tabs 组件**
+ **Vuex**

效果如下图：

![](./images/QQ20210507-212737.png)

![](./images/QQ20210507-214015.png)

此页面比较简单，但是所需要的技术含量还是比较多的。如下：

+ **需要定制 tabs 的样式**
+ **需要理解 Vuex 几个特性**
+ **需要点右键弹出上下文菜单**
+ **可以刷新当前页面**
+ **刷新页面的时候，访问过的页面信息可以保留，也就是可以持久化**

#### 实现思路

通过监听 $route 动态变化 把当前的路由信息保存，然后通过 tabs 展示形式显示出已经保存的页面信息

#### 右键弹出上下文菜单

#### 刷新当前页面

#### 持久化路由信息

