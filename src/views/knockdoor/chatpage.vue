<template>
  <div class="chatpage">
    <van-nav-bar :title="getFullTitle" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="chatWin" ref="chatWin"></div>
    <van-cell class="scanf">
      <van-icon name="phone-circle-o" />
      <van-field :style="{height:flexHeight}" v-model="input" @keydown.enter="sendMessge" />
      <van-icon name="smile-o" />
      <van-icon name="add-o" />
    </van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      flexHeight: "30px",
      ws: {},
      hid: "",
      title: "",
      mtitle: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      // this.ws.close();
      this.hid = "";
    },
    sendMessge() {
      // console.log(this.input);
      if (this.input.trim()) {
        let date = new Date();
        date = date.toLocaleTimeString();

        let data = `{"user":"${this.$store.state.knockdoor.selfhid}","date":"${date}","name":"${this.mtitle}","msg":"${this.input}","connet":"1","obj":"${this.hid}"}`;
        // console.log(this.mtitle);
        this.ws.send(data);
        this.$store.state.knockdoor.hdata.push(JSON.parse(data));

        this.$refs.chatWin.innerHTML += `
            <div class="mMes">
            ${date}
            <div>
            <p style="float: right;padding:5px"">${this.mtitle}</p>
            <div style="clear:both" ></div>
            <p style="background:#ccc; float: right;
                border-radius: 3px;padding:5px">${this.input}</p>
            <div style="clear:both" ></div>

            </div>
            </div>
         `;
      }

      this.input = "";
      return false;
    }
  },
  computed: {
    getFullTitle() {
      let fid = this.$route.params.hid[0] + this.$route.params.hid[1];
      let hid = this.$route.params.hid[2] + this.$route.params.hid[3];
      let firstNm = this.$store.state.knockdoor.houseList[Number(fid)];
      let lastNm = firstNm.house[Number(hid)].house;
      this.title = firstNm.area + firstNm.build + firstNm.unit + lastNm;
      return this.title;
    }
  },
  mounted() {
    // console.log(this.$route.params.hid);
    this.hid = this.$route.params.hid;
    // let url = "ws://10.31.155.44:5000";
    // this.ws = new WebSocket(url);
    // console.log(this.ws);
    this.ws = this.$store.state.knockdoor.ws;
    // this.ws.onopen = () => {
    //   // console.log(this.ws);
    //   this.ws.send(
    //     `{"user":"${this.$store.state.knockdoor.selfhid}","msg":"访问${this.hid}","connet":"0","obj":"${this.hid}"}`
    //   );
    // };

    this.ws.onmessage = ev => {
      // console.log(ev.data);
      let data = JSON.parse(ev.data);
      this.$store.state.knockdoor.data.push(data);
      this.$store.state.knockdoor.hdata.push(data);
      console.log(this.$store.state.knockdoor.data);
      //  console.log(this.hid);
      if (data.user === this.hid) {
        let date = new Date();
        date = date.toLocaleTimeString();
        this.$refs.chatWin.innerHTML += `
            <div class="oMes">
            ${date}
            <div>
            <p style="float: left;padding:5px"">${this.title}</p>
            <div style="clear:both" ></div>
            <p style="background:#ccc;  float: left;
                border-radius: 3px;padding:5px">${data.msg}</p>
            <div style="clear:both" ></div>

            </div>
            </div>
         `;
      }
     this.$refs.chatWin.scrollTop = this.$refs.chatWin.scrollHeight;
    };
    console.log(this.$store.state.knockdoor.hdata);
    let fid =
      this.$store.state.knockdoor.selfhid[0] +
      this.$store.state.knockdoor.selfhid[1];
    let hid =
      this.$store.state.knockdoor.selfhid[2] +
      this.$store.state.knockdoor.selfhid[3];
    let firstNm = this.$store.state.knockdoor.houseList[Number(fid)];
    let lastNm = firstNm.house[Number(hid)].house;
    this.mtitle = firstNm.area + firstNm.build + firstNm.unit + lastNm;
    for (let i = 0; i < this.$store.state.knockdoor.hdata.length; i++) {
      let newdata = this.$store.state.knockdoor.hdata[i];
      let date = new Date();
      date = date.toLocaleTimeString();
      if (newdata.user === this.hid) {
        this.$refs.chatWin.innerHTML += `
            <div class="oMes">
            ${date}
            <div>
            <p style="float: left;padding:5px"">${this.title}</p>
            <div style="clear:both" ></div>
            <p style="background:#ccc;  float: left;
                border-radius: 3px;padding:5px">${newdata.msg}</p>
            <div style="clear:both" ></div>

            </div>
            </div>
         `;
      } else if (newdata.obj === this.hid) {
        this.$refs.chatWin.innerHTML += `
            <div class="mMes">
            ${date}
            <div>
            <p style="float: right;padding:5px"">${this.mtitle}</p>
            <div style="clear:both" ></div>
            <p style="background:#ccc; float: right;
                border-radius: 3px;padding:5px">${newdata.msg}</p>
            <div style="clear:both" ></div>

            </div>
            </div>
         `;
      }
    }
    this.$refs.chatWin.scrollTop = this.$refs.chatWin.scrollHeight;
  },
  updated() {
    this.$refs.chatWin.scrollTop = this.$refs.chatWin.scrollHeight;
  },
  destroyed() {
    // this.ws.close();
    this.hid = "";
  }
};
</script>
<style  scoped>
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
.van-nav-bar__text {
  color: #000;
}
/* 聊天窗口 */
.chatpage {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
}
.chatWin {
  position: absolute;
  top: 72px;
  left: 0px;
  right: 0px;
  bottom: 64px;
  margin: auto;
  background: #fcfcfc;
  border-top: #ccc 1px solid;
  box-sizing: border-box;
  padding: 10px;
  overflow: auto;
}

/* 输入框 */
.scanf {
  position: fixed;
  bottom: 0;
  background: #eee;
  box-shadow: 0px -5px 10px #ccc;
  padding: 7px 10px;
}
.van-cell__value.van-cell__value--alone {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
}
.van-cell .van-field {
  padding: 5px 10px;
  flex: 8;
  width: auto;
}

.van-icon {
  flex: 1;
  font-size: 20px;
  text-align: center;
}
</style>