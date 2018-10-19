<template>
  <div class="history">
    <ul class='data'>
      <li v-on:click='totask'>
        <div class="left">
          <div class="name">江西省南昌市进贤县1111号</div>
          <div class="num">任务编号:6543213546132</div>
        </div>
        <div class="right">
          <div class="time">2018-10-16</div>
          <div class="pass no">审批不通过</div>
        </div>
      </li>
      <li v-for='list in history' :key='list.id' v-on:click='totask'>
        <div class="left">
          <div class="name">{{list.entName}}</div>
          <div class="num">任务编号:6543213546132</div>
        </div>
        <div class="right">
          <div class="time">{{list.creatTime}}</div>
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
      no: false,
      history: [
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
      ],
      loading: false,
      switch: true
    };
  },
  methods: {
    totask() {
      this.$router.push("/taskdetail");
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
          2 +
          "&etpName=" +
          1 +
          "&createStartDate=" +
          1 +
          "&createEndDate=" +
          1 +
          "&productName=" +
          1 +
          "ZXD"
      })
      .then(function(res) {
        // that.companyinfo = res.data.data;
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
      console.log("滚动");
      console.log($(document).scrollTop());
      console.log($(window).height());
      console.log($(document).height());
      console.log($(document).scrollTop() + $(window).height());
      if (
        $(document).scrollTop() + $(window).height() >=
        $(document).height()
      ) {
        that.loading = true;
        if (that.switch) {
          that.switch = false;
          setTimeout(function() {
            console.log("刷新");
            that.history = that.history.concat(newArr);
            console.log(that.history);
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
        width: 3.6rem;
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