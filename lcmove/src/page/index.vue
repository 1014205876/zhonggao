<template>
  <div class="index">
    首页
    <button v-on:click='remember'>记住</button>
    <button v-on:click='forget'>忘记</button>
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
    remember(){
      localStorage.setItem('indexUrl',true);
    },
    forget(){
      localStorage.setItem('indexUrl',false);
    }
  },
  // 获取后端数据
  beforeRouter() {},
  // 修改数据
  created() {
  },
  // 操作dome
  mounted() {}
};
</script>

<style lang="less" scoped>
.index {
}
</style>
