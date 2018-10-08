import Vue from 'vue'
import App from './App'
import router from './router'
//引入css文件
import '../static/css/reset.css'
import '../static/css/transition.css'
// 引入外部js文件
import '../static/js/rem750.js'//750rem

//引入修改页面title
import VueWechatTitle from 'vue-wechat-title'
Vue.config.productionTip = false
Vue.use(VueWechatTitle)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
