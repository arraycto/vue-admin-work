import Vue from 'vue'
import * as urlPath from '@/api/url'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './router'

import TableHeader from '@/components/table/TableHeader'
import TableFooter from '@/components/table/TableFooter'
import TableBody from '@/components/table/TableBody'

Vue.use(Element)

// 注册成为全局的组件
Vue.component('TableHeader', TableHeader)
Vue.component('TableFooter', TableFooter)
Vue.component('TableBody', TableBody)

Vue.prototype.$urlPath = urlPath
Vue.prototype.$isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
Vue.prototype.$isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
