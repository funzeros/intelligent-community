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


      <van-uploader :after-read="afterRead"  v-model="fileList2" @delete="delImg" multiple :max-count="10" >
        <!-- <van-image width="100px" height="100px" v-for="item of fileList" :key="item" :src="item"></van-image> -->
      </van-uploader>
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
import axios from 'axios';
import regcotime from '@/components/register/reg_contract_time';
export default {
  name: "reg_info_ht",
  data() {
    return {
      show:true,
      nextflag:false,
      degree:'#ddf',
      fileList2:[]
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
    async afterRead(file){//向后端发起图片上传请求
      // console.log(file);
      // console.log(this.fileList2);

      this.$store.state.register.coturl2=this.fileList2;

     let param = new FormData();
            param.append("file",file.file);
            let config = {
                headers: { "Content-Type": "multipart/form-data" }
            };

      let result = await axios.post("/uploadImage", param, config);
      // console.log(result.data.data);
      await this.$store.state.register.coturl.push('http://116.62.38.213:8888/'+result.data.data);
      console.log(this.$store.state.register.coturl);
      this.$toast('图片上传成功');
      this.verify();
      },
    seltime(title){
      this.$store.state.register.cotime_title=title;
      this.$store.state.register.cotime_flag=true;
    },
    verify(){   
      // console.log(this.$store.state.register.coturl.length);
      // &&this.$store.state.register.coturl.length
      if(this.$store.state.register.contract_start&&this.$store.state.register.contract_end){
        this.degree='#bbf';
        this.nextflag=true;
      }else{
         this.degree='#ddf';
        this.nextflag=false;
      }
    },
    delImg(e){
      // console.log(e);
      let coturl= this.$store.state.register.coturl;
      let coturl2= this.$store.state.register.coturl2;
      for(let i=0;i<coturl2.length;i++){
        // console.log(e);
        // console.log(coturl2[i]);

        if(coturl2[i]==e){
        coturl.splice(i,1);
        coturl2.splice(i,1);
         break;
        }
      }
      // console.log( this.$store.state.register.coturl);
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
    this.fileList2=this.$store.state.register.coturl2;
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
