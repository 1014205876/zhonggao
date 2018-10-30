<template>
  <div class="personinfor">
    <div class="top" style='background-image:url(static/img/bgimg_infor.jpg)'>
        <img src="static/img/headimg_no.png" alt="">{{name}}
    </div>
    <div class="out" v-on:click='out'>注销登录</div>
    <alert v-on:choice='choice' ref="alert" v-bind:remind="'注销登录'" v-bind:left="'取消'" v-bind:leftColor="'#000'" v-bind:right="'确认'" v-bind:rightColor="'#3674b2'"></alert>
      
  </div>
</template>

<script>
// 引入弹窗组件
import alert from "@/components/alert";
export default {
  name: "Personinfor",
  data() {
    return {
      name: "未登录"
    };
  },
  components: {
    alert
  },
  methods: {
    out() {
      let that = this;
      that.$refs.alert.alertshow();
    },
    choice(choice) {
      let that = this;
      if (choice.data == "left") {
        console.log(`点击取消`);
      }
      if (choice.data == "right") {
        //清除所有本地缓存
        // localStorage.clear("token");
        localStorage.clear("account");
        localStorage.clear("indexUrlwangzheng");
        sessionStorage.clear("logingwangzheng");
        that.$router.push({
          path: "/login"
        });
      }
      that.$refs.alert.alertclose();
    }
  },
  created() {
    let that = this;
    that.name = that.$route.query.name;
  }
};
</script>

<style lang="less" scoped>
.personinfor {
  .top {
    width: 100%;
    height: 2.6rem;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    font-size: 0.36rem;
    color: #fff;
    img {
      width: 1.4rem;
      height: 1.4rem;
      margin: 0 0.26rem 0 0.56rem;
    }
  }
  .out {
    width: 3.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    border-radius: 0.8rem;
    border: 0.02rem solid #3674b2;
    color: #3674b2;
    font-size: 0.36rem;
    margin: 1rem auto;
    background: #fff;
  }
}
</style>
