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
      <div class="main">
        <!-- 访客名称 -->
        <van-cell-group>
          <van-field
            placeholder="请输入用户名"
            label="访客姓名"
            v-model="visname"
            @blur="changname"
            ref="sename"
          />
        </van-cell-group>
        <!-- 手机号码 -->
        <van-cell-group>
          <van-field v-model="visphonenum" label="手机号" placeholder="请输入手机号" @blur="getphonenum" />
        </van-cell-group>
        <!-- 单选框 -->
        <div class="sexbox">
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
          <van-popup v-model="idshow" position="bottom" @click-overlay=" getidstype ">
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
          <van-field placeholder="请输入证件号" label="证件号码" v-model="idnum" @blur="getidcard" />
        </van-cell-group>
        <!-- 是否驾车 -->
        <van-cell-group>
          <van-field placeholder="是/否" label="是否驾车" v-model="driven" @blur="judgecar" />
        </van-cell-group>
        <!-- 车牌号码 -->
        <van-cell-group>
          <van-field placeholder="请输入车牌号码 如：浙A12345" label="车牌号码" v-model="carnum" @blur=" varchar " />
        </van-cell-group>
        <!-- 预约时间 -->
        <div class="sbox" @click.self="showPopup('datashow')">
          <span class="fontsex">预约时间</span>
          <span class="ksdata">&nbsp;{{ksdata}}</span>
          <span class="datasty">
            <van-icon name="notes-o" class="icodata" @click.self="showPopup('datashow')" />
            <span>
              <!-- <van-cell is-link ></van-cell>
              <van-icon name="notes-o" />
              </van-cell>-->
              <div class="startshow">
                <van-popup
                  v-model="datashow"
                  position="bottom"
                  :style="{ height: '30%' }"
                  @click-overlay="getyydata"
                >
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
          <van-field placeholder="请留言" label="来访说明" v-model="explain" />
        </van-cell-group>
        <!-- 生成通行证二维码 -->
        <div class="ewmbtn">
          <van-button type="primary" size="large" @click="getewm">生成通行证二维码</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
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
      explain: "",
      // 判断正则
      judgename:false,
      judgephone:false,
      judgesex:false,
      judgeidtype:false,
      judgeidnum:false,
      judegdriven:false,
      judgecarnum:false,
      judgeksdata:false,

      // errortext: "22222",
    };
  },
  methods: {
    //   返回事件
    onClickLeft() {
      this.$router.push("main/community");
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
      this.judgeidtype = true;
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
      this.judgeksdata = true;
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
    
    getname(value) {
      this.visname = value;
    },
    close() {
      this.datashow = false;
    },
    // 表单验证name
    changname() {
      let reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/; //验证姓名正则

      if (reg.test(this.visname)) {
        this.$refs.sename.style = "color:green";
        this.judgename = true
      } else if (this.visname == "") {
        this.$toast("用户名不能为空");
        this.judgename=false
      } else if (!reg.test(this.visname)) {
        this.$toast("用户名输入有误")
        this.judgename=false
      }
    },
    // 验证手机号码
    getphonenum() {
      console.log('====================================');
      console.log(this.visphonenum);
      console.log('====================================');
      let re = /^1\d{10}$/;
      if (this.visphonenum == "") {
        this.judgephone = false
        return;
      } else if (!re.test(this.visphonenum)) {
        this.$toast("格式错误，请重新输入");
        this.judgephone = false
      } else {
        this.$toast("输入成功");
        this.judgephone = true
      }
    },
    // 验证性别
    getsex(){
        console.log(this.sex)
        if(this.sex == ''){
          this.$toast("请选择性别");
          this.judgesex = true
        }
    },
    // 验证身份类型
    getidstype() {
      console.log(this.idvalue);
      if (this.idvalue == "") {
        this.judgeidtype = false
        this.$toast("证件类型不能为空");
      }
    },
    // 验证身份证
    getidcard() {
      let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
      if (this.idnum == "") {
        this.judgeidnum = false
        this.$toast("证件号码不能为空");
      } else if (regIdCard.test(this.idnum)) {
         this.judgeidnum = true
        this.$toast("输入成功");
      } else if (!regIdCard.test(this.idnum)) {
         this.judgeidnum = false
        this.$toast("证件号码格式错误，请重新输入");
      }
    },
    // 是否驾车
    judgecar() {
       if(this.driven == '是'|| this.driven =="否"){
         this.judegdriven = true;
         this.$toast("输入成功");
       }else{
         this.judegdriven = false;
         this.$toast("输入有误,请输入  是或否");
       }
    },
    // 验证车牌号码
    varchar(){
      let carp = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
      if(carp.test(this.carnum)){
        this.judgecarnum = true;
         this.$toast("输入成功");
      }else{
        this.judgecarnum = false;
        this.$toast("车牌号码输入有误,请重新输入");
      }
    },
    // 验证预约时间
    getyydata(){
      if(this.ksdata == ''){
        this.judgeksdata = false
         this.$toast("预约时间不能为空,请重新输入");
      }
    },
    getewm() {
      console.log(this.judgename)
      console.log(this.judgephone);console.log(this.judgesex);console.log(this.judgeidtype);
      console.log(this.judgeidnum);console.log(this.judegdriven);console.log(this.judgecarnum)
      console.log(this.judgeksdata);

      if(this.judgename && this.judgephone && this.judgesex && this.judgeidtype && this.judgeidnum && this.judegdriven &&this.judgecarnum &&this.judgeksdata){
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
      this.$toast.loading({
        message: "加载中...",
        forbidClick: true
      });
      this.$store.dispatch("visitor/getewm", obj);
      this.$router.push(`/visitor/${this.visphonenum}`);
      }else{
        this.$toast("授权信息填写不正确，请重新填写")
      }
      

      //    let result = await axios.get(`http://apis.juhe.cn/qrcode/api?key=&text=&type=2&fgcolor=00b7ee&w=80&m=5&lw=80&text=${this.visname}`)
      //     console.log(result)
    },
  },
  watch:{
    sex(newvalue,oldvalue){
        if(newvalue){
          this.judgesex = true
        }
        
      }
  },
  computed:{
      
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
.centent {
  box-sizing: border-box;
  padding: 20px;
}

/* 性别选择 */
.sexbox {
  line-height: 24px;
  border-bottom: 1px solid #ebedf0;
  padding: 10px 16px;
  color: #323233;
  font-size: 14px;
}
.sbox {
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  border-bottom: 1px solid #ebedf0;
  padding: 10px 23px 10px 16px;
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

.van-icon,
.van-icon::before {
  display: inline-block;
  font-size: 20px;
}
/* .icodata{
  left: 40%;
} */
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
  bottom: 5%;
}
</style>