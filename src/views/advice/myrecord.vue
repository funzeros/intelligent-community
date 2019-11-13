<template>
<!-- 我的记录主页面  魏珍君 


-->
  <div>
    <!-- 页头 -->
    <van-nav-bar title="我的记录" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="centerbox">
      <van-tabs v-model="activeName">
        <van-tab title="全部" name='all'>
            <all :data= filtegetrecordlist ></all>
        </van-tab>
         <van-tab title='投诉' name='complaint' >
            <all :data="complaintdata(complaint)" ></all>
        </van-tab>
         <van-tab title='表扬' name='praise' >
             <all :data= complaintdata(praise) ></all>
        </van-tab>
         <van-tab title='建议' name='suggest' >
            <all :data= complaintdata(suggest) ></all>
        </van-tab>
      </van-tabs>
     
    
    </div>
  </div>
</template>
<script>
import all from '@/components/myrecord/all'
// import complaint from '@/components/myrecord/complaint'
// import praise from '@/components/myrecord/praise'
// import suggest from '@/components/myrecord/suggest'
export default {
  data() {
    return {
      activeName:'',
      filtegetrecordlist:this.$store.state.visitor.recordlist,
      complaint:'投诉',
      praise:'表扬',
      suggest:'建议',
    };
  },
  methods: {
    // 返回事件
    onClickLeft() {
      this.$router.go(-1);
    },
    tabclick(item) {
      this.$router.push(`/suggestion/myrecord/${item.aid}`);
      this.isshow = item;
    }
  },
  components: {
      all
  },
  // ,complaint,praise,suggest
  computed: {
    // getrecordlist(){
    //   return this.$store.visitor.recordlist
    // },
    complaintdata(myrec){
         this.filtegetrecordlist = this.$store.state.visitor.recordlist
        //  return this.filtegetrecordlist.filter(item=>{
        //       return item.state == myrec
        //   }) 
        return (myrec)=>{
          return this.filtegetrecordlist.filter(item=>{
              return item.state == myrec
          })
        }
    },
  },
  
};
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
/* 导航部分 */


</style>