<template>
  <div class="enterpriseinfo">
    <div class="company">
      <div class="name">{{data.entName}}</div>
      <ul class='state'>
        <li class='open'>开业</li>
      </ul>
      <ul class='bottom'>
        <li>
          <span>企业法人:</span>
          <span class='data'>{{data.legalName}}</span>
        </li>
        <li>
          <span>公司地址:</span>
          <span class='data'>{{data.address}}</span>
        </li>
        <li>
          <span>注册资金:</span>
          <span class='data'>{{data.regCap}}</span>
        </li>
        <li>
          <span>注册时间:</span>
          <span class='data'></span>
        </li>
      </ul>
    </div>
    <ul class="info">
      <li>
        <div class="top">工商信息</div>
        <ul class="icbc">
          <li>
            <span>统一社会<br>信用代码</span>
            <span class="data">{{data.legalName}}</span>
          </li>
          <li>
            <span>公司类型</span>
            <span class="data"></span>
          </li>
          <li>
            <span>注册资本</span>
            <span class="data">{{data.regCap}}</span>
          </li>
          <li>
            <span>登记机关</span>
            <span class="data">无数据</span>
          </li>
          <li>
            <span>成立日期</span>
            <span class="data">无数据</span>
          </li>
          <li>
            <span>经营期限</span>
            <span class="data">无数据</span>
          </li>
          <li>
            <span>核准日期</span>
            <span class="data">无数据</span>
          </li>
          <li>
            <span>企业地址</span>
            <span class="data">{{data.address}}</span>
          </li>
          <li>
            <span>经营范围</span>
            <span class="data">{{data.busScope}}</span>
          </li>
        </ul>
      </li>
      <li>
        <div class="top">股东及出资人信息</div>
        <ul class="shareholder">
          <li>
            <div class="name">{{data.legalName}}</div>
            <ul class="state">
              <li class='ziran'>{{data.legalName}}</li>
            </ul>
            <ul class="bottom">
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data">{{data.legalName}}</span>
              </li>
              <li>
                <span class='left'>实缴出资金额<span></span></span>
                <span class="data">{{data.legalName}}</span>
              </li>
              <li>
                <span class='left'>持股比例<span></span></span>
                <span class="data">{{data.legalName}}</span>
              </li>
            </ul>
          </li>
          <li>
            <div class="name">{{data.legalName}}</div>
            <ul class="state">
              <li class='ziran'>{{data.legalName}}</li>
            </ul>
            <ul class="bottom">
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data">{{data.legalName}}</span>
              </li>
              <li>
                <span class='left'>实缴出资金额<span></span></span>
                <span class="data">{{data.legalName}}</span>
              </li>
              <li>
                <span class='left'>持股比例<span></span></span>
                <span class="data">{{data.legalName}}</span>
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
              <span>{{data.legalName}}</span>
            </span>
          </li>
          <li>
            <span class="left">董事<span></span></span>
            <span class="data">
              <span>{{data.legalName}}</span>
            </span>
          </li>
          <li>
            <span class="left">监视<span></span></span>
            <span class="data">
              <span>{{data.legalName}}</span>
            </span>
          </li>
          <li>
            <span class="left">独立董事<span></span></span>
            <span class="data">
              <span>{{data.legalName}}</span>
              <span>{{data.legalName}}</span>
              <span>{{data.legalName}}</span>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <div class="top">分支机构信息</div>
        <ul class="branch">
          <li>
            {{data.legalName}}
          </li>
          <li>
            {{data.legalName}}
          </li>
          <li>
            {{data.legalName}}
          </li>
          <li>
            {{data.legalName}}
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
    return {
      processInsId:'',
      data: {
        infoAuthNum: "20180927000113",
        legalPhone: "13697919058",
        controllerIdCode: "360103199408051774",
        entName: "江西省新新美容咨询服务有限公司1",
        legalRep: "李新宇",
        city: "南昌市",
        creditTaskId: "1043456",
        legalSex: "男",
        legalAddress: "江西省南昌市西湖区",
        productName: "征信贷",
        legalName: "李新宇",
        authUrl:
          "https://masspick-1255853614.cos-website.ap-shanghai.myqcloud.com/masspick/develop/peak-guest/c7481486-4040-4090-bcd5-96e8f6e2cd50.jpg",
        controllerCreditUrls:
          "https://masspick-1255853614.cos-website.ap-shanghai.myqcloud.com/masspick/develop/peak-guest/个人征信9a559c57-53fc-438e-9f5d-3d267d210739.zip",
        corporateCreditUrls:
          "https://masspick-1255853614.cos-website.ap-shanghai.myqcloud.com/masspick/develop/peak-guest/企业征信387c2fb8-7fe9-426e-a70a-91e3cac2c95c.zip",
        creditCode: "911401057480908051",
        province: "江西省",
        replyMethod: "按月付息，到期还本",
        controllerName: "李新宇",
        regCap: "贰仟万圆整",
        term: "2",
        legalCardNo: "360103199408051774",
        busScope:
          "消防设施工程、建筑智险化工程、机电设备安装工程的设计、施工及技术咨询;电子产品的开发、销售:酒防设施、设备的维护、保养、检料;消防设施维修:消防设备、安防设备、制冷设备,空调通风设备,电控设备、防火门.店火春饰门、店火饰料、装饰材料、电线电缆、五金交电的销售。(依法须批准的项目,经相关部门批准后方可开展经营活动)",
        area: "红谷新区",
        controllerPhone: "13697919058",
        amount: "12",
        address: "江西省南昌市红谷新区世贸路333号星大厦楼",
        appointTime: "2018-09-29 14:00:00",
        productId: "267c12f4-cc00-4f7d-a633-0b980f5fa253",
        projectNumber: "229919636794249216",
        ddTask: "ufinish",
        legalBirth: "1994/8/5",
        bodyUrl:
          "https://masspick-1255853614.cos-website.ap-shanghai.myqcloud.com/masspick/develop/peak-guest/15dea291-7656-4abd-9cb1-5f005c1a8f0d.jpg",
        busUrl:
          "https://masspick-1255853614.cos-website.ap-shanghai.myqcloud.com/masspick/develop/peak-guest/8c55f4ea-9778-4df2-8b16-4337f5b448fc.jpg",
        legalNation: "汉",
        controllerUrl:
          "https://masspick-1255853614.cos-website.ap-shanghai.myqcloud.com/masspick/develop/peak-guest/0ef685a3-e90b-46d5-9f94-24a9a696a1f2.jpg",
        assignee: "riskAssistant",
        register: "unfinish",
        status: "未完成"
      }
    };
  },
  methods: {},
  created() {
    let that = this;
    console.log("createdstart");
    that.processInsId = that.$route.query.processInsId;
    that
      .$http({
        method: "get",
        header: "Content-Type:application/json",
        url: "api/v1/flow/process/"+that.processInsId+"/variables"
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    console.log("createdend");
  }
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
          font-size: 0.28rem;
          color: #333333;
        }
      }
    }
  }
}
</style>