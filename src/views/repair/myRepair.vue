<template>
   <!-- 报修维修 2019-11-12 杨汗青 -->
  <div id="myRepair">
    <div class="content">
      <div class="title">
        <div class="titleText">我的报修</div>

        <span>
          <van-icon name="arrow-left" @click="gotoRepair" />
        </span>
      </div>

      <div class="content-nav">
        <van-tabs v-model="active">
          <van-tab title="待处理">
             <needRepair></needRepair>
          </van-tab>
          <van-tab title="处理中">
            <repairing></repairing>
          </van-tab>
          <van-tab title="待评价">
            <needeval></needeval>
          </van-tab>
          <van-tab title="已评价">
            <evaluate></evaluate>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import needRepair from "../../components/repairs/needRepair"
import repairing from "../../components/repairs/repairing"
import needeval from "../../components/repairs/needEval"
import evaluate from '../../components/repairs/evaluate'
export default {
  name: "myRepair",
  data() {
    return {
      active:0,
    };
  },
  methods: {
    gotoRepair() {
      this.$router.go(-1);
    }
  },
  components:{
    needRepair,
    repairing,
    needeval,
    evaluate
  }
};
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 100%;
}

.title {
  position: absolute;
  width: 100%;
  height: 70px;
  border-bottom: 1px dashed grey;
}

.title div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
}

.title span {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.content-nav {
  position: relative;
  top:70px;
  font-size: 16px;
}
</style>