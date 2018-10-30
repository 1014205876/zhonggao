<template>
  <div class="textcom">
    <label>
      <!-- <div class="remarks" v-if='list.type=="multi-line-text"'> -->
        <div class="name">{{list.name}}</div>
        <textarea rows="3" :placeholder='list.placeholder?list.placeholder:"请输入"' v-model='list.value'></textarea>
      <!-- </div> -->
    </label>
  </div>
</template>

<script>
export default {
  name: "Textcom",
  data() {
    return {
      textarea: ""
    };
  },
  props: ["list"],
  methods: {},
  created() {
    this.list.value = "";
  }
};
</script>

<style lang="less" scoped>
.textcom {
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
</style>
