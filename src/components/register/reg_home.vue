<template>
<!-- by 方珂琛 -->
  <div id="reg_home">
       <!-- 标题 -->
    <van-nav-bar id='reg' title="注册"  left-arrow @click-left="onClickLeft"></van-nav-bar>
    <!-- 渲染房屋选择注册表单 -->
    <van-cell-group style="margin-top:50px;">
        <div class="wrap" v-for="(homelist) of gethomeform" :key="homelist.id"  :class="{'must':homelist.must}" @click.stop="choose(homelist.selects)">
            <van-cell  v-if="!homelist.idflag"  is-link :title="homelist.name" :value="homelist.value" />
            <van-cell  v-else :class="{'identity':'true'}"  :title="homelist.name" :value="homelist.value" />
        </div>
    </van-cell-group>
    <!-- 下一步 -->
    <van-button type="default" :style="{background:degree}" class="next" @click="next">下一步</van-button>
    <!-- 身份类型选择 -->
    <!-- <div v-if="getidentitystate" class="shadow">
       
    </div> -->
     <reghomeidentity></reghomeidentity>
  </div>
</template>
<script>


import reghomeidentity from '@/components/register/reg_home_identity';
export default {
  name: "reg_home",
  components: {
    reghomeidentity
  },
  data() {
    return {
        nextflag:true,
        degree:'#ddf'
    };
  },
  mounted(){
        //   console.log(this.$store.state.register);
  },
  computed:{
      gethomeform(){
          return this.$store.state.register.homeform;
        //   返回房屋选择渲染数据
      },
      getidentitystate(){
          return this.$store.state.register.identity;
        //   选择身份类型选择器是否显示
      }
  },
  updated(){
      this.verify();
  },
  mounted(){
      this.verify();
  },
  methods:{
        // 表单选择框
        choose(value){
            // console.log(value);
            switch(value){
                case 'identitys':;
                    this.$store.state.register.identity=true;
                break;
                // case 'areas':console.log(2);
                // case 'builds':console.log(3);
                // case 'units':console.log(4);    
                // case 'houses':console.log(5);
                //     this.$store.state.register.stepcash=this.$store.state.register.stepcount;  
                //     this.$store.state.register.stepcount=-1;
                // break;
                default:
                    this.$store.state.register.stepcash=this.$store.state.register.stepcount;  
                    this.$store.state.register.stepcount=-1;
                break;
            }
        },
        onClickLeft(){
            this.$router.go(-1);
            
        },
        next(){
            if(this.nextflag){
                let stepcount=this.$store.state.register.stepcount;
                if(stepcount<4)this.$store.state.register.stepcount++;
            }
            // console.log(101);
        },
        verify(){
            this.nextflag=true;
            let formlist=this.$store.state.register.homeform;
            formlist.forEach((item)=>{
                // console.log(!item.value||item.name!='片区');
                if(!item.value&&item.name!='片区'){this.nextflag=false};
            });
            if(this.nextflag){this.degree='#bbf'}else{this.degree='#ddf'};
            console.log('正在验证表单');
        }
        
        
  }
};
</script>
<style  scoped>
/*  */
    #reg_home{
        height: 100%;
        padding: 0 25px;
    }
    #reg{
        z-index: 0!important;
    }
/* 表单样式 */
    .van-cell-group .wrap{
        margin: 10px auto;
    }
    .van-cell{
        width: 100%;
        border: 1px solid #ddd;
        color: #aaa;
        margin: auto;
        border-radius: 8px;
    }
    .wrap{
        position: relative;
    }
    /* 必填 */
    .must::before{
        content: '*';
        color: red;
        height: 100%;
        display: block;
        position: absolute;
        left: -15px;
        line-height: 46px;
    }
    .van-cell .van-cell__value {
        color:#555;
    }
    .van-cell.identity::after{
        content: '';
        display: block;
        border:5px solid;
        width: 0;
        height: 0;
        border-top-color:rgba(255,255,255,0);
        border-left-color: rgba(255,255,255,0);
        position: absolute;
        right: 5px;
        bottom: 5px;
    }
    /* 阴影 */
    .shadow{
        position: fixed;
        width:100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
    }

        /* 标题 */
    .van-nav-bar {
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
    .next{
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
</style>