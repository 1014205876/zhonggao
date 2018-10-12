import Vue from 'vue'
import App from './App'
import router from './router'
//引入css文件
import '../static/css/reset.css'
import '../static/css/transition.css'
// 引入外部js文件
import '../static/js/rem750.js'//750rem

//引入修改页面title
// import VueWechatTitle from 'vue-wechat-title'
// Vue.use(VueWechatTitle)
Vue.config.productionTip = false

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

router.beforeEach((to, from, next) => {//路由跳转之前执行
  if (to.meta.title) {//修改页面title
    document.title = to.meta.title;
  }
  let loging = sessionStorage.getItem('loging');
  let indexUrl = localStorage.getItem('indexUrl');
  console.log(loging)
  console.log(indexUrl)
  console.log(to.matched.some(m => m.meta.auth))
  if (loging == 'true') {
    console.log('本次登陆过')
    next()
  } else {
    console.log('本次未登陆过')
    if (to.matched.some(m => m.meta.auth)) {
      console.log('需要判定登录')
      if (indexUrl == 'false') {
        console.log('未记住登录状态，需要跳转')
        next({ path: '/login' })
      } else {
        console.log('记住登录状态，不需要跳转')
        next()
      }
    } else {
      console.log('不需要判定登录')
      next()
    }
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
