<template>
  <div id="find">
    <found v-if="flag==0"></found>
    <houseServe v-else-if="flag==1"></houseServe>
    <hair v-else-if="flag==2"></hair>
    <vegetable v-else-if="flag==3"></vegetable>
    <goods v-else-if="flag==4"></goods>
    <cate v-else-if="flag==5"></cate>
    <game v-else-if="flag==6"></game>
  </div>
</template>

<script>
import found from "@/components/find/found.vue";
import houseServe from "@/components/find/houseServe.vue";
import hair from "@/components/find/hair.vue";
import vegetable from "@/components/find/vegetable.vue";
import goods from "@/components/find/dailyGoods.vue";
import cate from "@/components/find/cate.vue";
import game from "@/components/find/game.vue";

export default {
  name: "find",
  components: {
    found,
    houseServe,
    hair,
    vegetable,
    goods,
    cate,
    game
  },
  computed: {
    flag() {
      return this.$store.state.find.flag;
    }
  }
};
</script>