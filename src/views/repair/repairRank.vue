<template>
  <div id="repairDetail" class="content">
    <div class="title-top">
      报修评价
      <van-icon name="arrow-left" class="title-icon" @click="gotoUp" />
    </div>
    <hr />

    <div class="repair-mark">
        <span class="repair-mark-s1">是否解决</span>
        <div class="repair-mark-s2">
             
                     <label v-for="item in list" :key="item.id">
                           <input  type="radio"  :value="item.id" v-model="picked" @click="getType(item.type)"/>  {{item.type}}
                     </label>        
      </div>
    </div>
    <hr />

    <div class="rank-content">
       <div class="rank-content-s1">
          <div style="font-size:18px;magrin-bottom:5px">填写评价</div>
            <div style="color:gray;">请填写评价内容：</div>
       </div>
    </div>
    <hr/>
    <div class="rank-star">
       <div class="rank-star-s1">
        <div class="rank-star-sm">星级评分:{{value}}</div>
        <div class="rankStars">
          <van-rate v-model="value" />
        </div>
       </div>
    </div>
    
      <van-button type="default" size="large" color="green" @click="commit">提交评价</van-button>
  </div>
</template>

<script>
import { async } from "q";
import axios from 'axios'
import qs from 'qs'
export default {
  name: "repairDetail",
  data() {
    return {
      list:[{
        id:1,type:'已解决'
      },{
        id:0,type:'未解决'
      }
      ],
      picked:[],  //绑定radio数据
      value:0,    //star数量控制
      newMess:[],
      titles:'',
    };
  },
  methods: {
    gotoUp() {
      this.$router.go(-1);
    },
    getType(e) {
      // console.log(e);
       this.newMess.length = 0;
       this.newMess.push(e);
      //  console.log(this.newMess);
    },
    commit() {
        //  console.log(this.newMess)
         var str = this.newMess.join(',');
          // console.log(str);
         var numbers = this.value;
        //  console.log(numbers);
        if(numbers <=3) {                   //判断传的解决状态，0 为未解决   1为已解决
            var i = 0;
            console.log(i);
        } else if( numbers> 3){
            var i = 1;
            console.log(i);
        }

         const sendstar = {
             uid: this.$store.state.loginData.data.uId,
             reslove: i ,
             stars: numbers,
         }

        if(this.newMess.length == 0 &&this.value == 0) {
              this.$dialog.alert({
                title:'没选择必选信息'
              }).then( () =>{

              })
        } else if( str == '已解决' && this.value <=3) {
               this.$dialog.alert({
                   title:'求求你，不要乱评价'
               })
        } else if(str == '未解决' && this.value >3) {
          this.$dialog.alert({
                title:'当个人吧！！'
          })
        }
        else {
               this.$dialog.confirm({
               title:'是否解决：'+str,
               message: '给个评价等级:'+ numbers + '颗星'
               }).then(() => {
                  axios.post('/repairs/evaluate',qs.stringify(sendstar))
                  .then( res => {
                     console.log(res);
                  })
                  setTimeout( () => {
                     this.$router.go(-1)
               },1000)
              }).catch(() => {          
        });
        }
        
    }
  }
};
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}

.title-top {
  position: relative;
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
  font-size: 18px;
  z-index: 1;
  background-color: #ffffff;
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
  position: relative;
  width: 90%;
  height: 50px;
  margin: 0 auto;
   background-color: #ffffff;
}

.repair-mark-s1 {
  line-height: 50px;
  color: gray;
}

.repair-mark-s2 {
  width: 60%;
  height: 50px;
  float: right;
  line-height: 50px;
  font-size: 16px;
}

.vanRadio {
  /* position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%); */
  display: inline-block;
  width: 80px;
  height: 40px;
}

.vanRadio1 {
  /* position: absolute;
  top: 50%;
  right: 35%;
  transform: translateY(-50%); */
  display: inline-block;
  width: 80px;
  height: 40px;
}

.rank-content {
  width: 100%;
  height: 200px;
   background-color: #ffffff;
}

.rank-content-s1 {
  width: 95%;
  height: 185px;
  margin:  0 auto;
}

.rank-star {
  width:100%;
  height: 70px;
  background-color: #ffffff;
  margin-bottom: 40px;
}

.rank-star-s1 {
  position: relative;
  width: 90%;
  height: 60px;
  margin: 0 auto;
}

.rank-content-sm {
  width: 20%;
  height: 40px;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
}

.rankStars {
  float: right;
}
</style>
