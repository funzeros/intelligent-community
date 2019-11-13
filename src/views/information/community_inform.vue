// 通知公告————周佩蕾


// 渲染数据——ID、题目、时间、图片、文本内容

<template>
  <div class="community_inform">
    <!-- 标题 -->
    <van-nav-bar title="通知公告" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <!-- 主体 -->
    <ul class="inform_bg">
      <li class="inform_list" :key="informlist.id" v-for="informlist of informlists">
        <p class="inform_title">{{informlist.title}}</p>
        <div class="inform_main">{{informlist.content}}</div>
        <div class="inform_other">
          <div class="inform_date">
            <van-icon name="clock-o" />
            <span class="inforn-time">{{informlist.time}}</span>
          </div>
          <a href="javascript:;" class="inform_link" @click="goto(informlist)">阅读全文</a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    
    };
  },
  computed: {
      informlists() {
          return this.$store.state.information.informlists;
        },
    
  },
  methods: {
    // 点击返回上一路由（社区）
    onClickLeft() {
      this.$router.push({
        name: "community"
      });
    },
    // 点击单个li进入详情
    goto(informlist) {
      this.$router.push({
        name: "informdetail",
        params: { id: informlist.id }
        
      });
    }
  },
  async mounted() {}
};
</script>


<style scoped>
/* 时间 */
.inforn-time {
  font-size: 15px;
  color: #aaa;
  margin-left: 5px;
}
/* 阅读全文 */
.inform_link {
  display: block;
  float: right;
  font-size: 14px;
  text-decoration: none;
  color: rgb(71, 142, 236);
}
.inform_other {
  padding: 10px;
}
/* 公告时间 */
.inform_date {
  float: left;
}
/* 公告内容 */
.inform_main {
  margin: 0 10px;
  height: 45px;
  font-size: 15px;
  color: rgb(146, 145, 145);
  line-height: 26px;
  padding-bottom: 10px;
  border-bottom: 1px solid #aaa;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 公告题目 */
.inform_title {
  font-size: 16px;
  text-align: left;
  padding: 10px;
  font-weight: 600;
}
/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
   position: fixed;
  top: 0;
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
/* 单个信息li的样式 */
.inform_list {
  height: 150px;
  background: #fff;
  position: relative;
  margin: 10px 0px;
  box-shadow: 0px 0px 1px #aaa;
  display: block;
}
.community_inform {
  height: 100%;
  background: rgb(236, 236, 241);
  overflow: auto;
   position: relative;
}
/* 主体消息 ul*/
.inform_bg {
  width: 94%;
  margin: 15px auto;
  margin-top:82px;
}
</style>