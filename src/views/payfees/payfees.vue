<template>
<!-- 缴费 查询 魏珍君 -->
  <div class="paybox">
    <!-- 标题 -->
    <div class="title">
      <van-nav-bar title="费用缴纳" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <!-- 导航 -->
    <van-dropdown-menu class="nav" style="z-index:1001">
      <van-dropdown-item
        v-model="core"
        :options="option1"
        overlay="false"
        @change="getcoredata"
        @close="reload"
      />
      <van-dropdown-item v-model="month" :options="option2" @change="getmonthdata" @close="reload" />
    </van-dropdown-menu>
    <!-- 底部内容 -->
    <div class="center" >
      <p class="monthp">2019年{{nowmonth ==='00' ? '' : nowmonth + '月'}}</p>
      <ul>
        <li v-for="item of nodelist " :key="item.id" @click="paydetail(item.sId)">
          <div class="leftpaystyle">
            <p>2019100203{{item.fId}}</p>
            <p>{{type[item.sType]}}</p>
          </div>
          <div class="paydate">
            <p>{{item.sArea}}</p>
            <p>{{item.sMoney}}元</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapActions,mapState} from "vuex"
export default {
  data() {
    return {
      core: 0,
      month: "00",
      nowcore: "",
      nowmonth: "00",
      type:{
        0: "缴费项目",
        1: "煤气费",
        2: "水费",
        3: "电费"
      },
      option1: [
        { text: "缴费项目", value: 0 },
        { text: "煤气费", value: 1 },
        { text: "水费", value: 2 },
        { text: "电费", value: 3 }
      ],
      option2: [
        { text: "查询月份", value: "00" },
        { text: "01月", value: "01" },
        { text: "02月", value: "02" },
        { text: "03月", value: "03" },
        { text: "04月", value: "04" },
        { text: "05月", value: "05" },
        { text: "06月", value: "06" },
        { text: "07月", value: "07" },
        { text: "08月", value: "08" },
        { text: "09月", value: "09" },
        { text: "10月", value: "10" },
        { text: "11月", value: "11" },
        { text: "12月", value: "12" }
      ],
      nodelist: []
    }
  },
  methods: {
    ...mapActions({getpaylist:'payfees/getpaylist'}),
    //   返回键
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取缴费项目
    getcoredata(value) {
      this.nowcore = this.option1[value].value;
      // console.log(this.nowcore);
    },
    // 获取月份
    getmonthdata(value) {
      
      this.nowmonth = value === '00' ? '' : value
    },
    // 路由
    paydetail(id) {
      this.$router.push(`/payfees/${id}`);
    },
    // 过滤项目 月份
    reload() {
      let olddata = this.$store.state.payfees.userpayments;
      if (this.core == 0 && this.month == "00") {
        this.nodelist = olddata;
      } else if (this.month == "00") {
        let result = olddata.filter(item => {
          return item.sType == this.nowcore;
        });
        this.nodelist = result;
      } else if (this.core == 0) {
        let filtemonthdata = olddata.filter(item => {
          // console.log(item.sArea.slice(5, 7))
          return item.sArea.slice(5, 7) == this.nowmonth;
        });
        this.nodelist = filtemonthdata;
      } else {
        let result = olddata.filter(item => {
          return (
            item.sType == this.nowcore &&
           item.sArea.slice(5, 7) == this.nowmonth
          );
        });
        this.nodelist = result;
      }
    }
  },
  async mounted(){
     // 点击缴费记录 获取数据
      await this.getpaylist();
      this.nodelist = this.$store.state.payfees.userpayments;
  },
  computed: {
    // ...mapState({nodelist:state=>state.payfees.userpayments})
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
.van-nav-bar {
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
  font-size: 16px;
}
/* 导航 */
/* .paybox{
    background: #aaaaaa
} */
.nav {
  width: 100%;
  position: fixed;
  top: 71px;
}
.center {
  z-index: 1000;
  overflow: scroll;
  width: 100%;
  position: absolute;
  top: 20%;
  font-size: 13px;
  color: #474747;
  
}
.monthp{
  margin-left: 10%;
}
ul {
  width: 80%;
  text-align: center;
  margin: 0 auto;
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