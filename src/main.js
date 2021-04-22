import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './utils'
import '@/styles/index.scss'
import './api/http'

import './mock'
// import '@/assets/theme/black/index.css'
// import '@/assets/theme/red/index.css'
// import '@/assets/theme/cyan/index.css'
// import '@/assets/theme/purple/index.css'
import '@/assets/theme/blue/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
