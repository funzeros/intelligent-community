<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  destroyed(){
      this.$store.state.knockdoor.ws.close();
  }
}
</script>
