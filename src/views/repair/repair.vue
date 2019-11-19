<template>
  <!-- 报修维修 2019-11-12 杨汗青 -->
  <div id="repair" class="content">
    <div class="titles">
      <van-icon name="arrow-left" class="leftIcon" @click="gotoUpstate" />
      <div class="title">报事报修</div>
      <div class="myRecord" @click="gotoMyRepair">历史报修</div>
    </div>

    <div class="content-text">
      <div class="repairtext">
        <repairSelect></repairSelect>
        <hr />
        <repairhouse></repairhouse>
        <repairContent></repairContent>
        <hr />
        <repairUpdate></repairUpdate>
        <hr />

        <van-button
          type="primary"
          size="large"
          @click="algoning"
          :disabled="stte"
          >提交</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import repairSelect from "../../components/repairs/repairSelect";
import repairhouse from "../../components/repairs/repairhouse";
import repairContent from "../../components/repairs/repairContent";
import repairUpdate from "../../components/repairs/repairUpdate";
import axios from "axios";
import qs from "qs";

export default {
  name: "repair",
  data() {
    return {
      show: false,
      radio: "1",
      radio1: "2",
      stte: false,
      update: 0 //提交状态
    };
  },
  methods: {
    gotoUpstate() {
      this.$router.go(-1);
    },
    gotoMyCheck() {
      this.$router.push({ name: "myCheckMess" });
    },
    gotoMyRepair() {
      this.$router.push({ name: "myRepair" });
    },
    showPopup() {
      this.show = true;
    },
    algoning() {
      //提交的弹窗内容
      if (
        this.$store.state.MyRepair.addresses.length == 0 &&
        this.$store.state.MyRepair.answers.length == 0
      ) {
        this.$toast("内容未选择!");
      } else if (
        this.$store.state.MyRepair.addresses != 0 &&
        this.$store.state.MyRepair.answers != 0
      ) {
        //提交判断条件
        this.$dialog
          .confirm({
            message: "是否确认提交报修内容?"
          })
          .then(() => {
            var btype = this.$store.state.MyRepair.answers.join();        //必选提交
            var bhouse = this.$store.state.MyRepair.addresses.join();     //必选提交
            let umessage = {
              u_id: this.$store.state.loginData.data.uId,
              bType: btype,
              bHouse: bhouse,
              bText: this.$store.state.MyRepair.messContent
            };

            axios.post("/repairs/report", qs.stringify(umessage)).then(res => {
              console.log(res);
              console.log(res.data.data.bId);
              this.update = res.data.data.bId;
              if (this.update != 0) {
                this.$dialog.alert({
                  message: "提交成功"
                });
              }
            });
          });
      }
    }
  },

  components: {
    repairSelect,
    repairhouse,
    repairContent,
    repairUpdate
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  position: relative;
}

.titles {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid gray;
}

.leftIcon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}

.myRecord {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 5px;
  color: #29b7cb;
}

.content-text {
  position: absolute;
  top: 80px;
  width: 100%;
  background-color: #f8f8f8;
}

.repairtext {
  width: 100%;
  height: 200px;
}

.tablecontent {
  position: relative;
  width: 100%;
  height: 130px;
}

.baoxiutype {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
}

.baoxiuDel {
  position: absolute;
  top: 0;
  right: 0;
  color: #29b7cb;
}

.contentradio {
  width: 100%;
  height: 110px;
  margin-top: 5px;
}

.next-trdio {
  width: 280px;
  height: 100px;
  margin: 0 auto;
}

.vancol1 {
  margin-bottom: 20px;
  border: 1px solid white;
}
.vancol2 {
  margin-bottom: 20px;
  float: right;
  border: 1px solid white;
}
</style>
