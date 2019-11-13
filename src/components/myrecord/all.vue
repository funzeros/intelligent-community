<template>
<!-- 我的记录全部 部分  魏珍君 -->
  <div class="allbox">
    <ul>
      <!-- all 主体 -->
      <li v-for="item of data" :key="item.id" @click="leftlick(item.id)">
          <!-- 留言部分 -->
        <div class="textdiv">
          <span class="textsty">{{item.text}}</span>
          <van-icon name="arrow" />
        </div>
        <div>
            <img v-for="(eimg,index) of item.img" :key="index" :src=eimg alt="">
        </div>
        <p>{{item.reply}} <span class="statesty"> {{item.state}} </span> <span> {{item.jldata}}</span></p>
        <p><span>相关人员</span><span style="float:right;padding-right:40px;">{{item.corp}}</span></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['data'],
  methods: {
    leftlick(id){
        this.$router.push(`/myrecord/${id}`)
    }
  }
  
};
</script>
<style scoped>
.allbox {
  padding-top: 20px;
  font-size: 12px;
  color: #323232;
  background: rgb(241, 240, 240);
}
li {
    
  padding: 10px 20px 10px;
  /* border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc; */
  margin-bottom: 15px;
  background: #fff;
}
/* .textdiv{
    line-height: 36px;
} */
/* 箭头设置 */
.van-icon {
  left: 34px;
  top: 6px;
  font-size: 20px;
  display: inline-block;
  line-height: 50px;
  color: #ccc
}
/* 显示内容 */
.textsty {
  display: inline-block;
  width: 80%;
}
img{
    width: 50px;
    height: 50px;
    padding: 10px;
}
.statesty{
    margin: 0 10px 0;
}
</style>
