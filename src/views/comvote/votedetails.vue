<template>
  <div id="votedetails">
    <van-nav-bar title="投票详情" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <article>
      <div class="top">
        <div class="title">
          <p>{{votedetails.title}}</p>
          <p>
            <span>{{votedetails.people}}</span>/200人已投票
          </p>
        </div>
        <section>{{votedetails.content}}</section>
      </div>
      <div class="bottom">
        <p>
          <van-icon name="underway-o" />
          {{votedetails.start}}至{{votedetails.end}}
        </p>
      </div>
      <footer>
        <!-- 选项 -->
        <div class="select" v-if="votedetails.onGoing">
          <!-- 单选 -->
          <van-radio-group v-model="radio" v-if="votedetails.isRadio">
            <van-radio :name="item.option" v-for="item of votedetails.choice">{{item.option}}</van-radio>
          </van-radio-group>
          <!-- 复选 -->
          <van-checkbox-group v-model="result" v-else>
            <van-checkbox
              :name="item.option"
              shape="square"
              v-for="item of votedetails.choice"
            >{{item.option}}</van-checkbox>
          </van-checkbox-group>
        </div>
        <!-- 投票结果 -->
        <div class="result" v-else>
          <section v-for="item in votedetails.choice" :class="{selected:item.selected}">
            <p>{{item.option}}</p>
            <p>{{item.number}}票</p>
          </section>
        </div>
      </footer>
    </article>
    <button v-if="votedetails.onGoing">确定投票</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      votedetails: {},
      radio: "1",
      result: []
    };
  },
  async mounted() {
    this.votedetails = this.$store.state.comvote.comvotes.find(item => {
      return item.id == this.$route.params.id;
    });
  },
  methods: {
    onClickLeft() {
      Toast("返回");
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