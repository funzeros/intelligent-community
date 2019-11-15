<template>
  <div class="neighborhood">
    <neighbor ></neighbor>
  </div>
</template>

<script>
// @ is an alias to /src
import neighbor from '@/components/neighbor/neighbor.vue'


export default {
  name: 'neighborhood',
  components: {
    neighbor
  },
  computed: {
    ll(){
      console.log(this.$store.state.neighbor.ll)
      return this.$store.state.neighbor.ll
    }
  },
}
</script>
