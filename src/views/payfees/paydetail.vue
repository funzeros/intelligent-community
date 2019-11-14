<template>
  <div>
    <div class="title">
      <van-nav-bar title="费用详情" left-text="返回" left-arrow @click-left="onClickLeft" />
      <div class="center">
        <div class="homenum">
          <p>
            <span>房屋号</span>
            <span class="right">{{getuserpay.homenumber}}</span>
          </p>
          <p>
            <span>电费</span>
            <span class="right bigsize">{{getuserpay.price}}元</span>
          </p>
        </div>
        <div class="paydetail">
          <div class="billbox">
              <div>账单编号</div><div>{{getuserpay.ordernumber}}</div>
          </div>
             <div class="billbox">
              <div>缴费期间</div><div>{{getuserpay.period}}</div>
          </div>
             <div class="billbox">
              <div>缴费时间</div><div>{{getuserpay.date}}</div>
          </div>
             <div class="billbox">
              <div>上月度数</div><div>{{getuserpay.premonth}}</div>
          </div>
           <div class="billbox">
              <div>本月度数</div><div>{{getuserpay.nextmonth}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   返回事件
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  computed: {
    getuserpay() {
      let result = this.$store.state.payfees.userpayments.filter(item => {
        return item.id == this.$route.params.id;
      });
      return result[0];
    }
  }
};
</script>
<style scoped>
/* 标题 */
.title {
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
}
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
.center {
  padding: 0px 30px;
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
.van-cell:not(:last-child)::after {
  border: 0 solid #ebedf0;
}
p span {
  font-size: 14px;
  color: rgb(39, 38, 38);
}
.right {
  float: right;
}
.bigsize {
  font-size: 25px;
}
.homenum {
  border-bottom: 1px solid #7c7c7c;
  padding: 15px 10px;
}
.paydetail{
    padding: 10px 0 20px;
    border-bottom: 1px solid #7c7c7c;
}
.billbox{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding: 10px 0;
}


</style>