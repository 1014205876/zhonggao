<template>
  <div class="approvalRecord">
    <ul class='list'>
      <li v-for='list in data' v-bind:key='list.id'>
        <div class="top">
          <div class="name">
            <img src="static/img/icon/task_blue.png" alt="">风控审批
          </div>
          <div class="time">
            <span>2018-10-06</span>
          </div>
        </div>
        <ul class="bottom">
          <li>
            <span>征信是否符合要求</span>
            <span class='data'>符合</span>
          </li>
          <li>
            <span>征信是否符合要求</span>
            <span class='data no'>不符合</span>
          </li>
          <li>
            <span>征信是否符合要求</span>
            <span class='data'>符合</span>
          </li>
          <li>
            <span>备注</span>
          </li>
          <div class="remark">备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</div>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "approvalRecord",
  data() {
    return {
      
      data: 5
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.approvalRecord {
  .list {
    > li {
      margin-top: 0.2rem;
      background: #fff;
      font-size: 0.3rem;
      .top {
        line-height: 1.2rem;
        padding: 0 0.44rem;
        display: flex;
        justify-content: space-between;
        .name {
          display: flex;
          align-items: center;
          color: #3674b2;
          img {
            width: 0.3rem;
            height: 0.4rem;
            margin-right: 0.2rem;
          }
        }
        .time {
          color: #c6c6c6;
          font-size: 0.28rem;
        }
      }
      .bottom {
        border-top: 1px solid #cacaca;
        padding: 0.3rem 0.5rem;
        font-size: 0.28rem;
        > li {
          line-height: 0.64rem;
          display: flex;
          justify-content: space-between;
          span {
            color: #999999;
          }
          .data {
            color: #333333;
          }
          .data.no {
            color: #f35535;
          }
        }
        .remark {
          line-height: 0.5rem;
        }
      }
    }
    > li:first-child {
      margin-top: 0;
    }
  }
}
</style>
