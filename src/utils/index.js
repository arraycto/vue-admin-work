import Vue from 'vue'

import './router'

import TableHeader from '@/components/table/TableHeader'
import TableFooter from '@/components/table/TableFooter'
import TableBody from '@/components/table/TableBody'

// 注册成为全局的组件
Vue.component('TableHeader', TableHeader)
Vue.component('TableFooter', TableFooter)
Vue.component('TableBody', TableBody)
