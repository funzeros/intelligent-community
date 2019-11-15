<template>
    <section class="contain">
        <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="onClickLeft" class="title" />

        <div class="body">
            <van-cell-group>
                <van-switch-cell v-model="checked" title="使用2G/3G/4G网络播放" @change="changeCheck" />
            </van-cell-group>
            <van-button type="info" size="large" class="button" round @click="clear">清除缓存</van-button>
        </div>
    </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Dialog } from 'vant';
export default {
    data(){
        return {
            checked:""
        }
    },
    mounted(){
        this.checked = this.check;
    },
    computed: {
        ...mapState({
            check: state => state.mine.checkedState
        }),
    },
    components: {
        [Dialog.Component.name]: Dialog.Component
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        ...mapActions({
            changeCheck: "mine/changeCheck"
        }),
        clear() {
            this.$dialog
                .confirm({
                    title: "清除缓存",
                    message: "你确定要清除吗?"
                })
                .then(
                    () => {
                        Dialog.alert({
                            title: "清除缓存",
                            message: "缓存清除成功"
                        }).then(() => {
                            this.changeCheck()
                        });
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
.contain {
    overflow: hidden;
    height: 100%;
}
.title {
    width: 100%;
    position: fixed;
}
.body {
    margin-top: 13%;
    padding: 0 4%;
    height: 100%;
}
.button {
    position: fixed;
    bottom: 10%;
    width: 80%;
    left: 10%;
}
</style>