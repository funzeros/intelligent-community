<template>
  <div class="post">
    <van-nav-bar title="我的帖子" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul class="single">
      <li v-for="item in post" :key="item.tId">
        <img :src="item.uImge" alt class="header" />
        <p class="name">{{item.username}}11111</p>
        <p class="lim" ref="lim">公开</p>
        <p class="time">{{item.tTime}}</p>
        <span class="more" @click="morel(item.tId)">
          <van-icon name="ellipsis" />
        </span>
        <div class="pic">
          <div v-for="url in item.tImg">
            <img :src="url" alt />
            <!-- <img src="https://f11.baidu.com/it/u=1590294769,1135477404&fm=76" alt=""> -->
          </div>
        </div>
        <ul class="limChange" :key="item.tId" v-show="(item.tId===nid)&&more">
          <li id="'私密'" ref="open" @click="changeLim('私密',item.tId)">私密</li>
          <li id="'公开'" ref="open" @click="changeLim('公开',item.tId)">公开</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const date = new Date();
    return {
      nid: -1,
      more: false,
      date
      // post: [
      //   {
      //     id: 0,
      //     name: "张哲禹",
      //     lim: "私密",
      //     header: "https://profile.csdnimg.cn/2/D/8/2_adrian503",
      //     time: date.toLocaleString(),
      //     url1: "https://f11.baidu.com/it/u=1590294769,1135477404&fm=76",
      //     url2: "https://f11.baidu.com/it/u=1590294769,1135477404&fm=76",
      //     url3: "https://f11.baidu.com/it/u=1590294769,1135477404&fm=76"
      //   },
      //   {
      //     id: 1,
      //     name: "张哲禹",
      //     lim: "私密",
      //     header: "https://profile.csdnimg.cn/2/D/8/2_adrian503",
      //     time: date.toLocaleString(),
      //     url1: "https://f11.baidu.com/it/u=1590294769,1135477404&fm=76",
      //     url2: "https://f11.baidu.com/it/u=1590294769,1135477404&fm=76",
      //     url3: "https://f11.baidu.com/it/u=1590294769,1135477404&fm=76"
      //   }
      // ]
    };
  },
  methods: {
    onClickLeft() {
      this.$store.state.neighbor.ll = 0;
    },
    morel(id) {
      this.more = !this.more;
      this.nid = id;
    },
    changeLim(str, id) {
      this.post[id].lim = str;
      this.more = false;
    }
  },
  computed: {
    post() {
      let f = [];
      // console.log(this.$store.state.neighbor.post.data.data)
      for (let item in this.$store.state.neighbor.post.data.data) {
        f.push(this.$store.state.neighbor.post.data.data[item][0]);
      }
      console.log(f);
      return f;
    }
  }
};
</script>

<style  scoped>
.single li {
  background: #fff;
  padding: 10px;
  position: relative;
}
.post .header {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
.post .name {
  font-size: 12px;
  position: relative;
  top: -25px;
  left: 25px;
}
.post .time {
  font-size: 10px;
  position: relative;
  top: -25px;
  left: 25px;
}
.post .more {
  position: absolute;
  right: 10px;
  top: 15px;
}
.post .pic {
  display: flex;
  justify-content: space-around;
}
.post .pic img {
  height: 80px;
}
.post .limChange {
  width: 50px;
  border: 1px solid #ccc;
  position: absolute;
  right: 10px;
  top: 30px;
  background: #fff;
  z-index: 10;
}
.post .limChange li {
  height: 29px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  margin: 0;
}
.post .lim {
  font-size: 12px;
  position: absolute;
  right: 35px;
  top: 15px;
  color: #aaa;
}
/* .single li {
  background: #fff;
  padding-top: 10px;
  padding-left: 10px;
  margin-bottom: 10px;
  position: relative;
}
.post .header {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
.post p {
  display: inline-block;
}
.post .name {
  font-size: 12px;
  position: relative;
  top: -15px;
  left: 0px;
}
.post .time {
  font-size: 10px;
  position: relative;
  top: 0px;
  left: -36px;
}
.post .lim {
  font-size: 12px;
  position: absolute;
  right: 35px;
  top: 0px;
  color: #aaa;
}
.post .more {
  position: absolute;
  right: 10px;
}
.post .limChange {
  width: 50px;
  border: 1px solid #ccc;
  position: absolute;
  right: 10px;
  top: 30px;
  background: #fff;
  z-index: 10;
}
.post .limChange li {
  height: 20px;
  font-size: 12px;
  border-bottom: 1px solid #ccc;
  margin: 0;
}
.post .pic{
  display: flex;
  justify-content: space-around;
}
.post .pic img{
  height: 80px;
} */
</style>