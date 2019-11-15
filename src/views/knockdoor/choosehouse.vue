<template>
  <div>
    <van-nav-bar title="选择房屋" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group :title="getTitle">
        <van-cell v-for="item of houseList" :key="item.id" :title="getTitle+item.house" :to="{ name: 'chatpage', params: {hid:fid+item.hid}}" >
            <van-icon class="comment" name="comment" />
        </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  name: "knockdoor",
  data() {
      return{
          houseList:[],
          getTitle:'',
          cUnit:'0',
          fid:'0'
      }
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "knockdoor"
      });
    }
  },
  computed:{
  },
  mounted(){
    //   console.log(this.$route.params.fid);
    this.fid=this.$route.params.fid
      this.cUnit=this.$store.state.knockdoor.houseList[Number(this.fid)];
    //   console.log(this.cUnit);
      this.getTitle=this.cUnit.area+this.cUnit.build+this.cUnit.unit;
      this.houseList=this.cUnit.house;
    //   console.log(this.houseList);

    }
};
</script>
<style  scoped>
/* title */
.van-cell-group__title{
    background: linear-gradient(0deg, #29bdd9 0%, #276ace 100%);
    color: #eee;
    font-size: 16px;
}
/* comment icon */
.comment{
    color: #29bdd9;
    font-size: 20px;
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
.van-nav-bar__text {
  color: #000;
}
</style>