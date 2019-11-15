<template>
  <div id="community">
    <header>
      <p>
        <van-icon name="location" />湘云雅苑
      </p>
      <van-icon name="chat-o" @click="Message()" />
    </header>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!--  导航 -->
    <nav>
      <li v-for="(list,index) of lists" :key="list.id" @click="self(index)">
        <img :src="list.src" alt />
        <p>{{list.text}}</p>
      </li>
    </nav>
    <div class="notice" @click="information()">
      <section>
        <img src="/images/notice.png" alt />
        <aside>
          <p>物业费上调</p>
          <p>自8月1日起物业费上调至2.5元，请各位业主巴拉巴拉</p>
        </aside>
      </section>
      <van-icon name="play" />
    </div>
    <img src="/images/weather.png" alt class="weather" />
    <div class="vote">
      <h4>投票选举</h4>
      <ul @click="goToVote">
        <li v-for="vote of comvotes">
          <img :src="vote.src" alt />
          <section>
            <div class="left">
              <h3>{{startdate[vote.id-1]}}</h3>
              <p>{{startmonth[vote.id-1]}}</p>
            </div>
            <div class="right">
              <p>{{vote.type}}</p>
              <p>{{vote.content}}</p>
              <p>
                <van-icon name="underway-o" />
                {{startday[vote.id-1]}}至{{endday[vote.id-1]}}
              </p>
            </div>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "community",
  data() {
    return {
      lists: [
        {
          src: "/images/repair.png",
          text: "报事报修"
        },
        {
          src: "/images/reservation.png",
          text: "访客预约"
        },
        {
          src: "/images/pay.png",
          text: "生活缴费"
        },
        {
          src: "/images/knock.png",
          text: "在线敲门"
        },
        {
          src: "/images/monitor.png",
          text: "电子监控"
        },
        {
          src: "/images/property.png",
          text: "呼叫物业"
        },
        {
          src: "/images/suggest.png",
          text: "投诉建议"
        }
      ],
      start: [],
      end: [],
      startdate: [],
      startmonth: [],
      images: [
        "http://img2.imgtn.bdimg.com/it/u=1244828054,1276986378&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2386616178,2067696785&fm=26&gp=0.jpg",
        "http://img3.imgtn.bdimg.com/it/u=3735972475,1902514362&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2386616178,2067696785&fm=26&gp=0.jpg"
      ]
    };
  },
  computed: {
    comvotes() {
      for (let obj of this.$store.state.comvote.comvotes) {
        this.start.push(obj.start);
        this.end.push(obj.end);
      }
      return this.$store.state.comvote.comvotes;
    },
    startday() {
      for (let i in this.start) {
        this.start[i] = this.start[i].split("-");
        switch (this.start[i][1]) {
          case "01":
            this.startmonth.push("一月");
            break;
          case "02":
            this.startmonth.push("二月");
            break;
          case "03":
            this.startmonth.push("三月");
            break;
          case "04":
            this.startmonth.push("四月");
            break;
          case "05":
            this.startmonth.push("五月");
            break;
          case "06":
            this.startmonth.push("六月");
            break;
          case "07":
            this.startmonth.push("七月");
            break;
          case "08":
            this.startmonth.push("八月");
            break;
          case "09":
            this.startmonth.push("九月");
            break;
          case "10":
            this.startmonth.push("十月");
            break;
          case "11":
            this.startmonth.push("十一月");
            break;
          case "12":
            this.startmonth.push("十二月");
            break;
        }
        this.start[i][1] = Number(this.start[i][1]) + "月";
        this.startdate.push(Number(this.start[i][2]));
        this.start[i][2] = Number(this.start[i][2]) + "日";
        this.start[i] = this.start[i][1] + this.start[i][2];
      }
      return this.start;
    },
    endday() {
      for (let i in this.end) {
        this.end[i] = this.end[i].split("-");
        this.end[i][1] = Number(this.end[i][1]) + "月";
        this.end[i][2] = Number(this.end[i][2]) + "日";
        this.end[i] = this.end[i][1] + this.end[i][2];
      }
      return this.end;
    }
  },
  methods: {
    goToVote() {
      this.$router.push({
        name: "comvote"
      });
    },
    Message() {
      this.$router.push({
        name: "community_message"
      });
    },
    information() {
      this.$router.push({
        name: "community_inform"
      });
    },
    self(index) {
      if (index === 0) {
        this.$router.push({ name: "repair" });
      }
      if (index === 2) {
        this.$router.push({
          name: "life_payment"
        });
      }
      if (index === 4) {
        this.$router.push({
          name: "monitor"
        });
      }
      if (index === 6) {
        this.$router.push({
          name: "suggestion"
        });
      }
      if (index === 1) {
        this.$router.push({
          name: "visitor"
        });
      }
      if (index === 3) {
        this.$router.push({
          name: "knockdoor"
        });
      }
    }
  }
};
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 12px;
  overflow: hidden;
}
header p {
  float: left;
}
header p .van-icon {
  color: #4cc5d6;
}
header .van-icon-chat-o {
  font-size: 18px;
  float: right;
}

.van-swipe {
  height: 163px;
  background-color: #000;
}
.van-swipe img {
  height: 163px;
  width: 100%;
}
nav {
  background-color: #fff;
  padding-bottom: 13px;
  overflow: hidden;
}
nav li {
  text-align: center;
  margin: 18px 0 0 34px;
  float: left;
}
nav li img {
  width: 48px;
  margin-bottom: 10px;
}
nav li p {
  font-size: 12px;
}
.notice {
  padding: 14px;
  margin: 2px 0 8px;
  background-color: #fff;
  position: relative;
}
.notice .van-icon {
  height: 16px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 13px;
  margin: auto 0;
}
.notice section {
  width: 90%;
  margin: 0 auto;
}
.notice section img:first-of-type {
  width: 38px;
}
.notice section aside {
  width: 82%;
  padding-left: 6px;
  border-left: 1px solid #eee;
  float: right;
}
.notice section aside p:last-of-type {
  font-size: 13px;
  line-height: 20px;
  color: #888;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.weather {
  width: 100%;
  margin-bottom: 8px;
}
.vote {
  background-color: #fff;
  margin-bottom: 50px;
}
.vote h4 {
  text-align: center;
  padding: 8px 0;
  position: relative;
}
.vote h4::before,
.vote h4::after {
  content: "";
  width: 39%;
  height: 1px;
  vertical-align: super;
  position: absolute;
  top: 15px;
}
.vote h4::before {
  background-image: linear-gradient(to left, #4cc5d6, #fff);
  left: 0;
}
.vote h4::after {
  background-image: linear-gradient(to right, #4cc5d6, #fff);
  right: 0;
}
.vote ul {
  overflow: hidden;
}
.vote ul li {
  width: 48%;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 0 0 4px 4px;
  float: left;
}
.vote ul li img {
  width: 100%;
}
.vote ul li section {
  padding: 6px 4px;
  overflow: hidden;
}
.vote ul li section .left {
  width: 25%;
  text-align: center;
  border-right: 1px solid #eee;
  float: left;
  position: relative;
}
.vote ul li section .left p {
  margin-top: 22px;
}
.vote ul li section .left p:last-of-type {
  font-size: 14px;
  color: #666;
}
.vote ul li section .right {
  width: 75%;
  padding-left: 6px;
  float: right;
}
.vote ul li section .right p:nth-of-type(2) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vote ul li section .right p:nth-of-type(3) {
  display: inline-block;
}
.vote ul li section .right p:nth-of-type(2),
.vote ul li section .right p:nth-of-type(3) {
  font-size: 11px;
  color: #999;
  margin-top: 6px;
}
</style>
