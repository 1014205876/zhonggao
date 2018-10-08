<template>
  <div class="index">
    首页
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
  methods: {},
  // 获取后端数据
  beforeRouter() {},
  // 修改数据
  created() {
    // let indexUrl = localStorage.getItem("indexUrl");
    // console.log(indexUrl);
    // if (indexUrl == "true") {
    //   console.log("需要跳转");
    //   this.$router.push("/login");
    // } else {
    //   console.log("不需要跳转");
    // }
  },
  // 操作dome
  mounted() {}
};
</script>

<style lang="less" scoped>
.index {
}
</style>
