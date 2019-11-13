// 通知公告——公告详情———— 周佩蕾


// 数据：ID、题目、时间、图片、文本内容

<template>
  <div class="informdetail">
    <!-- 标题 -->
    <van-nav-bar title="公告详情" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <!-- 消息主体 -->
    <section>
      <p class="title">{{informlist.title}}</p>
      <p class="title">2019-06-17 &nbsp;&nbsp; 11:20</p>
      <div class="inform_img">
        <img :src='informlist.img' />
      </div>
      <div class="content">{{informlist.content}}</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "informdetail",
  data() {
    return {};
  },
  methods: {
    //点击返回<通知公告>
    onClickLeft() {
      this.$router.push({
        name: "community_inform"
      });
    }
  },
  computed: {
    informlist() {
      return this.$store.state.information.informlist;
    }
  },
  async mounted() {
    // 传递详情路由ID
    await this.$store.dispatch("information/informdetail", this.$route.params.id);
  }
};
</script>

<style scoped>
/* 主要文本内容 */
.content {
  padding: 10px;
  font-size: 14px;
  text-align: left;
}
/* 图片区域 */
.inform_img img {
  width: 100%;
  height: 100%;
}
.inform_img {
  width: 92%;
  margin: 0 auto;
  height: 150px;
  background: #aaa;
}
/* 题目 */
.title {
  padding: 10px;
  text-align: left;
  font-size: 16px;
}
/* 消息详情主体 */
section {
  width: 94%;
  margin: 15px auto;
  background: #fff;
  box-shadow: 0px 0px 1px #aaa;
  margin-top:85px;
}
.informdetail {
  overflow: hidden;
   position: relative;
   height:100%;
  background: rgb(236, 236, 241);
}
/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
  position: fixed;
  top:0;
  left:0;
}
/* 标题下划线 */
.van-hairline--bottom::after {
  border-bottom-width: 0px;
}
/* 标题名字 */
.van-nav-bar__title {
  font-size: 20px;
  font-weight: 500;
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
/* “返回” 文字*/
.van-nav-bar__left {
  font-size: 16px;
  color: #000;
}

.van-nav-bar__text {
  color: #000;
}
</style>
