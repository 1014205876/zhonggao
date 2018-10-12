import Vue from 'vue'
import Router from 'vue-router'
// 非懒加载
// // 引入主级页面路由
// import login from '@/page/login'
// import index from '@/page/index'
// import history from '@/page/history'
// // 引入次级页面路由
// 懒加载
// 引入主级页面路由
const login = resolve => require(['@/page/login'], resolve);//登录
const index = resolve => require(['@/page/index'], resolve);//工作台
const history = resolve => require(['@/page/history'], resolve);//历史记录
const taskdetail = resolve => require(['@/page/taskdetail'], resolve);//任务详情
// 引入次级页面路由

Vue.use(Router)
export default new Router({
  mode: 'history',//去除路径里面的#
  routes: [
    {
      path: '/',
      redirect: "/index",
      component: index,
    },
    {
      path: '/login',
      component: login,
      meta: {
        index: 1,
        title: '登录',
      },
    },
    {
      path: '/index',
      component: index,
      meta: {
        index: 2,
        title: '工作台',
        auth:true
      },
    },
    {
      path: '/history',
      component: history,
      meta: {
        index: 3,
        title: '历史任务',
        auth:true
      },
    },
    {
      path: '/taskdetail',
      component: taskdetail,
      meta: {
        index: 4,
        title: '任务详情',
        auth:true
      },
    },
  ],
})
