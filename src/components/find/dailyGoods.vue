<template>
  <div id="houseServe">
    <van-nav-bar title="日用百货" left-text="返回" left-arrow @click-left="onClickLeft" />
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
          name: "旺旺超市",
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1847437042,1174212766&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          name: "大润发超市",
          url:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1847437042,1174212766&fm=26&gp=0.jpg"
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