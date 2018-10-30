<template>
  <div class="selectcom">
    <div class="name">{{list.name}}</div>
    <div class="select">
      <select v-model='list.optionValue' :disabled='list.readOnly'>
        <option value="" disabled>请选择</option>
        <option v-for='item in list.option' :value="item" :key='item.id'>{{item}}</option>
      </select>
      <img src="static/img/icon/right_gray.png" alt="" class="right">
    </div>
  </div>
</template>

<script>
export default {
  name: "Selectcom",
  data() {
    return {};
  },
  props: ["list"],
  methods: {}
};
</script>

<style lang="less" scoped>
.selectcom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .select {
    position: relative;
    .right {
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
      width: 0.2rem;
      height: 0.32rem;
    }
  }
  select {
    border: none;
    outline: none;
    background: #fff;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
}
</style>