<template>
  <div class="inputcom">
    <label>
      <div class="name">{{list.name}}</div>
      <input type="text" :placeholder='list.placeholder?list.placeholder:"请输入"' v-model='list.value' :disabled='list.readOnly'>
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
  width: 100%;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      width: 3.8rem;
      line-height: 0.4rem;
    }
    // .right {
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-between;
    //   img {
    //     width: 0.2rem;
    //     height: 0.32rem;
    //     margin-left: 0.1rem;
    //   }
    // }
    input {
      width: 3rem;
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
