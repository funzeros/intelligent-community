
<template>
  <div class="body" v-if="this.$store.state.neighbor.details.data.data[0]">
    <van-nav-bar :title="details.tTitle" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul class="article">
      <li>
        <img :src="details.uImge" alt class="head" />
        <p class="name">{{details.username}}</p>
        <p class="time">{{details.tTime}}</p>
        <h4 class="title">{{details.tTitle}}</h4>
        <p class="body">{{details.tDet}}</p>
        <van-image-preview v-model="show" :images="details.tImg " @change="onChange" :start-position="page">
          <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>
        <div class="artPic">
          <div v-for="item,index in details.tImg ">
            <img :src="item" alt @click="open(index)" />
          </div>
        </div>
        <div class="bottom">
          <span class="star">
            <van-icon name="star"  @click="addCollection"/>收藏
          </span>
          <span class="share">
            <van-icon name="share" />分享
          </span>
          <span class="reply">
            <van-icon name="more-o" />回复
          </span>
          <span class="eye">
            <van-icon name="eye-o" />浏览
          </span>
          <span class="good-job">
            <van-icon name="good-job-o" @click="addGoodnum()"/>点赞
          </span>
        </div>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const date = new Date();
    return {
      page:0,
      show: false,
      index: 0,
      images: ["https://img.yzcdn.cn/1.jpg", "https://img.yzcdn.cn/2.jpg"]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "neighborhood" });
    },
    onChange(index) {
      this.index = index+1;
    },
    open(index) {
      this.show = true;
      this.index = index+1;
      this.page = index;
    },
    addGoodnum(){
      this.$store.dispatch("neighbor/addGoodnum",{tId:this.$store.state.neighbor.tId,tGoodnum:1});
    },
    addCollection(){
      this.$store.dispatch("neighbor/addCollection",{uId:1,tId:this.$store.state.neighbor.tId});
    }
  },
computed: {
  art(){
    return this.$store.state.neighbor.art.find(item => {
      // console.log(item)
      // console.log(this.$router)
      return item.id == this.$route.params.id
    })
  },
  details(){ 
    return this.$store.state.neighbor.details.data.data[0];
  }
},
mounted() {
  // console.log(this.$router)
  
    this.$store.dispatch("neighbor/appendMainBody", this.$store.state.neighbor.tId);
  // console.log(this.$store.state.neighbor.details)
},
};
</script>

<style scope>
.article li {
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  position: relative;
}
.article .head {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}
.article .name {
  font-size: 12px;
  position: absolute;
  left: 45px;
  top: 15px;
}
.article .time {
  font-size: 10px;
  color: #ccc;
  position: absolute;
  left: 45px;
  top: 30px;
}
.article .title{
  margin-top: 10px;
  margin-bottom: 10px;
}
.article .body {
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
/* .article .artPic{
        width: 50px;
    } */
.article .artPic {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.article .artPic img {
  width: 100px;
}
.article .bottom {
  display: flex;
  justify-content: space-around;
}
.article .van-icon {
  font-size: 20px;
  position: relative;
  top: 5px;
  left: 2px;
  margin-bottom: 5px;
}
.article span {
  width: 30px;
  font-size: 12px;
  margin-left: 10px;
  margin-right: 22px;
}
</style>