<template>
  <div class="history">
    <ul class='data'>
      <li v-on:click='totask'>
        <div class="left">
          <div class="name">江西省南昌市进贤县111号</div>
          <div class="num">任务编号:6543213546132</div>
        </div>
        <div class="right">
          <div class="time">2018-10-16</div>
          <div class="pass no">审批不通过</div>
        </div>
      </li>
      <li v-for='list in history' :key='list.id' v-on:click='totask'>
      <!-- <li v-on:click='totask'> -->
        <div class="left">
          <div class="name">江西省南昌市进贤县111号</div>
          <div class="num">任务编号:6543213546132</div>
        </div>
        <div class="right">
          <div class="time">2018-10-16</div>
          <div class="pass">审批通过</div>
        </div>
      </li>
    </ul>
    <div class='loading' v-show='loading'>
      <img src="static/img/icon/loading.png" alt="">
      载入中，请等待
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
      history: ["历史记录","历史记录","历史记录","历史记录","历史记录","历史记录","历史记录","历史记录", "历史记录"],
      loading: false,
      switch: true
    };
  },
  methods: {
    totask() {
      this.$router.push("/taskdetail");
    },
  },
  mounted() {
    let that = this;
    let newArr = ["历史记录", "历史记录", "历史记录", "历史记录", "历史记录"];
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
  padding-bottom: 1rem;

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
          line-height:0.5rem;
          font-size:0.36rem;
          color:#333333;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .num{
          line-height:0.5rem;
          font-size:0.28rem;
          color:#999999;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .right{
        text-align:right;
        .time{
          line-height:0.5rem;
          font-size:0.28rem;
          color:#C6C6C6;
        }
        .pass{
          line-height:0.5rem;
          font-size:0.3rem;
          color:#333333;
        }
        .pass.no{
          color:#F35535;
        }
      }
    }
    li:first-child {
      margin-top: 0;
    }
  }

  .loading {
    position: absolute;
    bottom: 0;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 0.5rem;
      height: 0.5rem;
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