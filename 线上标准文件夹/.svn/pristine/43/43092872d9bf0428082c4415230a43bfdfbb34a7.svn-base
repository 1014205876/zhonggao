<template>
  <div class="check" v-on:click='alertshow'>
    <div class="name">{{list.name}}</div>
    <div class="label">
      <div class="data" v-if='list.value'>{{name}}</div>
      <img src="static/img/icon/right_gray.png" alt="" class="right">
    </div>
    <div class="mengban" v-bind:class='{show:show}' v-on:click.stop.self='alertclose(null)'>
    <!-- <div class="mengban" v-bind:class='{show:show}' v-on:click.stop.self='alertclose'> -->
      <div class="alert">
        <ul class="bottom">
          <li v-for='(item,index) in list.options' :key='item.id'>
            <label>
              <span>{{item.name}}</span>
              <input :name='list.fieldType' type='radio' :value='item.value' v-model='list.value' :disabled='list.readOnly' @change='alertclose(index)'>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
export default {
  name: "Radio",
  data() {
    return {
      name: "",
      show: false
    };
  },
  props: ["list"],
  methods: {
    alertshow() {
      this.show = true;
      $("html,body").css({ height: $(window).height(), overflow: "hidden" });
    },
    alertclose(index) {
      let that = this;
      if (index != null) {
        that.name = that.list.options[index].name;
      }
      that.show = false;
      $("html,body").css({ height: "100%", overflow: "auto" });
    }
  },
  created() {
    let that=this;
    if (that.list.value) {
      for (let i = 0; i < that.list.options.length; i++) {
        if (that.list.value == that.list.options[i].value) {
          that.name = that.list.options[i].name;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.check {
  width: 100%;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .name {
    width: 3.8rem;
    line-height: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  > .label {
    width: 3rem;
    position: relative;
    .data {
      font-size: 0.28rem;
      color: #cacaca;
      width: 2.6rem;
      height: 0.4rem;
      line-height: 0.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .right {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 0.2rem;
      height: 0.32rem;
    }
  }
  .mengban {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.5);
    transform: scale3d(0, 0, 0);
    .alert {
      width: 4.4rem;
      border-radius: 0.2rem;
      padding: 0.4rem 0.3rem;
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      margin: auto;
      background: #fff;
      // text-align: center;
      font-size: 0.3rem;
      transition: all 0.2s;
      -webkit-transition: all 0.2s; /* Safari */
      transform: scale3d(0, 0, 0);
      // .after {
      //   width: 100%;
      //   display: flex;
      //   align-items: center;
      //   justify-content: space-around;
      // }
      // .after:before {
      //   content: "";
      //   width: 20px;
      //   height: 20px;
      //   border-radius: 5px;
      //   border: 1px solid red;
      // }
      // input {
      //   display: none;
      // }
      // input:checked + .after:before {
      //   background: red;
      // }
      // input:disabled + .after:before {
      //   background: blue;
      // }
      // input:disabled:checked + .after:before {
      //   background: green;
      // }
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .bottom {
        overflow: auto;
        max-height: 4.5rem;
        border-radius: 0.2rem;
        background: #f3f3f3;
        > li {
          height: 0.9rem;
          line-height: 0.9rem;
          padding: 0 0.2rem;
          label {
            line-height: 0.4rem;
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-between;
            span {
              width: 3.6rem;
            }
          }
        }
      }
    }
  }
  .mengban.show {
    transform: scale3d(1, 1, 1);
    .alert {
      transform: scale3d(1, 1, 1);
    }
  }
}
</style>