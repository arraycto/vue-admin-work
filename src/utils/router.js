import router, { asyncRoutes } from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
import service from '@/api/axios'
import Layout from '@/layout'
import { pathToFileName } from './AsyncRouteMap'

NProgress.configure({ showSpinner: false })

function getRoutes() {
  return service({
    url: 'http://localhost:8080/getMenu',
    method: 'POST',
    data: {
      userId: 1,
      roleId: 1
    }
  }).then(res => {
    return generatorRoutes(res.data)
  })
}

function getComponent(path) {
  return resolve => { require(['@/views' + pathToFileName(path)], resolve) }
}

function getCharCount(str, char) {
  var regex = new RegExp(char, 'g')
  var result = str.match(regex)
  var count = !result ? 0 : result.length
  return count
}

function isMenu(path) {
  return getCharCount(path, '/') === 1
}

function getNameByUrl(menuUrl) {
  const temp = menuUrl.split('/')
  return temp[temp.length - 1]
}

function generatorRoutes(res) {
  const tempRoutes = []
  res.forEach(it => {
    const route = {
      path: it.menuUrl,
      name: getNameByUrl(it.menuUrl),
      hidden: !!it.hidden,
      component: isMenu(it.menuUrl) ? Layout : getComponent(it.menuUrl),
      meta: {
        title: it.menuName,
        affix: false,
        icon: ''
      }
    }
    if (it.children) {
      route.children = generatorRoutes(it.children)
    }
    tempRoutes.push(route)
  })
  return tempRoutes
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.name === 'login') {
    next()
    NProgress.done()
  } else {
    const isEmptyRoute = store.getters['user/isEmptyRoutes']
    if (isEmptyRoute) {
      // 加载路由
      getRoutes().then(async routes => {
        asyncRoutes.push(...routes)
        await store.dispatch('user/saveRoutes', asyncRoutes)
        router.addRoutes(routes)
        next({ ...to, replace: true })
      })
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
