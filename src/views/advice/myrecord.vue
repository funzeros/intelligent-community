<template>
  <!-- 我的记录主页面  魏珍君 


  -->
  <div>
    <!-- 页头 -->
    <van-nav-bar title="我的记录" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="centerbox">
      <van-tabs v-model="activeName">
        <van-tab title="全部" name="all">
          <van-loading size="24px" v-if="isshow">加载中...</van-loading>
          <all :data="getalllist"></all>
        </van-tab>
        <van-tab title="投诉" name="complaint">
          <all :data="complaintdata(complaint)"></all>
        </van-tab>
        <van-tab title="表扬" name="praise">
          <all :data="complaintdata(praise)"></all>
        </van-tab>
        <van-tab title="建议" name="suggest">
          <all :data="complaintdata(suggest)"></all>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import all from "@/components/myrecord/all";
import { mapActions, mapState } from "vuex";
// import complaint from '@/components/myrecord/complaint'
// import praise from '@/components/myrecord/praise'
// import suggest from '@/components/myrecord/suggest'
export default {
  data() {
    return {
      activeName: "",
      complaint: 1,
      praise: 2,
      suggest: 3,
      isshow: false
    };
  },
  methods: {
    ...mapActions({ getallrecord: "visitor/getallrecord" }),
    // 返回事件
    onClickLeft() {
      this.$router.go(-1);
    },
    tabclick(item) {
      this.$router.push(`/suggestion/myrecord/${item.aid}`);
      this.isshow = item;
    }
  },
  mounted() {
    this.getallrecord();
    // console.log(this.$store.state.visitor.getalllist,)
  },
  components: {
    all
  },
  computed: {
    complaintdata(myrec) {
      console.log(myrec);
      if (myrec !== null) {
        this.filtegetrecordlist = this.$store.state.visitor.getalllist;
        // console.log(this.filtegetrecordlist);
        return myrec => {
          return this.filtegetrecordlist.filter(item => {
            return item[0].pStatus == myrec;
          });
        };
      }

      // console.log(this.filtegetrecordlist)
    },
    getalllist() {
      return this.$store.state.visitor.getalllist;
    }
  }
};
</script>
<style scoped>
/* 标题 */
.van-nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  line-height: 72px;
}
.content {
  padding: 0 10px 0 10px;
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
/* 返回 */
.van-nav-bar__text {
  color: #000;
  font-size: 16px;
}
/* 导航部分 */
.centerbox {
  width: 100%;
  position: absolute;
  top: 72px;
}
.van-tabs--line .van-tabs__wrap {
  height: 44px;
  position: fixed;
  width: 100%;
}
/* .allbox[data-v-5712ebc2]{
  padding-top: 40px;
} */
</style>