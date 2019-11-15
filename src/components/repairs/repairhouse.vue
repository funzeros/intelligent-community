<template>
  <!-- 杨汗青 2019/11/14 报修小区选择    repair-> repairhouse    -->
  <div id="repairSelect" class="repairSelect1">
     <van-cell is-link @click="showPopup">报修房屋(*必选)
        <span class="sel-item" v-show="showItems"> {{$store.state.MyRepair.addresses[0]}}</span>
     </van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
          <div class="tablecontent">
            <span @click="checkDe">取消  </span>
            <div class="baoxiutype">报修类型</div>
            <div class="baoxiuDel" @click="confirm">确认</div>

            <div class="contentradio">
              <div class="next-trdio">
                   <van-radio-group v-model="radio">
                  <van-row v-for="items in houselist" :key="items.id">
                    <van-col class="vancol1" span="8">
                      <van-radio :name="items.id"  @click="sentMess(items.address)" >{{items.address}}</van-radio> 
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
import {mapActions} from "vuex"
export default {
  name:'repairSelect',
  data() {
    return {
      show:false,
      radio:"1",
      houselist:[{
        id:1,address:"1楼1101",

      },{
        id:2,address:"1楼1102",
      }
      ],
      showItems:true,    //控制选择栏显示
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
   
   sentMess(address) {    //小区选择
      this.$store.dispatch("MyRepair/getAddress",address);
   },
   confirm() {    //确认按钮
     if(this.$store.state.MyRepair.addresses.length != 0 ) {
       this.show = false;
     }
     this.showItems = true;
   },
    checkDe() {         //关闭按钮
          this.show = false;
          this.radio = 0;
          this.showItems = false;
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

  margin-bottom: 20px;
  border: 1px solid white;
}
.vancol2 {
  margin-bottom: 20px;
  float: right;
  border: 1px solid white;
} 

.sel-item {
  float: right;
}
</style>