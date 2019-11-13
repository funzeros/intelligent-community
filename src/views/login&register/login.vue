<template>
   <!-- 登陆   2019-11-12 杨汗青-->
  <div id="login">                                 
    <div class="title-nav">{{title}}</div>
    <div>
      <van-cell-group>
        <van-field 
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('用户名必须是手机号')" class="nav-cell-single" />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required class="nav-cell-double" 
          @click-right-icon="$toast('密码必须是数字、字母、下划线')"   />

        <div class="pd15"><van-button type="primary" size="large" @click="onClickButtonSubmit">登录</van-button></div>
      </van-cell-group>
    </div>

    <div>
      <div class="loginfooter">
          新用户
       <span @click="gotoReg">?立即注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      title: "登陆",
      username: "",
      password:'',
    };
  },
  methods: {
     onClickRight() {
        this.$toast('请填写注册信息');
        this.$router.push({ path:'/register'});
      },
      onClickButtonSubmit: function () {
        const req1 =  /[a-z]+/;
        const req2 =/^\w{6,20}$/;
        if(this.username == ''){
          this.$toast("用户名不能为空");
          return false;
        } else if(this.username.length<=6) {
          this.$toast("用户名长度必须大于6");
          return false;
        }
        else if(!req2.test(this.username)) {   // 用户名不能为不合法字符
           this.$toast("字符不合法");
           return false;
        }
        else if(this.username.length >= 20) {
          this.$toast("用户名长度大于20");
          return false;
        }
        if(this.password == ''){
          this.$toast("密码不能为空");
          return false;
        } else if(this.password.length<=6) {
          this.$toast("密码长度必须大于6");
          return false;
        } 
         else  if(!req1.test(this.password)) {
            this.$toast("密码必须包含字母");
            return false;
        }
    
        this.$router.push({path:'/home',name:'home'});
      
      },
      gotoReg() {
           this.$router.push({name:'register'})
      }
},

}

</script>


<style scoped>
.login {
  position: relative;
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
}

</style>