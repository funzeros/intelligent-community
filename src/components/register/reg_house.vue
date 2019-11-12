<template>
  <div class="area">
    <!-- 标题 -->
    <van-nav-bar title="完善信息" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <van-tabs v-model="active">
      <van-tab :title="areaTitle">
        <ul>
          <li v-for="item of areas" @click="selArea(item)">{{item}}</li>
        </ul>
      </van-tab>
      <van-tab :title="buildTitle">
        <van-search placeholder="请输入楼栋号" v-model="buildKey" />
        <ul>
          <li v-for="item of searchBuild(buildKey)" @click="selBuild(item)">{{item}}</li>
        </ul>
      </van-tab>
      <van-tab :title="unitTitle">
        <van-search placeholder="请输入单元号" v-model="unitKey" />
        <ul>
          <li v-for="item of searchUnit(unitKey)" @click="selUnit(item)">{{item}}</li>
        </ul>
      </van-tab>
      <van-tab :title="houseTitle">
        <ul>
          <van-search placeholder="请输入房屋号" v-model="houseKey" />
          <li v-for="item of searchHouse(houseKey)" @click="selHouse(item)">{{item}}</li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      areas: [],
      builds: [],
      buildKey: "",
      units: [],
      unitKey: "",
      houses: [],
      houseKey: ""
    };
  },
  mounted() {
    // 初始化片区
    for (let i of this.$store.state.register.areas) {
      this.areas.push(i);
    }
    // 初始化楼栋
    for (let value of this.$store.state.register.houselists) {
      this.builds.push(value.build);
    }
    // 初始化单元
    if (this.$store.state.register.homeform[2].value != "") {
      let arr = this.$store.state.register.houselists.find(value => {
        return this.$store.state.register.homeform[2].value === value.build;
      }).units;
      this.units = [];
      for (let value of arr) {
        this.units.push(value.unit);
      }
    }
    // 初始化房屋
    if (this.$store.state.register.homeform[3].value != "") {
      let arr = this.$store.state.register.houselists
        .find(value => {
          return this.$store.state.register.homeform[2].value === value.build;
        })
        .units.find(value => {
          return this.$store.state.register.homeform[3].value === value.unit;
        });
      this.houses = [];
      for (let value of arr.houses) {
        this.houses.push(value);
      }
    }
  },
  computed: {
    areaTitle() {
      if (this.$store.state.register.homeform[1].value === "") {
        return "片区";
      } else {
        return this.$store.state.register.homeform[1].value;
      }
    },
    buildTitle() {
      if (this.$store.state.register.homeform[2].value === "") {
        return "楼栋";
      } else {
        return this.$store.state.register.homeform[2].value;
      }
    },
    unitTitle() {
      if (this.$store.state.register.homeform[3].value === "") {
        return "单元";
      } else {
        return this.$store.state.register.homeform[3].value;
      }
    },
    houseTitle() {
      if (this.$store.state.register.homeform[4].value === "") {
        return "房屋";
      } else {
        return this.$store.state.register.homeform[4].value;
      }
    }
  },
  methods: {
    searchBuild(buildKey) {
      let newList = [];
      this.builds.forEach(value => {
        if (value.indexOf(buildKey) != -1) {
          newList.push(value);
        }
      });
      return newList;
    },
    searchUnit(unitKey) {
      let newList = [];
      this.units.forEach(value => {
        if (value.indexOf(unitKey) != -1) {
          newList.push(value);
        }
      });
      return newList;
    },
    searchHouse(houseKey) {
      let newList = [];
      this.houses.forEach(value => {
        if (value.indexOf(houseKey) != -1) {
          newList.push(value);
        }
      });
      return newList;
    },
    // 选择片区
    selArea(item) {
      this.$store.state.register.homeform[1].value = item;
      this.active++;
      this.buildflag = true;
    },
    // 选择楼栋
    selBuild(item) {
      this.$store.state.register.homeform[2].value = item;
      let arr = this.$store.state.register.houselists.find(value => {
        return item === value.build;
      }).units;
      this.units = [];
      for (let value of arr) {
        this.units.push(value.unit);
      }
      this.active++;
    },
    // 选择单元
    selUnit(item) {
      this.$store.state.register.homeform[3].value = item;
      let arr = this.$store.state.register.houselists
        .find(value => {
          return this.$store.state.register.homeform[2].value === value.build;
        })
        .units.find(value => {
          return item === value.unit;
        });
      this.houses = [];
      for (let value of arr.houses) {
        this.houses.push(value);
      }
      this.active++;
    },
    // 选择房屋
    selHouse(item) {
      this.$store.state.register.homeform[4].value = item;
      this.timer=setTimeout(()=>{
        this.$store.state.register.stepcount=this.$store.state.register.stepcash
        clearTimeout(this.timer);
      },200);
    },
    onClickLeft(){
      this.$store.state.register.stepcount=this.$store.state.register.stepcash;
    },
  }
};
</script>

<style scoped>
/* 标题 */
.register_info .van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
}
/* 标题下划线 */
.van-hairline--bottom::after {
  border-bottom-width: 0px;
}
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
ul li {
  padding: 20px 30px;
}
.van-search__content {
  padding: 8px 20px;
}
</style>