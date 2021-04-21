import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './utils'
import '@/styles/index.scss'
import './api/http'

import './mock'
import '@/assets/theme/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
