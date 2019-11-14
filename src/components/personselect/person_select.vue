// 人员选择————周佩蕾

<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="人员选择" left-text="返回" left-arrow @click-left="Premune"></van-nav-bar>

    <!-- 选择主体--保洁部 -->
    <div class="person_one">
      <div class="name">保洁部</div>
      <van-icon name="arrow" @click="selectone" v-if="rightone" />
      <van-icon name="arrow-down" @click="selectone" v-if="downone" />
    </div>
    <keep-alive>
      <div v-show="downone" class="radiowrap">
        <div class="radio_item">
          <label for="one">赵康</label>
          <input type="radio" id="one" value="赵康" v-model="picked" class="single" />
        </div>
        <div class="radio_item">
          <label for="two">李利</label>
          <input type="radio" id="two" value="李利" v-model="picked" class="single" />
        </div>
      </div>
    </keep-alive>
    <!-- 选择主体--清洁部 -->
    <div class="person_one" style="margin-top:0">
      <div class="name">清洁部</div>
      <van-icon name="arrow" @click="selecttwo" v-if="righttwo" />
      <van-icon name="arrow-down" @click="selecttwo" v-if="downtwo" />
    </div>
    <keep-alive>
      <div v-show="downtwo" class="radiowrap">
        <div class="radio_item">
          <label for="one">张三</label>
          <input type="radio" id="one" value="张三" v-model="picked" class="single" />
        </div>
        <div class="radio_item">
          <label for="two">李四</label>
          <input type="radio" id="two" value="李四" v-model="picked" class="single" />
        </div>
      </div>
    </keep-alive>
    <!-- 选择主体--监控室 -->
    <div class="person_one" style="margin-top:0">
      <div class="name">监控室</div>
      <van-icon name="arrow" @click="selectthree" v-if="rightthree" />
      <van-icon name="arrow-down" @click="selectthree" v-if="downthree" />
    </div>
    <keep-alive>
      <div v-show="downthree" class="radiowrap">
        <div class="radio_item">
          <label for="one">杨阳</label>
          <input type="radio" id="one" value="杨阳" v-model="picked" class="single" />
        </div>
        <div class="radio_item">
          <label for="two">王强</label>
          <input type="radio" id="two" value="王强" v-model="picked" class="single" />
        </div>
      </div>
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightone: "ture",
      righttwo: "ture",
      rightthree: "true",
      downone: "",
      downtwo: "",
      downthree: "",
      props: {
        select: true,
        selected: ""
      },
      picked: ""
    };
  },

  methods: {
    selectone() {
      this.rightone = !this.rightone;
      this.downone = !this.downone;
    },
    selecttwo() {
      this.righttwo = !this.righttwo;
      this.downtwo = !this.downtwo;
    },
    selectthree() {
      this.rightthree = !this.rightthree;
      this.downthree = !this.downthree;
    },

    // 点击返回上一级菜单
    Premune() {
      this.$emit("Iselect", {
        select: true,
        selected: ""
      });
      this.$store.dispatch("radiosel", this.$data.picked);
    }
  }
};
</script>
<style scoped>
/* 按钮 */
.single {
width: 20px;
height: 20px;
}
/* 按钮单行 */
.radio_item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  position: relative;
}

/* 单选(2个一组)外边框 */
.radiowrap {
  padding: 0px 30px;
}
.name {
  font-size: 18px;
}
.van-icon {
  font-size: 24px;
  font-weight: 700;
  color: #999;
}
/* 选择1 */
.person_one {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  margin-top: 20px;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgb(228, 227, 227);
}
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