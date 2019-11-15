<template>
  <div class="publish">
    <van-nav-bar title="发布帖子" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="value" placeholder="标题" />
      <van-cell-group>
        <van-field
          v-model="message"
          rows="10"
          autosize
          type="textarea"
          placeholder="描述内容请尽情发挥"
        />
      </van-cell-group>
      <van-uploader :after-read="afterRead" v-model="fileList" multiple :max-count="3"/>
      <span class="tx">最多上传3张图片</span>
      <van-button type="info" :class="['fabu']">发布</van-button>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      message:'',
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$store.state.neighbor.ll = 0;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>

<style scope>
/* 标题 */
/* van-field{
    height: 30px;
} */
.van-cell-group{
    height: 280px;
}
.van-field__control {
  height: 30px;
  font-size: 16px;
}
.fabu{
    display: block;
    width: 100%;
    border-radius: 5px
}
.van-uploader{
    display: block;
    padding-top: 10px;
    background: #fff;
    padding: 10px;
}
.tx{
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