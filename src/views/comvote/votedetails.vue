<template>
  <div id="votedetails">
    <van-nav-bar title="投票详情" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <article v-if="votedetails.toupiao">
      <div class="top">
        <div class="title">
          <p>{{votedetails.toupiao.pName}}</p>
          <p>
            <span>{{votedetails.toupiao.pTotal}}</span>/
            <span style="color:#ccc;">{{votedetails.toupiao.pAlltotal}}</span>人已投票
          </p>
        </div>
        <section>{{votedetails.toupiao.pInfo}}</section>
      </div>
      <div class="bottom">
        <p>
          <van-icon name="underway-o" />
          {{votedetails.toupiao.pStartTime.split(" ")[0]}}至{{votedetails.toupiao.pEndTime.split(" ")[0]}}
        </p>
      </div>
      <footer>
        <!-- 选项 -->
        <div class="select">
          <van-radio-group v-model="radio">
            <van-radio
              :name="item.ttId"
              v-for="item of votedetails.xuanxiangs"
              @click="select(item.ttId)"
            >
              {{item.ttName}}
              <span>{{item.ttTotal}}票</span>
            </van-radio>
          </van-radio-group>
        </div>
      </footer>
    </article>
    <button @click="toupiao()">确定投票</button>
  </div>
</template>

<script>
import axios from "axios";
import { create } from "domain";
export default {
  data() {
    return {
      radio: "1",
      result: [],
      tt_id: 1,
      flag: false
    };
  },
  async mounted() {
    await this.$store.dispatch(
      "comvote/getdetails",
      this.$store.state.loginData.data.uId
    );
  },
  computed: {
    votedetails() {
      return this.$store.state.comvote.details;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "comvote"
      });
    },
    select(id) {
      this.tt_id = id;
      this.flag = true;
    },
    toupiao() {
      if (this.flag) {
        axios
          .get(
            `/toupiao/vote?uId=${this.$store.state.loginData.data.uId}&pId=${
              this.$store.state.comvote.pId
            }&tt_id=${(this.$store.state.comvote.pId - 1) * 3 +
              Number(this.radio)}`
          )
          .then(result => {
            if (result.data.message == "success") {
              this.$toast.success("投票成功");
            } else {
              this.$toast.fail(result.data.message);
            }
          });
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style scoped>
#votedetails {
  height: 100%;
  background-color: #eee;
}
a {
  display: inline-block;
  text-decoration: none;
  color: #000;
}
li {
  list-style: none;
}
img {
  vertical-align: middle;
}
button {
  background: #fff;
  border: 0;
}
.van-icon {
  vertical-align: top;
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
article {
  width: 86%;
  font-size: 14px;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  margin: 20px auto 0;
}
article .top .title {
  margin-bottom: 8px;
  overflow: hidden;
}
article .top .title p:first-of-type {
  font-size: 18px;
  float: left;
}
article .top .title p:last-of-type {
  color: #ccc;
  float: right;
}
article .top .title p:last-of-type span {
  color: #000;
}
article .top section,
article .bottom p {
  line-height: 18px;
  color: #999;
}
article .bottom {
  border-bottom: 1px solid #eee;
  margin-bottom: 12px;
  overflow: hidden;
}
article .bottom p,
article .bottom .van-icon {
  line-height: 26px;
  float: left;
}
article .bottom .van-icon {
  margin-right: 6px;
}
footer .select .van-radio,
.van-checkbox {
  margin-bottom: 12px;
  position: relative;
}
.van-radio__label span {
  position: absolute;
  right: 0;
}
footer .result section {
  width: 90%;
  font-size: 16px;
  background-color: #eee;
  padding: 8px;
  margin: 0 auto 10px;
  overflow: hidden;
}
footer .result section p:first-of-type {
  float: left;
}
footer .result section p:last-of-type {
  float: right;
}
button {
  width: 88%;
  font-size: 18px;
  color: #fff;
  background-color: #008a89;
  border-radius: 6px;
  padding: 12px 0;
  position: absolute;
  bottom: 59px;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.selected {
  color: #23c7c9;
}
</style>