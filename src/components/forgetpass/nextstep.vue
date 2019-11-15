// 忘记密码第二步——周佩蕾

<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="忘记密码" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <!-- 忘记密码的下一步 -->
    <div class="step">
      <!-- 新密码 -->
      <div class="newpass">
        <input type="text" placeholder="请输入新密码" class="newone" v-model="one" />
      </div>
      <!-- 再次录入新密码 -->
      <div class="againpass">
        <input type="text" placeholder="再次输入密码" class="newtwo" v-model="again" />
      </div>
      <!-- 忘记密码 -->
      <div class="forget">忘记密码?</div>
      <!-- 完成按钮 -->
      <button class="finish" style="margin-top: 20px;" @click="gotologin">完成</button>
      <!-- 注册 -->
      <a href="javascript:;" class="reg_link" @click="register">新用户？立即注册</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      one: "",
      again: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$emit("prestep", {
        nowstep: true,
        nextstep: ""
      });
    },
    register(){
      this.$router.push({
        name: "register"
    })
    },
    gotologin() {
      if (this.one == "") {
        this.$toast("请输入新密码");
      } else if (this.one.length < 8) {
        this.$toast("密码长度小于8");
      } else if (!/^(?![^a-zA-Z]+$)(?!\D+$)/.test(this.one)) {
        this.$toast("密码强度太弱");
      } else if (this.again == "") {
        this.$toast("请再次输入密码");
      } else if (this.one !== this.again) {
        this.$toast("两次密码不一致");
      } else {
        this.$router.push({
        name: "login"
      });
      }
    }
  }
};
</script>
<style scoped>
/* 注册链接 */
.reg_link {
  font-size: 15px;
  position: absolute;
  bottom: 30px;
  left: 35%;
}
a:visited {
  color: #aaa;
}
a:link,
a:active {
  color: rgb(10, 126, 97);
}
.forget {
  text-align: right;
  font-size: 15px;
  color: #999;
}
.step {
  width: 80%;
  margin: 0 auto;
}

.finish {
  width: 100%;
  border: 0;
  height: 40px;
  border-radius: 10px;
  background: #aaa;
  color: #fff;
  margin-top: 50px;
}

.newpass,
.againpass {
  width: 100%;
  height: 35px;
  margin: 15% 0;
  border: 1px solid rgb(204, 202, 202);
  border-radius: 5px;
}
input {
  border: 0;
  width: 90%;
  height: 94%;
  vertical-align: middle;
}

/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
  background: rgb(222, 222, 222);
}
/* 标题下划线 */
.van-hairline--bottom::after {
  border-bottom-width: 1px;
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