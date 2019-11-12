// 用户完善信息——民族
// 周佩蕾

<template>
  <div class="minzu">
    <van-field
      readonly
      clickable
      label="民族"
      :value="nation"
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
      columns:["汉族","	蒙古族","	 回族","	藏族","	 维吾尔族","	苗族","	 彝族","	壮族","	 布依族","	朝鲜族","	满族","	侗族","	瑶族","	白族","	土家族","	哈萨克族 ","	傣族","	黎族","	傈僳族","	高山族","	畲族","	畲族","	拉祜族","	水族","	纳西族","	景颇族","	柯尔克孜族","	土族","	达斡尔族","	仫佬族","	羌族","	布朗族","	撒拉族","	毛南族","	仡佬族","	锡伯族","	阿昌族","	普米族","	塔吉克族","	怒族","	乌孜别克族","	鄂温克族","	德昂族","	保安族","	裕固族","	京族","	塔塔尔族","	独龙族","	鄂伦春族","	 赫哲族","	门巴族","	珞巴族","	基诺族","	其它","	外国血统","	穿青人"]
    };
  },
  computed:{
    nation(){
      return this.$store.state.register.nation;
    }
  },
  methods: {
    onConfirm(value) {
      this.$store.state.register.nation  = value;
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

.van-field {
  border: 0.5px solid #e7e7e7;
}

/* 用户名字体 */
.van-cell {
  font-size: 16px;
  color: #aaa;
}
</style>