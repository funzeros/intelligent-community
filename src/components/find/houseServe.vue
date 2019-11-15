<template>
  <div id="houseServe">
    <van-nav-bar title="家政服务" left-text="返回" left-arrow @click-left="onClickLeft" />
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
          name: "金保姆",
          url:
            "https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=774371145,3379422598&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=749aa101b774cebc67be4f4418edb886"
        },
        {
          id: 2,
          name: "保健服务",
          url:
            "https://ss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=774371145,3379422598&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=749aa101b774cebc67be4f4418edb886"
        }
      ],
      loading: false,
      finished: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "find"
      });
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