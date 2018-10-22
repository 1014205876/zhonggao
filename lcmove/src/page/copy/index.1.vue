<template>
  <div class="index">
    <div class='tanimate' style='background-image:url(static/img/bgimg_index.jpg)'>
      <ul class="task">
        <li>
          <span>当前任务</span>
          <span class='num'>22</span>
        </li>
        <li>
          <span>已办任务</span>
          <span class='num'>222</span>
        </li>
      </ul>
      <div id="myChart" class='myChart'></div>
      <ul class="data">
        <li class='active'>
          <div class="top">订单总数</div>
          <div class='num'>
            <numroll :value="123165" :time='1'></numroll>
          </div>
        </li>
        <li>
          <div class="top">订单总数</div>
          <div class='num'>
            <numroll :value="23982" :time='1'></numroll>
          </div>
        </li>
        <li>
          <div class="top">订单总数</div>
          <div class='num'>
            <numroll :value="6546" :time='1'></numroll>
          </div>
        </li>
      </ul>
      <div class="start" v-on:click='start'>
        查看待审批任务
        <img src="static/img/icon/up.png" alt="">
      </div>
    </div>
    <div class="banimate" v-on:click='stop'>
      <div class="header"></div>
      <ul class='task'>
        <li v-on:click.stop='toappointment'>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn wait">待开始</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>预约确认</span>
            </li>
          </ul>
        </li>
        <li>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn wait">待开始</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>风控审批</span>
            </li>
          </ul>
        </li>
        <li>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn wait">待开始</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>综合审批</span>
            </li>
          </ul>
        </li>
        <li>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn wait">待开始</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>风控总监审批</span>
            </li>
          </ul>
        </li>
        <li>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn wait">待开始</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>合规审查</span>
            </li>
          </ul>
        </li>
        <li>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn wait">待开始</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>副总经理审批</span>
            </li>
          </ul>
        </li>
        <li>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn wait">待开始</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>总经理审批</span>
            </li>
          </ul>
        </li>
        <li v-for='list in data' :key='list.id'>
          <div class="top">
            <div class="left">
              <div class="time">
                <span>2018-10-09</span>
                <span>16:23:12</span>
              </div>
              <div class="name">江西省博会金融九州服务有限公司</div>
            </div>
            <div class="btn ing">进行中</div>
          </div>
          <ul class="bottom">
            <li>
              <span>地址</span>
              <span class='data'>江西省南昌市进贤县10000号</span>
            </li>
            <li>
              <span>企业类型</span>
              <span class='data'>新增</span>
            </li>
            <li>
              <span>当前进度</span>
              <span class='data'>流程名字</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="head">
      <div class="left" v-on:click='forget'>
        <img src="static/img/headimg_no.png" alt="">未登录
      </div>
      <div class="right" v-on:click='tohistory'>
        历史记录<img src="static/img/icon/right_white.png" alt="">
      </div>
    </div>
    <div class="headimg" style='background-image:url(static/img/bgimg_index_head.jpg)'></div>
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
// 引入数字滚动组件
import numroll from "@/components/numroll";
export default {
  name: "Index",
  data() {
    return {
      xArr: [],
      dayArr: [],
      shenqingArr: [],
      jujianArr: [],
      dindanArr: [],
      data: 3,
      get: {
        sumApplyAmount: 1193, //申请金额
        waiting: 31, //当前任务数
        sumConsumeAmount: 2.366, //居间费总金额
        already: 4, //已办任务数
        sumOrderCount: 50, //订单总数
        chartsData: [
          //图标数据
          {
            amount: 394, //申请金额
            consumeAmount: 1.112, //居间费金额
            count: 17, //订单数
            time: "2018-10-13" //日期
          },
          {
            amount: 170,
            consumeAmount: 0.6512,
            count: 8,
            time: "2018-10-08"
          },
          {
            amount: 90,
            consumeAmount: 0.44,
            count: 12,
            time: "2018-10-11"
          },
          {
            amount: 589,
            consumeAmount: 1.6696,
            count: 20,
            time: "2018-10-09"
          }
        ]
      }
    };
  },
  components: {
    numroll
  },
  //函数盒子
  methods: {
    remember() {
      localStorage.setItem("indexUrl", true);
    },
    forget() {
      localStorage.setItem("indexUrl", false);
    },
    tohistory() {
      this.$router.push("/history");
    },
    toappointment() {
      this.$router.push("/appointment");
    },
    // tohistory() {
    //   this.$router.push("/history");
    // },
    // tohistory() {
    //   this.$router.push("/history");
    // },
    // tohistory() {
    //   this.$router.push("/history");
    // },
    start() {
      $("html,body").animate({ scrollTop: 0 }, 0);
      $(".tanimate,.banimate,.head,.headimg").addClass("active");
    },
    stop() {
      $(".tanimate,.banimate,.head,.headimg").removeClass("active");
    },
    infoEchart() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      let myChart = that.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      let option = [
        {
          title: {
            textStyle: {
              color: "#fff",
              fontFamily: "MicrosoftYaHeiLight",
              fontSize: 18
            },
            text: "一周订单数据",
            padding: [20, 0, 0, 30]
          },
          grid: {
            top: "20%",
            left: "15%",
            right: "5%",
            bottom: "10%",
            containLabel: false
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false, //坐标轴2端留白
              axisLine: {
                //坐标轴相关
                show: true, //是否显示
                lineStyle: {
                  //颜色
                  color: "rgba(255,255,255,0.15)"
                }
              },
              axisLabel: {
                //坐标轴刻度标签相关
                color: "#CACACA",
                rotate: "45"
              },
              axisTick: {
                //坐标轴刻度相关
                show: false
              },
              splitLine: {
                //网格线相关
                show: true, //是否显示
                lineStyle: {
                  //颜色
                  color: "rgba(255,255,255,0.15)"
                }
              },
              data: that.xArr //坐标轴数据
            }
          ],
          yAxis: {
            name: "单",
            nameTextStyle: {
              color: "#CACACA",
              fontSize: "12",
              padding: [0, 35, 0, 0]
            },
            boundaryGap: false, //坐标轴2端留白
            axisLine: {
              //坐标轴相关
              show: true, //是否显示
              lineStyle: {
                //颜色
                color: "rgba(255,255,255,0.15)"
              }
            },
            axisLabel: {
              //坐标轴刻度标签相关
              color: "#CACACA",
              showMinLabel: false
            },
            axisTick: {
              //坐标轴刻度相关
              show: false
            },
            splitLine: {
              //网格线相关
              show: true, //是否显示
              lineStyle: {
                //颜色
                color: "rgba(255,255,255,0.15)"
              }
            }
          },
          series: [
            {
              type: "line",
              symbol: "none",
              data: that.shenqingArr,
              lineStyle: {
                color: {
                  type: "linear",
                  colorStops: [
                    {
                      offset: 0,
                      color: "#C9446A" // 0% 处的颜色
                    },
                    {
                      offset: 0.25,
                      color: "#E99253" // 25% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#F8FB53" // 50% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: "#B8FFA0" // 75% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#6BFFDA" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              },
              areaStyle: {
                color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0,0,0,0.4)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0,0,0,0)" // 100% 处的颜色
                  }
                ]) //背景渐变色
              }
            }
          ]
        },
        {
          title: {
            textStyle: {
              color: "#fff",
              fontFamily: "MicrosoftYaHeiLight",
              fontSize: 18
            },
            text: "一周申请金额",
            padding: [20, 0, 0, 30]
          },
          grid: {
            top: "20%",
            left: "15%",
            right: "5%",
            bottom: "10%",
            containLabel: false
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false, //坐标轴2端留白
              axisLine: {
                //坐标轴相关
                show: true, //是否显示
                lineStyle: {
                  //颜色
                  color: "rgba(255,255,255,0.15)"
                }
              },
              axisLabel: {
                //坐标轴刻度标签相关
                color: "#CACACA",
                rotate: "45"
              },
              axisTick: {
                //坐标轴刻度相关
                show: false
              },
              splitLine: {
                //网格线相关
                show: true, //是否显示
                lineStyle: {
                  //颜色
                  color: "rgba(255,255,255,0.15)"
                }
              },
              data: that.xArr //坐标轴数据
            }
          ],
          yAxis: {
            name: "单",
            nameTextStyle: {
              color: "#CACACA",
              fontSize: "12",
              padding: [0, 35, 0, 0]
            },
            boundaryGap: false, //坐标轴2端留白
            axisLine: {
              //坐标轴相关
              show: true, //是否显示
              lineStyle: {
                //颜色
                color: "rgba(255,255,255,0.15)"
              }
            },
            axisLabel: {
              //坐标轴刻度标签相关
              color: "#CACACA",
              showMinLabel: false
            },
            axisTick: {
              //坐标轴刻度相关
              show: false
            },
            splitLine: {
              //网格线相关
              show: true, //是否显示
              lineStyle: {
                //颜色
                color: "rgba(255,255,255,0.15)"
              }
            }
          },
          series: [
            {
              type: "line",
              symbol: "none",
              data: that.jujianArr,
              lineStyle: {
                color: {
                  type: "linear",
                  colorStops: [
                    {
                      offset: 0,
                      color: "#C9446A" // 0% 处的颜色
                    },
                    {
                      offset: 0.25,
                      color: "#E99253" // 25% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#F8FB53" // 50% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: "#B8FFA0" // 75% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#6BFFDA" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              },
              areaStyle: {
                color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0,0,0,0.4)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0,0,0,0)" // 100% 处的颜色
                  }
                ]) //背景渐变色
              }
            }
          ]
        },
        {
          title: {
            textStyle: {
              color: "#fff",
              fontFamily: "MicrosoftYaHeiLight",
              fontSize: 18
            },
            text: "一周居间费金额",
            padding: [20, 0, 0, 30]
          },
          grid: {
            top: "20%",
            left: "15%",
            right: "5%",
            bottom: "10%",
            containLabel: false
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false, //坐标轴2端留白
              axisLine: {
                //坐标轴相关
                show: true, //是否显示
                lineStyle: {
                  //颜色
                  color: "rgba(255,255,255,0.15)"
                }
              },
              axisLabel: {
                //坐标轴刻度标签相关
                color: "#CACACA",
                rotate: "45"
              },
              axisTick: {
                //坐标轴刻度相关
                show: false
              },
              splitLine: {
                //网格线相关
                show: true, //是否显示
                lineStyle: {
                  //颜色
                  color: "rgba(255,255,255,0.15)"
                }
              },
              data: that.xArr //坐标轴数据
            }
          ],
          yAxis: {
            name: "单",
            nameTextStyle: {
              color: "#CACACA",
              fontSize: "12",
              padding: [0, 35, 0, 0]
            },
            boundaryGap: false, //坐标轴2端留白
            axisLine: {
              //坐标轴相关
              show: true, //是否显示
              lineStyle: {
                //颜色
                color: "rgba(255,255,255,0.15)"
              }
            },
            axisLabel: {
              //坐标轴刻度标签相关
              color: "#CACACA",
              showMinLabel: false
            },
            axisTick: {
              //坐标轴刻度相关
              show: false
            },
            splitLine: {
              //网格线相关
              show: true, //是否显示
              lineStyle: {
                //颜色
                color: "rgba(255,255,255,0.15)"
              }
            }
          },
          series: [
            {
              type: "line",
              symbol: "none",
              data: that.dindanArr,
              lineStyle: {
                color: {
                  type: "linear",
                  colorStops: [
                    {
                      offset: 0,
                      color: "#C9446A" // 0% 处的颜色
                    },
                    {
                      offset: 0.25,
                      color: "#E99253" // 25% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#F8FB53" // 50% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: "#B8FFA0" // 75% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#6BFFDA" // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                }
              },
              areaStyle: {
                color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0,0,0,0.4)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0,0,0,0)" // 100% 处的颜色
                  }
                ]) //背景渐变色
              }
            }
          ]
        }
      ];
      myChart.setOption(option[0]);
      $(".index .tanimate .data li").click(function() {
        $(".index .tanimate .data li").removeClass("active");
        $(this).addClass("active");
        myChart.clear();
        myChart.setOption(option[$(this).index()]);
      });
    }
  },
  // 获取后端数据
  beforeRouter() {},
  // 修改数据
  created() {
    let that = this;
    for (let i = 0; i < 7; i++) {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate() - 7 + i;
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      let nowDate = year + "-" + month + "-" + day;
      let xDate = month + "." + day;
      that.dayArr.push(nowDate);
      that.xArr.push(xDate);
    }
      // xArr: [],
      // dayArr: [],
      // shenqingArr: [],
      // jujianArr: [],
      // dindanArr: [],
    for (let i = 0; i < 7; i++) {
      let have = 0;
      for (let j = 0; j < 7; j++) {
        if (that.get.chartsData[j]) {
          if (that.dayArr[i] == that.get.chartsData[j].time) {
            that.shenqingArr.push(that.get.chartsData[j].amount);
            that.jujianArr.push(that.get.chartsData[j].consumeAmount);
            that.dindanArr.push(that.get.chartsData[j].count);
          }else{
            have++
          }
        }
      }
      console.log(have)
      if (have >= that.get.chartsData.length) {
        that.shenqingArr.push(0);
        that.jujianArr.push(0);
        that.dindanArr.push(0);
      }
      console.log(that.dayArr)
      console.log(that.shenqingArr)
      console.log(that.jujianArr)
      console.log(that.dindanArr)
    }
    let account =
      localStorage.getItem("account") || sessionStorage.getItem("account");
    console.log(account);
    let password =
      localStorage.getItem("password") || sessionStorage.getItem("password");
    console.log(password);
  },
  // 操作dome
  mounted() {
    this.infoEchart();
    $(".index .banimate").css("height", $(window).height());
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  position: relative;

  .tanimate {
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    -moz-box-sizing: border-box;
    /*Firefox3.5+*/
    -webkit-box-sizing: border-box;
    /*Safari3.2+*/
    -o-box-sizing: border-box;
    /*Opera9.6*/
    -ms-box-sizing: border-box;
    /*IE8*/
    transform: translateY(0%);
    transition: all 1s;
    -webkit-transition: all 1s;
    /* Safari */
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;

    /* Safari and Chrome */
    .task {
      -moz-box-sizing: border-box;
      /*Firefox3.5+*/
      -webkit-box-sizing: border-box;
      /*Safari3.2+*/
      -o-box-sizing: border-box;
      /*Opera9.6*/
      -ms-box-sizing: border-box;
      /*IE8*/
      position: absolute;
      top: 2.5%;
      right: 0.4rem;
      border-radius: 0.1rem;
      width: 2.4rem;
      background: #253369;
      padding: 0.1rem;

      li {
        display: flex;
        align-items: center;
        justify-content: space-around;

        span {
          line-height: 0.5rem;
          color: #cacaca;
          font-size: 0.28rem;
        }

        .num {
          display: inline-block;
          width: 0.7rem;
          text-align: center;
          color: #71fec6;
          font-size: 0.3rem;
        }
      }
    }

    .myChart {
      position: absolute;
      top: 5%;
      width: 100%;
      height: 7rem;
    }

    .data {
      position: absolute;
      top: 67%;
      width: 100%;
      display: flex;
      justify-content: center;

      li {
        -moz-box-sizing: border-box;
        /*Firefox3.5+*/
        -webkit-box-sizing: border-box;
        /*Safari3.2+*/
        -o-box-sizing: border-box;
        /*Opera9.6*/
        -ms-box-sizing: border-box;
        /*IE8*/
        width: 2.2rem;
        height: 2.2rem;
        border-radius: 0.05rem;
        padding-top: 0.5rem;
        margin: 0 0.1rem;
        background: #253369;
        position: relative;
        color: #71fec6;
        text-align: center;

        .top {
          line-height: 0.28rem;
          font-size: 0.26rem;
        }

        .num {
          font-family: "Akrobat";
          margin-top: 0.3rem;
          line-height: 0.4rem;
          font-size: 0.48rem;
        }
      }

      li.active {
        background: #2a4874;
      }

      li.active:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -18px;
        margin: auto;
        width: 0;
        height: 0;
        border-top: 0px solid transparent;
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
        border-bottom: 18px solid #2a4874;
      }
    }

    .start {
      width: 6.7rem;
      height: 1.2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0rem;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.3rem;
      color: rgba(255, 255, 255, 0.3);

      img {
        width: 13px;
        height: 12px;
        margin-left: 0.15rem;
      }
    }
  }

  .tanimate.active {
    transform: translateY(-100%);
  }

  .banimate {
    -moz-box-sizing: border-box;
    /*Firefox3.5+*/
    -webkit-box-sizing: border-box;
    /*Safari3.2+*/
    -o-box-sizing: border-box;
    /*Opera9.6*/
    -ms-box-sizing: border-box;
    /*IE8*/
    position: relative;
    z-index: 0;
    width: 100%;
    padding-top: 1.8rem;
    transform: translateY(100%);
    transition: all 2s;
    -webkit-transition: all 2s;
    /* Safari */
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;

    /* Safari and Chrome */
    .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 1.8rem;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .task {
      > li {
        margin: 0.4rem 0.3rem;
        padding: 0 0.3rem;
        border-radius: 0.1rem;
        background: #fff;

        .top {
          padding: 0.2rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            width: 3rem;

            .time {
              line-height: 0.45rem;
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 0.28rem;
              color: #c6c6c6;
            }

            .name {
              line-height: 0.45rem;
              font-size: 0.3rem;
              font-weight: 600;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }

          .btn {
            width: 1.1rem;
            line-height: 24px;
            text-align: center;
            border-radius: 0.1rem;
            font-size: 14px;
            color: #fff;
          }

          .btn.wait {
            background: #3674b2;
          }

          .btn.ing {
            background: #de964f;
          }
        }

        .bottom {
          padding: 0.2rem 0;
          border-top: 1px solid #cacaca;

          li {
            line-height: 0.56rem;
            display: flex;
            justify-content: space-between;

            span {
              font-size: 0.3rem;
              color: #666666;
            }

            .data {
              color: #000000;
            }
          }
        }
      }
    }
  }

  .banimate.active {
    transform: translateY(0%);
    z-index: 0;
  }

  .head {
    width: 100%;
    height: 1.8rem;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    z-index: 20;

    .left {
      position: absolute;
      width: 50%;
      top: 0;
      left: 0;
      height: 1.8rem;
      transform: translateX(-100%);
      overflow: hidden;
      transition: all 2s;
      -webkit-transition: all 2s;
      /* Safari */
      transition-timing-function: linear;
      -webkit-transition-timing-function: linear;

      /* Safari and Chrome */
      /* Safari */
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 0.36rem;

      img {
        width: 1.1rem;
        height: 1.1rem;
        margin: 0 0.2rem 0 0.5rem;
      }
    }

    .right {
      position: absolute;
      width: 50%;
      top: 0;
      right: 0;
      height: 1.8rem;
      transform: translateX(100%);
      overflow: hidden;
      transition: all 2s;
      -webkit-transition: all 2s;
      /* Safari */
      transition-timing-function: linear;
      -webkit-transition-timing-function: linear;

      /* Safari and Chrome */
      /* Safari */
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #fff;
      font-size: 0.3rem;

      img {
        width: 10px;
        height: 16px;
        margin: 0 0.3rem 0 0.15rem;
      }
    }
  }

  .head.active {
    position: absolute;

    .left {
      transform: translateX(0%);
    }

    .right {
      transform: translateX(0%);
    }
  }

  .headimg {
    width: 100%;
    height: 1.8rem;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    z-index: 0;
  }

  .headimg.active {
    position: absolute;
  }
}
</style>