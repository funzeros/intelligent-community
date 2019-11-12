// 用户信息完善——证件类型选择
// 周佩蕾
<template>
  <div>
    <van-field
      readonly
      clickable
      label="证件类型"
      :value="idtype"
      placeholder="身份证"
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
      columns: ["身份证", "居民户口薄", "临时身份证", "职工证"]
    };
  },
  methods: {
    onConfirm(value) {
      this.$store.state.register.idtype = value;
      this.showPicker = false;
    }
  },
  computed:{
    idtype(){
      return this.$store.state.register.idtype;
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

</style>