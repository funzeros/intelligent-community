<template>
    <section class="contain">
        <van-nav-bar title="更换头像" left-text="返回" left-arrow @click-left="onClickLeft" class="title" />

        <div class="body">
            <van-uploader :after-read="afterRead" image-fit="cover" accept="image/*">
                <van-image round width="150px" height="150px" :src="url" />
            </van-uploader>

            <van-button type="primary" size="large" round class="button" @click="submit">修改头像</van-button>
        </div>
    </section>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
    data() {
        return {
            url: ""
        };
    },
    mounted() {
        this.url = this.userInfo.u_imge;
    },
    computed: {
        ...mapState({
            userInfo: state => state.mine.userInfo
        })
    },
    methods: {
        ...mapActions({
            setUserAttr:"mine/setUserAttr"
        }),
        onClickLeft() {
            this.$router.go(-1);
        },
        afterRead(file) {
            this.url = file.content;
        },
        submit() {
            this.$dialog
                .confirm({
                    title: "提交",
                    message: "你确定要提交吗?"
                })
                .then(
                    () => {
                        // 可验证数据是否修改后提交(优化)
                        //数据提交请求
                        this.setUserAttr(['u_imge',this.url]);
                        this.$router.push({name:"userinfo"});
                    },
                    () => {
                        return;
                    }
                );
        }
    }
};
</script>

<style lang="css" scoped>
.body {
    text-align: center;
    margin-top: 50%;
    padding: 1% 1%;
}
.button {
    position: absolute;
    bottom: 10%;
    left: 8%;
    width: 84%;
}
.contain{
    height: 100%;;
}

</style>
