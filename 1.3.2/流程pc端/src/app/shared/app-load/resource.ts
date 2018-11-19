export default {
  ResourceItems: [
    {
      "name": "操作",
      "state": "post/auth/info/pass",
      "type": "button"
    }
  ],
  menu: [
    {
      icon:"icon iconfont icon-home",
      name:"首页",
      state:'home',
      type:"link",
      url:"/app/home",
      children:[]
    },
    {
      icon:"icon iconfont icon-process",
      name:"流程管理",
      state:"",
      type:"sub",
      url:"",
      children: [
        {
          name:"当前流程",
          state:"",
          type:"link",
          url:"/app/curFlow"
        }
      ]
    },
    {
      icon:"icon iconfont icon-process",
      name:"企卡任务",
      state:"QK",
      type:"sub",
      url:"",
      children: [
        {
          name:"当前任务",
          state:"QK",
          type:"link",
          url:"/app/present"
        }
      ]
    },
    {
      icon:"icon iconfont icon-process",
      name:"征信贷",
      state:"ZXD",
      type:"sub",
      url:"",
      children: [
        {
          name:"当前任务",
          state:"ZXD",
          type:"link",
          url:"/app/present",
          default: true
        }
      ]
    }
  ]
}