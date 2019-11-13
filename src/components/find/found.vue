<template>
  <div id="found">
    <van-nav-bar title="发现" />
    <div class="lifeServe">
      <van-cell title="生活服务" />
      <van-grid :border="false" :column-num="4">
        <van-grid-item @click="change1">
          <van-image src="/images/家政服务.png" />
          <p>家政服务</p>
        </van-grid-item>
        <van-grid-item @click="change2">
          <van-image src="/images/美容美发.png" />
          <p>美容美发</p>
        </van-grid-item>
        <van-grid-item @click="change3">
          <van-image src="/images/网上菜场.png" />
          <p>网上菜场</p>
        </van-grid-item>
        <van-grid-item @click="change4">
          <van-image src="/images/日用百货.png" />
          <p>日用百货</p>
        </van-grid-item>
        <van-grid-item @click="change5">
          <van-image src="/images/餐饮美食.png" />
          <p>餐饮美食</p>
        </van-grid-item>
        <van-grid-item @click="change6">
          <van-image src="/images/休闲娱乐.png" />
          <p>休闲娱乐</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "found",
  props: {
    msg: String
  },
  methods: {
    change1() {
      this.$store.state.find.flag = 1;
    },
    change2() {
      this.$store.state.find.flag = 2;
    },
    change3() {
      this.$store.state.find.flag = 3;
    },
    change4() {
      this.$store.state.find.flag = 4;
    },
    change5() {
      this.$store.state.find.flag = 5;
    },
    change6() {
      this.$store.state.find.flag = 6;
    }
  }
};
</script>


<style>
#found {
  width: 100%;
  height: 100%;
}
.van-nav-bar {
  margin-bottom: 15px;
}
.lifeServe {
  width: 100%;
  background: #fff;
  height: 264px;
}
.van-nav-bar__title {
  font-weight: 600;
  font-size: 20px;
}
.van-cell__title {
  font-weight: 600;
}
.van-grid-item {
  width: 103px;
  height: 110px;
}
.van-grid-item__content::after {
  z-index: 1;
  border-width: 0;
}
.van-grid-item img {
  width: 30px;
  height: 30px;
}
.van-grid-item p {
  font-size: 12px;
}
</style>