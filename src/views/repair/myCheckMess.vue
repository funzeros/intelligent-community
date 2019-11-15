<template>
    <!-- 报修维修 2019-11-12 杨汗青 -->
  <div id="myCheckMess">
      <div class="mytitles">
          <van-icon name="arrow-left" class="myleftIcon" @click="gotoRepair" />
      <div class="mytitle">我的消息</div>
    </div>
   <div>
      <van-radio-group v-model="radio">
  <van-cell-group >
    <van-cell  v-model="list[0]" clickable @click="radio = '1'">
      <van-radio slot="right-icon" name="1" />
    </van-cell>

      <van-cell  v-model="list[1]" clickable @click="radio = '2'">
      <van-radio slot="right-icon" name="2" />
    </van-cell>
  </van-cell-group>
</van-radio-group>
  {{radio}}
   </div>
 

 <button @click="sendMess">确定</button>
</div>
</template>

<script>
export default {
  name:'myCheckMess',
  data() {
    return {
       list:["yidong","weweisa","dsdsdkllk"],
       radio:[],
       
    }
  },
  methods: {
    gotoRepair() {
      this.$router.go(-1);
    },
    sendMess() {
      this.$bus.$emit('inceptMess',this.result);
      this.$router.push({name:'repair'})
    }
  },
  mounted() {
     this.lists = this.list.name
  },
   
}
</script>

<style scoped>

.mytitles {
  position: relative;
   width: 100%;
   height: 70px;
   font-size: 18px;
   border-bottom: 1px dashed gray;
}

.myleftIcon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.mytitle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 20px;
  color: grey;
  font-weight:bold;

}

.checkbox-group {
  width: 100%;
  height: 500px;
}
</style>