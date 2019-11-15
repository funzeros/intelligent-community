<template>
  <div id="repairUpdate">
    <div class="updateContent">
       <div class="content-nav">

          <van-uploader v-model="fileList" multiple />
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'repairUpdate',
  data() {
    return {
       fileList: [],
    }
  },
   methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
}
</script>

<style scoped>
.updateContent {
  width: 100%;
  height: 130px;
  margin-bottom: 40px;
}

.content-nav {
   width: 90%;
  height: 130px;
  padding-top: 10px;
  margin: 0 auto;
  
}

.content-nav div {
  width:100px;
  height: 20px;
  font-size: 14px;
  margin-bottom: 10px;
  
}
</style>