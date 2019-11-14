<template>
  <div class="knockdoor">
    <van-nav-bar title="在线敲门" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group title="选择楼栋">
        <van-cell v-for="item of hList" :key="item.fid" :title="item.area+item.build+item.unit" is-link :to="{ name: 'choosehouse', params: { fid: item.fid }}" />
    </van-cell-group>

  </div>
</template>
<script>
export default {
  name: "knockdoor",
  data() {
      return{
          hList:[],
      }
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "community"
      });
    },

  },
  mounted(){
        this.hList=this.$store.state.knockdoor.houseList;
    }
};
</script>
<style  scoped>
/* 最大高度 */
.knockdoor{
    height: 100%;
    width: 100%;
}
.van-cell-group__title{
    background: linear-gradient(0deg, #29bdd9 0%, #276ace 100%);
    color: #eee;
    font-size: 18px;
    font-weight: 900;
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