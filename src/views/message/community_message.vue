// 消息通知页面————周佩蕾

// 数据：ID、点赞人、日期、时间、其他信息

<template>
  <div class="message" ref="mesbox">
    <!-- 标题 -->
    <van-nav-bar class="title" title="我的消息" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <!-- 主体 -->
    <div class="message_bg">
      <!-- 系统提示--点赞列表 -->
      <ul class="message_list">
        <li v-for="like of likes" :key="like.id" class="like">
          <span class="system">系统</span>
          <span class="who">{{like.who}} 给您点了赞</span>
          <div class="date">{{like.date}}&nbsp; &nbsp;{{like.time}}</div>
        </li>
        <li v-for="pay of pays" :key="pay.id" class="pay">
          <span class="system">系统</span>
          <span class="who">{{pay.title}}</span>
          <div class="date">{{pay.date}}&nbsp; &nbsp;{{pay.time}}</div>
          <div class="info">{{pay.info}}</div>
        </li>
        <li v-for="(mes,index) of getMes" :key="index" class="mes">
             <span class="name">{{mes.name}}</span>
              <span class="content">{{mes.msg}}</span>
              <div class="date">{{mes.date}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      likes: [
        { id: "111", who: "张三", date: "6-14", time: "18:12" },
        { id: "222", who: "李四", date: "6-14", time: "18:12" },
        { id: "333", who: "艾力", date: "6-14", time: "18:12" },
      ],
      pays: [
        {
          id: "11",
          title: "电话缴费",
          date: "6-15",
          time: "12:12",
          info: "您的7月份的电费已出账，请按时缴费"
        },
        {
          id: "22",
          title: "物业缴费",
          date: "6-14",
          time: "18:12",
          info: "您的7月份物业费用已出账，请按时缴费"
        }
      ]
    };
  },
  methods: {
    // 返回<社区>
    onClickLeft() {
      this.$router.push({
        name: "community"
      });
    }
  },
   computed:{
    getMes(){
      return this.$store.state.knockdoor.data;
    }
  },
  mounted(){
    
     this.$refs.mesbox.scrollTop = this.$refs.mesbox.scrollHeight;
    //  console.log(this.$refs.mesbox.scrollHeight);
    // console.log(this.$refs.mesbox.scrollTop);
  },
  destroyed(){
    this.$store.state.knockdoor.data=[];
  }
};
</script>
<style scoped>
.message {
  position: relative;
  height: 100%;
  overflow: auto;
}
.message_bg {
  margin-top: 90px;
}
/* 缴费信息 */
.info {
  padding-left: 70px;
  padding-right: 30px;
  white-space: inherit;
  position: absolute;
  bottom: 40px;
  left: 0;
  text-align: left;
}
/* 缴费li */
.pay {
  height: 120px;
  list-style: none;
  display: block;
  width: 100%;
  border-bottom: 1px solid #aaa;
  margin-bottom: 20px;
  position: relative;
}
/* 日期 */
.date {
  width: 100%;
  padding-left: 70px;
  color: #ccc;
  position: absolute;
  bottom: 10px;
  left: 0;
  text-align: left;
}
/* 点赞者 */
.who {
  float: left;
  margin-left: 10px;
  height: 30px;
  line-height: 30px;
}
/* 系统 */
.system {
  display: inline-block;
  width: 60px;
  height: 30px;
  text-align: center;
  background: rgb(182, 217, 240);
  line-height: 30px;
  float: left;
  border-radius: 5px;
}
/* 单个消息的li整体 */
.like {
  list-style: none;
  display: block;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #aaa;
  margin-bottom: 20px;
  position: relative;
}
/* 消息展示列表ul */
.message_list {
  width: 85%;
  margin: 20px auto;
}



/* 来者 */
.name{
   display: block;
  width: auto;
  height: 30px;
  text-align: center;
  background: rgb(182, 217, 240);
  line-height: 30px;
  /* float: left; */
  border-radius: 5px;
}
/* 内容 */
.content{
  margin-left: 10px;
  height: auto;
  line-height: 40px;
}
/* 消息框 */
.mes {
  list-style: none;
  display: block;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #aaa;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 30px;

}
/* 标题 */
.title{
  position: fixed;
  top: 0;
}
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
  background: rgb(89, 181, 241);
  
  left: 0;
}
/* 标题下划线 */
.van-hairline--bottom::after {
  border-bottom-width: 0px;
}
/* 标题名字 */
.van-nav-bar__title {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}
/* 标题部分的左箭头 */
.van-nav-bar__arrow {
  min-width: 1em;
  font-size: 22px;
}
.van-nav-bar .van-icon {
  color: #fff;
  vertical-align: middle;
}
/* “返回” 文字*/
.van-nav-bar__left {
  font-size: 16px;
}
.van-nav-bar__text {
  color: #fff;
}
</style>