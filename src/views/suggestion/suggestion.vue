// 投诉建议————周佩蕾

// 数据：投诉类型
<template>
  <div>
    <div v-if="personshow.select">
      <!-- 标题 -->
      <van-nav-bar
        title="投诉建议"
        left-text="返回"
        right-text="我的记录"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ></van-nav-bar>
      <!-- 类型选择 -->
      <div class="choosestyle">
        <p class="style_title">选择类型</p>
        <ul class="style_list">
          <li
            v-for="stylelist of stylelists"
            @click="selTab(stylelist)"
            :class="{select: selectTab === stylelist}"
            :key="stylelist.id"
          >{{stylelist.name}}</li>
        </ul>
      </div>
      <!-- 选择人员 -->
      <div class="choosepeople">
        <div class="people_left">选择人员 （可选）</div>
        <div class="people_right" @click="selectpeople">
          {{picked}}
          <van-icon name="arrow" />
        </div>
      </div>
      <!-- 图片上传 -->
      <div class="uploader">
        <input type="text" class="describe" placeholder="请描述您想要说的事" v-model="content" />

        <keep-alive>
          <van-uploader v-model="fileList" multiple :max-count="3" />
        </keep-alive>
        <p class="picnumber">可上传3张照片</p>
      </div>
      <!-- 提交按钮 -->
      <div style="width:80%;margin:0 auto">
        <button type="submit" class="selectsubmit" @click="submitsuggest">提交</button>
      </div>
    </div>

    <person_select v-if="personshow.selected" @Iselect="work"></person_select>
  </div>
</template>
<script>
import person_select from "@/components/personselect/person_select.vue";
import axios from "axios";
export default {
  data() {
    return {
      selectTab: this.$store.state.stylelists[0],
      fileList: [],
      personshow: {
        select: true,
        selected: ""
      },
      content: ""
    };
  },
  computed: {
    stylelists() {
      return this.$store.state.stylelists;
    },
    informstyle() {
      return this.$store.state.informstyle;
    },

    picked() {
      return this.$store.state.picked;
    }
  },

  methods: {
    onClickLeft() {
      this.$router.push({
        name: "community"
      });
      this.$store.state.picked = "";
    },
    onClickRight() {
      this.$router.push({
        name: "myedit"
      });
    },
    selectpeople() {
      this.personshow.select = false;
      this.personshow.selected = true;
    },

    selTab(stylelist) {
      this.selectTab = stylelist;
      // 保存投诉类型——传给全局

      if (this.informstyle === "") {
        this.informstyle.push(stylelist);
      } else {
        this.informstyle.splice(0, 1, stylelist);
      }

      this.$store.dispatch("suggtype", this.informstyle);
    },
    work() {
      this.personshow.select = true;
      this.personshow.selected = false;
    },
    async submitsuggest() {
      const result = await axios.get("/advice?pUser=root", {
        params: {
          pDetail: this.content
        },
      });
      // const img = await axios.post("/api/uploadImage", {
      //   params: {
      //     file: this.fileList
      //   },
      //    headers: {
      //     'Content-Type': 'application/json; charset=utf-8'
      //   }
      // });
      this.$toast.loading({
        message: "提交成功",
        forbidClick: true
      });
    }
  },

  components: {
    person_select
  }
};
</script>
<style scoped>
/* 提交选择 */
.selectsubmit {
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  height: 50px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background: rgb(196, 193, 193);
}
.picnumber {
  color: rgb(196, 193, 193);
  font-size: 14px;
  text-align: left;
  position: absolute;
  bottom: 0px;
  left: 20px;
}
/* 上传图片位置 */
.van-uploader {
  float: left;
}
/* 文字描述 */
input::-webkit-input-placeholder {
  color: rgb(196, 193, 193);
  font-size: 14px;
}
.describe {
  display: block;
  width: 100%;
  height: 40px;
  border: 0px;
}
/* 图片上传 */
.uploader {
  padding: 10px 20px;
  position: relative;
  height: 150px;
}
.people_left {
  height: 60px;
  line-height: 60px;
  float: left;
}
.people_right {
  float: right;
  height: 60px;
  line-height: 60px;
}
/* 人员选择 */
.choosepeople {
  padding: 0 20px;
  height: 60px;
  border-top: 1px solid rgb(222, 222, 223);
  border-bottom: 1px solid rgb(222, 222, 223);
}
/* 单个选择样式 */
ul.style_list li {
  display: inline-block;
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 1px solid rgb(222, 222, 223);
}
/* 选中类型样式 */
ul.style_list li.select {
  color: #fff;
  background-color: rgb(179, 176, 176);
}
.van-icon {
  vertical-align: middle;
}
/* 选择列表 */
.style_list {
  list-style: none;
  padding: 10px 20px 20px;
  display: flex;
  justify-content: space-around;
}
/* 题目 */
.style_title {
  padding: 10px 20px;
  font-size: 16px;
  text-align: left;
}
/* 类型选择框架 */
.choosestyle {
  margin-top: 10px;
}
/* 标题 */
.van-nav-bar {
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
  color: #000;
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
/*  文字*/
.van-nav-bar__left,
.van-nav-bar__right {
  font-size: 16px;
  color: #000;
}

.van-nav-bar__text {
  color: #000;
}
</style>