import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './utils'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import './api/http'

import './mock'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
