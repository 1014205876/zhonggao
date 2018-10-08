import Vue from 'vue'
import Router from 'vue-router'
// 非懒加载
// // 引入主级页面路由
// import Login from '@/page/login'
// // 引入次级页面路由
// 懒加载
// 引入主级页面路由
const Login = resolve => require(['@/page/login'], resolve);
// 引入次级页面路由

Vue.use(Router)
export default new Router({
  mode: 'history',//去除路径里面的#
  routes: [
    {
      path: '/',
      redirect: "/login",
      component: Login,
    },
    {
      path: '/login',
      component: Login,
      meta: {
        index: 1,
        title: '登录'
      },
    }
  ],

})
