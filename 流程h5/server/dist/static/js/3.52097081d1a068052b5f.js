webpackJsonp([3],{HuFU:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"taskdetail",data:function(){return{actName:"",taskId:"",processInstanceId:"",companyinfo:{},data:[]}},components:{companyinfo:s("g8RK").a},methods:{look:function(){var t=localStorage.getItem("name");"预约确认"==t?this.$router.push({path:"/enterpriseinfo",query:{processInstanceId:this.processInsId}}):"风控审批"==t?this.$router.push({path:"/report",query:{title:"客户信息报告",type:"customer",processInstanceId:this.processInsId}}):"综合审批"==t?this.$router.push({path:"/report",query:{title:"信息采集报告",type:"collection",processInstanceId:this.processInsId}}):this.$router.push({path:"/report",query:{title:"综合审批报告",type:"comprehensive",processInstanceId:this.processInsId}})},toenterpriseinfo:function(){}},created:function(){var t=this,e=localStorage.getItem("token");t.taskId=t.$route.query.taskId,t.actName=t.$route.query.actName,t.processInstanceId=t.$route.query.processInstanceId,t.$http({method:"get",header:{"Content-Type":"application/json;charset=utf-8"},headers:{authorization:e},url:"api/peak-flow/v1/flow/process/"+t.processInstanceId+"/variables"}).then(function(e){t.companyinfo=e.data.data,console.log(e)}).catch(function(t){console.log(t)}),t.$http({method:"get",header:{"Content-Type":"application/json;charset=utf-8"},headers:{authorization:e},url:"api/peak-flow/v1/flow/historic-task/"+t.taskId}).then(function(e){t.data=e.data.data,console.log(e)}).catch(function(t){console.log(t)})}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"taskdetail"},[s("div",{staticClass:"companyinfo"},[s("div",{staticClass:"top",on:{click:t.look}},[s("div",{staticClass:"name"},[t._v(t._s(t.companyinfo.entName))]),t._v(" "),t._m(0)]),t._v(" "),s("ul",{staticClass:"data"},[s("li",[s("span",[t._v("企业法人 ：")]),t._v(t._s(t.companyinfo.legalRep))]),t._v(" "),s("li",[s("span",[t._v("任务编号 ：")]),t._v(t._s(t.companyinfo.projectNumber)+"\n      ")]),t._v(" "),s("li",[s("span",[t._v("贷款金额 ：")]),t._v(t._s(t.companyinfo.amount)+"万元\n      ")]),t._v(" "),s("li",[s("span",[t._v("贷款期限 ：")]),t._v(t._s(t.companyinfo.term)+"个月\n      ")]),t._v(" "),s("li",[s("span",[t._v("预约时间 ：")]),t._v(t._s(t.companyinfo.appointTime)+"\n      ")])])]),t._v(" "),t._m(1),t._v(" "),s("ul",{staticClass:"list"},t._l(t.data,function(e){return e.name?s("li",{key:e.id},[s("div",{staticClass:"top"},[s("div",{staticClass:"name"},[s("img",{attrs:{src:"static/img/icon/task_blue.png",alt:""}}),t._v(t._s(e.name)+"\n        ")]),t._v(" "),t._m(2,!0)]),t._v(" "),s("ul",{staticClass:"bottom"},t._l(e.fields,function(e){return s("li",{key:e.id},[s("span",[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"data"},[t._v(t._s(e.value))])])}))]):t._e()}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"seereport"},[this._v("\n        查看报告"),e("img",{attrs:{src:"static/img/icon/right_gray.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shenpi"},[this._v("审批记录"),e("img",{attrs:{src:"static/img/icon/fengkongshenpi.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"time"},[e("span")])}]};var i=s("VU/8")(n,a,!1,function(t){s("U9J+")},"data-v-778cd1a7",null);e.default=i.exports},"U9J+":function(t,e){},g8RK:function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"companyinfo"},[s("div",{staticClass:"top",on:{click:t.toreport}},[s("div",{staticClass:"name"},[t._v("江西省南昌市进贤县有限公司")]),t._v(" "),t._m(0)]),t._v(" "),s("ul",{staticClass:"data",on:{click:t.toenterpriseinfo}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"seereport"},[this._v("\n      查看报告"),e("img",{attrs:{src:"static/img/icon/right_gray.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("企业法人 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("任务编号 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("贷款金额 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("贷款期限 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("预约时间 ：")]),this._v("张三\n    ")])}]};var a=s("VU/8")({name:"companyinfo",data:function(){return{}},methods:{toreport:function(){this.$router.push("/report")},toenterpriseinfo:function(){this.$router.push("/enterpriseinfo")}}},n,!1,function(t){s("uHXI")},"data-v-97e4402c",null);e.a=a.exports},uHXI:function(t,e){}});
//# sourceMappingURL=3.52097081d1a068052b5f.js.map