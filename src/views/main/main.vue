
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
    const tabs= [
        {
          id: "101",
          rounter: "/main/community",
          iconfont: "icon-xingqiu-",
          title: "社区"
        },
        {
          id: "102",
          rounter: "/main/find",
          iconfont: "icon-zhinanzhen_o",
          title: "发现"
        },
        {
          id: "103",
          rounter: "/main/key",
          iconfont: "icon-yuechi",
          title: "key"
        },
        {
          id: "104",
          rounter: "/main/neighborhood",
          iconfont: "icon-caidan",
          title: "邻里"
        },
        {
          id: "105",
          rounter: "/main/mine",
          iconfont: "icon-wode",
          title: "我的"
        }
      ];
    return {
      tabs,
      selectTab: tabs[0],
    };
  },
  methods:{
    selTab(tab) {
      this.selectTab = tab;
  }
  }
};
</script>
<style scoped>
#main {
  height: 100%;
  background-color: #eee;
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
  text-align: center;
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
