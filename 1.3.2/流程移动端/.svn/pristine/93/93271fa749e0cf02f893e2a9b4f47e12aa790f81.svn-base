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
  props: ["date", "noon"],
  methods: {
    change(value) {
      let newvalue = "";
      if (value) {
        let stopTime = new Date(value.replace(/-/g, "/")).getTime();
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
        console.log(this.noon)
        if (this.noon) {
          if (hour <= 12) {
            newvalue = year + "-" + month + "-" + day + " " + "AM";
          } else {
            newvalue = year + "-" + month + "-" + day + " " + "PM";
          }
        } else {
          newvalue = year + "-" + month + "-" + day;
        }
        return newvalue;
      }
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
