<template>
  <div class="approvalRecord">
    <div class="notask" v-if='no'>
      <img src="/static/img/icon/notask.png" alt="">
      您暂时还没有审批记录
    </div>
    <ul class='list' v-else>
      <li v-for='list in data' v-bind:key='list.id' v-if='list.name'>
        <div class="top">
          <div class="name">
            <img src="static/img/icon/task_blue.png" alt="">{{list.name}}
          </div>
          <div class="time">
            <span></span>
          </div>
        </div>
        <ul class="bottom">
          <li v-for="item in list.fields" :key='item.id' v-if='item.value&&item.name' :class='{remark:item.type=="multi-line-text"}'>
          <!-- <li v-for="item in list.fields" :key='item.id' v-if='item.value&&item.name'> -->
            <span class='left'>{{item.name}}</span>
            <span class='right' v-if='item.type=="dayTime"'>
              <datechange v-bind:date='item.value' v-bind:noon='true'></datechange>
            </span>
            <span class='right' v-else>{{item.value}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入时间标准化组件
import datechange from "@/components/datechange";
export default {
  name: "approvalRecord",
  data() {
    return {
      no: true,
      taskId: "",
      data: [
        // {
        //   fields: [
        //     {
        //       fieldType: "OptionFormField",
        //       hasEmptyValue: null,
        //       id: "creditConformRequest",
        //       layout: null,
        //       name: "客户征信是否符合产品准入要求",
        //       optionType: null,
        //       options: [],
        //       optionsExpression: "${conformity}",
        //       overrideId: true,
        //       placeholder: null,
        //       readOnly: false,
        //       required: true,
        //       type: "radio-buttons",
        //       value: "符合"
        //     },
        //     {
        //       fieldType: "FormField",
        //       id: "approveRemark",
        //       layout: null,
        //       name: "备注",
        //       overrideId: true,
        //       placeholder: null,
        //       readOnly: false,
        //       required: false,
        //       type: "multi-line-text",
        //       value:
        //         "1333333"
        //     }
        //   ],
        //   key: "riskApprove",
        //   name: "准入审核",
        //   outcomes: [],
        //   version: 0
        // }
      ]
    };
  },
  components: {
    datechange
  }, //引入组件
  methods: {},
  created() {
    console.log("createdstart");
    let that = this;
    let token = localStorage.getItem("token");
    that.taskId = that.$route.query.taskId;
    //获取审批记录
    that
      .$http({
        method: "get",
        header: {
          "Content-Type": "application/json;charset=utf-8"
        },
        headers: {
          authorization: token
        },
        url: "api/peak-flow/v1/flow/historic-task/" + that.taskId
      })
      .then(function(res) {
        if (res.data.data.length <= 1) {
          that.no = true;
        } else {
          that.no = false;
          that.data = res.data.data;
        }
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    console.log("createdend");
  }
};
</script>

<style lang="less" scoped>
.approvalRecord {
  .notask {
    padding-top: 3rem;
    text-align: center;
    color: #999999;
    font-size: 0.28rem;
    img {
      display: block;
      width: 1.52rem;
      height: 1.72rem;
      margin: 0 auto 0.4rem;
    }
  }

  .list {
    > li {
      margin-top: 0.2rem;
      background: #fff;
      font-size: 0.3rem;
      .top {
        line-height: 1.2rem;
        padding: 0 0.44rem;
        display: flex;
        justify-content: space-between;
        .name {
          display: flex;
          align-items: center;
          color: #3674b2;
          img {
            width: 0.3rem;
            height: 0.4rem;
            margin-right: 0.2rem;
          }
        }
        .time {
          color: #c6c6c6;
          font-size: 0.28rem;
        }
      }
      .bottom {
        border-top: 1px solid #cacaca;
        padding: 0.3rem 0.5rem;
        font-size: 0.28rem;
        > li {
          line-height: 0.64rem;
          display: flex;
          justify-content: space-between;
          .left {
            width: 3.4rem;
            line-height: 0.5rem;
            padding: 0.07rem 0;
            color: #999999;
            white-space: normal;
            word-break: break-all;
          }
          .right {
            text-align: right;
            width: 2.3rem;
            line-height: 0.5rem;
            padding: 0.07rem 0;
            color: #333333;
            white-space: normal;
            word-break: break-all;
          }
          .right.no {
            color: #f35535;
          }
        }
        > li.remark {
          display: block;
          span {
            width:100%;
            text-align:left;
            display: block;
            line-height: 0.5rem;
            white-space: normal;
            word-break: break-all;
          }
        }
      }
    }
    > li:first-child {
      margin-top: 0;
    }
  }
}
</style>
