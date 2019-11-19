<template>
   <!-- 登陆   2019-11-12 杨汗青-->
  <div id="login">                                 
    <!-- <div class="title-nav">{{title}}</div> -->
    <div class="header"></div>
    <div>
      <van-cell-group>
        <van-field 
          v-model="phone"
          required
          clearable
          label="手机号"
          right-icon="question-o"
          placeholder="请输入11位手机号"
          @click-right-icon="$toast('目前仅能使用手机号登录')" class="nav-cell-single" />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required class="nav-cell-double" 
          @click-right-icon="$toast('密码必须是数字、字母、下划线')" @keydown.enter="onClickButtonSubmit"  />


        <div class="pd15"><van-button type="primary" size="large" @click="onClickButtonSubmit">登录</van-button></div>
  
      </van-cell-group>
          <br>
                <div style="float:right; color:gray;" @click="forget" >忘记密码？</div>
    </div>

    <div>
      <div class="loginfooter">
          新用户?&nbsp;
       <span  class="reg" @click="gotoReg">立即注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      title: "登录",
      phone: "",
      password:'',
    };
  },
  methods: {
     onClickRight() {
        this.$toast('请填写注册信息');
        this.$router.push({ path:'/register'});
      },
      async onClickButtonSubmit () {
        const req1 =  /[a-zA-Z]+/;
        const req2 =/^1[3456789]\d{9}$/;
        if(this.phone == ''){
          this.$toast("手机号不能为空");
          return false;
        }
        else if(!req2.test(this.phone)) {
           this.$toast("手机号格式不正确");
           return false;
        }
        if(this.password == ''){
          this.$toast("密码不能为空");
          return false;
        } else if(this.password.length<8) {
          this.$toast("密码长度必须大于等于8位");
          return false;
        } 
         else  if(!req1.test(this.password)) {
            this.$toast("密码必须包含字母");
            return false;
        }


 

        
       await this.$store.dispatch('loginon',{phone:this.phone,pwd:this.password});
       if(!this.$store.state.guardflag){
         this.$toast('登录失败,请确认账号密码无误');
         return;
       }
        this.$router.push({path:'/main/community',name:'community'});

        // console.log(this.$store.state.guardflag)
        
       
      
      },
      gotoReg() {
          this.$router.push({name:'register'})
      },
forget(){
  this.$router.push({
        name: "password"
      });
}
},
mounted(){
    this.phone=this.$store.state.register.phone;
}


}

</script>


<style scoped>
.login {
  position: relative;
}
.header{
  width: 100%;
  height: 300px;
  background: url(../../../public/images/LOGO.png) no-repeat center center;
}
.title-nav {
  width: 100%;
  height: 70px;
  background-color: darkgray;
  text-align: center;
  line-height: 70px;
  color: aliceblue;
  font-size: 20px;
}

.nav-cell-single {
   margin-top: 30px;

}

.loginfooter {
  width: 200px;
  height: 40px;
  position: absolute;
  bottom: 10px;
  left: 25%;
  text-align: center
}

.reg{
  text-decoration: underline;
  color: #7b7;
}
</style>