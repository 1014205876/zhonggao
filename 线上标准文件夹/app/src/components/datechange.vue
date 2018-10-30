<template>
  <span class="datachange">{{newdate}}</span>
</template>

<script>
export default {
  name: "Datechange",
  data() {
    return {
      newdate: ""
    };
  },
  props: ["date"],
  methods: {
    change(value) {
      console.log(value);
      let newvalue = "";
      let stopTime = new Date(value.replace(/-/g, '/')).getTime();
      console.log(stopTime)
      let date = new Date(stopTime);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour <= 12) {
        newvalue = year + "-" + month + "-" + day + " " + "AM";
      } else {
        newvalue = year + "-" + month + "-" + day + " " + "PM";
      }
      console.log(newvalue);
      return newvalue;
    }
  },
  watch: {
    date() {
      this.newdate = this.change(this.date);
    }
  },
  created() {
    this.newdate = this.change(this.date);
  }
};
</script>

<style lang="less" scoped>
</style>
