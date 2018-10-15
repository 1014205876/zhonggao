<template>
  <div class="mengban" v-bind:class='{show:show}'>
      <div class="alert">
        <div class="main">{{remind}}</div>
        <div class="btn">
          <div class="left" v-if='left' v-on:click='btn("left")'>{{left}}</div>
          <div class="right" v-if='right' v-on:click='btn("right")'>{{right}}</div>
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
  props: ['remind','left','right'],
  methods: {
    btn(choice) {
      this.$emit("choice", choice);
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
	transition:all 0.2s;
  -webkit-transition:all 0.2s; /* Safari */
  transform:scale3d(0,0,0);
  .alert {
    width: 4.5rem;
    height: 2rem;
    border-radius: 0.2rem;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
    text-align: center;
    .main{
      font-size:0.4rem;
    }
    .btn {
      position: absolute;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.3rem;
      div {
        flex: 1;
        border-top: 1px solid #000;
      }
      .left {
        color: red;
        border-right: 1px solid #000;
      }
      .right {
        color: blue;
      }
    }
  }
}
.show{
  transform:scale3d(1,1,1);
}
</style>
