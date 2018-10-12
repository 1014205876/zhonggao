<template>
  <div class="taskdetail">
    <div class="companyinfo">
      <div class="top">
        <div class="name">江西省南昌市进贤县有限公司</div>
        <div class="seereport">
          查看报告<img src="static/img/icon/right_gray.png" alt="">
        </div>
      </div>
      <ul class='data'>
        <li>
          <span>企业法人 ：</span>张三
        </li>
        <li>
          <span>任务编号 ：</span>张三
        </li>
        <li>
          <span>贷款金额 ：</span>张三
        </li>
        <li>
          <span>贷款期限 ：</span>张三
        </li>
      </ul>
    </div>
    <div class="shenpi">审批记录<img src="static/img/icon/fengkongshenpi.png" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "taskdetail",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.taskdetail {
  .companyinfo {
    .top {
      padding: 0 0.4rem;
      height: 1.2rem;
      line-height: 1.2rem;
      display: flex;
      justify-content: space-between;
      .name {
        width: 3.6rem;
        font-size: 0.36rem;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .seereport {
        display: flex;
        align-items: center;
        color: #999999;
        font-size: 0.28rem;
        img {
          width: 10px;
          height: 16px;
          margin-left: 0.2rem;
        }
      }
    }
    .data {
      border-top: 1px solid #cacaca;
      padding: 0.2rem 0.4rem;
      li {
        line-height: 0.56rem;
        color: #000000;
        font-size: 0.3rem;
        span {
          color: #999999;
        }
      }
    }
  }
  .shenpi{
    width:100%;
    height:0.9rem;
    line-height:0.9rem;
    text-align:center;
    background:#F1F1F1;
    color:#999999;
    font-size:0.3rem;
    position:relative;
    img{
      width:110px;
      height:3px;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      margin:auto;
    }
  }
}
</style>
