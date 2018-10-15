<template>
    <div class="companyinfo">
      <div class="top">
        <div class="name">江西省南昌市进贤县有限公司</div>
        <div class="seereport" v-on:click='toenterpriseinfo'>
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
</template>

<script>
export default {
  name: "companyinfo",
  data() {
    return {};
  },
  methods: {
    toenterpriseinfo() {
      console.log(123)
      this.$router.push("/enterpriseinfo");
    }
  }
};
</script>

<style lang="less" scoped>
.companyinfo {
  background: #fff;
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
</style>
