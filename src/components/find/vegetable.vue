<template>
  <div id="houseServe">
    <van-nav-bar title="网上菜场" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.url" alt class="nameP" />
        <span>{{item.name}}</span>
        <img src="/images/phone.png" alt class="phoneicon" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "濮思凡猪肉",
          url:
            "https://m.360buyimg.com/babel/jfs/t1/84824/11/1143/68953/5db9687aE15220956/3bd9fbf1b57c70d0.png"
        },
        {
          id: 2,
          name: "方珂琛水果",
          url:
            "https://m.360buyimg.com/babel/jfs/t1/84824/11/1143/68953/5db9687aE15220956/3bd9fbf1b57c70d0.png"
        }
      ],
      loading: false,
      finished: false
    };
  },
  methods: {
    onClickLeft() {
      this.$store.state.find.flag = 0;
    }
  }
};
</script>
<style>
#houseServe {
  width: 100%;
  height: 100%;
}
.van-nav-bar:first-child {
  margin-bottom: 15px;
}
#houseServe li {
  width: 100%;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  position: relative;
}
#houseServe li .nameP {
  width: 50px;
  height: 40px;
  padding: 10px 0 10px 5px;
  vertical-align: middle;
}
#houseServe li span {
  padding-left: 5px;
  font-size: 12px;
}
.phoneicon {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 20px;
}
</style>