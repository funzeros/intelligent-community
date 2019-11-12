// 用户完善信息——性别弹出选项
// 周佩蕾

<template>
  <div>
    <van-field
      style="border-top:none"
      readonly
      clickable
      label="性别"
      :value="getsex"
      placeholder="男"
      @click="showPicker = true"
    ></van-field>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm"></van-picker>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPicker: false,
      columns: ["男", "女"]
    };
  },
  computed:{
    getsex(){
      return this.$store.state.register.sex;
    }
  },
  methods: {
    onConfirm(value) {
      this.$store.state.register.sex = value;
      this.showPicker = false;
    }
  }
};
</script>
<style scoped>
/* 表单下划线 */
[class*="van-hairline"]::after {
  border: none;
}
/* 表单整体位置大小 */
.van-cell-group {
  width: 340px;
  height: 50px;
  margin: 20px auto;
  margin-bottom: 20px;
}
.van-field {
  border: 0.5px solid #e7e7e7;
}

/* 用户名字体 */
.van-cell {
  font-size: 16px;
  color: #aaa;
}
/* 星号 */
.van-cell--required::before {
  position: absolute;
  left: 8px;
  color: #ee0a24;
  font-size: 24px;
  content: "*";
}
</style>