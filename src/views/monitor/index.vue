
<template>
  <!-- 电子监控 魏珍君 -->

  <div>
   <!-- 视频监控主页 -->
    <keep-alive>
    <monitorindex v-if="this.$store.state.monitor.boxshow" ></monitorindex>
    </keep-alive>
    <!-- 监控视频组件 -->
    <housedetail v-if="!(this.$store.state.monitor.boxshow)"></housedetail>
  </div>
</template>
<script>
 import monitorindex from "@/components/montior/index"
 import housedetail from "@/components/montior/housedetail"
export default {
  data() {
    return {
    };
  },
  components:{
    monitorindex,
    housedetail,
     
  }
};
</script>
<style scoped>

</style>