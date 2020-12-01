import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/fontawesome/css/all.min.css'
import './assets/fontawesome/css/brands.min.css'
import './assets/fontawesome/css/fontawesome.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
