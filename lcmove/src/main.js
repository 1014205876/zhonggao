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

router.beforeEach((to, from, next) => {
  let indexUrl = localStorage.getItem('indexUrl');
  console.log(indexUrl)
  console.log(to.matched.some(m => m.meta.auth))
  if (to.matched.some(m => m.meta.auth)) {
    console.log('首次进入')
    if (indexUrl=='false') {
    console.log('需要跳转')
      next({ path: '/login'})
    } else {
    console.log('不需要跳转')
      next()
    }
  } else {
    console.log('非首次进入')
    next()
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
