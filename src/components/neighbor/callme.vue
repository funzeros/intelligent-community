<template>
  <div class="call">
    <van-nav-bar title="回复我的" left-text="返回" left-arrow @click-left="onClickLeft" />
    <ul class="callme">
      <li v-for="item in msg" :key="item.id">
        <img :src="item.header" alt />
        <p class="name">{{item.name}}</p>
        <p class="time">{{item.time}}</p>
        <div class="replyMe">
          <p>{{item.replyMe}}</p>
        </div>
        <div class="reply">
          <van-icon name="comment-o" />
          <p>回复</p>
        </div>
        <div class="replyOther">
          <p>{{item.replyOther}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const date = new Date();
    return {
      msg: [
        {
          id: 1,
          name: "张哲禹",
          header: "https://profile.csdnimg.cn/2/D/8/2_adrian503",
          time: date.toLocaleString(),
          replyMe:
            "上课教案很多事暗杀十几号奥术大师杰卡斯，大使馆卡萨丁gas科技馆打给我钱盛大公司控股几点睡的框架卡萨丁会撒娇科幻撒大数据科技爱神的箭框架AV个帝国",
          replyOther: "安居客健康俺不是不是啊啊空间数据我去刷哦哦安保本补充"
        },
        {
          id: 2,
          name: "张哲禹",
          header: "https://profile.csdnimg.cn/2/D/8/2_adrian503",
          time: date.toLocaleString(),
          replyMe:
            "上课教案很多事暗杀十几号奥术大师杰卡斯，大使馆卡萨丁gas科技馆打给我钱盛大公司控股几点睡的框架卡萨丁会撒娇科幻撒大数据科技爱神的箭框架AV个帝国上课教案很多事暗杀十几号奥术大师杰卡斯，大使馆卡萨丁gas科技馆打给我钱盛大公司控股几点睡的框架卡萨丁会撒娇科幻撒大数据科技爱神的箭框架AV个帝国上课教案很多事暗杀十几号奥术大师杰卡斯，大使馆卡萨丁gas科技馆打给我钱盛大公司控股几点睡的框架卡萨丁会撒娇科幻撒大数据科技爱神的箭框架AV个帝国上课教案很多事暗杀十几号奥术大师杰卡斯，大使馆卡萨丁gas科技馆打给我钱盛大公司控股几点睡的框架卡萨丁会撒娇科幻撒大数据科技爱神的箭框架AV个帝国",
          replyOther: "安居客健康俺不是不是啊啊空间数据我去刷哦哦安保本补充"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$store.state.neighbor.ll = 0;
    }
  }
};
</script>

<style scope>
.call {
    width: 100%;
    height: 100%;
}
.call .callme li {
  /* width: 100%; */
  margin-bottom: 10px;
  background: #fff;
  padding: 10px;
}
.callme img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
.callme .name {
  font-size: 12px;
  position: relative;
  top: -25px;
  left: 25px;
}
.callme .time {
  font-size: 10px;
  position: relative;
  top: -25px;
  left: 25px;
}
.callme .replyMe {
  margin: 10px 0;
  font-size: 15px;
  position: relative;
  top: -25px;
}
.callme .replyOther {
  font-size: 15px;
  background: #ccc;
  margin-left: 5px;
  margin-right: 5px;
  position: relative;
  top: -15px;
  padding: 10px 20px;
}
.callme .replyOther p {
  line-height: 20px;
}
.callme .reply {
  position: relative;
  top: -25px;
  /* left: 310px; */
}
.callme .reply p {
  display: inline-block;
  font-size: 15px;
  position: relative;
  left: 5px;
  top: -5px;
}
</style>