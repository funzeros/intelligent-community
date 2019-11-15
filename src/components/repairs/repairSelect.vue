<template>
   <!-- 杨汗青 2019/11/14 报修类型选择    repair-> repairSelect   -->
  <div id="repairSelect" class="repairSelect1">
     <van-cell is-link @click="showPopup">报修类型(*必选)   
        <span class="sel-item" v-show="this.showItem"> {{$store.state.MyRepair.answers[0]}}</span>
       </van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
          <div class="tablecontent">
            <span @click="checkDe">取消</span>
            <div class="baoxiutype">报修类型</div>
            <div class="baoxiuDel" @click="confirm">确认</div>

            <div class="contentradio">
              <div class="next-trdio">
                <van-radio-group v-model="radio">
                  <van-row v-for="item in list1" :key="item.id">
                    <van-col class="vancol1" span="8">
                      <van-radio :name="item.id"   @click="checkmess(item.type)" >{{item.type}}</van-radio> 
                    </van-col>
                  </van-row>
                </van-radio-group>
              </div>
            </div>
          </div>
        </van-popup>

  </div>
</template>

<script>
export default {
  name:'repairSelect',
  data() {
    return {
      show:false,
      radio:"1",
      list1:[
        {id:1,type:"家庭报修"},
        {id:2,type:"小区报修"}
      ],
       showItem:true,    //控制选择栏显示
    }
  },
   methods: {
    showPopup() {
      this.show = true;
    },
    checkmess(type) {    //选择报修类型
      // console.log(type);
         this.$store.dispatch("MyRepair/checkMess",type)
    },
    confirm() {     //确认按钮
        if(this.$store.state.MyRepair.answers.length != 0) {
          this.show = false;
        }
        this.showItem = true;
    },
       
    checkDe() {    //关闭按钮
          this.show = false;
          this.radio = 0;
          this.showItem = false;
          // this.$store.dispatch("MyRepair/donShow");
    }

  },
  
  
}
</script>

<style scoped>
.tablecontent {
  position: relative;
  width: 100%;
  height: 130px;
}

.baoxiutype {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
}

.baoxiuDel {
  position: absolute;
  top: 0;
  right: 0;
  color: #29b7cb;
}

.contentradio {
  width: 100%;
  height: 110px;
  margin-top: 5px;
}

.next-trdio {
  width: 280px;
  height: 100px;
  margin: 0 auto;
}

.vancol1 {
  width: 100px;
  margin-bottom: 20px;
  border: 1px solid white;
}
.vancol2 {
  width: 100px;
  margin-bottom: 20px;
  float: right;
  border: 1px solid white;
}

.sel-item {
  float: right;
}
</style>