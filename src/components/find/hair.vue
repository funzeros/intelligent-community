<template>
  <div id="houseServe">
    <van-nav-bar title="美容美发" left-text="返回" left-arrow @click-left="onClickLeft" />
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
          name: "沙宣发廊",
          url:
            "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3888a9ef2f2eb938ec6d7df4ed59e208/3812b31bb051f819ea77a944dab44aed2e73e76a.jpg"
        },
        {
          id: 2,
          name: "啊飒飒发廊",
          url:
            "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3888a9ef2f2eb938ec6d7df4ed59e208/3812b31bb051f819ea77a944dab44aed2e73e76a.jpg"
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
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>