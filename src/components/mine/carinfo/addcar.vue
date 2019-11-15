<template>
    <section>
        <van-nav-bar
            title="添加车辆"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />
        <div class="body">
            <van-cell-group>
                <van-field
                    v-model="info.cNumber"
                    label="车辆号码"
                    placeholder="请输入车牌号码"
                    input-align="right"
                />
                <van-field
                    v-model="info.cType"
                    label="车辆类型"
                    placeholder="请输入车辆类型"
                    input-align="right"
                />
                <van-field
                    v-model="info.cColor"
                    label="车辆颜色"
                    placeholder="请输入车辆颜色"
                    input-align="right"
                />
                <van-field
                    v-model="info.cFrameNumber"
                    label="车架号"
                    placeholder="请输入车架号"
                    input-align="right"
                />
                <van-field
                    v-model="info.cVehicleNumber"
                    label="车辆编号"
                    placeholder="请输入车辆编号"
                    input-align="right"
                />
            </van-cell-group>
            <van-button
                type="primary"
                size="large"
                round
                class="button"
                @click="submit"
                :disabled="canUse"
            >添加</van-button>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            info: {
                cColor: "",
                cVehicleNumber: "",
                cType: "",
                cFrameNumber: "",
                cNumber: ""
            },
        };
    },
    computed: {
        ...mapState({
            carList: state => state.mine.per_carList,
            userInfo: state => state.mine.per_userInfo
        }),
        canUse() {
            return !(
                this.info.cColor &&
                this.info.carFrameNumber &&
                this.info.carNumber &&
                this.info.cVehicleNumber &&
                this.info.cType
            );
        }
    },
    methods: {
        ...mapActions({
            addCarList: "mine/addCarList"
        }),
        onClickLeft() {
            this.$router.go(-1);
        },
        submit() {
            this.$dialog
                .confirm({
                    title: "添加",
                    message: "你确定要添加吗?"
                })
                .then(
                    () => {
                        //修改到vuex中,提交到后台
                        //参数this.info
                        this.$router.push({ name: "carindex" });
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
    margin-top: 12%;
    padding: 0 4%;
}
section {
    overflow: hidden;
}
.title {
    position: fixed;
    width: 100%;
}
.button {
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 90%;
}
</style>