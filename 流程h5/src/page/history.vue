<template>
  <div class="history">
    <ul class='data'>
      <!-- <li v-on:click='totask'>
        <div class="left">
          <div class="name">江西省南昌市进贤县1111号</div>
          <div class="num">任务编号:6543213546132</div>
        </div>
        <div class="right">
          <div class="time">2018-10-16</div>
          <div class="pass no">审批不通过</div>
        </div>
      </li> -->
      <li v-for='list in history.list' :key='list.id' v-on:click='totask'>
        <div class="left">
          <div class="name">{{list.entName}}</div>
          <div class="num">任务编号:{{list.taskId}}</div>
        </div>
        <div class="right">
          <div class="time">{{list.endTime}}</div>
          <div class="pass">{{list.actName}}</div>
        </div>
      </li>
    </ul>
    <div class="notask" v-if='no'>
      <img src="/static/img/icon/notask.png" alt="">
      您暂时还没有历史任务
    </div>
    <div class='loading' v-show='loading'>
      <img src="static/img/icon/loading.png" alt="">
      加载中...
    </div>
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
export default {
  name: "History",
  data() {
    return {
      processInsId: "",
      no: false,
      history: {
        count: 38,
        firstResult: 0,
        list: [
          {
            actInsId: "1103639",
            actName: "综合审批",
            amount: 69,//申请金额
            assignee: null,
            creatTime: "2018-10-22 15:21:37",
            endTime: "2018-10-22 15:22:12",
            entName: "江西省琴岛传媒咨询服务有限公司9",
            no: null,
            operatorId: null,
            operatorName: null,
            processInsId: "1103539",
            productId: null,
            productName: "征信贷",
            progress: "40%",//目前进度
            projectNumber: null,
            scope: null,
            taskId: "1103640"
          },
        ],
        maxResults: 10,
        pageNo: 1,
        pageSize: 10
      },
      loading: false,
      switch: true
    };
  },
  methods: {
    totask(processInstanceId) {
      this.$router.push({
        path: "/taskdetail",
        query: {
          processInstanceId: ""
        }
      });
    }
  },
  created() {
    let that = this;
    console.log("createdstart");
    that.processInsId = that.$route.query.processInsId;
    that
      .$http({
        method: "get",
        header: "Content-Type:application/json",
        url:
          "api/v1/flow/historic-task?pageSize=" +
          10 +
          "&pageNo=" +
          1 +
          "&etpName=" +
          // "客户名称" +
          "&createStartDate=" +
          // 1 +
          "&createEndDate=" +
          // 1 +
          "&productName=" +
          "ZXD"
      })
      .then(function(res) {
        // that.history = res.data.data;
        // if (res.data.data) {
        //   that.no = false;
        // } else {
        //   that.no = true;
        // }
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    console.log("createdend");
  },
  mounted() {
    let that = this;
    let newArr = [
      {
        actName: "状态",
        entName: "企业/用户",
        creatTime: "接收时间",
        endTime: "已办时间"
      },
      {
        actName: "状态",
        entName: "企业/用户",
        creatTime: "接收时间",
        endTime: "已办时间"
      },
      {
        actName: "状态",
        entName: "企业/用户",
        creatTime: "接收时间",
        endTime: "已办时间"
      },
      {
        actName: "状态",
        entName: "企业/用户",
        creatTime: "接收时间",
        endTime: "已办时间"
      },
      {
        actName: "状态",
        entName: "企业/用户",
        creatTime: "接收时间",
        endTime: "已办时间"
      }
    ];
    $(document).on("scroll", function() {
      if (
        $(document).scrollTop() + $(window).height() >=
        $(document).height()
      ) {
        that.loading = true;
        if (that.switch) {
          that.switch = false;
          setTimeout(function() {
            that.history = that.history.concat(newArr);
            that.loading = false;
            that.switch = true;
          }, 2000);
        }
      }
    });
  }
};
</script>

<style lang="less" scoped>
.history {
  position: relative;
  padding-bottom: 1.6rem;

  .data {
    li {
      background: #fff;
      margin-top: 0.1rem;
      padding: 0.3rem;
      display: flex;
      justify-content: space-between;
      .left {
        width: 4rem;
        .name {
          line-height: 0.5rem;
          font-size: 0.36rem;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .num {
          line-height: 0.5rem;
          font-size: 0.28rem;
          color: #999999;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .right {
        text-align: right;
        .time {
          line-height: 0.5rem;
          font-size: 0.28rem;
          color: #c6c6c6;
        }
        .pass {
          line-height: 0.5rem;
          font-size: 0.3rem;
          color: #333333;
        }
        .pass.no {
          color: #f35535;
        }
      }
    }
    li:first-child {
      margin-top: 0;
    }
  }

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

  .loading {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1.6rem;
    font-size: 0.28rem;
    color: #999999;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.2rem;
      animation-name: myfirst;
      animation-duration: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes myfirst {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
}
</style>