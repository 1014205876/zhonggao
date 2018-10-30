import Vue from 'vue'
import Router from 'vue-router'
// 非懒加载
// // 引入主级页面路由
// import login from '@/page/login';//登录
// import index from '@/page/index';//工作台
// import history from '@/page/history'
// // 引入次级页面路由
// 懒加载
// 引入主级页面路由
const login = resolve => require(['@/page/login'], resolve);//登录
const index = resolve => require(['@/page/index'], resolve);//工作台
const personinfor = resolve => require(['@/page/personinfor'], resolve);//个人中心
const history = resolve => require(['@/page/history'], resolve);//历史记录
const taskdetail = resolve => require(['@/page/taskdetail'], resolve);//任务详情
const enterpriseinfo = resolve => require(['@/page/enterpriseinfo'], resolve);//企业详情
const risk = resolve => require(['@/page/risk'], resolve);//风控审批
const approvalRecord = resolve => require(['@/page/approvalRecord'], resolve);//审批记录
// 三大报告页面report文件夹
const report = resolve => require(['@/page/report'], resolve);//总经理审批
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
        auth: true
      },
    },
    {
      path: '/personinfor',
      component: personinfor,
      meta: {
        index: 3,
        title: '个人信息',
        auth: true
      },
    },
    {
      path: '/history',
      component: history,
      meta: {
        index: 3,
        title: '历史任务',
        auth: true
      },
    },
    {
      path: '/taskdetail',
      component: taskdetail,
      meta: {
        index: 4,
        title: '任务详情',
        auth: true
      },
    },
    {
      path: '/risk',
      component: risk,
      //表单提交接口未写
      meta: {
        index: 5,
        title: '审批',
        auth: true
      },
    },
    {
      path: '/enterpriseinfo',
      component: enterpriseinfo,
      meta: {
        index: 6,
        title: '企业详情',
        auth: true
      },
    },
    {
      path: '/approvalRecord',
      component: approvalRecord,
      meta: {
        index: 7,
        title: '审批记录',
        auth: true
      },
    },
    {
      path: '/report',
      component: report,
      meta: {
        index: 8,
        title: '报告',
        auth: true
      },
    },
  ],
})
