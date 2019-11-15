<template>
  <div id="houseServe">
    <van-nav-bar title="休闲娱乐" left-text="返回" left-arrow @click-left="onClickLeft" />
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
          name: "王阳足浴",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574156470&di=3565ecee97a4751cdb9d3c504725221f&imgtype=jpg&er=1&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20168_3_6%2Fa98jcb79644569615310.jpg"
        },
        {
          id: 2,
          name: "思凡保健",
          url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574156470&di=3565ecee97a4751cdb9d3c504725221f&imgtype=jpg&er=1&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20168_3_6%2Fa98jcb79644569615310.jpg"
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
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>