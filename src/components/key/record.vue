<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="开门记录" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <ul>
      <li v-for="record of records">
        <span>{{record.kTime}}</span>
        <span>{{record.kWay}}</span>
        <span>{{record.kNum}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("key/opendoor");
  },
  computed: {
    records() {
      return this.$store.state.key.record;
    }
  },
  methods: {
    // 返回
    onClickLeft() {
      this.$store.state.key.flag = 0;
    }
  }
};
</script>


<style scoped>
ul li {
  padding: 6px;
  position: relative;
}
ul li span {
  font-size: 14px;
}
ul li span:nth-of-type(2),
ul li span:nth-of-type(3) {
  position: absolute;
}
ul li span:nth-of-type(2) {
  top: 8px;
  left: 188px;
}
ul li span:nth-of-type(3) {
  left: 258px;
}
</style>