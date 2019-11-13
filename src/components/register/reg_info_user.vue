// 客户信息完善
// 周佩蕾
<template>
  <div class="register_info">
    <!-- 标题 -->
    <van-nav-bar  title="完善信息" left-arrow  @click-left="onClickLeft"></van-nav-bar>
    <!-- 信息表单 -->
    <van-cell-group>
      <!-- 用户名 -->
      <div class="must">
      <van-field style="margin-bottom:15px"  @input="setusernm"  clearable label="用户名" placeholder="请输入" v-model="username"></van-field>
      </div>
      <!-- 姓名 -->
      <div class="must">
      <van-field  v-model="name" clearable @input="setnm" label="姓名" placeholder="请输入"></van-field>
       </div>
      
      <!-- 性别 -->
      <div style="position:relative;color:#aaa">
      <user_sex style="margin-bottom:15px" class="delta" ></user_sex>
      </div>
      <!-- 证件类型 -->
      <div class="must">
      <user_card class="delta"></user_card>
      </div>
      <!-- 证件号码 -->
      <van-field  clearable label="证件号码"  @input="setidnum" placeholder="请输入" v-model="idnum"
      style="border-top:none;margin-bottom:15px"></van-field>
      <!--  -->
      <!-- 民族 -->
      <div class="must">
        <user_minzu class="delta"></user_minzu>
      </div>
    </van-cell-group>
    <!-- 下一步按钮 -->
    <van-button type="default" :style="{background:degree}" class="next" @click="next">下一步</van-button>
  </div>
</template>
<script>
import user_sex from "@/components/register/user_sex.vue";
import user_card from "@/components/register/user_card.vue";
import user_minzu from "@/components/register/user_minzu.vue";
export default {
  data() {
    return {
      degree:"#ddf",
      nextflag:false,
      username:'',
      idnum:'',
      name:'',
      idlock:true,
    };
  },
  computed:{


  },
  methods: {
    // 点击下一步进行验证
    next() {
      if(this.nextflag){
          let unmlock=/^[a-zA-Z]\w{3,11}$/.test(this.$store.state.register.username); //用户名正则
          let namelock=/^[\u4e00-\u9fa5]{2,4}$/.test(this.$store.state.register.name) ; //姓名正则
            if(!unmlock){
                this.$toast('用户名由字母开头，4-12个数字字母下划线组合');
            }
            if(!namelock){
                this.$toast('姓名格式为2-4个汉字');
            }
          this.veridnum();
        if((!this.$store.state.register.idnum||this.idlock)&&unmlock&&namelock){
          this.$store.state.register.stepcount++;
        }
      }else{
        this.$toast('必填项不能为空');
      }
    },
    verify(){
      if(this.$store.state.register.username&&this.$store.state.register.name&&this.$store.state.register.idtype&&this.$store.state.register.nation){
        this.nextflag=true;
        this.degree='#bbf';
      }else{
        this.nextflag=false;
        this.degree='#ddf';
      }
    },
    setusernm(){
      this.$store.state.register.username=this.username;
    },
    setnm(){ 
      this.$store.state.register.name=this.name;   //将信息存到状态管理

    },
    setidnum(){
      this.$store.state.register.idnum=this.idnum;
    
    },
    veridnum(){
      this.idlock=/^[0-9]{17}[0-9xX]$/.test(this.$store.state.register.idnum); //身份号码正则
      if(this.$store.state.register.idnum&&!this.idlock){
          this.$toast('身份证格式不正确，请输入18位身份证号码');
      } 
    },
    onClickLeft(){
        // console.log(100);
        let stepcount=this.$store.state.register.stepcount;
        if(stepcount>0)this.$store.state.register.stepcount--;
    },
  },
  updated(){
    this.verify();
  },
  mounted() {
    this.username= this.$store.state.register.username;
    
    this.idnum= this.$store.state.register.idnum;
    
    this.name= this.$store.state.register.name;
    
  },

  components: {
    user_sex,
    user_card,
    user_minzu
  }
};
</script>
<style scoped>

.register_info{
    height: 100%;
    padding: 0 25px;
}
/* 标题 */
.register_info .van-nav-bar {
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
/* 表单下划线 */
[class*="van-hairline"]::after {
  border: none;
}
/* 表单整体位置大小 */
.van-cell-group {
  width: 100%;
  height: 50px;
  margin: 20px auto;
  margin-bottom: 20px;
}
.van-field {
  border: 0.5px solid #e7e7e7;
}
/* .van-field::before{
  
} */
/* 用户名字体 */
.van-cell {
  font-size: 16px;
  color: #aaa;
}
/* 星号 */
.must::before {
  position: absolute;
  left: -13px;
  color: #ee0a24;
  font-size: 24px;
  content: "*";
  line-height: 45px;
}
.must{
  position:relative;
  color:#aaa;
}
/* 下一步 */
   .next{
        width: 300px;
        height: 50px;
        background: #bbf;
        color: #fff;
        border-radius: 5px;
        position: absolute;
        
        left: 0;
        right: 0;
        bottom: 5%;
        margin: auto;
    }

/* 下拉三角 */
.delta::after {
  content: "";
  display: block;
  border: 5px solid;
  width: 0;
  height: 0;
  border-top-color: rgba(255, 255, 255, 0);
  border-left-color: rgba(255, 255, 255, 0);
  position: absolute;
  right: 5px;
  bottom: 5px;
}

</style>