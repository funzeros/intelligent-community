<template>
<!-- 访客详情  魏珍君 -->
  <div>
    <!-- 标题 -->
    <van-nav-bar title="访客详情" left-text="返回" left-arrow @click-left="clickleft" />

    <div class="centerbox">
      <van-cell-group>
        <van-cell title="姓名" :value= getvislist.vname />
        <van-cell title="性别" :value= getvislist.sex />
        <van-cell title="手机号码" :value= getvislist.phonenum />
        <van-cell title="证件类型" :value= getvislist.idvalue />
        <van-cell title="证件号" :value= getvislist.idnum />
        <van-cell title="车牌号" :value= getvislist.carnum />
        <van-cell title="预约时间" :value= getvislist.ydata />
        <van-cell title="来访时间" :value= getvislist.ydata />
        <van-cell title="来访说明" :value= getvislist.explain />
        <van-cell title="二维码" :value= getvislist.failuretime />
      </van-cell-group>
      <img :src= getvislist.ewmimg alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vislist: [
        {
          ydata: "2019-10-1",
          vname: "放大镜",
          sex: "女",
          phonenum: "1122334",
          idvalue: "23445566677",
          idnum: "2234445555",
          carnum: "浙A88888",
          explain: "来访",
          typein: "App",
          failuretime:'已失效',
          ewmimg: `http://qr.liantu.com/api.php?text=11223344%262019-10-1&fg=000000`
        },
        {
          ydata: "2019-10-3",
          vname: "客服",
          sex: "男",
          phonenum: "11334433",
          idvalue: "2344556667ee7",
          idnum: "2234445eeeqwq555",
          carnum: "浙A88888",
          explain: "来访",
          failuretime:'有效',
          typein: "后台录入",
          ewmimg: `http://qr.liantu.com/api.php?text=11223344%262019-10-1&fg=000000`
        },
        {
          ydata: "2019-10-3",
          vname: "客服",
          sex: "男",
          phonenum: "113344333",
          idvalue: "23445566677",
          idnum: "2234445eeeeee555",
          carnum: "浙A88888",
          explain: "来访",
          failuretime:'有效',
          typein: "后台录入",
          ewmimg: `http://qr.liantu.com/api.php?text=11223344%262019-10-1&fg=000000`
        }
      ]
    };
  },
  methods: {
    clickleft() {
      this.$router.go(-1);
    }
  },
  computed: {
    // 获取后台数据后 状态管理使用
    getvislist() {
      // return this.$store.state.visitor.visobj
      let newarr = this.vislist.filter(item => {
        return item.idnum == this.$route.params.id;
      });
      return newarr[0];
    }
  }
};
</script>
<style scoped>
/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
.content {
  padding: 0 10px 0 10px;
}

/* 标题下划线 */
.van-hairline--bottom::after {
  border-bottom-width: 0px;
}
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
/* 主要内容 */
.centerbox {
  padding: 0 24px;
}
img{
    padding: 10px;
    width: 90px;
    height: 90px;
}
</style>