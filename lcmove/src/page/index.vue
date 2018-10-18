<template>
  <div class="index">
    <div class="bgimg" style='background-image:url(static/img/bgimg_index.jpg)'></div>
    <div class='tanimate' @touchmove='touchmovet' @touchend='touchendt'>
      <ul class="task">
        <li>
          <span>当前任务</span>
          <span class='num'>{{echart0.waiting}}</span>
        </li>
        <li>
          <span>已办任务</span>
          <span class='num'>{{echart0.already}}</span>
        </li>
      </ul>
      <!-- <div id="myChart" class='myChart'></div> -->
      <div class="box active">
        <div id="myChart1" class='myChart'></div>
      </div>
      <div class="box active">
      <div id="myChart2" class='myChart'></div>
      </div>
      <div class="box active">
      <div id="myChart3" class='myChart'></div>
      </div>
      <ul class="data">
        <li class='active'>
          <div class="top">订单总数</div>
          <div class='num'>
            <span>{{movesumOrder}}</span>
            <!-- <numroll :value="echart1.sumOrder" :time='1'></numroll> -->
          </div>
        </li>
        <li>
          <div class="top">申请总金额</div>
          <div class='num'>
            <span>{{movesumApplyAmount}}</span>
            <!-- <numroll :value="echart2.sumApplyAmount" :time='1'></numroll> -->
          </div>
        </li>
        <li>
          <div class="top">居间费总金额</div>
          <div class='num'>
            <span>{{movesumConsumeAmount}}</span>
            <!-- <numroll :value="echart3.sumConsumeAmount" :time='1'></numroll> -->
          </div>
        </li>
      </ul>
      <div class="start" @touchstart='touchstartt'>
        查看待审批任务
        <img src="static/img/icon/up.png" alt="">
      </div>
    </div>
    <div class="banimate">
      <!-- <div class="header" style='background-image:url(static/img/bgimg_index_head.jpg)' @touchstart='touchstartb'>
        <div class="left" v-on:click='stop'>
          <img src="static/img/headimg_no.png" alt="">未登录
        </div>
        <div class="right" v-on:click='tohistory'>
          历史记录<img src="static/img/icon/right_white.png" alt="">
        </div>
      </div> -->
      <ul class='task'>
        <li v-on:click='toappointment'>
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
        <li v-on:click='torisk'>
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
        <li v-on:click='tocomprehensive'>
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
        <li v-on:click='toriskdirector'>
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
        <li v-on:click='toregulations'>
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
        <li v-on:click='tovicemanager'>
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
        <li v-on:click='tomanager'>
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
      <div class="right" @click='stop'>
        数据统计<img src="static/img/icon/echart.png" alt="">
      </div>
    </div>
      <div class="history" v-on:click='tohistory'>历史任务</div>
    <!-- <div class="headimg" style='background-image:url(static/img/bgimg_index_head.jpg)'></div> -->
  </div>
</template>

<script>
// 引入jq
import $ from "jquery";
// 引入数字滚动组件
import numroll from "@/components/numroll";
//typical import
import { TweenMax, Power2, TimelineLite } from "gsap";
export default {
  name: "Index",
  data() {
    return {
      startY: 0,
      moveY: 0,
      endY: 0,
      canmove: true,
      xArr: [],
      sumOrder: 0,
      sumApplyAmount: 0,
      sumConsumeAmount: 0,
      data: 3,
      echart0: {
        already: 0,
        waiting: 0
      },
      echart1: {
        sumOrder: 0,
        chartsData: [
          {
            count: 0,
            time: "2018-10-17"
          },
          {
            count: 0,
            time: "2018-10-16"
          },
          {
            count: 0,
            time: "2018-10-15"
          },
          {
            count: 0,
            time: "2018-10-14"
          },
          {
            count: 0,
            time: "2018-10-13"
          },
          {
            count: 0,
            time: "2018-10-12"
          },
          {
            count: 0,
            time: "2018-10-11"
          }
        ]
      },
      echart2: {
        sumApplyAmount: "0",
        chartsData: [
          {
            amount: 0,
            time: "2018-10-17"
          },
          {
            amount: 0,
            time: "2018-10-16"
          },
          {
            amount: 0,
            time: "2018-10-15"
          },
          {
            amount: 0,
            time: "2018-10-14"
          },
          {
            amount: 0,
            time: "2018-10-13"
          },
          {
            amount: 0,
            time: "2018-10-12"
          },
          {
            amount: 0,
            time: "2018-10-11"
          }
        ]
      },
      echart3: {
        sumConsumeAmount: "0",
        chartsData: [
          {
            consumeAmount: 0,
            time: "2018-10-17"
          },
          {
            consumeAmount: 0,
            time: "2018-10-16"
          },
          {
            consumeAmount: 0,
            time: "2018-10-15"
          },
          {
            consumeAmount: 0,
            time: "2018-10-14"
          },
          {
            consumeAmount: 0,
            time: "2018-10-13"
          },
          {
            consumeAmount: 0,
            time: "2018-10-12"
          },
          {
            consumeAmount: 0,
            time: "2018-10-11"
          }
        ]
      }
    };
  },

  computed: {
    movesumOrder: function() {
      return this.sumOrder.toFixed(2);
    },
    movesumApplyAmount: function() {
      return this.sumApplyAmount.toFixed(2);
    },
    movesumConsumeAmount: function() {
      return this.sumConsumeAmount.toFixed(2);
    }
  },
  watch: {
    echart1: function(newValue) {
      TweenLite.to(this.$data, 0.5, { sumOrder: newValue.sumOrder });
    },
    echart2: function(newValue) {
      TweenLite.to(this.$data, 0.5, {
        sumApplyAmount: newValue.sumApplyAmount
      });
    },
    echart3: function(newValue) {
      TweenLite.to(this.$data, 0.5, {
        sumConsumeAmount: newValue.sumConsumeAmount
      });
    }
  },
  components: {
    numroll
  },
  //函数盒子
  methods: {
    touchstartt(e) {
      this.canmove = true;
      this.startY = e.targetTouches[0].pageY;
      this.moveY = e.targetTouches[0].pageY;
    },
    touchmovet(e) {
      let that = this;
      if (that.canmove) {
        that.moveY = e.targetTouches[0].pageY;
        $(".index .head .left").css({
          transform:
            "translateX(" +
            (($(window).height() + that.moveY - that.startY) * -100) /
              $(window).height() +
            "%)",
          transition: "none"
        });
        $(".index .head .right").css({
          transform:
            "translateX(" +
            (($(window).height() + that.moveY - that.startY) * 100) /
              $(window).height() +
            "%)",
          transition: "none"
        });
        $(".index .banimate").css({
          transform:
            "translateY(" +
            (($(window).height() + that.moveY - that.startY) * 100) /
              $(window).height() +
            "%)",
          transition: "none"
        });
        $(".index .tanimate").css({
          transform:
            "translateY(" +
            ((that.moveY - that.startY) * 30) / $(window).height() +
            "%)",
          opacity:
            (($(window).height() + that.moveY - that.startY) /
              $(window).height()) *
            0.7,
          transition: "none"
        });
      }
    },
    touchendt(e) {
      this.canmove = false;
      if (this.startY - this.moveY >= 200) {
        this.start(this);
      } else {
        this.stop();
      }
      this.startY = 0;
      this.moveY = 0;
    },
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
    torisk() {
      this.$router.push("/risk");
    },
    tocomprehensive() {
      this.$router.push("/comprehensive");
    },
    toriskdirector() {
      this.$router.push("/riskdirector");
    },
    toregulations() {
      this.$router.push("/regulations");
    },
    tovicemanager() {
      this.$router.push("/vicemanager");
    },
    tomanager() {
      this.$router.push("/manager");
    },
    start(that) {
      $(".index .banimate").animate({ scrollTop: 0 }, 0);
      $(".index .head .left").css({
        transform: "translateX(0%)",
        transition: "all 0.6s"
      });
      $(".index .head .right").css({
        transform: "translateX(0%)",
        transition: "all 0.6s"
      });
      $(".index .tanimate").css({
        transform: "translateY(-30%)",
        opacity: 0,
        transition: "all 0.6s"
      });
      $(".index .banimate").css({
        transform: "translateY(0%)",
        transition: "all 0.6s"
      });
      $(".tanimate,.banimate,.head,.history").addClass("active");
    },
    stop() {
      $(".index .banimate").animate({ scrollTop: 0 }, 0);
      $(".index .head .left").css({
        transform: "translateX(-100%)",
        transition: "all 0.6s"
      });
      $(".index .head .right").css({
        transform: "translateX(100%)",
        transition: "all 0.6s"
      });
      $(".index .tanimate").css({
        transform: "translateY(0%)",
        opacity: 1,
        transition: "all 0.6s"
      });
      $(".index .banimate").css({
        transform: "translateY(100%)",
        transition: "all 0.6s"
      });
      $(".tanimate,.banimate,.head,.history").removeClass("active");
    },
    infoEchart1(that) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = that.$echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      let option = {
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
            data: that.xArr
            //坐标轴数据
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
            data: [
              that.echart1.chartsData[6].count,
              that.echart1.chartsData[5].count,
              that.echart1.chartsData[4].count,
              that.echart1.chartsData[3].count,
              that.echart1.chartsData[2].count,
              that.echart1.chartsData[1].count,
              that.echart1.chartsData[0].count
            ],
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
      };

      myChart.clear();
      myChart.setOption(option);
      // $(".index .tanimate .data li").click(function() {
      //   $(".index .tanimate .data li").removeClass("active");
      //   $(this).addClass("active");
      //   myChart.clear();
      //   myChart.setOption(option[$(this).index()]);
      // });
    },
    infoEchart2(that) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = that.$echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      let option = {
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
          name: "万",
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
            data: [
              that.echart2.chartsData[6].amount,
              that.echart2.chartsData[5].amount,
              that.echart2.chartsData[4].amount,
              that.echart2.chartsData[3].amount,
              that.echart2.chartsData[2].amount,
              that.echart2.chartsData[1].amount,
              that.echart2.chartsData[0].amount
            ],
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
      };

      myChart.clear();
      myChart.setOption(option);
    },
    infoEchart3(that) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = that.$echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      let option = {
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
          name: "万",
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
            data: [
              that.echart3.chartsData[6].consumeAmount,
              that.echart3.chartsData[5].consumeAmount,
              that.echart3.chartsData[4].consumeAmount,
              that.echart3.chartsData[3].consumeAmount,
              that.echart3.chartsData[2].consumeAmount,
              that.echart3.chartsData[1].consumeAmount,
              that.echart3.chartsData[0].consumeAmount
            ],
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
      };

      myChart.clear();
      myChart.setOption(option);
      // $(".index .tanimate .data li").click(function() {
      //   $(".index .tanimate .data li").removeClass("active");
      //   $(this).addClass("active");
      //   myChart.clear();
      //   myChart.setOption(option[$(this).index()]);
      // });
    }
  },
  // 获取后端数据
  beforeCreate() {
    let that = this;
    console.log("beforeCreatestart");
    console.log("beforeCreateend");
  },
  // 修改数据
  created() {
    let that = this;
    console.log("createdstart");
    that
      .$http({
        method: "get",
        header: "Content-Type:application/json",
        url:
          "api/v1/flow/index?assignee=riskAssistant&productName=ZXD&interfaceid=0"
      })
      .then(function(res) {
        that.echart0 = JSON.parse(res.data.data);
        console.log("echart0");
      })
      .catch(function(err) {
        console.log(err);
      });
    that
      .$http({
        method: "get",
        header: "Content-Type:application/json",
        url:
          "api/v1/flow/index?assignee=riskAssistant&productName=ZXD&interfaceid=1"
      })
      .then(function(res) {
        that.echart1 = JSON.parse(res.data.data);
        console.log("echart1");
        console.log(that.echart1);
        that.infoEchart1(that);
      })
      .catch(function(err) {
        console.log(err);
      });
    that
      .$http({
        method: "get",
        header: "Content-Type:application/json",
        url:
          "api/v1/flow/index?assignee=riskAssistant&productName=ZXD&interfaceid=2"
      })
      .then(function(res) {
        that.echart2 = JSON.parse(res.data.data);
        console.log("echart2");
        console.log(that.echart2);
        that.infoEchart2(that);
        $(".index .tanimate .box")
          .eq(1)
          .removeClass("active");
      })
      .catch(function(err) {
        console.log(err);
      });
    that
      .$http({
        method: "get",
        header: "Content-Type:application/json",
        url:
          "api/v1/flow/index?assignee=riskAssistant&productName=ZXD&interfaceid=3"
      })
      .then(function(res) {
        that.echart3 = JSON.parse(res.data.data);
        console.log("echart3");
        console.log(that.echart3);
        that.infoEchart3(that);
        $(".index .tanimate .box")
          .eq(2)
          .removeClass("active");
      })
      .catch(function(err) {
        console.log(err);
      });
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
      // that.dayArr.push(nowDate);
      that.xArr.push(xDate);
    }
    let account =
      localStorage.getItem("account") || sessionStorage.getItem("account");
    console.log(account);
    let password =
      localStorage.getItem("password") || sessionStorage.getItem("password");
    console.log(password);
    console.log("createdend");
  },
  // 操作dome
  mounted() {
    let that = this;
    console.log("mountedstart");
    $(".index").css("height", $(window).height());
    $(".index .bgimg").css("height", $(window).height());
    $(".index .tanimate").css("height", $(window).height());
    $(".index .banimate").css(
      "height",
      $(window).height() - $(".index .head").height()
    );
    $(".index .tanimate .data li").click(function() {
      $(".index .tanimate .data li").removeClass("active");
      $(this).addClass("active");
      $(".index .tanimate .box").removeClass("active");
      $(".index .tanimate .box")
        .eq($(this).index())
        .addClass("active");
      // console.log($(this).index())
      if ($(this).index() == 0) {
        that.infoEchart1(that);
      }
      if ($(this).index() == 1) {
        that.infoEchart2(that);
      }
      if ($(this).index() == 2) {
        that.infoEchart3(that);
      }
    });
    console.log("mountedend");
  }
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  position: relative;
  overflow: hidden;
  .bgimg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .tanimate {
    width: 100%;
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
    opacity: 1;
    transition: all 0.6s;
    -webkit-transition: all 0.6s;
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
          font-family: "Akrobat-ExtraBold";
        }
      }
    }
    .box {
      position: absolute;
      top: 5%;
      width: 100%;
      height: 7rem;
      display: none;
      .myChart {
        width: 100%;
        height: 100%;
      }
    }

    .box.active {
      display: block;
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
          margin-top: 0.3rem;
          line-height: 0.4rem;
          font-size: 0.48rem;
          font-family: "Akrobat-ExtraBold";
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
    z-index: 10;
    transform: translateY(-30%);
    opacity: 0;
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
    position: absolute;
    top: 1.8rem;
    z-index: 20;
    width: 100%;
    overflow: auto;
    // padding-top: 1.8rem;
    transform: translateY(100%);
    transition: all 0.6s;
    -webkit-transition: all 0.6s;
    /* Safari */
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;

    /* Safari and Chrome */
    .header {
      width: 100%;
      height: 1.8rem;
      overflow: hidden;
      background-position: center center;
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0;

      .left {
        position: absolute;
        width: 50%;
        top: 0;
        left: 0;
        height: 1.8rem;
        transform: translateX(-100%);
        overflow: hidden;
        transition: all 0.6s;
        -webkit-transition: all 0.6s;
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
        transition: all 0.6s;
        -webkit-transition: all 0.6s;
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

    .task {
      background: #f3f3f3;
      padding: 0.1rem 0;
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
    .history {
      z-index: 30;
    }
    .header {
      position: absolute;

      .left {
        transform: translateX(0%);
      }

      .right {
        transform: translateX(0%);
      }
    }
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
    font-size: 0.36rem;

    .left {
      position: absolute;
      width: 50%;
      top: 0;
      left: 0;
      height: 1.8rem;
      transform: translateX(-100%);
      overflow: hidden;
      transition: all 0.6s;
      -webkit-transition: all 0.6s;
      /* Safari */
      transition-timing-function: linear;
      -webkit-transition-timing-function: linear;

      /* Safari and Chrome */
      /* Safari */
      display: flex;
      align-items: center;
      color: #fff;

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
      transition: all 0.6s;
      -webkit-transition: all 0.6s;
      /* Safari */
      transition-timing-function: linear;
      -webkit-transition-timing-function: linear;

      /* Safari and Chrome */
      /* Safari */
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: #fff;

      img {
        width: 18px;
        height: 15px;
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

  .history {
    position: absolute;
    z-index: -10;
    right: 0.5rem;
    bottom: 1rem;
    width: 0.6rem;
    padding: 0.2rem;
    height: 0.6rem;
    border-radius: 1rem;
    background: #3674b2;
    box-shadow: 0px 2px 5px #3674b2;
    font-size: 0.28rem;
    color: #fff;
    line-height: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .history.active {
    z-index: 30;
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