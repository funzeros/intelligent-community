<template>
<!-- 回复 待回复部分  魏珍君 -->
    <div>
        <van-nav-bar :title= replylist.reply  left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="center">
          <p class="textsty">{{replylist.text}}</p>
          <div>
            <img v-for="(eimg,index) of replylist.img" :key="index" :src=eimg alt="">
          </div>
          <div class="state">
            <p ><span>{{replylist.state}}</span><span class="regit">{{replylist.jldata}}</span></p>
            <p ><span>相关人员</span><span class="regit">{{replylist.corp}}</span></p>
          </div>
          <div class="revert" v-if="isshow">
            <p>回复：您的反馈的情况我们已经出来了，非常感谢你的反馈</p>
          </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
          replylist:'',
          isshow:false
        }
    },
    mounted () {
      let id =this.$route.params.id
      let list =  this.$store.state.visitor.recordlist
      let filterlist = list.filter(item=>{
        return item.id == id
     })
      this.replylist = filterlist[0]
      if(this.replylist.reply =='已回复'){
        this.isshow = true;
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
    }
}
</script>
<style scoped>
    /* 标题 */
.register_info .van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
.content {
  padding: 0 10px 0 10px;
}

/* 标题下划线 */

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
/* 返回 */
.van-nav-bar__text {
  color: #000;
}
/* 主要内容 */
.center{
  padding: 20px;
}
.textsty{
  font-size: 14px;

}
img{
  padding: 10px;
  width: 60px;
  height: 60px;
}
/* 投诉 */
.state{
  font-size: 13px;
  color: rgb(190, 188, 188);
}
.regit{
  float: right;
}
/* 回复 */
.revert{
  margin: 50px 0 10px;
  background: #d6d6d6;
  font-size: 12px;
  padding: 10px;
  border-radius: 4px;
}
</style>