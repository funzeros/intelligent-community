<template>
  <div class="neighborhood">
    <neighbor v-if="ll==0"></neighbor>
    <publish v-else-if="ll==1"></publish>
    <post v-else-if="ll==2"></post>
    <call v-else-if="ll==3"></call>
    <fav v-else-if="ll==4"></fav>
    
  </div>
</template>

<script>
// @ is an alias to /src
import neighbor from '@/components/neighbor/neighbor.vue'
import publish from '@/components/neighbor/publish.vue'
import call from '@/components/neighbor/callme.vue'
import fav from '@/components/neighbor/favorite.vue'
import post from '@/components/neighbor/myPost.vue'



export default {
  name: 'neighborhood',
  components: {
    neighbor,publish,call,fav,post
  },
  computed: {
    ll(){
      console.log(this.$store.state.neighbor.ll)
      return this.$store.state.neighbor.ll
    }
  },
}
</script>
