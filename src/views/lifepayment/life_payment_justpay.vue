// 费用缴纳页面———— 周佩蕾




<template>
  <div class="justpaypage">
    <!-- 标题 -->
    <van-nav-bar title="费用缴纳" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <!-- 消息主体 -->
    <div style="width:90%;margin:0 auto">
      <div class="housenum">
        <div>房屋号</div>
        <div>{{paymentone.homenumber}}</div>
      </div>
      <!-- 电费 -->
      <div class="infostyle">
        <div>{{paymentone.paystyle}}</div>
        <div>{{paymentone.price}}</div>
      </div>
      <!-- 订单编号 -->
      <div class="infostyle" style="border:none;">
        <div>账单编号</div>
        <div>{{paymentone.ordernumber}}</div>
      </div>
      <!-- 缴费期间 -->
      <div class="infostyle" style="border:none;">
        <div>缴费期间</div>
        <div>{{paymentone.date}}</div>
      </div>
      <!-- 金额 -->
      <div class="infostyle" style="border:none;">
        <div>金额</div>
        <div>{{paymentone.money}}</div>
      </div>
      <!-- 上月度数 -->
      <div class="infostyle" style="border:none;">
        <div>上月度数</div>
        <div>{{paymentone.premonth}}</div>
      </div>
      <!-- 本月度数 -->
      <div class="infostyle">
        <div>本月度数</div>
        <div>{{paymentone.nowmonth}}</div>
      </div>
    </div>
    <!-- 缴费按钮 -->

    <div style='width:80%;margin:0 auto'>
      <button class="payment" @click="payfor()">立即缴费</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "life_payment_justpay",
  data() {
    return {};
  },
  methods: {
    // 返回<生活缴费>
    onClickLeft() {
      this.$router.push({
        name: "life_payment"
      });
    },
    // 缴费按钮反应
    payfor() {
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
    }
  },
  computed: {
    // 获取全局数据
    paymentone() {
      return this.$store.state.life_payment.paymentone;
    }
  },

  async mounted() {
    // console.log(this.$route);
    await this.$store.dispatch(
      "life_payment/justpayment",
      this.$route.params.id
    );
  }
};
</script>

<style scoped>
/* 缴费按钮 */
.payment {
  width: 100%;
  height: 50px;
  background-color: rgb(222, 222, 223);
  text-align: center;
  line-height: 50px;
  margin-top: 80px;
  border-radius: 5px;
  border: 0;
}
/* 房屋号 */
.housenum {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
/* 价格 */
.infostyle {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #aaa;
}
/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
/* 标题名字 */
.van-nav-bar__title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
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
/* “返回” 文字*/
.van-nav-bar__left {
  font-size: 16px;
  color: #000;
}

.van-nav-bar__text {
  color: #000;
}
</style>
