<template>
  <div class="approval">
    <div class="companyinfo">
      <div class="top" v-on:click='look'>
        <div class="name">{{companyinfo.entName}}</div>
        <div class="seereport">
          查看报告<img src="static/img/icon/right_gray.png" alt="">
        </div>
      </div>
      <ul class='data'>
        <li>
          <span>企业法人 ：</span>{{companyinfo.legalRep}}<!-- {{companyinfo.legalName}} -->
        </li>
        <li>
          <span>任务编号 ：</span>{{companyinfo.projectNumber}}
        </li>
        <li>
          <span>贷款金额 ：</span>{{companyinfo.amount}}万元
        </li>
        <li>
          <span>贷款期限 ：</span>{{companyinfo.term}}个月
        </li>
        <li>
          <span>预约时间 ：</span>{{companyinfo.appointTime}}
        </li>
      </ul>
    </div>
    <div class="shenpi" v-on:click='toapprovalRecord'>
      <div class="left">
        <img src="static/img/icon/task_gray.png" alt="">审批记录
      </div>
      <img src="static/img/icon/right_gray.png" alt="" class="right">
    </div>
    <div class="shenpi">
      <div class="left">
        <img src="static/img/icon/task_gray.png" alt="">{{data.jsonObject.name}}
      </div>
    </div>
    <form>
      <ul class="form">
        <!-- <li v-for='list in form' :key='list.id'>
          <inputcom v-if='list.type=="input"' v-bind:list='list'></inputcom>
          <selectcom v-if='list.type=="select"' v-bind:list='list'></selectcom>
          <radiocom v-if='list.type=="radio"' v-bind:list='list'></radiocom>
          <checkcom v-if='list.type=="check"' v-bind:list='list'></checkcom>
        </li> -->
        <li v-for='list in data.jsonObject.fields' :key='list.id'>
          <inputcom v-if='list.type=="text"' v-bind:list='list'></inputcom>
          <!-- <selectcom v-if='list.type=="dropdown"||list.type=="radio-buttons"' v-bind:list='list'></selectcom> -->
          <datecom v-if='list.type=="dayTime"' v-bind:list='list'></datecom>
          <radiocom v-if='list.type=="dropdown"||list.type=="radio-buttons"' v-bind:list='list'></radiocom>
          <checkcom v-if='list.type=="check"' v-bind:list='list'></checkcom>
          <div class="remarks" v-if='list.type=="multi-line-text"'>
            <div class="name">{{list.name}}</div>
            <textarea rows="3" :placeholder='list.placeholder?list.placeholder:"请输入"' v-model='list.value'></textarea>
          </div>
        </li>
      </ul>
      <div class="submit">
        <div class="btn pass" style='margin:0 auto' @click='submit(true)'>提交</div>
        <!-- <div class="btn nopass" @click='submit(false)'>不通过</div>
        <div class="btn pass" @click='submit(true)'>通过</div> -->
      <alert v-on:choice='choice' ref="alert1" v-bind:remind="'是否确定提交？'" v-bind:left="'取消'" v-bind:leftColor="'#333333'" v-bind:right="'确认'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice' ref="alert2" v-bind:remind="'请补充完善信息'" v-bind:left="'确定'" v-bind:leftColor="'#3674B2'"></alert>
      </div>
    </form>
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
// 引入弹窗组件
import alert from "@/components/alert";
// 引入表单组件
import inputcom from "@/components/inputcom";
import datecom from "@/components/datecom";
import radiocom from "@/components/radiocom";
// import selectcom from "@/components/selectcom";
import checkcom from "@/components/checkcom";
export default {
  name: "Risk",
  data() {
    return {
      token: "",
      taskId: "",
      processInsId: "",
      pass: false,
      // 动态表单数据
      data: {
        // 动态表单数据
        jsonObject: {
          outcomes: [],
          name: "综合审批",
          fields: [
            {
              layout: null,
              name: "综合审查结论",
              overrideId: true,
              readOnly: false,
              id: "syntheticalapproveconclusion",
              placeholder: null,
              type: "text",
              fieldType: "FormField",
              value: null,
              required: true
            },
            {
              fieldType: "FormField",
              id: "appointTime",
              layout: null,
              name: "最终预约时间",
              overrideId: true,
              placeholder: "dayTime",
              readOnly: false,
              required: true,
              type: "dayTime",
              value: "2018-10-25 08:00:00"
            },
            {
              readOnly: false,
              type: "dropdown",
              required: true,
              layout: null,
              optionType: null,
              hasEmptyValue: true,
              name: "客户评级",
              overrideId: true,
              options: [
                {
                  name: "一级",
                  type: "clientRating",
                  value: "firstRank"
                },
                {
                  name: "二级",
                  type: "clientRating",
                  value: "secondRank"
                },
                {
                  name: "三级",
                  type: "clientRating",
                  value: "thirdRank"
                },
                {
                  name: "四级",
                  type: "clientRating",
                  value: "forthRank"
                },
                {
                  name: "五级",
                  type: "clientRating",
                  value: "fifthRank"
                }
              ],
              id: "ratingResult",
              placeholder: null,
              optionsExpression: "${clientRating}",
              fieldType: "OptionFormField",
              value: 'secondRank'
            },
            // {
            //   fieldType: "FormField08",
            //   name:
            //     "表单名字08表单名字08表单名字08表单名字08表单名字08表单名字08",
            //   type: "check",
            //   options: [
            //     "选项1",
            //     "选项2",
            //     "选项3",
            //     "选项4",
            //     "选项5",
            //     "选项6",
            //     "选项7",
            //     "选项8",
            //     "选项9",
            //     "选项10"
            //   ],
            //   value: [],
            //   another: true,
            //   anotherValue: "",
            //   readOnly: false,
            //   required: true
            // },
            // {
            //   readOnly: false,
            //   type: "radio-buttons",
            //   required: true,
            //   layout: null,
            //   optionType: null,
            //   hasEmptyValue: null,
            //   name: "审批结果",
            //   overrideId: true,
            //   options: [
            //     {
            //       name: "通过",
            //       type: "loanApproveProposal",
            //       value: "getThrough"
            //     },
            //     {
            //       name: "不通过",
            //       type: "loanApproveProposal",
            //       value: "notPass"
            //     },
            //     {
            //       name: "通过，变更贷款建议",
            //       type: "loanApproveProposal",
            //       value: "passWithChange"
            //     }
            //   ],
            //   id: "syntheticalPassOrNot",
            //   placeholder: null,
            //   optionsExpression: "${loanApproveProposal}",
            //   fieldType: "OptionFormField",
            //   value: null
            // },
            // {
            //   layout: null,
            //   name: "备注",
            //   overrideId: true,
            //   readOnly: false,
            //   id: "approveRemark",
            //   placeholder: null,
            //   type: "multi-line-text",
            //   fieldType: "FormField",
            //   value: "",
            //   required: false
            // }
          ],
          version: 0,
          key: "syntheticalApprove"
        },
        claim: true
      },
      //公司信息数据
      companyinfo: {
        //公司信息数据
        // entName: "江西省新新美容咨询服务有限公司1",
        // legalRep: "李新宇",
        // legalName: "李新宇",
        // projectNumber: "229919636794249216",
        // amount: "12",
        // term: "2",
        // appointTime: "2018-09-29 14:00:00",
        // legalPhone: "13697919058",
        // legalCardNo: "360103199408051774",
        // legalSex: "男",
        // legalBirth: "1994/8/5",
        // legalAddress: "江西省南昌市西湖区",
        // province: "江西省",
        // productName: "征信贷",
        // productId: "267c12f4-cc00-4f7d-a633-0b980f5fa253",
        // infoAuthNum: "20180927000113",
        // controllerIdCode: "360103199408051774",
        // city: "南昌市",
        // creditTaskId: "1043456",
        // productName: "征信贷",
        // creditCode: "911401057480908051",
        // replyMethod: "按月付息，到期还本",
        // controllerName: "李新宇",
        // regCap: "贰仟万圆整",
        // busScope:
        //   "消防设施工程、建筑智险化工程、机电设备安装工程的设计、施工及技术咨询;电子产品的开发、销售:酒防设施、设备的维护、保养、检料;消防设施维修:消防设备、安防设备、制冷设备,空调通风设备,电控设备、防火门.店火春饰门、店火饰料、装饰材料、电线电缆、五金交电的销售。(依法须批准的项目,经相关部门批准后方可开展经营活动)",
        // area: "红谷新区",
        // address: "江西省南昌市红谷新区世贸路333号星大厦楼",
        // assignee: "riskAssistant",
        // controllerPhone: "13697919058",
        // ddTask: "ufinish",
        // register: "unfinish",
        // status: "未完成"
      }
    };
  },
  components: {
    alert,
    inputcom,
    datecom,
    // selectcom,
    radiocom,
    checkcom
  },
  created() {
    let that = this;
    that.token = localStorage.getItem("token");
    that.taskId = that.$route.query.taskId;
    that.processInsId = that.$route.query.processInsId;
    // 获取公司信息
    that
      .$http({
        method: "get",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: that.token
        },
        url: "api/peak-flow/v1/flow/process/" + that.processInsId + "/variables"
      })
      .then(function(res) {
        that.companyinfo = res.data.data;
        that.change();
        console.log(that.companyinfo.appointTime);
        // companyinfo.appointTime
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    //获取动态表单信息
    that
      .$http({
        method: "get",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: that.token
        },
        url: "api/peak-flow/v1/flow/task/" + that.taskId + "/variables"
      })
      .then(function(res) {
        that.data = res.data.data;
        document.getElementById("titleId").innerHTML =
          that.data.jsonObject.name;
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    //将待执行变为进行中
    that
      .$http({
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          authorization: that.token
        },
        url: "api/peak-flow/v1/flow/task/" + that.taskId,
        data: { action: "claim" }
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    // console.log("createdend");
  },
  methods: {
    change() {
      let that = this;
      let date = new Date(that.companyinfo.appointTime);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour <= 12) {
        that.companyinfo.appointTime =
          year + "-" + month + "-" + day + " " + "AM";
      } else {
        that.companyinfo.appointTime =
          year + "-" + month + "-" + day + " " + "PM";
      }
    },
    look() {
      let that = this;
      if (that.data.jsonObject.name == "预约确认") {
        that.$router.push({
          path: "/enterpriseinfo", //企业信息页面
          query: {
            entName: that.companyinfo.entName
          }
        });
      } else {
        if (that.data.jsonObject.name == "风控审批") {
          that.$router.push({
            path: "/report", //客户信息报告页面
            query: {
              title: "客户信息报告",
              type: "customer",
              processInstanceId: that.processInsId
            }
          });
        } else {
          if (that.data.jsonObject.name == "综合审批") {
            that.$router.push({
              path: "/report", //信息采集报告页面
              query: {
                title: "信息采集报告",
                type: "collection",
                processInstanceId: that.processInsId
              }
            });
          } else {
            that.$router.push({
              path: "/report", //综合审批报告页面
              query: {
                title: "综合审批报告",
                type: "comprehensive",
                processInstanceId: that.processInsId
              }
            });
          }
        }
      }
    },
    toapprovalRecord() {
      let that = this;
      that.$router.push({
        path: "/approvalRecord",
        query: {
          taskId: that.taskId,
          processInsId: that.processInsId
        }
      });
    },
    submit(pass) {
      let that = this;
      that.pass = pass;
      this.forEach(that);
      if (that.over) {
        that.$refs.alert2.alertshow();
      } else {
        that.$refs.alert1.alertshow();
      }
    },
    forEach(that) {
      that.over = false;
      for (let i = 0; i < that.data.jsonObject.fields.length; i++) {
        if (that.data.jsonObject.fields[i].required) {
          if (
            that.data.jsonObject.fields[i].value
            // that.form[i].optionValue ||
            // that.form[i].radioValue ||
            // ((that.form[i].checkValue && that.form[i].checkValue.length > 0) ||
            // that.form[i].anotherValue)
          ) {
            $(".approval .form>li")
              .eq(i)
              .removeClass("no");
          } else {
            $(".approval .form>li")
              .eq(i)
              .addClass("no");
            that.over = true;
          }
        }
      }
    },
    choice(choice) {
      console.log("选择是否通过");
      let that = this;
      console.log(`点击${choice.data}`);
      if (choice.data == "left") {
        console.log(`不提交`);
      }
      if (choice.data == "right") {
        console.log(that.data);
        let form = { action: "complete" };
        for (let i = 0; i < that.data.jsonObject.fields.length; i++) {
          form[that.data.jsonObject.fields[i].id] =
            that.data.jsonObject.fields[i].value;
        }
        console.log(form)
        that
          .$http({
            method: "post",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              authorization: that.token
            },
            url: "api/peak-flow/v1/flow/task/" + that.taskId,
            data: form
          })
          .then(function(res) {
            console.log(res);
            that.$router.push("/index");
            console.log("提交成功");
          })
          .catch(function(err) {
            console.log(err);
            console.log("提交失败");
          });
      }
      that.$refs.alert1.alertclose();
      that.$refs.alert2.alertclose();
    }
  }
};
</script>

<style lang="less" scoped>
.approval {
  .companyinfo {
    background: #fff;
    .top {
      padding: 0 0.4rem;
      height: 1.2rem;
      line-height: 1.2rem;
      display: flex;
      justify-content: space-between;
      .name {
        width: 5rem;
        font-size: 0.36rem;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .seereport {
        display: flex;
        align-items: center;
        color: #999999;
        font-size: 0.28rem;
        img {
          width: 10px;
          height: 16px;
          margin-left: 0.2rem;
        }
      }
    }
    .data {
      border-top: 1px solid #cacaca;
      padding: 0.2rem 0.4rem;
      li {
        line-height: 0.56rem;
        color: #000000;
        font-size: 0.3rem;
        span {
          color: #999999;
        }
      }
    }
  }
  .shenpi {
    margin-top: 0.3rem;
    line-height: 1.2rem;
    background: #fff;
    font-size: 0.3rem;
    color: #333333;
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 0.34rem;
        height: 0.46rem;
        margin-right: 0.2rem;
      }
    }
    .right {
      width: 0.2rem;
      height: 0.32rem;
    }
  }
  form {
    .form {
      background: #fff;
      padding-left: 0.2rem;
      > li {
        line-height: 1.2rem;
        font-size: 0.3rem;
        color: #333333;
        border-top: 1px solid #cacaca;
        padding-left: 0.1rem;
        padding-right: 0.3rem;
      }
      > li.no {
        background: #ffe0da;
      }
      .remarks {
        textarea {
          padding: 0.1rem 0;
          width: 100%;
          line-height: 0.5rem;
          font-size: 0.3rem;
        }
        textarea:-ms-input-placeholder {
          color: #999999;
          font-size: 0.3rem;
        }
        textarea::-moz-placeholder {
          color: #999999;
          font-size: 0.3rem;
        }
        textarea:-moz-placeholder {
          color: #999999;
          font-size: 0.3rem;
        }
        textarea::-webkit-input-placeholder {
          //手机端
          color: #999999;
          font-size: 0.3rem;
        }
      }
    }
    .submit {
      margin-top: 0.2rem;
      height: 1.1rem;
      padding: 0 0.75rem;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        width: 2.6rem;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border: 1px solid #3674b2;
        border-radius: 0.8rem;
        font-size: 18px;
        font-weight: 600;
      }
      .nopass {
        background: #fff;
        color: #3674b2;
      }
      .pass {
        background: #3674b2;
        color: #fff;
      }
    }
  }
}
</style>