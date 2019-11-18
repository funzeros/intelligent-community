
<template>
  <div id="main">
    <router-view />
    <!-- 底部tab导航 -->
    <nav>
      <li v-for="tab of tabs" :key="tab.id"  @click="selTab(tab)">
        <router-link :to="tab.rounter"  :class="{select: selectTab === tab}" >
          <span class="iconfont" :class='tab.iconfont' ></span>
          <span >{{tab.title}}</span>
        </router-link>
      </li>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods:{
    selTab(tab) {
      if(tab.id==='103'){
        return
      }
      this.$store.state.selectTab = tab;
    }
  },
  computed:{
    tabs(){
      return this.$store.state.tabs;
    },
    selectTab(){

      return this.$store.state.selectTab;
    }
  },
  mounted(){
    this.$store.dispatch('setInitTab');
  }
};
</script>
<style scoped>
#main {
  height: 100%;
  background-color: #eee;
  overflow: auto;

}
/* tab导航图标样式 */
.iconfont {
  font-family: "iconfont" !important;
  font-size: 24px;
  display:block;
}
/* 选种样式 */
.select {
  color:rgb(43, 140, 231);
}
nav {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  font-size: 12px;
  background-color: #fff;
  box-shadow: 0 0 6px #999;
  position: fixed;
  bottom: 0;
}
nav li {
  height: 100%;
  text-align: center;
  float: left;
}
nav li a {
  height: 100%;
  color: #666;
}
</style>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  display: inline-block;
  text-decoration: none;
  color: #000;
}

li {
  list-style: none;
}

img {
  vertical-align: middle;
}

button {
  background: #fff;
  border: 0;
}
.van-icon {
  vertical-align: top;
}
</style>
