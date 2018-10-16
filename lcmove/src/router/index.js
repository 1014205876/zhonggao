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
const enterpriseinfo = resolve => require(['@/page/enterpriseinfo'], resolve);//企业详情
// 审批页面approval文件夹
const appointment = resolve => require(['@/page/approval/appointment'], resolve);//预约确认
const risk = resolve => require(['@/page/approval/risk'], resolve);//风控审批
const comprehensive = resolve => require(['@/page/approval/comprehensive'], resolve);//综合审批
const riskdirector = resolve => require(['@/page/approval/riskdirector'], resolve);//风控总监审批
const regulations = resolve => require(['@/page/approval/regulations'], resolve);//合规审查
const vicemanager = resolve => require(['@/page/approval/vicemanager'], resolve);//副总经理审批
const manager = resolve => require(['@/page/approval/manager'], resolve);//总经理审批

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
      path: '/enterpriseinfo',
      component: enterpriseinfo,
      meta: {
        index: 5,
        title: '企业详情',
        auth: true
      },
    },
    {
      path: '/appointment',
      component: appointment,
      meta: {
        index: 6,
        title: '预约确认',
        auth: true
      },
    },
    {
      path: '/risk',
      component: risk,
      meta: {
        index: 7,
        title: '风控审批',
        auth: true
      },
    },
    {
      path: '/comprehensive',
      component: comprehensive,
      meta: {
        index: 8,
        title: '综合审批',
        auth: true
      },
    },
    {
      path: '/riskdirector',
      component: riskdirector,
      meta: {
        index: 9,
        title: '风控总监审批',
        auth: true
      },
    },
    {
      path: '/regulations',
      component: regulations,
      meta: {
        index: 10,
        title: '合规审批',
        auth: true
      },
    },
    {
      path: '/vicemanager',
      component: vicemanager,
      meta: {
        index: 11,
        title: '副总经理审批',
        auth: true
      },
    },
    {
      path: '/manager',
      component: manager,
      meta: {
        index: 12,
        title: '总经理审批',
        auth: true
      },
    },
    {
      path: '/approvalRecord',
      component: approvalRecord,
      meta: {
        index: 13,
        title: '审批记录',
        auth: true
      },
    },
    {
      path: '/report',
      component: report,
      meta: {
        index: 14,
        title: '三大报告',
        auth: true
      },
    },
  ],
})
