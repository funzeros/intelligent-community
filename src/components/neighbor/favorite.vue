<template>
  <div class="favorite">
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="fav"  v-for="item in collections" @click="jump(item.post.tId)" :key="item.post.tId">
      <van-swipe-cell :name="item.post.tId" :on-close="onClose">
        <van-cell :border="false" value="内容">
          <img src="https://imgsa.baidu.com/news/q%3D100/sign=acdb424203f3d7ca0af63b76c21ebe3c/d1a20cf431adcbef42f07b7aa3af2edda2cc9f81.jpg" alt />
          <p class="name">{{item.post.uId}}</p>
          <p class="time">{{item.post.tTime}}</p>
          <p class="title">{{item.post.tTitle}}</p>
          <span class="la">
            <van-icon name="arrow" />
          </span>
        </van-cell>

        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const date = new Date();
    return {
      msg: [
        {
          id: 1,
          name: "张哲禹",
          header: "https://profile.csdnimg.cn/2/D/8/2_adrian503",
          time: date.toLocaleString(),
          title:
            "阿达UI阿斯顿撒uUI遇到过撒打算考打开玩家奥斯卡的吉安市阿达UI阿斯顿撒uUI遇到过撒打算考打开玩家奥斯卡的吉安市阿达UI阿斯顿撒uUI遇到过撒打算考打开玩家奥斯卡的吉安市阿达UI阿斯顿撒uUI遇到过撒打算考打开玩家奥斯卡的吉安市"
        },
        {
          id: 2,
          name: "张哲禹",
          header: "https://profile.csdnimg.cn/2/D/8/2_adrian503",
          time: date.toLocaleString(),
          title: "阿达UI阿斯顿撒uUI遇到过撒打算考打开玩家奥斯卡的吉安市"
        }
      ],
      collections:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "neighborhood"
      });
    },
    onClose(clickPosition, instance,detail  ) {
      console.log(detail);
      switch (clickPosition) {
        case "left":
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          this.$dialog
            .confirm({
              message: "确定删除吗？"
            })
            .then(() => {
              // console.log(this.collections);
              this.collections.forEach((item)=>{
                if(item.post.tId==detail.name){
                  this.collections=[...this.collections.splice(detail.name,1)]  ;
                  console.log(this.collections);
                }
              });
              instance.close();
            });
          break;
      }
    },
    jump(url){
       this.$router.push({
        name: "mainBody",
        params: { id: url }
      });
    }
  },
  computed: {
    // collection(){
    //    return this.collections=this.$store.state.neighbor.collection.data.data;
    // }
  },
  async mounted() {
    // console.log(this.$store.state.neighbor.collection);
    // console.log(this.$store.state.loginData.data.uId)
   await this.$store.dispatch("neighbor/appendMyCollection",this.$store.state.loginData.data.uId);
    this.collections=this.$store.state.neighbor.collection.data.data;
  }
};
</script>

<style scope>
.van-swipe-cell__wrapper {
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  /* height: 50px; */
}
/* .van-cell--borderless{
    height: 100px;
} */
.fav {
  position: relative;
}
.fav img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: 2;
}
.fav .name {
  font-size: 12px;
  position: absolute;
  top: -5px;
  left: 25px;
}
.fav .time {
  font-size: 10px;
  color: #ccc;
  position: absolute;
  top: 8px;
  left: 25px;
}
.fav .title {
  display: inline-block;
  width: 325px;
  font-size: 12px;
  position: relative;
  top: 15px;
  left: 5px;
  padding: 20px;
}
.van-button--danger {
  height: 100%;
}
.la {
  height: 26px;
  vertical-align: middle;
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
</style>