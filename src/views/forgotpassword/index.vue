<template>
  <div>
    <div v-show="nowstep">
      <!-- 标题 -->
      <van-nav-bar title="忘记密码" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
      <!-- 主体 -->
      <section>
        <!-- 手机号 -->
        <div class="telephone">
          <input type="text" placeholder="请输入手机号" class="yzphone" v-model="telenumber" />
        </div>
        <!-- 验证码 -->
        <div class="yanzheng">
          <div class="testcontent">
            <input type="text" placeholder="请输入验证码" class="yznum" v-model="test" />
          </div>
          <div class="createst" @click="produce">点击获取验证码</div>
        </div>
        <!-- 下一步按钮 -->
        <button class="PassNext" @click="onStep">下一步</button>
      </section>
    </div>
    <next v-show="nextstep" @prestep="nowsetps"></next>
  </div>
</template>
<script>
import next from "@/components/forgetpass/nextstep.vue";
export default {
  data() {
    return {
      nowstep: true,
      nextstep: "",
      telenumber: "",
      test: "",
      code: "",
      scode: "",
      selectChar: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      saveyz: "",
      //验证码生成数组
      charIndex: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 进入下一步
    onStep() {
      // 手机号验证
      if (this.telenumber == "") {
        this.$toast("请输入手机号");
      } else if (!/^1[3456789]\d{9}$/.test(this.telenumber)) {
        this.$toast("手机号格式不正确");
      } else if (this.test == "") {
        this.$toast("请输入验证码");
      } else if (this.test!=this.saveyz) {
        this.$toast("验证码不正确");
      } else {
        this.nowstep = false;
        this.nextstep = true;
      }
    },
    // 生成验证码
    produce() {
      for (let i = 0; i < 4; i++) {
        this.charIndex = Math.round(Math.random() * 60); // 随机索引
        this.scode = this.selectChar[this.charIndex];
        this.code += this.scode;
      }
      const yanzhen = document.getElementsByClassName("createst");
      yanzhen[0].innerHTML = this.code;
     
      this.saveyz = this.code;
      
      this.code = "";
    },
    // 子组件相应事件
    nowsetps() {
      this.nowstep = true;
      this.nextstep = false;
    }
  },
  components: {
    next
  }
};
</script>
<style scoped>
/* 下一步按钮 */
.PassNext {
  width: 100%;
  border: 0;
  height: 40px;
  border-radius: 10px;
  background: #aaa;
  color: #fff;
  margin-top: 50px;
}
/* 获取验证码 */
.createst {
  width: 35%;
  height: 100%;
  line-height: 46px;
  font-size: 15px;
}
.testcontent {
  width: 60%;
  height: 100%;
  border: 1px solid rgb(204, 202, 202);
  border-radius: 5px;
}
/* 验证码 */
.yanzheng {
  width: 100%;
  height: 35px;
  margin: 12 0;
  display: flex;
  justify-content: space-between;
}
/* 手机号输入框 */
.telephone {
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
/* 主体部分 */
section {
  width: 80%;
  margin: 0 auto;
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