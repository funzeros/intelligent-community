<template>
  <!-- 回复 待回复部分  魏珍君 -->
  <div>
    <van-nav-bar :title="type[replylist.pImgs]" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="center">
      <p class="textsty">{{replylist.pDetail}}</p>
      <div>
        <img v-for="(eimg,index) of imgaee " :key="index" :src="eimg" alt />
      </div>
      <div class="state">
        <p>
          <span>{{typesuggest[replylist.pStatus]}}</span>
          <span class="regit">{{replylist.pTime}}</span>
        </p>
        <p>
          <span>相关人员</span>
          <span class="regit">小刘</span>
        </p>
      </div>
      <div class="revert" v-if="isshow">
        <p>回复：{{replylist.pResponse}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// 引入
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      replylist: {},
      isshow: false,
      type:{
        1:"已回复",
        0:"未回复"
      },
      typesuggest:{
        1:'投诉',
        3:"建议",
        2:"表扬"
      },
      imgaee:[]
    };
  },
  methods: {
    ...mapActions({ getreplied: "visitor/getreplied" }),
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  async mounted() {
    // 已回复 待回复数据请求
    await this.getreplied();
    let id = this.$route.params.id;
    let list = this.$store.state.visitor.getalllist;
    // console.log(list)
    let filterlist = list.filter(item => {
      return item[0].pId == id;
    });
    this.replylist = filterlist[0][0];
    this.imgaee = this.replylist.pType.split(',')
    console.log(this.imgaee)
    if (this.replylist.pImgs == "1") {
      this.isshow = true;
    }
  },
  computed: {
    // ...mapState({ replylist: state => state.visitor.repliedlist })
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
.content {
  padding: 0 10px 0 10px;
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
/* 主要内容 */
.center {
  padding: 20px;
}
.textsty {
  font-size: 14px;
}
img {
  padding: 10px;
  width: 60px;
  height: 60px;
}
/* 投诉 */
.state {
  font-size: 13px;
  color: rgb(190, 188, 188);
}
.regit {
  float: right;
}
/* 回复 */
.revert {
  margin: 50px 0 10px;
  background: #d6d6d6;
  font-size: 12px;
  padding: 10px;
  border-radius: 4px;
}
</style>