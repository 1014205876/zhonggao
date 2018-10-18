<template>
  <div class="check" v-on:click='alertshow'>
    <div class="name">{{list.name}}</div>
    <div class="label">
      <div class="data" v-if='num'>选择{{num}}项</div>
      <img src="static/img/icon/right_gray.png" alt="" class="right">
    </div>
    <div class="mengban" v-bind:class='{show:show}' v-on:click.stop.self='alertclose'>
    <!-- <div class="mengban" v-bind:class='{show:show}' v-on:click.stop.self='alertclose'> -->
      <div class="alert">
        <div class="top">
          <label>
            <input type='checkbox' v-model='all' @change='allchange'>
            <div class="after"></div>
            全选
          </label>
          {{list.name}}
        </div>
        <ul class="bottom">
          <li v-for='item in list.check' :key='item.id'>
            <label>
              {{item}}
              <input :name='list.fieldType' type='checkbox' v-model='list.checkValue' :value='item' :disabled='list.readOnly'>
              <!-- <div class="after"></div> -->
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
  name: "Checkcom",
  data() {
    return {
      all: false,
      num: 0,
      show: false
    };
  },
  props: ["list"],
  watch: {
    list: {
      handler(val, oldVal) {
        this.num = val.checkValue.length;
        if (val.checkValue.length == val.check.length) {
          this.all = true;
        } else {
          this.all = false;
        }
      },
      deep: true
    }
  },
  methods: {
    allchange() {
      if (this.all) {
        this.list.checkValue = this.list.check;
      } else {
        this.list.checkValue = [];
      }
    },
    alertshow() {
      this.show = true;
      $("body").css({ height: $(window).height(), overflow: "hidden" });
    },
    alertclose() {
      this.show = false;
      $("body").css({ height: "auto", overflow: "auto" });
    }
  }
};
</script>

<style lang="less" scoped>
.check {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .label {
    position: relative;
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
    transition: all 0.2s;
    -webkit-transition: all 0.2s; /* Safari */
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
      text-align: center;
      font-size: 0.3rem;
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
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
  .mengban.show {
    transform: scale3d(1, 1, 1);
  }
}
</style>