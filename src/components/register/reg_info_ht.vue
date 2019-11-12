<template>
  <!-- 魏珍君 -->
  <div id="reg_info_ht" class="main">
    <!-- @click-left="onClickLeft" -->
    <van-nav-bar class="bartitle" title="完善信息" left-arrow @click-left="onClickLeft"></van-nav-bar>

    <van-cell-group style="margin-top:50px;">
      <div class="wrap must">
        <van-cell class="delta" title="合同开始日期" :value="contract_start" @click.stop="seltime('开始时间')" />
      </div>
      <div class="wrap must">
        <van-cell class="delta" title="合同结束日期" :value="contract_end"  @click.stop="seltime('结束时间')" />
      </div>
    </van-cell-group>
    <div class="wrap must">
      <div class="pictitle">租房合同</div>
    </div>



    <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="10" />
    <div>
      <span class="maxcount">最多可上传十张</span>
    </div>
    <!-- 下一步 -->
    <van-button type="default" :style="{background:degree}" class="next" @click="next">下一步</van-button>
     <!-- <div v-if="getcotimefstate" class="shadow"> -->
        <regcotime></regcotime>
    <!-- </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import regcotime from '@/components/register/reg_contract_time';
export default {
  name: "reg_info_ht",
  data() {
    return {
      show:true,
      nextflag:false,
      fileList: [],
      degree:'#ddf'
    }
  },
  methods: {
    onClickLeft() {
      // console.log(100);
      let stepcount = this.$store.state.register.stepcount;
      if (stepcount > 0) this.$store.state.register.stepcount--;
    },
    next() {
      if (this.nextflag) {
        let stepcount = this.$store.state.register.stepcount;
        if (stepcount < 4) this.$store.state.register.stepcount++;
      }
      // console.log(101);
    },
    afterRead(file){//向后端发起图片上传请求
      console.log(file);
      console.log(this.fileList);
    },
    seltime(title){
      this.$store.state.register.cotime_title=title;
      this.$store.state.register.cotime_flag=true;
    },
    verify(){   
      if(this.$store.state.register.contract_start&&this.$store.state.register.contract_end&&this.$store.state.register.coturl){
        this.degree='#bbf';
        this.nextflag=true;
      }else{
         this.degree='#ddf';
        this.nextflag=false;
      }
    }
  },
  computed: {
    contract_start() {
      return this.$store.state.register.contract_start;
    },
    contract_end() {
      return this.$store.state.register.contract_end;
    },
    getcotimefstate(){
      return this.$store.state.register.cotime_flag;
    }
  },
  updated(){
    this.verify();
  },
   mounted(){
    this.verify();
  },
  components: {
    regcotime
  }
};
</script>
<style scoped>
.main {
  padding: 0 25px;
  height: 100%;
}
.bartitle{
  z-index: 0!important;
}
/* 标题 */
.register_info .van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
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
/* 下一步按钮 */
.next {
  width: 300px;
  height: 50px;
  background: #bbf;
  color: #fff;
  border-radius: 5px;
  position: absolute;

  left: 0;
  right: 0;
  bottom: 5%;
  margin: auto;
}
/* 单元格 */
.van-cell-group .wrap {
  margin: 10px auto;
}
.van-cell {
  width: 100%;
  border: 1px solid #ddd;
  color: #aaa;
  margin: auto;
  border-radius: 8px;
}
.wrap {
  position: relative;
}
/* 图片上传 */
/* 租房合同 */
.pictitle {
  color: #777;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.maxcount {
  color: #ccc;
  font-size: 14px;
}

.delta::after {
  content: "";
  display: block;
  border: 5px solid;
  width: 0;
  height: 0;
  border-top-color: rgba(255, 255, 255, 0);
  border-left-color: rgba(255, 255, 255, 0);
  position: absolute;
  right: 5px;
  bottom: 5px;
}
.must::before {
  content: "*";
  color: red;
  height: 100%;
  display: block;
  position: absolute;
  left: -15px;
  line-height: 46px;
}

 .shadow{
        position: fixed;
        width:100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
        z-index: 1;
    }
</style>
