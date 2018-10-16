<template>
  <div class="mengban" v-bind:class='{show:show}'>
      <div class="alert">
        <div class="main">{{remind}}</div>
        <div class="btn">
          <div class="left" v-if='left' v-on:click='btn("left",index)' :style='{color:leftColor}'>{{left}}</div>
          <div class="right" v-if='right' v-on:click='btn("right",index)' :style='{color:rightColor}'>{{right}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      show: false
    };
  },
  props: ["index", "remind", "left", "leftColor", "right", "rightColor"],
  methods: {
    btn(choice, index) {
      this.$emit("choice", { data: choice, index: index });
    },
    alertshow() {
      this.show = true;
    },
    alertclose() {
      this.show = false;
    }
  }
};
</script>

<style lang="less" scoped>
.mengban {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
  -webkit-transition: all 0.2s; /* Safari */
  transform: scale3d(0, 0, 0);
  .alert {
    width: 4.2rem;
    height: 2.8rem;
    border-radius: 0.2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
    text-align: center;
    font-size: 0.3rem;
    .main {
      width: 100%;
      height: 2rem;
      color: #333333;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn {
      position: absolute;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      div {
        flex: 1;
        border-top: 1px solid #cacaca;
        border-left: 1px solid #cacaca;
      }
      div:first-child {
        border-left: 0px solid transparent;
      }
      .left {
        color: #333333;
      }
      .right {
        color: #3674b2;
      }
    }
  }
}
.show {
  transform: scale3d(1, 1, 1);
}
</style>
