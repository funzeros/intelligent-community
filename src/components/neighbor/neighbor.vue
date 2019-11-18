<template>
  <div id="neightbor">
    <van-nav-bar title="邻里" @click-right="onClickRight">
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <ul class="down-list" v-if="down">
      <li @click="ll1">发布帖子</li>
      <li @click="ll2">我的帖子</li>
      <li @click="ll3">回复我的</li>
      <li @click="ll4">我的收藏</li>
    </ul>
    <van-swipe :autoplay="5000" indicator-color="#ccc">
      <van-swipe-item v-for="item in images" :key="item.tId" class="banner-wrap">
        <img :src="item.url" alt class="banner" />
      </van-swipe-item>
    </van-swipe>
    <van-search placeholder="请输入标题" v-model="value" shape="round" />
    <ul>
      <li v-for="item in post" @click="jump(item.tId)">
        <span class="head">
          <img :src="item.uImge" alt />
        </span>
        <p class="name">{{item.username }}</p>
        <p class="time">{{item.tTime}}</p>
        <span class="good-job">
          <van-icon name="good-job-o" />
          <h6 class="good-job-num">{{item.tGoodnum }}</h6>
        </span>
        <span class="watch">
          <van-icon name="chat-o" />
          <h6 class="watch-num">{{item.tSeenum}}</h6>
        </span>
        <h3 class="title">{{item.tTitle}}</h3>
        <van-image-preview
          v-model="show"
          :images="item.tImg"
          @change="onChange"
          :start-position="page"
        >
          <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>
        <div class="pic">
          <div v-for="key1,index in item.tImg">
            <img :src="key1" alt class="banner" @click="open(index)" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const date = new Date();
    return {
      page: 0,
      show: false,
      index: 0,
      down: false,
      value: "",
      images: [
        { id: 1, url: "https://img.yzcdn.cn/vant/apple-1.jpg" },
        { id: 2, url: "https://img.yzcdn.cn/vant/apple-2.jpg" },
        { id: 3, url: "https://img.yzcdn.cn/vant/apple-1.jpg" },
        { id: 4, url: "https://img.yzcdn.cn/vant/apple-2.jpg" }
      ]
    };
  },
  methods: {
    onClickRight() {
      this.down = !this.down;
    },
    ll1() {
      this.$store.state.neighbor.ll = 1;
      this.$router.push({ name: "neighbor" });
    },
    ll2() {
      this.$store.state.neighbor.ll = 2;
      this.$router.push({ name: "neighbor" });
    },
    ll3() {
      this.$store.state.neighbor.ll = 3;
      this.$router.push({ name: "neighbor" });
    },
    ll4() {
      this.$store.state.neighbor.ll = 4;
      this.$router.push({ name: "neighbor" });
    },
    onChange(index) {
      this.index = index + 1;
    },
    open(index) {
      // console.log(index);
      this.show = true;
      this.index = index + 1;
      this.page = index;
    },
    jump(url) {
      this.$router.push({
        name: "mainBody",
        params: { id: url }
      });
      this.$store.dispatch("neighbor/addSeenum",{tId:url,tSeenum:1})
      this.$store.state.neighbor.tId = url;
    }
  },
  computed: {
    art() {
      return this.$store.state.neighbor.art;
    },
    // details() {
    //   return this.$store.state.neighbor.details.data.data;
    // },
    post() {
      let f=[]
      console.log(this.$store.state.neighbor.post.data.data)
      for(let item in this.$store.state.neighbor.post.data.data){
        f.push(this.$store.state.neighbor.post.data.data[item][0]);
      }
      return f;
  }},
  mounted() {
    
    this.$store.dispatch("neighbor/appendPostAll");
    // console.log(this.$store.state.neighbor.post);
  }
};
</script>

<style scope>
#neightbor {
  width: 100%;
  height: 100%;
}
#neightbor span {
  display: inline-block;
}
#neightbor .van-nav-bar {
  height: 75px;
  line-height: 75px;
  border-bottom: 1px solid #ccc;
}
#neightbor .banner-wrap {
  background: #fff;
  padding-top: 20px;
}
#neightbor .van-nav-bar__title {
  margin: 10px auto;
  color: #323233;
  font-weight: 600;
  font-size: 20px;
}
#neightbor .van-nav-bar .van-icon {
  color: #1989fa;
  vertical-align: middle;
  font-size: 25px;
  margin: 0;
}
/* 头部下拉栏 */
#neightbor .down-list {
  transition: all 2s;
  z-index: 10;
  position: absolute;
  right: 0px;
  top: 70px;
  border: 1px solid #ccc;
}
#neightbor .down-list li {
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  text-indent: -8px;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
}
/* .van-nav-bar__text{
    padding: 20px 16px;
} */
/* 轮播 */
#neightbor .van-swipe {
  text-align: center;
}
#neightbor .van-swipe .banner {
  height: 200px;
}
#neightbor .van-search {
  border-bottom: #ccc 1px solid;
}
#neightbor li {
  background: #fff;
  padding-top: 10px;
  padding-left: 20px;
  position: relative;
  border-bottom: 1px solid #ccc;
}
#neightbor .head {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  top: 8px;
}
#neightbor .head img {
  width: 30px;
  height: 30px;
}
#neightbor p {
  font-size: 12px;
  display: inline-block;
  line-height: 16px;
}
#neightbor .name {
  margin-left: 10px;
  position: relative;
  top: -10px;
}
#neightbor .time {
  position: relative;
  left: -5px;
  top: 5px;
  color: #ccc;
}
#neightbor .good-job {
  position: absolute;
  right: 90px;
  top: 15px;
}
#neightbor .watch {
  position: absolute;
  right: 40px;
  top: 15px;
}
#neightbor .van-icon {
  font-size: 26px;
}
#neightbor .round {
  width: 26px;
  height: 26px;
  position: relative;
  top: 11px;
}
#neightbor .round1 {
  left: 145px;
}
#neightbor h6 {
  display: inline-block;
  position: relative;
  color: #aaa;
  font-size: 12px;
  top: 0px;
  left: 0px;
}
#neightbor .round2 {
  left: 190px;
}
#neightbor .title {
  font-weight: normal;
  font-size: 16px;
  position: relative;
  top: -10px;
  margin-top: 20px;
  margin-bottom: 10px;
}
#neightbor .pic {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px;
}
#neightbor .pic img {
  width: 90px;
  position: relative;
  top: -10px;
}
</style>