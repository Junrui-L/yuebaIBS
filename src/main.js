import Vue from 'vue'
import App from './App.vue'
// import wechatAuth from './util/wechatAuth'
Vue.config.productionTip = false
import './util/screen'
import {Button} from 'vant'
Vue.use(Button)
// const qs = require('qs')
// Vue.use(wechatAuth, {appid: 'a012323'})

new Vue({
  render: h => h(App),
}).$mount('#app')
