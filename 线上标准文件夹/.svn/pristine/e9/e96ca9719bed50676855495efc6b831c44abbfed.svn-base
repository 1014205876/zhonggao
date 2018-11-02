<template>
  <div class="datecom">
    <label>
      <div class="name">{{list.name}}</div>
      <input type="date" v-model='day' :disabled='list.readOnly'>
      <select v-model='time'>
        <option v-for='list in select' :key='list.id' :value='list.value'>{{list.name}}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "Datecom",
  data() {
    return {
      day: "",
      select: [
        {
          value: " 08:00:00",
          name: "AM"
        },
        {
          value: " 14:00:00",
          name: "PM"
        }
      ],
      time: " 08:00:00",
      over: true
    };
  },
  props: ["list"],
  methods: {
    change(value) {
      let newvalue = "";
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
      newvalue = year + "-" + month + "-" + day;
      return newvalue;
    }
  },
  mounted() {
    let that = this;

    // that.list.value = "";
    // console.log(that.list.value);
    // that.day = that.change(that.list.value);
  },
  watch: {
    list(val, oldval) {
      console.log("list");
      if (this.over) {
        this.list.value = "";
        this.over = false;
      }
    },
    time(val, oldval) {
      this.list.value = this.day + val;
      console.log(this.list.value);
    },
    day(val, oldval) {
      this.list.value = val + this.time;
      console.log(this.list.value);
    }
  },
  created() {
    console.log("list");
    if (this.over) {
      this.list.value = "";
      this.over = false;
    }
  }
};
</script>

<style lang="less" scoped>
.datecom {
  width: 100%;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      width: 3.8rem;
      line-height: 0.4rem;
    }
    input {
      width: 2.5rem;
      font-size: 0.3rem;
    }
    select {
      width: 1rem;
    }
    input:-ms-input-placeholder {
      color: #999999;
      font-size: 0.3rem;
    }
    input::-moz-placeholder {
      color: #999999;
      font-size: 0.3rem;
    }
    input:-moz-placeholder {
      color: #999999;
      font-size: 0.3rem;
    }
    input::-webkit-input-placeholder {
      //手机端
      color: #999999;
      font-size: 0.3rem;
    }
  }
}
</style>