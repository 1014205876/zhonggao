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
        <li v-for='list in form' :key='list.id'>
          <inputcom v-if='list.type=="input"' v-bind:list='list'></inputcom>
          <selectcom v-if='list.type=="select"' v-bind:list='list'></selectcom>
          <radiocom v-if='list.type=="radio"' v-bind:list='list'></radiocom>
          <checkcom v-if='list.type=="check"' v-bind:list='list'></checkcom>
        </li>
        <li class='remarks'>
          <div class="name">备注</div>
          <textarea rows="3" placeholder='请输入备注' v-model='form.remarks'></textarea>
        </li>
      </ul>
      <div class="submit">
        <input type="submit" value='提交'>
      <alert v-on:choice='choice2' ref="alert5" v-bind:remind="'是否确定提交？'" v-bind:left="'取消'" v-bind:leftColor="'#333333'" v-bind:right="'确认'" v-bind:rightColor="'#3674B2'"></alert>
      <alert v-on:choice='choice2' ref="alert6" v-bind:remind="'请补充完善信息'" v-bind:left="'确定'" v-bind:leftColor="'#3674B2'"></alert>
      </div>
    </form>
  </div>
</template>

<script>
// 引入弹窗组件
import alert from "@/components/alert";
// 引入公司详情组件
import companyinfo from "@/components/companyinfo";
// 引入表单组件
import inputcom from "@/components/inputcom";
import radiocom from "@/components/radiocom";
import selectcom from "@/components/selectcom";
import checkcom from "@/components/checkcom";
export default {
  name: "Risk",
  data() {
    return {
      form: [
        {
          fieldType: "FormField00",
          name: "表单名字00",
          type: "input",
          value: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField01",
          name: "表单名字01",
          type: "input",
          value: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField02",
          name: "表单名字02",
          type: "input",
          value: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField03",
          name: "表单名字03",
          type: "select",
          option: ["选项1", "选项2", "选项3"],
          optionValue: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField04",
          name: "表单名字04",
          type: "select",
          option: ["选项1", "选项2", "选项3"],
          optionValue: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField05",
          name: "表单名字05",
          type: "select",
          option: [
            "选项1",
            "选项2",
            "选项3",
            "选项4",
            "选项5",
            "选项6",
            "选项7",
            "选项8",
            "选项9",
            "选项10",
            "选项11",
            "选项12",
            "选项13"
          ],
          optionValue: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField06",
          name: "表单名字06",
          type: "check",
          check: ["选项1", "选项2", "选项3"],
          checkValue: [],
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField07",
          name: "表单名字07",
          type: "check",
          check: ["选项1", "选项2", "选项3", "选项4", "选项5"],
          checkValue: [],
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField08",
          name: "表单名字08",
          type: "check",
          check: [
            "选项1",
            "选项2",
            "选项3",
            "选项4",
            "选项5",
            "选项6",
            "选项7",
            "选项8",
            "选项9",
            "选项10"
          ],
          checkValue: [],
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField09",
          name: "表单名字09",
          type: "radio",
          radio: ["选项1", "选项2", "选项3"],
          radioValue: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField10",
          name: "表单名字10",
          type: "radio",
          radio: ["选项1", "选项2", "选项3", "选项4", "选项5"],
          radioValue: "",
          readOnly: false,
          required: true
        },
        {
          fieldType: "FormField11",
          name: "表单名字11",
          type: "radio",
          radio: [
            "选项1",
            "选项2",
            "选项3",
            "选项4",
            "选项5",
            "选项6",
            "选项7",
            "选项8",
            "选项9",
            "选项10"
          ],
          radioValue: "",
          readOnly: false,
          required: true
        }
      ]
    };
  },
  components: {
    alert,
    companyinfo,
    inputcom,
    selectcom,
    radiocom,
    checkcom
  },
  methods: {
    toapprovalRecord() {
      this.$router.push("/approvalRecord");
    },
    submit() {
      let that = this;
      this.forEach(that);
      console.log(this.form);
    },
    forEach(that) {
      for (let i = 0; i < that.form.length; i++) {
        if (that.form[i].required) {
          if (
            that.form[i].value ||
            that.form[i].optionValue ||
            that.form[i].radioValue ||
            (that.form[i].checkValue && that.form[i].checkValue.length > 0)
          ) {
          } else {
            console.log(`第${i}项没填`);
          }
        }
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
.approval {
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
        padding-right: 0.5rem;
      }
      .remarks {
        textarea {
          padding: 0.1rem 0;
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