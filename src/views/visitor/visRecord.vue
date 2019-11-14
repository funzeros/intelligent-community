<template>
  <!-- 访客记录页面 ---魏珍君 -->
  <div>
    <!-- 标题 -->
    <van-nav-bar title="访客记录" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="center">
      <ul>
        <li v-for="item of vislist" :key="item.phonenum" class="libox" :class="{backchang:'App'==item.typein}" @click="visdetail(item.idnum)">
          <div class="left">
            <div class="left-top">
              <van-icon name="manager" />
              <span class="fontsty">{{item.vname}}</span>
              <span >
                <van-icon name="logistics" />
              </span>
                <span class="fontsty">{{item.carnum}}</span>
            </div>

            <span class="left-top">
              <van-icon name="clock" />
            </span>
              <span class="fontsty">{{item.ydata}}</span>
          </div>

          <div class="right">
            <span class="ewmico">
              <img src="@/assets/timg.jpg" alt class="ewmimg" />
              <div class="appstyle">{{item.typein}}</div>
            </span>
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
          typein: "后台录入",
          ewmimg: `http://qr.liantu.com/api.php?text=11223344%262019-10-1&fg=000000`
        }
      ],
      isshow:false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/visitor");
    },
   visdetail(idnum){
      this.$router.push({
          path:`/visrecord/${idnum}`
})
   }
  },
  mounted () {
      
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
/* li */
ul {
  width: 94%;
  margin: 0 auto;
}
.libox {
  color: #5c5b5b;
  height: 4.5rem;
  padding: 10px;
  margin: 20px;
  box-shadow: 0px 3px 5px 3.5px #ccc;
  border-radius: 8px;
  background: #ccc;
}
.backchang{
    background: #fff;
}
.van-icon{
    font-size: 20px;
        padding-right: 10px;
}
.fontsty{
    font-size: 14px;
    padding-right: 20px;
}
/* 左侧 */
.left {
    width: 78%;
  float: left;
}
.left-top{
    padding: 10px;
}
/* 右侧 */
.right {
  float: left;
  overflow: hidden;
}
.appstyle{
    font-size: 13px;
    text-align: center;
}
.ewmimg {
  width: 34px;
  height: 34px;
  margin: 5px;
  border-radius: 50%;
}

</style>