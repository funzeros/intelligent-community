<template>
  <section>
    <van-nav-bar title="完善信息" left-arrow class="title" @click-left="onClickLeft" />

    <section class="zjpic">
      <article>
        <span class="must"></span>证件照片
      </article>
      <aside>
        <van-uploader :after-read="onReadId1" class="idInfo">
          <img :src="getImg('/images/id1.jpg')" alt ref="idinfo1" />
        </van-uploader>

        <van-uploader :after-read="onReadId2" class="idInfo">
          <img :src="getImg('/images/id2.jpg')" alt ref="idinfo2" />
        </van-uploader>
      </aside>
    </section>

    <section class="cjpic">
      <article>
        <span class="must"></span>采集照片
      </article>
      <aside>
        <van-uploader :after-read="onReadId3" class="idInfo">
          <img :src="getImg('/images/id3.jpg')" alt ref="idinfo3" />
        </van-uploader>
      </aside>
    </section>
    <van-button
      type="default"
      :style="{background:degree}"
      size="large"
      class="next"
      :disabled="isSubmit"
      @click="submit"
    >完成提交</van-button>
  </section>
</template>

<script>
/*
    Auther:施冬冬
    img文件夹存放在public根目录下
    若要提交图片数据,请在submit方法下操作,将图片数据存放到vuex中后提交
    若不提交,将van-uploader删除即可
    照相功能已经修改为文件上传
*/

export default {
  data() {
    return {
      id1_flag: false,
      id2_flag: false,
      id3_flag: false,
      degree: "#ddf"
    };
  },
  computed: {
    getImg(url) {
      return url => {
        return url;
      };
    },
    isSubmit() {
      if (this.id1_flag && this.id2_flag && this.id3_flag) {
        this.degree = "#bbf";
      }
      return !(this.id1_flag && this.id2_flag && this.id3_flag);
    }
  },
  methods: {
    onClickLeft() {
      //返回上一页
      let stepcount = this.$store.state.register.stepcount;
      if (stepcount > 0) this.$store.state.register.stepcount--;
    },
    onReadId1(file) {
      //文件提交回显
      this.$refs.idinfo1.src = file.content;
      this.id1_flag = true;
      // console.log(file.file.name);
    },
    onReadId2(file) {
      this.$refs.idinfo2.src = file.content;
      this.id2_flag = true;
    },
    onReadId3(file) {
      this.$refs.idinfo3.src = file.content;
      this.id3_flag = true;
    },
    submit() {
      //提交数据
      this.$dialog.confirm({
        title: '提交注册信息',
        message: '请确认提交'
      }).then(async() => {
        // on confirm
        await this.$store.dispatch('register/subRegInfo');//调用axios发送注册数据
        console.log('123');
        if(this.$store.state.register.regsuccess){
          this.$toast('注册成功,2秒后跳转至登录界面');
          setTimeout(()=>{
            this.$router.push("/login");
          },2000);
        }else{
          this.$toast('注册失败');
        }
      }).catch(() => {
        // on cancel
      });
      
    }
  }
};
</script>

<style lang="css" scoped>
section {
  padding: 0 25px;
}
/* 标题 */
.van-nav-bar {
  width: 100%;
  height: 72px;
  line-height: 72px;
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

[class*="van-hairline"]::after {
  border: 0;
}

img {
  height: 133px;
  width: auto;
  margin-bottom: 30px;
}
article {
  text-align: left;
  font-size: 12px;
  float: left;
  position: relative;
  font-size: 12px;
  color: #777;
  margin-left: -10px;
  /* margin-right: 10px; */
}
aside {
  /* float: left; */
  width: 220px;
  overflow: hidden;
  margin: auto;
  
}
.must::before {
  content: "*";
  color: red;
  height: 100%;
  display: block;
  position: absolute;
  left: -10px;
  top: -13px;
  line-height: 46px;
}

.next {
  width: 300px;
  height: 50px;
  background: #bbf;
  color: #fff;
  border-radius: 5px;
  position: absolute;
  opacity: 1;
  left: 0;
  right: 0;
  bottom: 5%;
  margin: auto;
}
.idInfo.van-uploader {
  width: 210px;
}
</style>