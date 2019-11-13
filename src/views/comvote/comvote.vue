<template>
  <div id="comvote">
    <van-nav-bar title="社区投票" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-tabs v-model="active" title-active-color="#008a89" color="#008a89">
      <van-tab title="当前投票">
        <ul>
          <li v-for="vote of comvotes" v-if="vote.onGoing">
            <div class="top">
              <div class="title">
                <p>{{vote.title}}</p>
                <p>
                  <span>{{vote.people}}</span>/200人已投票
                </p>
              </div>
              <section>{{vote.content}}</section>
            </div>
            <div class="bottom">
              <p>
                <van-icon name="underway-o" />
                {{vote.start}}至{{vote.end}}
              </p>
              <button @click="goto(vote)">前去投票</button>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="历史投票">
        <ul>
          <li v-for="vote of comvotes" v-if="!vote.onGoing" @click="goto(vote)" >
            <div class="top">
              <div class="title">
                <p>{{vote.title}}</p>
                <p>
                  <span>{{vote.people}}</span>/200人已投票
                </p>
              </div>
              <section>{{vote.content}}</section>
            </div>
            <div class="bottom">
              <p>
                <van-icon name="underway-o" />
                {{vote.start}}至{{vote.end}}
              </p>
              <button>已结束</button>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  },
  computed: {
    comvotes() {
      return this.$store.state.comvote.comvotes;
    }
  },
  methods: {
    goto(vote) {
      this.$router.push({
        name: "votedetails",
        params: { id: vote.id }
      });
    },
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#comvote {
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
ul {
  width: 92%;
  font-size: 14px;
  margin: 0 auto;
}
ul li {
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-top: 20px;
}
ul li .top {
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}
ul li .top .title {
  margin-bottom: 8px;
  overflow: hidden;
}
ul li .top .title p:first-of-type {
  font-size: 18px;
  float: left;
}
ul li .top .title p:last-of-type {
  color: #ccc;
  float: right;
}
ul li .top .title p:last-of-type span {
  color: #000;
}
ul li .top section,
ul li .bottom p {
  line-height: 18px;
  color: #999;
}
ul li .bottom {
  margin-top: 8px;
  overflow: hidden;
}
ul li .bottom p,
ul li .bottom .van-icon {
  line-height: 26px;
  float: left;
}
ul li .bottom .van-icon {
  margin-right: 6px;
}
ul li .bottom button {
  border-radius: 6px;
  padding: 6px;
  float: right;
}
.van-tab__pane:first-of-type ul .bottom button {
  color: #fff;
  background-color: #008a89;
}
.van-tab__pane:last-of-type ul .bottom button {
  color: #ccc;
  background-color: #eee;
}
</style>