<template>
    <section>
        <van-nav-bar title="完善信息" left-arrow class="title" @click-left="onClickLeft" />

        <section>
            <article><span class="must"></span>证件照片</article>
            <aside>
                <van-uploader :after-read="onReadId1" class="idInfo">
                    <img :src="getImg('/img/id1.jpg')" alt ref="idinfo1" />
                </van-uploader>

                <van-uploader :after-read="onReadId2" class="idInfo">
                    <img :src="getImg('/img/id2.jpg')" alt ref="idinfo2" />
                </van-uploader>
            </aside>
        </section>

        <section>
            <article><span class="must"></span>采集照片</article>
            <aside>
                <van-uploader :after-read="onReadId3" class="idInfo">
                    <img :src="getImg('/img/id3.jpg')" alt ref="idinfo3" />
                </van-uploader>
            </aside>
        </section>
        <van-button type="info" size="large" class="button" :disabled="isSubmit" @click="submit">完成提交</van-button>
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
            id1_flag:false,
            id2_flag:false,
            id3_flag:false,
        };
    },
    computed: {
        getImg(url) {
            return url => {
                return url;
            };
        },
        isSubmit(){
            return !(this.id1_flag && this.id2_flag && this.id3_flag);
        }
    },
    methods: {
        onClickLeft() {
            //返回上一页
             let stepcount=this.$store.state.register.stepcount;
            if(stepcount>0)this.$store.state.register.stepcount--;
        },
        onReadId1(file) { //文件提交回显
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
        submit(){//提交数据

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
    width: 210px;
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
    margin-right:10px ;
}
aside {
    float: left;
    width: 220px;
    overflow: hidden;
}
    .must::before{
        content: '*';
        color: red;
        height: 100%;
        display: block;
        position: absolute;
        left: -10px;
        top: -13px;
        line-height: 46px;
    }
</style>