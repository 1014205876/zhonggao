webpackJsonp([1],{EvEq:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7t+N"),i=s.n(a),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mengban",class:{show:t.show}},[s("div",{staticClass:"alert"},[s("div",{staticClass:"main"},[t._v(t._s(t.remind))]),t._v(" "),s("div",{staticClass:"btn"},[t.left?s("div",{staticClass:"left",style:{color:t.leftColor},on:{click:function(e){t.btn("left",t.left,t.index)}}},[t._v(t._s(t.left))]):t._e(),t._v(" "),t.right?s("div",{staticClass:"right",style:{color:t.rightColor},on:{click:function(e){t.btn("right",t.right,t.index)}}},[t._v(t._s(t.right))]):t._e()])])])},staticRenderFns:[]};var o=s("VU/8")({name:"Alert",data:function(){return{show:!1}},props:["index","remind","left","leftColor","right","rightColor"],methods:{btn:function(t,e,s){this.$emit("choice",{data:t,name:e,index:s})},alertshow:function(){this.show=!0},alertclose:function(){this.show=!1}}},n,!1,function(t){s("yEbH")},"data-v-64d9607b",null).exports,l=s("g8RK"),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inputcom"},[s("label",[s("div",{staticClass:"name"},[t._v(t._s(t.list.name))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.value,expression:"list.value"}],attrs:{type:"text",placeholder:t.list.placeholder?t.list.placeholder:"请输入",disabled:t.list.readOnly},domProps:{value:t.list.value},on:{input:function(e){e.target.composing||t.$set(t.list,"value",e.target.value)}}})])])},staticRenderFns:[]};var c=s("VU/8")({name:"Inputcom",data:function(){return{}},props:["list"],methods:{}},r,!1,function(t){s("lXFA")},"data-v-ed6cac3a",null).exports,u={name:"Radio",data:function(){return{show:!1}},props:["list"],methods:{alertshow:function(){this.show=!0,i()("body").css({height:i()(window).height(),overflow:"hidden"})},alertclose:function(){this.show=!1,i()("body").css({height:"auto",overflow:"auto"})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"check",on:{click:t.alertshow}},[s("div",{staticClass:"name"},[t._v(t._s(t.list.name))]),t._v(" "),s("div",{staticClass:"label"},[t.list.value?s("div",{staticClass:"data"},[t._v(t._s(t.list.value))]):t._e(),t._v(" "),s("img",{staticClass:"right",attrs:{src:"static/img/icon/right_gray.png",alt:""}})]),t._v(" "),s("div",{staticClass:"mengban",class:{show:t.show},on:{click:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.alertclose(e)}}},[s("div",{staticClass:"alert"},[s("ul",{staticClass:"bottom"},t._l(t.list.options,function(e){return s("li",{key:e.id},[s("label",[s("span",[t._v(t._s(e.name))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.value,expression:"list.value"}],attrs:{name:t.list.fieldType,type:"radio",disabled:t.list.readOnly},domProps:{value:e.value,checked:t._q(t.list.value,e.value)},on:{change:[function(s){t.$set(t.list,"value",e.value)},t.alertclose]}})])])}))])])])},staticRenderFns:[]};var v=s("VU/8")(u,d,!1,function(t){s("M+D/")},"data-v-01ed0461",null).exports,h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"selectcom"},[s("div",{staticClass:"name"},[t._v(t._s(t.list.name))]),t._v(" "),s("div",{staticClass:"select"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.list.optionValue,expression:"list.optionValue"}],attrs:{disabled:t.list.readOnly},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.list,"optionValue",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:""}},[t._v("请选择")]),t._v(" "),t._l(t.list.option,function(e){return s("option",{key:e.id,domProps:{value:e}},[t._v(t._s(e))])})],2),t._v(" "),s("img",{staticClass:"right",attrs:{src:"static/img/icon/right_gray.png",alt:""}})])])},staticRenderFns:[]};var p=s("VU/8")({name:"Selectcom",data:function(){return{}},props:["list"],methods:{}},h,!1,function(t){s("SYUG")},"data-v-532c390c",null).exports,m={name:"Checkcom",data:function(){return{all:!1,another:!1,num:0,show:!1}},props:["list"],watch:{list:{handler:function(t,e){this.num=t.options.length,t.value.length==t.options.length?this.all=!0:this.all=!1},deep:!0}},methods:{allchange:function(){this.all?this.list.value=this.list.options:this.list.value=[]},alertshow:function(){this.show=!0,i()("body").css({height:i()(window).height(),overflow:"hidden"})},alertclose:function(){this.show=!1,i()("body").css({height:"auto",overflow:"auto"})}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"check",on:{click:t.alertshow}},[s("div",{staticClass:"name"},[t._v(t._s(t.list.name))]),t._v(" "),s("div",{staticClass:"label"},[t.num?s("div",{staticClass:"data"},[t._v("选择"+t._s(t.num)+"项")]):t._e(),t._v(" "),s("img",{staticClass:"right",attrs:{src:"static/img/icon/right_gray.png",alt:""}})]),t._v(" "),s("div",{staticClass:"mengban",class:{show:t.show},on:{click:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.alertclose(e)}}},[s("div",{staticClass:"alert"},[s("ul",{staticClass:"bottom"},[t._l(t.list.options,function(e){return s("li",{key:e.id},[s("label",[t._v("\n            "+t._s(e)+"\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.value,expression:"list.value"}],attrs:{name:t.list.fieldType,type:"checkbox",disabled:t.list.readOnly},domProps:{value:e,checked:Array.isArray(t.list.value)?t._i(t.list.value,e)>-1:t.list.value},on:{change:function(s){var a=t.list.value,i=s.target,n=!!i.checked;if(Array.isArray(a)){var o=e,l=t._i(a,o);i.checked?l<0&&t.$set(t.list,"value",a.concat([o])):l>-1&&t.$set(t.list,"value",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(t.list,"value",n)}}})])])}),t._v(" "),t.list.another?s("li",[s("label",[t._v("\n            其他\n            "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.another,expression:"another"}],attrs:{name:"another",type:"checkbox"},domProps:{checked:Array.isArray(t.another)?t._i(t.another,null)>-1:t.another},on:{change:function(e){var s=t.another,a=e.target,i=!!a.checked;if(Array.isArray(s)){var n=t._i(s,null);a.checked?n<0&&(t.another=s.concat([null])):n>-1&&(t.another=s.slice(0,n).concat(s.slice(n+1)))}else t.another=i}}})])]):t._e(),t._v(" "),t.another?s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.list.anotherValue,expression:"list.anotherValue"}],staticClass:"another",attrs:{name:"another",rows:"2",placeholder:"请输入"},domProps:{value:t.list.anotherValue},on:{input:function(e){e.target.composing||t.$set(t.list,"anotherValue",e.target.value)}}}):t._e()],2)])])])},staticRenderFns:[]};var _=s("VU/8")(m,f,!1,function(t){s("du00")},"data-v-2c299130",null).exports,g={name:"Risk",data:function(){return{token:"",taskId:"",processInsId:"",pass:!1,data:{jsonObject:{outcomes:[],name:"综合审批",fields:[{layout:null,name:"综合审查结论",overrideId:!0,readOnly:!1,id:"syntheticalapproveconclusion",placeholder:null,type:"text",fieldType:"FormField",value:null,required:!0}],version:0,key:"syntheticalApprove"},claim:!0},companyinfo:{}}},components:{alert:o,companyinfo:l.a,inputcom:c,selectcom:p,radiocom:v,checkcom:_},beforeCreate:function(){},created:function(){var t=this;t.token=localStorage.getItem("token"),t.taskId=t.$route.query.taskId,t.actName=t.$route.query.actName,t.processInsId=t.$route.query.processInsId,t.$http({method:"get",headers:{"Content-Type":"application/json;charset=utf-8",authorization:t.token},url:"api/peak-flow/v1/flow/process/"+t.processInsId+"/variables"}).then(function(e){t.companyinfo=e.data.data,console.log(e)}).catch(function(t){console.log(t)}),t.$http({method:"get",headers:{"Content-Type":"application/json;charset=utf-8",authorization:t.token},url:"api/peak-flow/v1/flow/task/"+t.taskId+"/variables"}).then(function(e){t.data=e.data.data,document.getElementById("titleId").innerHTML=t.data.jsonObject.name,console.log(e)}).catch(function(t){console.log(t)}),t.$http({method:"post",headers:{"Content-Type":"application/json;charset=utf-8",authorization:t.token},url:"api/peak-flow/v1/flow/task/"+t.taskId,data:{action:"claim"}}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},methods:{look:function(){var t=localStorage.getItem("name");"预约确认"==t?this.$router.push({path:"/enterpriseinfo",query:{processInstanceId:this.processInsId}}):"风控审批"==t?this.$router.push({path:"/report",query:{title:"客户信息报告",type:"customer",processInstanceId:this.processInsId}}):"综合审批"==t?this.$router.push({path:"/report",query:{title:"信息采集报告",type:"collection",processInstanceId:this.processInsId}}):this.$router.push({path:"/report",query:{title:"综合审批报告",type:"comprehensive",processInstanceId:this.processInsId}})},toapprovalRecord:function(){this.$router.push({path:"/approvalRecord",query:{taskId:this.taskId,processInsId:this.processInsId}})},submit:function(t){this.pass=t,this.forEach(this),this.over?this.$refs.alert2.alertshow():this.$refs.alert1.alertshow()},forEach:function(t){t.over=!1;for(var e=0;e<t.data.jsonObject.fields.length;e++)t.data.jsonObject.fields[e].required&&(t.data.jsonObject.fields[e].value?i()(".approval .form>li").eq(e).removeClass("no"):(i()(".approval .form>li").eq(e).addClass("no"),t.over=!0))},choice:function(t){console.log("选择是否通过");if(console.log("点击"+t.data),"left"==t.data&&console.log("不提交"),"right"==t.data){console.log(this.data);for(var e={action:"complete"},s=0;s<this.data.jsonObject.fields.length;s++)e[this.data.jsonObject.fields[s].id]=this.data.jsonObject.fields[s].value;this.$http({method:"post",headers:{"Content-Type":"application/json;charset=utf-8",authorization:this.token},url:"api/peak-flow/v1/flow/task/"+this.taskId,data:e}).then(function(t){console.log(t),console.log("提交成功")}).catch(function(t){console.log(t),console.log("提交失败")})}this.$refs.alert1.alertclose(),this.$refs.alert2.alertclose()}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"approval"},[s("div",{staticClass:"companyinfo"},[s("div",{staticClass:"top",on:{click:t.look}},[s("div",{staticClass:"name"},[t._v(t._s(t.companyinfo.entName))]),t._v(" "),t._m(0)]),t._v(" "),s("ul",{staticClass:"data"},[s("li",[s("span",[t._v("企业法人 ：")]),t._v(t._s(t.companyinfo.legalRep))]),t._v(" "),s("li",[s("span",[t._v("任务编号 ：")]),t._v(t._s(t.companyinfo.projectNumber)+"\n      ")]),t._v(" "),s("li",[s("span",[t._v("贷款金额 ：")]),t._v(t._s(t.companyinfo.amount)+"万元\n      ")]),t._v(" "),s("li",[s("span",[t._v("贷款期限 ：")]),t._v(t._s(t.companyinfo.term)+"个月\n      ")]),t._v(" "),s("li",[s("span",[t._v("预约时间 ：")]),t._v(t._s(t.companyinfo.appointTime)+"\n      ")])])]),t._v(" "),s("div",{staticClass:"shenpi",on:{click:t.toapprovalRecord}},[t._m(1),t._v(" "),s("img",{staticClass:"right",attrs:{src:"static/img/icon/right_gray.png",alt:""}})]),t._v(" "),s("div",{staticClass:"shenpi"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:"static/img/icon/task_gray.png",alt:""}}),t._v(t._s(t.data.jsonObject.name)+"\n    ")])]),t._v(" "),s("form",[s("ul",{staticClass:"form"},t._l(t.data.jsonObject.fields,function(e){return s("li",{key:e.id},["text"==e.type?s("inputcom",{attrs:{list:e}}):t._e(),t._v(" "),"dropdown"==e.type||"radio-buttons"==e.type?s("radiocom",{attrs:{list:e}}):t._e(),t._v(" "),"check"==e.type?s("checkcom",{attrs:{list:e}}):t._e(),t._v(" "),"multi-line-text"==e.type?s("div",{staticClass:"remarks"},[s("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"list.value"}],attrs:{rows:"3",placeholder:e.placeholder?e.placeholder:"请输入"},domProps:{value:e.value},on:{input:function(s){s.target.composing||t.$set(e,"value",s.target.value)}}})]):t._e()],1)})),t._v(" "),s("div",{staticClass:"submit"},[s("div",{staticClass:"btn pass",staticStyle:{margin:"0 auto"},on:{click:function(e){t.submit(!0)}}},[t._v("提交")]),t._v(" "),s("alert",{ref:"alert1",attrs:{remind:"是否确定提交？",left:"取消",leftColor:"#333333",right:"确认",rightColor:"#3674B2"},on:{choice:t.choice}}),t._v(" "),s("alert",{ref:"alert2",attrs:{remind:"请补充完善信息",left:"确定",leftColor:"#3674B2"},on:{choice:t.choice}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"seereport"},[this._v("\n        查看报告"),e("img",{attrs:{src:"static/img/icon/right_gray.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"left"},[e("img",{attrs:{src:"static/img/icon/task_gray.png",alt:""}}),this._v("审批记录\n    ")])}]};var C=s("VU/8")(g,y,!1,function(t){s("L8k6")},"data-v-7103d547",null);e.default=C.exports},L8k6:function(t,e){},"M+D/":function(t,e){},SYUG:function(t,e){},du00:function(t,e){},g8RK:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"companyinfo"},[s("div",{staticClass:"top",on:{click:t.toreport}},[s("div",{staticClass:"name"},[t._v("江西省南昌市进贤县有限公司")]),t._v(" "),t._m(0)]),t._v(" "),s("ul",{staticClass:"data",on:{click:t.toenterpriseinfo}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"seereport"},[this._v("\n      查看报告"),e("img",{attrs:{src:"static/img/icon/right_gray.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("企业法人 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("任务编号 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("贷款金额 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("贷款期限 ：")]),this._v("张三\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("预约时间 ：")]),this._v("张三\n    ")])}]};var i=s("VU/8")({name:"companyinfo",data:function(){return{}},methods:{toreport:function(){this.$router.push("/report")},toenterpriseinfo:function(){this.$router.push("/enterpriseinfo")}}},a,!1,function(t){s("uHXI")},"data-v-97e4402c",null);e.a=i.exports},lXFA:function(t,e){},uHXI:function(t,e){},yEbH:function(t,e){}});
//# sourceMappingURL=1.6653110af3cc60afea8f.js.map