<template>
  <div class="paybox">
    <!-- 标题 -->
    <div class="title">
      <van-nav-bar title="费用缴纳" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 导航 -->
    <van-dropdown-menu class="nav">
      <van-dropdown-item
        v-model="core"
        :options="option1"
        overlay="false"
        @change="getcoredata"
        @close="reload"
      />
      <van-dropdown-item
        v-model="month"
        :options="option2"
        @change="getmonthdata"
        @close="reload"
      />
    </van-dropdown-menu>
    <!-- 底部内容 -->
    <div class="center">
      <p>2019年{{nowmonth}}</p>
      <ul>
        <li v-for="item of nodelist " :key="item.id" @click="paydetail(item.id)">
          <div class="leftpaystyle">
            <p>{{item.ordernumber}}</p>
            <p>{{item.paystyle}}</p>
          </div>
          <div class="paydate">
            <p>{{item.date}}</p>
            <p>{{item.price}}元</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      core: 0,
      month: "a",
      nowcore: "",
      nowmonth: "",
      option1: [
        { text: "缴费项目", value: 0 },
        { text: "煤气费", value: 1 },
        { text: "水费", value: 2 },
        { text: "电费", value: 3 }
      ],
      option2: [
        { text: "查询月份", value: "a" },
        { text: "01月", value: "b" },
        { text: "02月", value: "c" },
        { text: "03月", value: "d" },
        { text: "04月", value: "e" },
        { text: "05月", value: "f" },
        { text: "06月", value: "g" },
        { text: "07月", value: "h" },
        { text: "08月", value: "i" },
        { text: "09月", value: "j" },
        { text: "10月", value: "k" },
        { text: "11月", value: "l" },
        { text: "12月", value: "f" }
      ],
      nodelist: this.$store.state.payfees.userpayments
    };
  },
  methods: {
    //   返回键
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取缴费项目
    getcoredata(value) {
      this.nowcore = this.option1[value].text;
      console.log(this.nowcore);
    },
    // 获取月份
    getmonthdata(value) {
      let result = this.option2.filter(item => {
        return item.value == value;
      });
      this.nowmonth = result[0].text;
    },
    // 路由
    paydetail(id) {
      this.$router.push(`/payfees/${id}`);
    },
    // 过滤项目 月份
    reload() {
      let olddata =this.$store.state.payfees.userpayments;
      if (this.core == 0 && this.month == "a") {
        this.nodelist = olddata ;
      } else if (this.month =='a') {
        let result = olddata .filter(item => {
          return item.paystyle == this.nowcore;
        });
        this.nodelist = result;
      } else if (this.core == 0) {
        let filtemonthdata = olddata.filter(
          item => {
            return item.date.slice(0, 2) == this.nowmonth.slice(0, 2);
          }
        );
        this.nodelist = filtemonthdata;
      }else{
        let result = olddata .filter(item => {
          return item.paystyle == this.nowcore && item.date.slice(0, 2) == this.nowmonth.slice(0, 2);
        });
        this.nodelist = result;
      }
    }
  },
  computed: {
   
  }
};
</script>
<style scoped>
/* 标题 */
.title {
  width: 100%;
  position: fixed;
  top: 0;
}
.register_info .van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
.content {
  padding: 0 10px 0 10px;
}

/* 标题下划线 */

/* 标题名字 */
.van-nav-bar__title {
  font-size: 20px;
  font-weight: 600;
}
/* 标题部分的左箭头 */
.van-nav-bar__arrow {
  min-width: 1em;
  font-size: 22px;
}
.van-nav-bar .van-icon {
  color: #000;
  vertical-align: middle;
}
/* 返回 */
.van-nav-bar__text {
  color: #000;
}
/* 导航 */
/* .paybox{
    background: #aaaaaa
} */
.nav {
  width: 100%;
  position: fixed;
  top: 40px;
}
.center {
  overflow: scroll;
  width: 90%;
  position: absolute;
  top: 84px;
  padding: 0 20px;
  font-size: 13px;
  color: #474747;
  z-index: -1;
}

li {
  padding: 10px 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background: papayawhip;
  border-radius: 5px;
}
.leftpaystyle {
  float: left;
}
.paydate {
  float: right;
}
.van-cell__title {
}
</style>