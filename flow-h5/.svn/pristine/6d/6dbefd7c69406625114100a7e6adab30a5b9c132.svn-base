<template>
<!-- 风控审批 -->
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
          <div class="left">建议贷款金额</div>
          <input type="text" v-model='form.jine' placeholder='请输入电话'>
        </li>
        <li>
          <div class="left">建议贷款期限</div>
          <input type="text" v-model='form.qixian' placeholder='请输入电话'>
        </li>
        <li v-on:click='fuhe(1)'>
          <div class="left">担保方式</div>
          <div class='right'>
            <span v-show='form.danbao'>{{form.danbao}}</span>
            <img src="static/img/icon/right_gray.png" alt="" class="right">
          </div>
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
      <alert v-on:choice='choice1' ref="alert1" v-bind:index="'1'" v-bind:remind="'担保方式'" v-bind:left="'方式1'" v-bind:leftColor="'#333333'" v-bind:right="'方式2'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice2' ref="alert5" v-bind:remind="'是否确定提交？'" v-bind:left="'取消'" v-bind:leftColor="'#333333'" v-bind:right="'确认'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice2' ref="alert6" v-bind:remind="'请补充完善信息'" v-bind:left="'确定'" v-bind:leftColor="'#3674B2'"></alert>
    </form>
  </div>
</template>

<script>
// 引入弹窗组件
import alert from "@/components/alert";
// 引入公司详情组件
import companyinfo from "@/components/companyinfo";
export default {
  name: "Comprehensive",
  data() {
    return {
      form: {
        jine: "",
        qixian: "",
        danbao: "",
        jianyi: "",
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
    fuhe(index) {
      if (index == 1) {
        this.$refs.alert1.alertshow();
      }
      if (index == 2) {
        this.$refs.alert2.alertshow();
      }
      if (index == 3) {
        this.$refs.alert3.alertshow();
      }
      if (index == 4) {
        this.$refs.alert4.alertshow();
      }
    },
    submit() {
      if (
        this.form.zhengxin &&
        this.form.jiben &&
        this.form.qita &&
        this.form.jianyi
      ) {
        console.log("全部填完");
        this.$refs.alert5.alertshow();
      } else {
        console.log("未填完");
        this.$refs.alert6.alertshow();
      }
    },
    choice1(choice) {
      let that = this;
      switch (choice.index) {
        case "1":
          that.form.zhengxin = choice.name;
          that.$refs.alert1.alertclose();
          break;
        case "2":
          that.form.jiben = choice.name;
          that.$refs.alert2.alertclose();
          break;
        case "3":
          that.form.qita = choice.name;
          that.$refs.alert3.alertclose();
          break;
        case "4":
          that.form.jianyi = choice.name;
          that.$refs.alert4.alertclose();
          break;
        default:
          console.log("其他");
      }
    },
    choice2(choice) {
      console.log("选择是否通过");
      let that = this;
      console.log(`点击${choice.data}`);
      if (choice.data == "left") {
        console.log(`不提交`);
      }
      if (choice.data == "right") {
        console.log(`提交`);
        console.log(that.form);
      }
      that.$refs.alert5.alertclose();
      that.$refs.alert6.alertclose();
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/approval.less";
</style>