<template>
  <div class="enterpriseinfo">
    <div class="company">
      <div class="name">江西省南昌市进贤县</div>
      <ul class='state'>
        <li class='open'>开业</li>
      </ul>
      <ul class='bottom'>
        <li>
          <span>企业法人:</span>
          <span class='data'>吴方胜</span>
        </li>
        <li>
          <span>企业法人:</span>
          <span class='data'>吴方胜</span>
        </li>
        <li>
          <span>企业法人:</span>
          <span class='data'>吴方胜</span>
        </li>
        <li>
          <span>企业法人:</span>
          <span class='data'>吴方胜</span>
        </li>
      </ul>
    </div>
    <ul class="info">
      <li>
        <div class="top">工商信息</div>
        <ul class="icbc">
          <li>
            <span>统一社会<br>信用代码</span>
            <span class="data">1321321312</span>
          </li>
          <li>
            <span>统一社会</span>
            <span class="data">1321321312</span>
          </li>
          <li>
            <span>统一社会</span>
            <span class="data">1321321312</span>
          </li>
          <li>
            <span>统一社会</span>
            <span class="data">1321321312</span>
          </li>
          <li>
            <span>经营范围</span>
            <span class="data">经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围经营范围</span>
          </li>
        </ul>
      </li>
      <li>
        <div class="top">股东及出资人信息</div>
        <ul class="shareholder">
          <li>
            <div class="name">张三</div>
            <ul class="state">
              <li class='ziran'>自然人股东</li>
            </ul>
            <ul class="bottom">
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data">100万元</span>
              </li>
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data">100万元</span>
              </li>
              <li>
                <span class='left'>持股比例<span></span></span>
                <span class="data">100万元</span>
              </li>
            </ul>
          </li>
          <li>
            <div class="name">张三</div>
            <ul class="state">
              <li>自然人股东</li>
            </ul>
            <ul class="bottom">
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data">100万元</span>
              </li>
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data">100万元</span>
              </li>
              <li>
                <span class='left'>持股比例<span></span></span>
                <span class="data">100万元</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <div class="top">主要人员信息</div>
        <ul class='mainperson'>
          <li>
            <span class="left">董事长<span></span></span>
            <span class="data">
              <span>张三</span>
            </span>
          </li>
          <li>
            <span class="left">董事<span></span></span>
            <span class="data">
              <span>张三</span>
            </span>
          </li>
          <li>
            <span class="left">独立董事<span></span></span>
            <span class="data">
              <span>张三</span>
              <span>张三</span>
              <span>张三</span>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <div class="top">分支机构信息</div>
        <ul class="branch">
          <li>
            江西南昌星海金融公司
          </li>
          <li>
            江西南昌星海金融公司
          </li>
          <li>
            江西南昌星海金融公司
          </li>
          <li>
            江西南昌星海金融公司
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Enterpriseinfo",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.enterpriseinfo {
  .company {
    background: #fff;
    padding: 0.4rem 0 0.3rem;

    .name {
      padding-left: 0.3rem;
      font-size: 0.36rem;
      font-weight: 600;
      color: #383838;
    }

    .state {
      padding: 0.15rem 0.5rem;
      display: flex;

      > li {
        padding: 2px 8px;
        font-size: 12px;
        border: 1px solid transparent;
        border-radius: 0.4rem;
      }

      > li.open {
        color: #3674b2;
        border-color: #3674b2;
      }
    }

    .bottom {
      > li {
        padding: 0 0.5rem;
        line-height: 0.5rem;

        span {
          color: #999999;
          font-size: 0.3rem;
        }

        .data {
          padding-left: 0.1rem;
          color: #000000;
        }
      }
    }
  }

  .info {
    > li {
      background: #fff;
      margin-top: 0.3rem;
      .top {
        line-height: 1rem;
        padding-left: 0.3rem;
        font-size: 0.36rem;
        font-weight: 600;
      }

      .icbc {
        border-top: 1px solid #cacaca;
        padding-top: 0.4rem;
        > li {
          padding: 0.16rem 0.5rem;
          line-height: 0.34rem;
          display: flex;
          // align-items: center;
          font-size: 0.28rem;
          span {
            color: #999999;
          }
          .data {
            width: 4.8rem;
            padding-left: 0.5rem;
            color: #333333;
          }
        }
      }
      .shareholder {
        border-top: 1px solid #cacaca;
        padding-left: 0.3rem;
        > li {
          border-top: 1px solid #cacaca;
          padding-left: 0.2rem;
          .name {
            padding-top: 0.3rem;
            font-size: 0.36rem;
            font-weight: 600;
            color: #383838;
          }
          .state {
            margin-top: 0.2rem;
            display: flex;

            > li {
              padding: 2px 8px;
              font-size: 12px;
              border: 1px solid transparent;
              border-radius: 0.4rem;
            }

            > li.ziran {
              color: #de964f;
              border-color: #de964f;
            }
          }
          .bottom {
            padding: 0.18rem 0;
            > li {
              display: flex;
              padding: 0.18rem 0;
              font-size: 0.28rem;
              .left {
                height: 0.32rem;
                line-height: 0.32rem;
                width: 1.7rem;
                color: #999999;
                text-align: justify;
                text-justify: inter-word;
                span {
                  width: 0px;
                  height: 0px;
                  display: inline-block;
                  font-size: 0;
                  padding-left: 100%;
                }
              }
              .data {
                padding-left: 0.5rem;
              }
            }
          }
        }
        > li:first-child {
          border-top: 0px;
        }
      }
      .mainperson {
        border-top: 1px solid #cacaca;
        padding: 0.18rem 0.5rem;
        > li {
          display: flex;
          padding: 0.18rem 0;
          font-size: 0.28rem;
          .left {
            height: 0.32rem;
            line-height: 0.32rem;
            width: 1.2rem;
            color: #999999;
            text-align: justify;
            text-justify: inter-word;
            span {
              width: 0px;
              height: 0px;
              display: inline-block;
              font-size: 0;
              padding-left: 100%;
            }
          }
          .data {
            padding-left: 0.25rem;
            span {
              padding-left: 0.25rem;
            }
          }
        }
      }
      .branch {
        border-top: 1px solid #cacaca;
        padding: 0.2rem 0.5rem;
        > li {
          line-height: 0.64rem;
          font-size:0.28rem;
          color:#333333;
        }
      }
    }
  }
}
</style>