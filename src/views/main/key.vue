// 开门———濮思凡


// 渲染数据——开门地址、事件、出&入

<template>
  <div class="key">
    <opendoor v-if="flag==0"></opendoor>
    <record v-if="flag==1"></record>
  </div>
</template>
<script>
import opendoor from "@/components/key/opendoor";
import record from "@/components/key/record";
export default {
  components: {
    opendoor,
    record
  },
  computed: {
    flag() {
      return this.$store.state.key.flag;
    }
  }
};
</script>


<style>