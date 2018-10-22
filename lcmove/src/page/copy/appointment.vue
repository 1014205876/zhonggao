<template>
<!-- 预约确认 -->
  <div class="approval">
    <companyinfo></companyinfo>
    <div class="shenpi" v-on:click='toapprovalRecord'>
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
          <input type="text" v-model='form.contacts' placeholder='请输入联系人姓名'>
        </li>
        <li>
          <div class="left">联系电话</div>
          <input type="text" v-model='form.tel' placeholder='请输入电话'>
        </li>
        <li>
          <div class="left">联系地址</div>
          <input type="text" v-model='form.address' placeholder='请输入地址'>
        </li>
        <li>
          <div class="left">备注</div>
        </li>
        <li>
          <textarea rows="5" placeholder='请输入备注' v-model='form.remarks'></textarea>
        </li>
      </ul>
      <div class="submit">
        <input type="submit" value='提交'>
      </div>
      <alert v-on:choice='choice' ref="alert1" v-bind:remind="'是否确定提交？'" v-bind:left="'取消'" v-bind:leftColor="'#333333'" v-bind:right="'确认'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice' ref="alert2" v-bind:remind="'请补充完善信息'" v-bind:left="'确定'" v-bind:leftColor="'#3674B2'"></alert>
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
      form: {
        contacts: "",
        tel: "",
        address: "",
        remarks: ""
      }
    };
  },
  components: {
    alert,
    companyinfo
  },
  methods: {
    toapprovalRecord() {
      this.$router.push("/approvalRecord");
    },
    submit() {
      let that=this;
      if (that.form.contacts && that.form.tel && that.form.address) {
        console.log("全部填完");
        that.$refs.alert1.alertshow();
      } else {
        console.log("未填完");
        that.$refs.alert2.alertshow();
      }
    },
    choice(choice) {
      if (choice == "left") {
        console.log(`点击${choice}`);
      }
      if (choice == "right") {
        console.log(`点击${choice}`);
      }
      if (choice == "btn") {
        console.log(`点击${choice}`);
      }
      this.$refs.alert1.alertclose();
      this.$refs.alert2.alertclose();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/approval.less";
</style>