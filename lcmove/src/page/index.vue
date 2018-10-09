<template>
  <div class="index">
    <div class='tanimate'>
      <button v-on:click='start'>开启动画</button>
    </div>
    <div class="banimate" v-on:click='stop'>
      <div style='background:red'>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
    <div class="lanimate">
    <button v-on:click='remember'>记住</button>
    </div>
    <div class="ranimate">
    <button v-on:click='forget'>忘记</button>
    </div>
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
export default {
  name: "Index",
  data() {
    return {};
  },
  //函数盒子
  methods: {
    remember() {
      localStorage.setItem("indexUrl", true);
    },
    forget() {
      localStorage.setItem("indexUrl", false);
    },
    start() {
      $(".tanimate,.banimate,.lanimate,.ranimate").addClass("active");
    },
    stop() {
      $(".tanimate,.banimate,.lanimate,.ranimate").removeClass("active");
    }
  },
  // 获取后端数据
  beforeRouter() {},
  // 修改数据
  created() {
    let account =
      localStorage.getItem("account") || sessionStorage.getItem("account");
    console.log(account);
    let password =
      localStorage.getItem("password") || sessionStorage.getItem("password");
    console.log(password);
  },
  // 操作dome
  mounted() {
    $(".index .tanimate").css("height", $(window).height());
    $(".index .banimate").css("height", $(window).height());
  }
};
</script>

<style lang="less" scoped>
.index {
  position: relative;
  width: 100%;
  overflow: hidden;
  .tanimate {
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    padding-top: 1rem;
    transform: translateY(0%);
    transition: all 1s;
    -webkit-transition: all 1s; /* Safari */
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear; /* Safari and Chrome */
  }
  .tanimate.active {
    transform: translateY(-100%);
  }
  .banimate {
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    background: skyblue;
    width: 100%;
    min-height: 50%;
    transform: translateY(0%);
    overflow: hidden;
    transition: all 2s;
    -webkit-transition: all 2s; /* Safari */
    transition-timing-function: ease;
    -webkit-transition-timing-function: ease; /* Safari and Chrome */
  }
  .banimate.active {
    transform: translateY(-100%);
  }
  .lanimate {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background: skyblue;
    width: 20%;
    transform: translateX(-100%);
    overflow: hidden;
    transition: all 2s;
    -webkit-transition: all 2s;
    /* Safari */
  }
  .lanimate.active {
    transform: translateX(0%);
  }
  .ranimate {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    background: skyblue;
    width: 20%;
    transform: translateX(100%);
    overflow: hidden;
    transition: all 2s;
    -webkit-transition: all 2s;
    /* Safari */
  }
  .ranimate.active {
    transform: translateX(0%);
  }
}
</style>
