<template>
  <div class="report">
        <ul class="one">
          <li v-for='one in table' :key='one.id'>
            <div class="title">{{one.title}}</div>
            <ul class="two">
              <li v-for='two in one.tr' :key='two.id'>
              <div class="title">{{two.title}}</div>
              <ul class="three">
                <li v-for='three in two.td' :key='three.id'>kb12345.com
                  <div class="left">{{three.left}}</div>
                  <div class="right">{{three.right}}</div>
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
        {
          title: "一级标题",
          tr: [
            {
              title: "二级标题",
              td: [
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" }
              ]
            },
            {
              title: "二级标题",
              td: [
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" }
              ]
            },
            {
              title: "二级标题",
              td: [
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" }
              ]
            }
          ]
        },
        {
          title: "一级标题",
          tr: [
            {
              title: "二级标题",
              td: [
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" }
              ]
            },
            {
              title: "二级标题",
              td: [
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" }
              ]
            },
            {
              title: "二级标题",
              td: [
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" },
                { left: "左边内容", right: "右边内容" }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
</style>
