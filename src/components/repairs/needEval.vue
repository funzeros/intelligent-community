<template>
  <!-- 处理中  2019-11-12 杨汗青 -->
  <div id="needeval" class="needeval-text">
        <div class="content">
             
             <div class="content-next"  v-for="item in repairContent "  :key="item.id">
                    <span>{{item.repairStyle}}</span>
                    <span style="float:right">{{item.time1}}&nbsp;{{item.time2}}</span>
               <hr/>

                <div class="content-photo">
               </div>

                <div class="content-text">
                {{item.content}}
               </div>
               <van-icon name="arrow" class="vanicon"  @click="gotoRank"/>
               <hr/>

               
               <div>
                  报修编号：{{item.repairMark}}
               </div>

                <button class="content-btn">撤销报修</button>
                  
             </div>
             
        </div>

  </div>
</template>

<script>
export default {
  name:'needeval',
  data() {
    return {
        repairContent:[
          {
             id:1,repairStyle:"家庭报修", time1:"2019/11/13",time2:'13:00',content:'洗手间水管坏了，麻烦物业抓紧时间安排上门维修。',
              repairMark:11234567
          }
        ]
    }
  },
  methods: {
     gotoRank() {
      this.$router.push({name:'repairRank'})
    },
  },
}
</script>

<style scoped>

.needeval-text{
  width: 100%;
  background-color: #F8F8F8;
}

.content {
  position: relative;
  width: 320px;
  height: 200px;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 5px;
}

.content-next {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 180px;
  /* border: 1px solid cadetblue; */
  
}


.content-photo {
  display: inline-block;
  width: 80px;
  height: 80px;
  background-color: green;
}

.content-text {
  position: absolute;
  right: 0;
  top: 40px;
  width: 210px;
  height: 80px;
}

.content-btn {
  position: absolute;
  right: 10px;
  bottom: 15px;
  border: none;
  border-radius: 5px;
  color: chocolate;
}

.vanicon {
   position: absolute;
   right: 10px;
   top: 50%;
}

</style>