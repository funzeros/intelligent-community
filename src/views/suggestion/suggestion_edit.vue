<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar title="我的记录" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "suggestion"
      });
    }
  }
};
</script>