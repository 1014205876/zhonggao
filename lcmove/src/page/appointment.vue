<template>
  <div class="appointment">
    <companyinfo></companyinfo>
    <div class="shenpi">
      <div class="left">
        <img src="static/img/icon/task_gray.png" alt="">审批记录
      </div>
      <img src="static/img/icon/right_gray.png" alt="" class="right">
    </div>
    <div class="shenpi">
      <div class="left">
        <img src="static/img/icon/task_gray.png" alt="">预约确认
      </div>
    </div>
    <form @submit.prevent="submit">
      <ul class="form">
        <li>
          <div class="left">联系人</div>
          <input type="text" v-model='contacts' placeholder='请输入联系人姓名'>
        </li>
        <li>
          <div class="left">联系电话</div>
          <input type="text" v-model='tel' placeholder='请输入电话'>
        </li>
        <li>
          <div class="left">联系地址</div>
          <input type="text" v-model='address' placeholder='请输入地址'>
        </li>
        <li>
          <div class="left">备注</div>
        </li>
        <li>
          <textarea name="" rows="5" placeholder='请输入备注'></textarea>
        </li>
      </ul>
      <div class="submit">
        <input type="submit" value='提交'>
      </div>
      <alert v-on:choice='choice' ref="alert1" v-bind:remind="'是否确定提交？'" v-bind:left="'取消'" v-bind:right="'确认'"></alert>
      <alert v-on:choice='choice' ref="alert2" v-bind:remind="'请补充完善信息'" v-bind:right="'确定'"></alert>
    </form>
  </div>
</template>

<script>
// 引入弹窗组件
import alert from "@/components/alert";
// 引入公司详情组件
import companyinfo from "@/components/companyinfo";
export default {
  name: "Appointment",
  data() {
    return {
      contacts: "",
      tel: "",
      address: "",
    };
  },
  components: {
    alert,
    companyinfo
  },
  methods: {
    submit() {
      if (this.contacts && this.tel && this.address) {
        console.log("全部填完");
        this.$refs.alert1.alertshow();
      } else {
        console.log("未填完");
        this.$refs.alert2.alertshow();
      }
    },
    choice(choice) {
      if (choice == "left") {
        console.log(`点击${choice}`)
      }
      if (choice == "right") {
        console.log(`点击${choice}`)
      }
      if (choice == "btn") {
        console.log(`点击${choice}`)
      }
      this.$refs.alert1.alertclose();
      this.$refs.alert2.alertclose();
    }
  }
};
</script>

<style lang="less" scoped>
.appointment {
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
      padding-left: 0.3rem;
      > li {
        line-height: 1.2rem;
        font-size: 0.3rem;
        color: #333333;
        border-top: 1px solid #cacaca;
        padding-left: 0.2rem;
        display: flex;
        align-items: center;
        .left {
          width: 1.6rem;
        }
        input {
          font-size: 0.3rem;
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
        textarea {
          padding: 0.1rem 0;
          padding-right: 0.5rem;
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
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 2.6rem;
        height: 0.8rem;
        border-radius: 0.8rem;
        background: #3674b2;
        color: #fff;
        font-size: 0.36rem;
        font-weight: 600;
      }
    }
  }
}
</style>