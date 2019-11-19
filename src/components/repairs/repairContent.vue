<template>
  <div id="repairContent">
    <div class="content-nav">
      <div class="content-navtext">
        <van-cell-group>
          <van-field 
            v-model="message"
            rows="2"
            autosize
            label="报修内容"
            type="textarea"
            maxlength="50"
            placeholder="请输入报修内容"
            show-word-limit
            class="vanfield" @change="sendcontent(message)"
          />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "repairContent",
  data() {
    return {
      message: "",
    };
  },
  methods: {
       sendcontent(message) {
              this.$store.dispatch('MyRepair/getContent',message);
       }
  }
};
</script>

<style scoped>
.content-nav {
  width: 100%;
  height: 140px;
}

.content-navtext {
  width: 90%;
  height: 130px;
  padding-top: 10px;
  margin: 0 auto;
}

.vanfield {
  height: 120px;
  font-size: 16px;
}
</style>
