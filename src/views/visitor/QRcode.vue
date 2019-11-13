<template>
<!-- 访客预约 二维码页面--魏珍君 -->
    <div>
        <!-- 标题 -->
          <van-nav-bar title="访客通行证" left-text="返回" right-text="分享" left-arrow @click-left="clickleft"/>
        <!-- {{this.$route.params.id}} -->
       
        <div class="qrbox">
        <div class="headtitle">尊敬的 {{qrewm}} {{getsex}}</div>
        <img :src='getewmimg'/> 
        <div >
            <p>进园区时，请出示此通行证</p>
            <p>预约时间：{{getvisdata}}</p>
            <p>通行证预约时间内有效</p>
        </div>
        </div>
    </div>
</template>
<script>
export default{
    // 计算属性
  methods: {
    clickleft(){
      this.$router.push({ path: `/visitor` })
    }
  },
    computed:{
       qrewm(){
         console.log(this.$store.state.visitor.visobj)
           return this.$store.state.visitor.visobj.vname
       } ,
       getewmimg(){
           return this.$store.state.visitor.visobj.ewmimg
       },
       getsex(){
         
           if(this.$store.state.visitor.visobj.sex=='女'){
               return "女士"
           }else{
               return "男士"
           }
       },
       getvisdata(){
            return this.$store.state.visitor.visobj.ydata
       }
       
        
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
.content{
    padding:0 10px 0 10px;
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
/* 返回 */
.van-nav-bar__text {
  color: #000;
}
/* 主要内容 */
.qrbox{
    width: 80%;
    margin:5% auto;
}
/* 抬头 */
.headtitle{
    font-size: 14px;
    padding: 10px;
}
img{
    border: 1px solid #ccc;
    margin:10px 0 20px 0;
}
p{
    font-size: 14px;
    color:rgb(59, 58, 58)
}
</style>