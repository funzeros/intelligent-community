<template>
  <!-- 访客预约 主页面  --魏珍君 -->

  <div>
    <!-- 标题 -->
    <!-- <van-nav-bar title="访客授权" left-arrow /> -->
    <!--
    @click-right="onClickRight"-->
    <van-nav-bar
      title="访客授权"
      left-text="返回"
      right-text="访客记录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 主要内容 -->
    <div class="content">
      <!-- 访客名称 -->
      <van-cell-group>
        <van-field placeholder label="访客姓名" v-model="visname" />
      </van-cell-group>
      <!-- 手机号码 -->
      <van-cell-group>
        <van-field placeholder label="手机号码" v-model="visphonenum" />
      </van-cell-group>
      <!-- 单选框 -->
      <div class="sbox">
        <span class="fontsex">性别</span>
        <span class="boy">
          <input type="radio" v-model="sex" value="男" name="gender" />男
        </span>
        <input type="radio" v-model="sex" value="女" name="gender" />女
      </div>
      <!-- 证件类型 -->
      <div class="credentials">
        <van-cell is-link @click="showPopup('idshow')" v-model="idvalue">
          <span class="idsty">证件类型</span>
          <span>{{idvalue}}</span>
        </van-cell>

        <van-popup v-model="idshow" position="bottom">
          <van-picker
            show-toolbar
            title="证件类型"
            :columns="columns"
            @cancel="onCancel"
            @confirm="onConfirm"
          />
        </van-popup>
      </div>
      <!-- 证件号码 -->
      <van-cell-group>
        <van-field placeholder label="证件号码" v-model="idnum" />
      </van-cell-group>
      <!-- 是否驾车 -->
      <van-cell-group>
        <van-field placeholder label="是否驾车" v-model="driven" />
      </van-cell-group>
      <!-- 车牌号码 -->
      <van-cell-group>
        <van-field placeholder label="车牌号码" v-model="carnum" />
      </van-cell-group>
      <!-- 预约时间 -->
      <div class="sbox">
        <span class="fontsex">预约时间</span>
        <span class="ksdata">&nbsp;{{ksdata}}</span>
        <span class="datasty">
          <van-icon name="notes-o" @click="showPopup('datashow')" />
          <span>
            <!-- <van-cell is-link ></van-cell>
              <van-icon name="notes-o" />
            </van-cell>-->
            <div class="startdate">
              <van-popup v-model="datashow" position="bottom" :style="{ height: '30%' }">
                <van-datetime-picker
                  v-model="currentDate"
                  type="date"
                  :formatter="formatter"
                  @confirm="getdata"
                  @cancel="close"
                />
              </van-popup>
            </div>
          </span>
        </span>
      </div>
      <!-- 来访说明 -->
      <van-cell-group>
        <van-field placeholder label="来访说明" v-model="explain" />
      </van-cell-group>
      <!-- 生成通行证二维码 -->
      <div class="ewmbtn">
        <van-button type="primary" size="large" @click="getewm">生成通行证二维码</van-button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
// import axios from "axios";
export default {
  data() {
    return {
      visname: "",
      visphonenum: "",
      isshow: true,
      sex: "",
      idshow: false,
      datashow: false,
      columns: ["身份证"],
      currentDate: new Date(),
      fileList: [],
      ksdata: "",
      idvalue: "",
      idnum: "",
      driven: "",
      carnum: "",
      explain: ""
    };
  },
  methods: {
    //   返回事件
    onClickLeft() {
      this.$router.push('main/community');
    },

    // 预约记录
    onClickRight() {
      this.$router.push({
        name: "visrecord"
      });
    },
    //  证件类型部分
    showPopup(sh) {
      this[sh] = true;
    },
    // 证件选择
    onConfirm(value, index) {
      //   Toast(`当前值：${value}, 当前索引：${index}`);
      //   console.log(`当前值：${value}`)
      this.idvalue = value;
      this.idshow = false;
    },
    onCancel() {
      //   Toast("取消");
      this.idshow = false;
    },
    getidstyle() {},
    // 预约时间
    getdata(value) {
      const d = new Date(value);
      //  转换时间
      this.ksdata =
        d.getFullYear() +
        "-" +
        this.p(d.getMonth() + 1) +
        "-" +
        this.p(d.getDate());
      this.datashow = false;
      //   console.log(value)
    },
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else {
        return `${value}日`;
      }
      return value;
    },

    getewm() {
      let obj = {
        ydata: this.ksdata,
        vname: this.visname,
        sex: this.sex,
        phonenum: this.visphonenum,
        idvalue: this.idvalue,
        idnum: this.idnum,
        carnum: this.carnum,
        explain: this.explain,
        ewmimg: `http://qr.liantu.com/api.php?text=${this.visname}%26${this.ksdata}&fg=000000`
      };
      this.$store.dispatch("visitor/getewm", obj);
      console.log(this.visphonenum)
      this.$router.push(`/visitor/${this.visphonenum}`);

      //    let result = await axios.get(`http://apis.juhe.cn/qrcode/api?key=&text=&type=2&fgcolor=00b7ee&w=80&m=5&lw=80&text=${this.visname}`)
      //     console.log(result)
    },
    getname(value) {
      this.visname = value;
    },
    close() {
      this.datashow = false;
    }
  }
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}
/* 标题 */
.register_info .van-nav-bar {
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
}
/* 性别选择 */
.sbox {
  line-height: 24px;
  border-bottom: 1px solid #ebedf0;
  padding: 10px 16px;
  color: #323233;
  font-size: 14px;
}
.fontsex {
  line-height: 24px;
  display: inline-block;
  width: 90px;
}
.boy {
  padding-right: 40px;
}
/* 证件类型 */
.credentials {
  border-bottom: 1px solid #ebedf0;
}
.idsty {
  display: inline-block;
  width: 90px;
}
/* 日期 */
.datasty {
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  left: 130px;
}
.van-icon,
.van-icon::before {
  display: inline-block;
  font-size: 20px;
  line-height: 26px;
  height: 100%;
}
.ksdata {
  display: inline-block;
  width: 80px;
}
/* 二维码按钮 */
.ewmbtn {
  width: 100%;
  text-align: center;
}
.van-button--large {
  width: 80%;
}
.van-button--large {
  border-radius: 8px;
  background-color: #23bacf;
  border: 1px solid #23bacf;
}
.ewmbtn[data-v-c5298072] {
  position: absolute;
  text-align: center;
  bottom: 50px;
}
</style>