<template>
  <div id="repairDetail" class="content">
    <div class="title-top">
      报修详情
      <van-icon name="arrow-left" class="title-icon" @click="gotoUp" />
    </div>
    <hr />

    <div class="coumnation">
      <div class="coumnation-content">
        <div class="coumnation-content-img"></div>

        <span class="coumnation-content-name">张晓(维修员)</span>
        <span class="coumnation-content-phone">13838389438</span>
        <span class="coumnation-content-icon">
          <van-icon name="phone-o" size="30px" color="#23c2d7"  @click="addressBook"/>
          <!-- <a>联系电话：<a :href="'tel:' + item.phone">{{item.phone}}</a></p> -->
         
        </span>
      </div>
    </div>
    <hr />
    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">报修编号</span>
        <span class="repair-mark-s2">400820820</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">报修状态</span>
        <span class="repair-mark-s2">处理中</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">报修类型</span>
        <span class="repair-mark-s2">家庭报修</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">上报时间</span>
        <span class="repair-mark-s2">2019/11/13 &nbsp; 13:00</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">上报时间</span>
        <span class="repair-mark-s2">2019/11/13 &nbsp; 13:00</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">上报人</span>
        <span class="repair-mark-s2">James Brunos</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">报修房屋</span>
        <span class="repair-mark-s2">1栋6单元1101</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">联系电话</span>
        <span class="repair-mark-s2">11011911999</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">上报时间</span>
        <span class="repair-mark-s2">2019/11/13 &nbsp; 13:00</span>
      </div>
    </div>
    <hr />

    <div class="img-content">
      <div class="img-content-s1">
        <div style="font-size:16px;color:gray;margin-bottom:5px;">
          上报内容:
        </div>
        <div>洗手间的水龙头坏了赶快修理</div>

        <div class="img-content-next">
          <img src="../../../public/images/repair3.jpg"  style="width:100px;height:80px"/>
        </div>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">维修金额</span>
        <span class="repair-mark-s2">200yuan</span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">处理时间</span>
        <span class="repair-mark-s2"></span>
      </div>
    </div>
    <hr />

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">结束时间</span>
        <span class="repair-mark-s2"></span>
      </div>
    </div>

    <div class="repair-mark">
      <div>
        <span class="repair-mark-s1">处理结果</span>
      </div>
    </div>
    <hr />
    <div class="content-btn">
      <van-button
        round
        type="info"
        size="normal"
        color="#23BACF"
        class="content-btn-s1" @click="gotoUp"
        >处理记录</van-button
      >
      <van-button round type="info" color="#23BACF" class="content-btn-s2" @click="cancel"  :disabled ="btn"
        >撤销报修</van-button
      >
    </div>
  </div>
</template>

<script>
import { async } from 'q';
export default {
  name: "repairDetail",
  data() {
    return {
      item:[
        {id:1,phone:"13155465765"}
      ],
      btn: false,
    };
  },
  methods: {
    gotoUp() {
      this.$router.go(-1);
    },
    addressBook(){
      this.$dialog.confirm({
      message: '是否拨打电话'
    }).then( () =>{
        
    }).catch( () => {
           
    })
   
    },
    cancel() {
           this.$dialog
          .confirm({
            message: "是否确认撤销报修?"
          })
          .then( () => {
              
               setTimeout( () => {
                       this.$dialog.alert({
                         message: "撤销成功"
                      });
                      this.btn = true;
               },2000)
          })
          .then( () => {
                
          })
    },
    gotoUp() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
}

.title-top {
  position: relative;
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
  font-size: 18px;
  z-index: 1;
}

.title-icon {
  position: absolute;
  left: 0;
  top: 35px;
}

.coumnation {
  width: 100%;
  height: 80px;
}

.coumnation-content {
  position: relative;
  width: 90%;
  height: 70px;
  margin: 0 auto;
  margin-top: 5px;
}

.coumnation-content-img {
  display: inline-block;
  width: 20%;
  height: 70px;
  background-color: black;
  border-radius: 50%;
}

.coumnation-content-name {
  position: absolute;
  top: 10px;
  left: 40%;
  transform: translateX(-40%);
  font-size: 15px;
}

.coumnation-content-phone {
  position: absolute;
  bottom: 10px;
  left: 40%;
  transform: translateX(-40%);
}

.coumnation-content-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.repair-mark {
  width: 90%;
  height: 50px;
  margin: 0 auto;
}

.repair-mark-s1 {
  line-height: 50px;
  color: gray;
}

.repair-mark-s2 {
  line-height: 50px;
  float: right;
}

.img-content {
  width: 100%;
  height: 130px;
}

.img-content-s1 {
  width: 90%;
  height: 120px;
  margin: 0 auto;
}

.img-content-next {
  width: 100px;
  height: 80px;
 
}

.content-btn {
  position: relative;
  width: 100%;
  height: 80px;
}

.content-btn-s1 {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
}

.content-btn-s2 {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>
