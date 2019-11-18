// 生活缴费————周佩蕾

<template>
  <div class="payforlife">
    <!-- 标题 -->
    <van-nav-bar
      title="生活缴费"
      left-text="返回"
      right-text="缴费记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar>
    <!-- 费用区 -->
    <ul class="payment_list">
      <li class="payment_item" :key="userpayment.uId" v-for="(userpayment,index) of userpayments">
        <div style="display:flex;  justify-content: space-between;align-items: center">
          <van-checkbox
            v-model="checked[index]"
            shape="square"
            checked-color="#aaa"
          >2019{{userpayment.fId}}290001</van-checkbox>
          <div class="price">{{userpayment.lives[0].sMoney}}元</div>
        </div>
        <div class="styletime">
          <div class="paystyle">{{type[userpayment.lives[0].sType]}}</div>
          <div class="date">{{userpayment.lives[0].sArea}}</div>
        </div>
        <van-icon name="arrow" @click="justpay(userpayments,index)" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: [],
      type:{
        0: "缴费项目",
        1: "煤气费",
        2: "水费",
        3: "电费"
      },
      
    };
  },
  computed: {
    userpayments() {
      return this.$store.state.life_payment.userpayments;
    }
  },
  methods: {
    // 点击返回上一级菜单
    onClickLeft() {
      this.$router.push({
        name: "community"
      });
    },
    onClickRight() {
      this.$router.push({
        name: "payment_records"
      });
    },
    // 点击进入立即缴纳页面
    justpay(userpayments,index){
      this.$router.push({
        name: "payment_justpay"
      });
    this.$store.dispatch("life_payment/detailpay",index);
    }
  },
mounted(){
     this.$store.dispatch("life_payment/justpayment");
  }
    
 
};
</script>
<style scoped>
.payforlife {
  background: rgb(236, 236, 241);
  position: relative;
  overflow: hidden;
  height: 100%;
}
.payment_item .van-icon {
  position: absolute;
  font-size: 20px;
  right: 10px;
  bottom: 30px;
}
/* 类型时间 */
.styletime {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px 0px;
}
/* 价格 */
.price {
  padding-right: 40px;
}
/* 订单号 */
.van-checkbox {
  padding: 10px;
}
.van-checkbox__label {
  margin-left: 20px;
  font-size: 16px;
}
/* 单个缴费 */
.payment_item {
  background: #fff;
  margin: 10px;
  display: block;
  position: relative;
}
/* 缴费列表 */
.payment_list {
  list-style: none;
  margin-top: 82px;
}
/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
  position: fixed;
  top: 0;
  left: 0;
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
/*  文字*/
.van-nav-bar__left,
.van-nav-bar__right {
  font-size: 16px;
  color: #000;
}

.van-nav-bar__text {
  color: #000;
}
</style>