<template>
  <div>
    <van-nav-bar title="电子监控" left-text="返回" left-arrow @click-left="onClickLeft"  />
    <div class="delbox">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
        this.$emit("changshow",this.$store.state.monitor.boxshow= true )
    }
  },
  computed:{
      getshowing(){
        return this.$store.state.monitor.boxshow
      }
  }
};
</script>
<style scoped>
    /* 标题 */
.title {
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
}
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
.center {
  padding: 0px 30px;
}

/* 标题下划线 */

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
/* 返回 */
.van-nav-bar__text {
  color: #000;
  font-size: 16px;
}
.delbox{
    margin: 5% 5% 0;
    height: 200px;
    border-radius: 6px;
    background:#cfcece no-repeat url('../../assets/sxt.png') 10%;
   

}
</style>