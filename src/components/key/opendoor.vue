<template>
  <div class="opendoor">
    <!-- 标题 -->
    <van-nav-bar
      title="通知公告"
      left-text="返回"
      left-arrow
      right-text="开门记录"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar>
    <!-- 门 -->
    <div style="height:300px;width:100%">
      <transition name="van-slide-left">
        <div class="door" v-show="visible1" style="left:5%;">
          <h2>门</h2>
        </div>
      </transition>
      <transition name="van-slide-right">
        <div class="door" v-show="visible2" style="right:5%;">
          <h2>门</h2>
        </div>
      </transition>
    </div>

    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="options" ref="list" />
    </van-dropdown-menu>
    <button class="open" @click="opendoor">开门</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      options: [],
      date: "",
      visible1: true,
      visible2: true
    };
  },
  mounted() {
    let count = 0;
    for (let obj of this.$store.state.register.houselists) {
      for (let i of obj.units) {
        let option = { text: `${obj.build}${i.unit}`, value: count };
        this.options.push(option);
        count++;
      }
    }
  },
  computed: {
    getdate() {
      const date = new Date().toLocaleTimeString();
    }
  },
  methods: {
    // 点击返回上一路由（社区）
    onClickLeft() {
      this.$router.go(-1);
    },
    // 进入开门记录
    onClickRight() {
      this.$store.state.key.flag = 1;
    },
    // 开门
    opendoor() {
      this.visible1 = !this.visible1;
      this.visible2 = !this.visible2;
      let timer = setTimeout(() => {
        this.visible1 = !this.visible1;
        this.visible2 = !this.visible2;
      }, 300);
      const time = new Date().toLocaleString();
      let address = "";
      for (let option of this.options) {
        if (this.value === option.value) {
          address = option.text;
          break;
        }
      }
      const obj = { kTime: time, kNum: address, kWay: "app" };
      this.$store.state.key.record.push(obj);
      this.$toast.success("成功开门");
    }
  }
};
</script>


<style scoped>
.van-nav-bar.van-hairline--bottom {
  width: 100%;
}

.opendoor {
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-around;
}
.door {
  box-sizing: border-box;
  width: 45%;
  height: 300px;
  border: 4px solid #666;
  position: absolute;
  /* top: 96px; */
}
.door:first-of-type {
  left: 30px;
}
.door:last-of-type {
  right: 30px;
}
.door h2 {
  text-align: center;
  line-height: 300px;
  margin: 0;
}
.van-dropdown-menu {
  width: 80px;
  height: auto;
  padding-right: 8px;
  /* margin: 450px auto 39px; */
  border: 1px solid #999;
}
.open {
  display: block;
  width: 139px;
  height: 139px;
  background-color: #aaa;
  border: 0;
  border-radius: 50%;
  /* margin: 0 auto;  */
}
</style>