<template>
  <div id="main">
    <router-view />
    <nav>
      <li>
        <router-link to="/main/community">社区</router-link>
      </li>
      <li>
        <router-link to="/main/find">发现</router-link>
      </li>
      <li>
        <router-link to="/main/key">key</router-link>
      </li>
      <li>
        <router-link to="/main/neighborhood">邻里</router-link>
      </li>
      <li>
        <router-link to="/main/mine">我的</router-link>
      </li>
    </nav>
  </div>
</template>

<style scoped>
#main{
  height: 100%;
  background-color: #eee;
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

html,
body {
  height: 100%;
  background-color: #eee;
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
