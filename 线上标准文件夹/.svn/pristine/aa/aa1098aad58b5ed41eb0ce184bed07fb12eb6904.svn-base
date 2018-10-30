<template>
  <div class="login" style='background-image:url(static/img/bgimg_login.jpg)'>
    <!-- <form> -->
      <img class='logo' src="static/img/logo.png" alt="">
      <div class="name">方舟资产系统</div>
      <div class="input">
        <img class='icon' src="static/img/icon/username.png" alt="">
        <input type="text" v-model='account' placeholder='输入用户名'>
      </div>
      <div class="input">
        <img class='icon' src="static/img/icon/password.png" alt="">
        <input type="password" v-model='password' placeholder='输入密码'>
      </div>
      <div class="label">
        <input id='remember' type="checkbox" v-model='remember'>
      <label for='remember'>
        <div class="check">
          <img src="static/img/icon/sure.png" alt="">
        </div>
        自动登录
      </label>
      </div>
      <input class='submit' type="button" value='登录' v-on:click='signIn'>
    <!-- </form> -->
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
export default {
  name: "Login",
  data() {
    return {
      // account: "regionManager",//预约确认
      // account: "loanApprover",//风控审批
      // account: "riskDirector",//风控总监审批
      // account: "complianceAssistant",//合规审查
      // account: "vicePresident",//副总经理审批
      // account: "president",//总经理审批
      // password: '123456',//密码
      account: "",
      password: "",
      remember: false
    };
  },
  //函数盒子
  methods: {
    signIn() {
      let that = this;
      if (that.account == "") {
        alert("请输入用户名");
      } else {
        if (that.password == "") {
          alert("请输入密码");
        } else {
          let userInfos = { loginName: that.account, password: that.password };
          document.activeElement.blur();
          that
            .$http({
              url: "/api/auth/login",
              method: "post",
              headers: {
                "Content-Type": "application/json;charset=utf-8"
              },
              data: userInfos
            })
            .then(function(res) {
              localStorage.setItem("indexUrlwangzheng", !that.remember); //记住是否需要自动登录
              sessionStorage.setItem("logingwangzheng", true); //记住本次已经登录
              localStorage.setItem("token", res.data.result.token); //将token存入本地
              localStorage.setItem("account", that.account); //记住本次账号名
              console.log("登陆成功");
              console.log(res);
              that.$router.push("/index");
            })
            .catch(function(err) {
              console.log(err);
              alert("用户名或密码错误");
            });
        }
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
  }
  .name {
    font-size: 0.48rem;
    color: #ffffff;
    line-height: 1.3rem;
    text-align: center;
  }
  .input {
    width: 5rem;
    height: 0.9rem;
    margin: 0.4rem auto;
    border-radius: 0.1rem;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    .icon {
      width: 14px;
      margin-left: 0.3rem;
      margin-right: 0.2rem;
    }
    input {
      height: 0.9rem;
      background: none;
      font-size: 0.3rem;
      color: #fff;
    }
    input:-ms-input-placeholder {
      color: #999999;
      font-size: 0.3rem;
    }
    input::-moz-placeholder {
      color: #999999;
      font-size: 0.3rem;
    }
    input:-moz-placeholder {
      color: #999999;
      font-size: 0.3rem;
    }
    input::-webkit-input-placeholder {
      //手机端
      color: #999999;
      font-size: 0.3rem;
    }
  }
  .label {
    width: 5rem;
    margin: 0.4rem auto;
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 0.3rem;
    label {
      width: 100%;
      display: flex;
      align-items: center;
      .check {
        width: 16px;
        height: 16px;
        margin-left: 0.15rem;
        margin-right: 0.25rem;
        border-radius: 0.05rem;
        border: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 12px;
          display: none;
        }
      }
    }
    input {
      display: none;
    }
    input:checked + label .check {
      img {
        display: block;
      }
    }
  }
  .submit {
    display: block;
    background: #3674b2;
    color: #fff;
    font-size: 0.3rem;
    width: 5rem;
    height: 0.8rem;
    margin: 0.5rem auto 0;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 0.8rem;
  }
}
</style>
