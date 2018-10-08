<template>
  <div class="login" style='background-image:url(static/img/bgimg.jpg)'>
    <form @submit.prevent="signIn">
      <img class='logo' src="static/img/bgimg.jpg" alt="">
      <input type="text" v-model='account' placeholder='请输入账号'>
      <input type="password" v-model='password' placeholder='请输入密码'>
      <label>
        <input type="checkbox" v-model='remember'>记住我
      </label>
      <input class='submit' type="submit" value='登录'>
    </form>
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
export default {
  name: "Login",
  data() {
    return {
      account: 123,
      password: 123,
      remember: false
    };
  },
  //函数盒子
  methods: {
    signIn() {
      console.log(this.remember)
      if (this.account == 123 && this.password == 123) {
        this.$router.push("/rou/index");
      } else {
        alert("用户名或密码错误");
      }
    }
  },
  // 获取后端数据
  beforeRouter() {},
  // 修改数据
  created() {},
  // 操作dome
  mounted() {
    $(".login").css("height", $(window).height());
  }
};
</script>

<style lang="less" scoped>
.login {
  -moz-box-sizing: border-box; /*Firefox3.5+*/
  -webkit-box-sizing: border-box; /*Safari3.2+*/
  -o-box-sizing: border-box; /*Opera9.6*/
  -ms-box-sizing: border-box; /*IE8*/
  width: 100%;
  padding-top: 3rem;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .logo {
    display: block;
    margin: 0 auto;
    width: 2rem;
    // height:2rem;
  }
  input {
    display: block;
    width: 70%;
    margin: 0.1rem auto;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.5);
  }
  button {
    display: block;
    width: 70%;
    margin: 0.1rem auto;
    border-radius: 0.05rem;
    padding: 5px;
  }
}
</style>
