<template>
  <div class="publish">
    <van-nav-bar title="发布帖子" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="val" placeholder="标题" />
      <van-cell-group>
        <van-field v-model="msg" rows="10" autosize type="textarea" placeholder="描述内容请尽情发挥" />
      </van-cell-group>
      <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="3" delete="delete"/>
      <span class="tx">最多上传3张图片</span>
      <van-button type="info" :class="['fabu']" @click="pulish(val,msg)">发布</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      url: [],
      val: "",
      msg: "",
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        name: "neighborhood"
      });
    },
    async afterRead(file) {
      // this.url = file.content;
      let param = new FormData();
      param.append("file", file.file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      let result = await axios.post("/uploadImage", param, config);
      this.url.push("http://116.62.38.213:8888/" + result.data.data);
      console.log(this.url)
      this.$toast('图片上传成功');
    },
    delete(){
      this.url = [];
    },
    pulish(val, msg) {
      this.$store.dispatch("neighbor/sendPost", {
        uId: this.$store.state.loginData.data.uId,
        tTitle: val,
        tDet: msg,
        tImg: this.url.toString()
      });
      this.val = "";
      this.msg = "";
    }
  }
};
</script>

<style scoped>
/* 标题 */
/* van-field{
    height: 30px;
} */
.van-cell-group {
  height: 280px;
}
.van-field__control {
  height: 30px;
  font-size: 16px;
}
.fabu {
  display: block;
  width: 100%;
  border-radius: 5px;
}
.van-uploader {
  display: block;
  padding-top: 10px;
  background: #fff;
  padding: 10px;
}
.tx {
  display: block;
  color: #ccc;
  font-size: 12px;
  padding-bottom: 10px;
  background: #fff;
}
/* .van-field__control {
    height: 100px!important;
} */
</style>