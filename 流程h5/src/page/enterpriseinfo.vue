<template>
  <div class="enterpriseinfo">
    <div class="company">
      <div class="name">{{entName}}</div>
      <ul class='state'>
        <li class='open'>{{icbc.regState}}</li>
      </ul>
      <ul class='bottom'>
        <li>
          <span>企业法人:</span>
          <span class='data'>{{icbc.legalRep}}</span>
        </li>
        <li>
          <span>公司地址:</span>
          <span class='data'>{{icbc.address}}</span>
        </li>
        <li>
          <span>注册资金:</span>
          <span class='data'>{{icbc.regCapital}}</span>
        </li>
        <li>
          <span>注册时间:</span>
          <span class='data'>{{icbc.regDate}}</span>
        </li>
      </ul>
    </div>
    <ul class="info">
      <li>
        <div class="top">工商信息</div>
        <ul class="icbc">
          <li>
            <span>统一社会<br>信用代码</span>
            <span class="data">{{icbc.creditCode}}</span>
          </li>
          <li>
            <span>公司类型</span>
            <span class="data">{{icbc.type}}</span>
          </li>
          <li>
            <span>注册资本</span>
            <span class="data">{{icbc.regCapital}}</span>
          </li>
          <li>
            <span>登记机关</span>
            <span class="data">{{icbc.regOffice}}</span>
          </li>
          <li>
            <span>成立日期</span>
            <span class="data">{{icbc.regDate}}</span>
          </li>
          <li>
            <span>经营期限</span>
            <span class="data">{{icbc.businessStartFinish}}</span>
          </li>
          <li>
            <span>核准日期</span>
            <span class="data">{{icbc.checkDate}}</span>
          </li>
          <li>
            <span>企业地址</span>
            <span class="data">{{icbc.address}}</span>
          </li>
          <li>
            <span>经营范围</span>
            <span class="data">{{icbc.businessScope}}</span>
          </li>
        </ul>
      </li>
      <li>
        <div class="top">股东及出资人信息</div>
        <ul class="shareholder">
          <li>
            <div class="name"></div>
            <ul class="state">
              <li class='ziran'></li>
            </ul>
            <ul class="bottom">
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data"></span>
              </li>
              <li>
                <span class='left'>实缴出资金额<span></span></span>
                <span class="data"></span>
              </li>
              <li>
                <span class='left'>持股比例<span></span></span>
                <span class="data"></span>
              </li>
            </ul>
          </li>
          <li>
            <div class="name"></div>
            <ul class="state">
              <li class='ziran'></li>
            </ul>
            <ul class="bottom">
              <li>
                <span class='left'>认缴出资金额<span></span></span>
                <span class="data"></span>
              </li>
              <li>
                <span class='left'>实缴出资金额<span></span></span>
                <span class="data"></span>
              </li>
              <li>
                <span class='left'>持股比例<span></span></span>
                <span class="data"></span>
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
              <span></span>
            </span>
          </li>
          <li>
            <span class="left">董事<span></span></span>
            <span class="data">
              <span></span>
            </span>
          </li>
          <li>
            <span class="left">监视<span></span></span>
            <span class="data">
              <span></span>
            </span>
          </li>
          <li>
            <span class="left">独立董事<span></span></span>
            <span class="data">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </li>
        </ul>
      </li>
      <li>
        <div class="top">分支机构信息</div>
        <ul class="branch">
          <li>
            
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
          <li>
            
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
      processInsId: "",
      entName: "",
      companyinfo: {
        // legalPhone: "13697919058",
        // legalRep: "李新宇",
        // legalSex: "男",
        // legalAddress: "江西省南昌市西湖区",
        // legalName: "李新宇",
        // legalCardNo: "360103199408051774",
        // legalBirth: "1994/8/5",
        // legalNation: "汉",
        // productName: "征信贷",
        // infoAuthNum: "20180927000113",
        // controllerIdCode: "360103199408051774",
        // entName: "江西省新新美容咨询服务有限公司1",
        // city: "南昌市",
        // creditTaskId: "1043456",
        // creditCode: "911401057480908051",
        // province: "江西省",
        // replyMethod: "按月付息，到期还本",
        // controllerName: "李新宇",
        // regCap: "贰仟万圆整",
        // term: "2",
        // busScope:
        //   "消防设施工程、建筑智险化工程、机电设备安装工程的设计、施工及技术咨询;电子产品的开发、销售:酒防设施、设备的维护、保养、检料;消防设施维修:消防设备、安防设备、制冷设备,空调通风设备,电控设备、防火门.店火春饰门、店火饰料、装饰材料、电线电缆、五金交电的销售。(依法须批准的项目,经相关部门批准后方可开展经营活动)",
        // area: "红谷新区",
        // controllerPhone: "13697919058",
        // amount: "12",
        // address: "江西省南昌市红谷新区世贸路333号星大厦楼",
        // appointTime: "2018-09-29 14:00:00",
        // productId: "267c12f4-cc00-4f7d-a633-0b980f5fa253",
        // projectNumber: "229919636794249216",
        // ddTask: "ufinish",
        // assignee: "riskAssistant",
        // register: "unfinish",
        // status: "未完成"
      },
      icbc: {
        address: "无数据",
        businessFinish: null,
        businessScope: "无数据",
        businessStart: null,
        businessStartFinish: "无数据",
        checkDate: "无数据",
        city: "无数据",
        creditCode: "无数据",
        etpBranch: [],
        etpSeniorManager: [],
        etpShareholder: [],
        industry: null,
        legalRep: "无数据",
        regCapital: "无数据",
        regDate: "无数据",
        regOffice: "无数据",
        regState: "无数据",
        type: "无数据"
      }
    };
  },
  methods: {},
  created() {
    let that = this;
    console.log("createdstart");
    let token = localStorage.getItem("token");
    // that.companyinfo = that.$route.query.companyinfo;
    // let entName=encodeURIComponent(that.companyinfo.entName,"UTF-8");
    that.processInstanceId = that.$route.query.processInstanceId;
    that.entName = that.$route.query.entName;
    //获取公司信息
    that
      .$http({
        method: "get",
        header: {
          "Content-Type": "application/json;charset=utf-8"
        },
        headers: {
          authorization: token
        },
        url:
          "api/peak-flow/v1/flow/process/" +
          that.processInstanceId +
          "/variables"
      })
      .then(function(res) {
        that.companyinfo = res.data.data;
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    // 获取工商信息
    that
      .$http({
        method: "get",
        header: {
          "Content-Type": "application/json;charset=utf-8"
        },
        headers: {
          authorization: token
        },
        url: "api/etp-provider/etp/" + that.entName
      })
      .then(function(res) {
        that.icbc = res.data;
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
        display: flex;
        span {
          width: 1.7rem;
          color: #999999;
          font-size: 0.3rem;
        }

        .data {
          width: 4.7rem;
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