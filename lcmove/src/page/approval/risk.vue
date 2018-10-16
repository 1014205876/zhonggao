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
        <li v-on:click='fuhe(1)'>
          <div class="left">征信是否符合准入要求</div>
          <div>
            <span v-if='form.zhengxin'>{{form.zhengxin}}</span>
            <img src="static/img/icon/right_gray.png" alt="" class="right">
          </div>
        </li>
        <li v-on:click='fuhe(2)'>
          <div class="left">基本信息是否符合准入要求</div>
          <img src="static/img/icon/right_gray.png" alt="" class="right">
        </li>
        <li v-on:click='fuhe(3)'>
          <div class="left">其他是否符合产品准入要求</div>
          <img src="static/img/icon/right_gray.png" alt="" class="right">
        </li>
        <li v-on:click='fuhe(4)'>
          <div class="left">是否建议尽调</div>
          <img src="static/img/icon/right_gray.png" alt="" class="right">
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
      <alert v-on:choice='choice1' ref="alert1" v-bind:index="1" v-bind:remind="'征信是否符合准入要求'" v-bind:left="'不符合'" v-bind:leftColor="'#333333'" v-bind:right="'符合'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice1' ref="alert2" v-bind:index="2" v-bind:remind="'基本信息是否符合准入要求'" v-bind:left="'不符合'" v-bind:leftColor="'#333333'" v-bind:right="'符合'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice1' ref="alert3" v-bind:index="3" v-bind:remind="'其他是否符合产品准入要求'" v-bind:left="'不符合'" v-bind:leftColor="'#333333'" v-bind:right="'符合'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice1' ref="alert4" v-bind:index="4" v-bind:remind="'是否建议尽调'" v-bind:left="'不符合'" v-bind:leftColor="'#333333'" v-bind:right="'符合'" v-bind:rightColor="'#3674B2'"></alert>
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
  name: "Risk",
  data() {
    return {
      form: {
        zhengxin: "",
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
      if (this.form.contacts && this.form.tel && this.form.address) {
        console.log("全部填完");
        this.$refs.alert5.alertshow();
      } else {
        console.log("未填完");
        this.$refs.alert6.alertshow();
      }
    },
    choice1(choice) {
      console.log(choice.data)
      console.log(choice.index)
      // console.log("选择是否符合");
      let that = this;
      // console.log(`点击${choice}`);
      // if (choice == "left") {
      //   console.log(`不符合`);
      // }
      // if (choice == "right") {
      //   console.log(`符合`);
      // }
      that.$refs.alert1.alertclose();
      that.$refs.alert2.alertclose();
      that.$refs.alert3.alertclose();
      that.$refs.alert4.alertclose();
    },
    choice2(choice) {
      console.log("选择是否通过");
      let that = this;
      console.log(`点击${choice}`);
      if (choice == "left") {
        console.log(`不提交`);
      }
      if (choice == "right") {
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