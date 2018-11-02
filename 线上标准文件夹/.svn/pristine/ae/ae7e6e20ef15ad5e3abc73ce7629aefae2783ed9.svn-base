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
        <!-- <div class="top">
          <label>
            <input type='checkbox' v-model='all' @change='allchange'>
            <div class="after"></div>
            全选
          </label>
          {{list.name}}
        </div> -->
        <ul class="bottom">
          <li v-for='item in list.options' :key='item.id'>
            <label>
              {{item}}
              <input :name='list.fieldType' type='checkbox' v-model='list.value' :value='item' :disabled='list.readOnly'>
              <!-- <div class="after"></div> -->
            </label>
          </li>
          <li v-if='list.another'>
            <label>
              其他
              <input name='another' type='checkbox' v-model='another'>
              <!-- <div class="after"></div> -->
            </label>
          </li>
          <textarea v-if='another' v-model='list.anotherValue' name="another" rows="2" class="another" placeholder='请输入'></textarea>
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
      another: false,
      num: 0,
      show: false
    };
  },
  props: ["list"],
  watch: {
    list: {
      handler(val, oldVal) {
        this.num = val.options.length;
        if (val.value.length == val.options.length) {
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
        this.list.value = this.list.options;
      } else {
        this.list.value = [];
      }
    },
    alertshow() {
      this.show = true;
      $("html,body").css({ height: $(window).height(), overflow: "hidden" });
    },
    alertclose() {
      this.show = false;
      $("html,body").css({ height: "100%", overflow: "auto" });
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
      font-size:0.28rem;
      color:#cacaca;
      width: 2.6rem;
      line-height: 0.4rem;
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
        > li {
          background: #f3f3f3;
          height: 0.9rem;
          line-height: 0.9rem;
          padding: 0 0.2rem;
          label {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-between;
            span{
              width:3.6rem;
            }
          }
        }
        > li:last-of-type {
          border-radius: 0 0 0.2rem 0.2rem;
        }
        textarea {
          -moz-box-sizing: border-box;
          /*Firefox3.5+*/
          -webkit-box-sizing: border-box;
          /*Safari3.2+*/
          -o-box-sizing: border-box;
          /*Opera9.6*/
          -ms-box-sizing: border-box;
          /*IE8*/
          display: block;
          margin-top: 0.2rem;
          width: 100%;
          border: 1px solid #cacaca;
          border-radius: 0.2rem;
          padding: 0.1rem 0.2rem;
          line-height: 0.5rem;
          font-size: 0.3rem;
        }
      }
    }
  }
  .mengban.show {
    transform: scale3d(1, 1, 1);
  }
}
</style>