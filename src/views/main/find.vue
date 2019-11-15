<template>
  <div id="find">
    <found></found>
  </div>
</template>

<script>
import found from "@/components/find/found.vue";

export default {
  name: "find",
  components: {
    found,
  },
  computed: {
    flag() {
      return this.$store.state.find.flag;
    }
  }
};
</script>