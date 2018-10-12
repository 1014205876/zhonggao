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
            <numroll :value="213853213" :time='2'></numroll>
          </div>
        </li>
        <li>
          <div class="top">订单总数</div>
          <div class='num'>
            <numroll :value="6546" :time='1'></numroll>
          </div>
        </li>
      </ul>
      <button v-on:click='start' class='start'>开启动画</button>
    </div>
    <div class="banimate" v-on:click='stop'>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="head">
      <div class="left">
        左动画
      </div>
      <div class="right">
        右动画
      </div>
    </div>
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
    return {};
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
    start() {
      $("html,body").animate({ scrollTop: 0 }, 0);
      $(".tanimate,.banimate,.head").addClass("active");
    },
    stop() {
      $(".tanimate,.banimate,.head").removeClass("active");
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
              color: "#fff"
            },
            text: "一周订单数据"
          },
          grid: {
            top: "20%",
            left: "20%",
            right: "10%",
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
              data: ["8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7"] //坐标轴数据
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
              data: [111, 258, 125, 512, 150, 510, 320],
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
              color: "#fff"
            },
            text: "一周申请金额"
          },
          grid: {
            top: "20%",
            left: "20%",
            right: "10%",
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
              data: ["8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7"] //坐标轴数据
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
              data: [23567, 34123, 10876, 86436, 21654, 55110, 12320],
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
              color: "#fff"
            },
            text: "一周居间费总金额"
            // x: "center"
          },
          grid: {
            top: "20%",
            left: "20%",
            right: "10%",
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
              data: ["8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7"] //坐标轴数据
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
              data: [1151, 2598, 6125, 5152, 1540, 8510, 3120],
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
      padding:0.1rem;
      li {
        display:flex;
        align-items:center;
        justify-content:space-around;
        span {
          line-height:0.5rem;
          color: #CACACA;
          font-size: 0.28rem;
        }
        .num {
          display:inline-block;
          width:0.7rem;
          text-align:center;
          color: #71FEC6;
          font-size:0.3rem;
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
      top: 65%;
      width: 100%;
      display: flex;
      justify-content: center;
      li {
        width: 2.2rem;
        height: 2.2rem;
        margin: 0 0.2rem;
        background: #253369;
        position:relative;
      }
      li.active {
        background: #2a4874;
      }
      li.active:after{
        content:'';
        position:absolute;
        left:0;
        right:0;
        top:-0.3rem;
        margin:auto;
        width:0;
        height:0;
        border-top:0.3rem solid #2a4874;
        border-left:0.15rem solid #2a4874;
        border-right:0.15rem solid #2a4874;
        border-bottom:0.3rem solid #2a4874;
      }
    }
    .start {
      position: absolute;
      bottom: 0rem;
      width: 100%;
      height: 1rem;
      font-size: 0.4rem;
    }
  }
  .tanimate.active {
    transform: translateY(-100%);
  }
  .banimate {
    position: relative;
    z-index: -30;
    width: 100%;
    transform: translateY(100%);
    transition: all 2s;
    -webkit-transition: all 2s;
    /* Safari */
    transition-timing-function: ease;
    -webkit-transition-timing-function: ease;
    /* Safari and Chrome */
    .box {
      width: 80%;
      height: 3rem;
      background: skyblue;
      border-radius: 0.5rem;
      margin: 0.5rem auto;
    }
  }
  .banimate.active {
    transform: translateY(0%);
    z-index: 30;
  }
  .head {
    width: 100%;
    height: 1rem;
    z-index: 20;
    position: fixed;
    top: 0;
    overflow: hidden;
    .left {
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      background: red;
      line-height: 1rem;
      transform: translateX(-100%);
      overflow: hidden;
      transition: all 2s;
      -webkit-transition: all 2s;
      /* Safari */
    }
    .right {
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
      background: red;
      line-height: 1rem;
      transform: translateX(100%);
      overflow: hidden;
      transition: all 2s;
      -webkit-transition: all 2s;
      /* Safari */
    }
  }
  .head.active {
    .left {
      transform: translateX(0%);
    }
    .right {
      transform: translateX(0%);
    }
  }
}
</style>
