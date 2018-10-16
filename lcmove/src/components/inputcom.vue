<template>
  <div class="inputcom">
    <label>
      <div class="left">{{list.name}}</div>
      <input type="text" placeholder='请输入' v-model='list.value' :disabled='list.readOnly'>
    </label>
  </div>
</template>

<script>
export default {
  name: "Inputcom",
  data() {
    return {};
  },
  props: ["list"],
  methods: {}
};
</script>

<style lang="less" scoped>
.inputcom {
  width:100%;
  label {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 0.2rem;
        height: 0.32rem;
        margin-left: 0.1rem;
      }
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
  }
}
</style>
