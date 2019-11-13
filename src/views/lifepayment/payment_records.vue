// 缴费记录————周佩蕾

<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="缴费记录" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
</div>
</template>
<script>

export default {
  data() {
    return {
     
    };
  },
  methods: {
    
    

    // 点击返回上一级菜单
    onClickLeft() {
      this.$router.push({
        name: "life_payment"
      });
    },
   
    }
 
  
};
</script>
<style scoped>


/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}

/* 标题名字 */
.van-nav-bar__title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
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
/*  文字*/
.van-nav-bar__left,
.van-nav-bar__right {
  font-size: 16px;
  color: #000;
}

.van-nav-bar__text {
  color: #000;
}
</style>