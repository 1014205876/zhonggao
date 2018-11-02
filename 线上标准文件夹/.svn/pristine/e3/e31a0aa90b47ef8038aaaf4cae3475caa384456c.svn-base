<template>
  <div class="report">
        <ul class="one">
          <li v-for='one in table' :key='one.ids'>
            <div class="title" v-if='one.name!="null"'>{{one.name}}</div>
            <ul class="two">
              <li v-for='two in one.child' :key='two.ids'>
              <div class="title" v-if='two.name!="null"'>{{two.name}}</div>
              <ul class="three">
                <li v-for='three in two.child' :key='three.ids' :class='{image:(three.type=="image")}'>
                  <div class="left">
                    <div>{{three.name}}</div>
                  </div>
                  <div class="right">
                    <img v-if='three.type=="image"&&three.value' :src="three.value" alt="">
                    <div v-if='three.type=="String"'>{{three.value}}</div>
                  </div>
                </li>
              </ul>
              </li>
            </ul>
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: "Report",
  data() {
    return {
      table: [
        // {
        //   name: "项目基本信息",
        //   id: 1,
        //   type: "String",
        //   child: [
        //     {
        //       name: "二级标题",
        //       id: 1,
        //       type: "String",
        //       child: [
        //         {
        //           name: "产品类型",
        //           id: 1,
        //           type: "image",
        //           value: "static/img/bgimg_index_head.jpg",
        //           key: "prodectType"
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    };
  },
  created() {
    // console.log("createdstart");
    let that = this;
    let token = localStorage.getItem("token");
    let type = that.$route.query.type;
    document.getElementById("titleId").innerHTML =that.$route.query.title;
    let processInstanceId = that.$route.query.processInstanceId;
    //调取后台数据
    that
      .$http({
        method: "get",
        header: {
          "Content-Type": "application/json;charset=utf-8"
        },
        headers: {
          authorization: token
        },
        url: "api/peak-flow/v1/flow/"+type+"/"+processInstanceId
      })
      .then(function(res) {
        that.table = res.data.data;
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.report {
  .one {
    > li {
      line-height: 0.4rem;
      font-size: 0.3rem;
      background: #ffffff;
      margin-top: 0.4rem;
      > .title {
        color: #000000;
        font-size: 0.36rem;
        padding: 0rem 0.3rem;
        line-height: 1rem;
        font-weight: 700;
      }
      .two {
        // border-bottom: 1px solid #cacaca;
        > li {
          > .title {
            padding: 0rem 0.3rem;
            line-height: 1rem;
            border-top: 1px solid #cacaca;
            color: #666666;
            font-weight: 600;
          }
          .three {
            > li {
              border-top: 1px solid #cacaca;
              // height: 1rem;
              display: flex;
              .left {
                flex: 4;
                color: #999999;
                padding: 0.1rem 0.3rem;
                div {
                  height:100%;
                  white-space: normal;
                  word-break: break-all;
                  overflow: hidden;
                  // text-overflow: ellipsis;
                  // display: -webkit-box;
                  // -webkit-line-clamp: 2;
                  // -webkit-box-orient: vertical;
                }
              }
              .right {
                flex: 3;
                color: #333333;
                padding: 0.1rem 0.3rem;
                border-left: 1px solid #cacaca;
                div {
                  height:100%;
                  white-space: normal;
                  word-break: break-all;
                  // overflow: hidden;
                  // text-overflow: ellipsis;
                  // display: -webkit-box;
                  // -webkit-line-clamp: 2;
                  // -webkit-box-orient: vertical;
                }
              }
            }
            > li.image {
              height:auto;
              display: block;
              padding: 0.3rem 0.2rem 0;
              border-top: none;
              .left {
                line-height: 0.4rem;
              }
              .right{
                border-left: none;
                img{
                  width:4.8rem;
                  display:block;
                }
              }
            }
            > li.image:first-child {
              border-top: 1px solid #cacaca;
            }
          }
        }
      }
    }
    > li:first-of-type {
      margin-top: 0;
    }
  }
}
</style>
