<template>
  <div>
    <div >
      <van-nav-bar title="电子监控" left-text="返回" left-arrow @click-left="onClickLeft" />
      <div>
        <van-search placeholder="请输入搜索关键词" v-model="value" @input="changvalue" />
        <div class="selectbox">
          <ul>
            <li>
              <span class="addicn" @click="allclcik" ref="addicn">
                <span>+</span>
              </span>
              <span>公用监控</span>
              <keep-alive>
                <ul v-if="isshow">
                  <li
                    class="houselement"
                    v-for="(item,index) of housenumdata "
                    :key="index"
                    ref="sonelm"
                  >
                    <span class="addicn" @click.self="sonclick(index)">+</span>
                    {{item.levelnum}}
                    <ul v-if="sonshow[index]">
                      <li
                        v-for="(everyhouse,index) of item.housedata"
                        :key="index"
                        class="housenum"
                        @click="housedetail(everyhouse,item.levelnum)"
                      >{{everyhouse}}</li>
                    </ul>
                  </li>
                </ul>
              </keep-alive>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      isshow: false,
      sonshow: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    };
  },
  methods: {
    //   返回事件
    onClickLeft() {
      this.$router.push("/main/community");
    },
    // 二级菜单变化
    allclcik() {
      if (this.$refs.addicn.innerHTML == "+") {
        (this.$refs.addicn.innerHTML = "-"), (this.isshow = true);
      } else {
        (this.$refs.addicn.innerHTML = "+"), (this.isshow = false);
      }
    },
    // 三级菜单
    sonclick(index) {
      let icn = this.$refs.sonelm[index].firstElementChild.innerHTML;
      if (icn === "+") {
        this.$refs.sonelm[index].firstElementChild.innerHTML = "-";
        this.$set(this.sonshow, index, "true");
      } else {
        this.$refs.sonelm[index].firstElementChild.innerHTML = "+";
        this.$set(this.sonshow, index, false);
      }
    },
    // s搜索
    changvalue(value) {
      this.isshow = true;
    },
    // 跳转
    housedetail(a, b) {
      this.$store.state.monitor.boxshow = false
      // this.$router.push(`/monitor/${a & b}`);
    }
  },
  computed: {
    housenumdata() {
      return this.$store.state.monitor.housenumdata;
    },
      getshowing(){
        return this.$store.state.monitor.boxshow
      }
  },
  components:{
    
  }
};
</script>
<style scoped>
.title {
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
}
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
.center {
  padding: 0px 30px;
}

/* 标题下划线 */

/* 标题名字 */
.van-nav-bar__title {
  font-size: 20px;
  font-weight: 600;
}
/* 标题部分的左箭头 */
.van-nav-bar__arrow {
  min-width: 1em;
  font-size: 22px;
}
.van-nav-bar .van-icon {
  color: #000;
  vertical-align: middle;
}
/* 返回 */
.van-nav-bar__text {
  color: #000;
  font-size: 16px;
}
.selectbox {
  padding: 10px 12px;
}
/* 图标 */
.addicn {
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #01c8fa;
  text-align: center;
  line-height: 11px;
  font-size: 14px;
  margin-right: 10px;
}
/* 二级菜单样式 */
ul {
  padding: 10px;
  width: 100%;
  line-height: 20px;
}
.houselement {
  padding: 0px 20px;
  font-size: 15px;
  line-height: 30px;
}
.housenum {
  padding: 5px 15%;
  color: #444444;
  font-size: 14px;
  cursor: pointer;
}
.hidden {
  display: none;
}
.block {
  display: block;
}
</style>