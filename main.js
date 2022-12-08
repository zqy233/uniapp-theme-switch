import Vue from 'vue'
import App from './App'
import store from './store'
import mixin from '@/mixin/themeMixin.js'
Vue.use(mixin)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
