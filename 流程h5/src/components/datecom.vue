<template>
  <div class="datecom">
    <label>
      <div class="name">{{list.name}}</div>
      <input type="date" v-model='list.value' :disabled='list.readOnly'>
    </label>
  </div>
</template>

<script>
export default {
  name: "Datecom",
  data() {
    return {};
  },
  props: ["list"],
  methods: {}
};
</script>

<style lang="less" scoped>
.datecom {
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