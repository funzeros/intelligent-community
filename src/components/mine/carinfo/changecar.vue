<template>
    <section>
        <van-nav-bar
            title="编辑车辆"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />
        <div class="body">
            <van-cell-group>
                <van-field
                    v-model="getInfo().cVehicleNumber"
                    label="车辆号码"
                    placeholder="请输入车牌号码"
                    input-align="right"
                />
                <van-field
                    v-model="getInfo().cNumber"
                    label="车辆类型"
                    placeholder="请输入车牌类型"
                    input-align="right"
                />
                <van-field
                    v-model="getInfo().cColor"
                    label="车辆颜色"
                    placeholder="请输入车牌颜色"
                    input-align="right"
                />
                <van-field
                    v-model="getInfo().cFrameNumber"
                    label="车架号"
                    placeholder="请输入车架号"
                    input-align="right"
                />
                <van-field
                    v-model="getInfo().cNumber"
                    label="车辆编号"
                    placeholder="请输入车辆编号"
                    input-align="right"
                />
            </van-cell-group>
            <van-button type="primary" size="large" round class="button" @click="submit">修改</van-button>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            cId: this.$route.params.cId,
            info: {}
        };
    },
    computed: {
        getAttr(attr) {
            return attr => this.$route.params.carinfo[attr];
        },
        ...mapState({
            carList: state => state.mine.per_carList,
            oldCarList: state => state.mine.carList
        }),
        getInfo() {
            return () => {
                for (let car of this.carList) {
                    if (car.cId == this.cId) {
                        for (let key in car) {
                            this.info[key] = car[key];
                        }
                    }
                }
                return this.info;
            };
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push({ name: "carindex" });
        },
        cancel(attr) {
            this[attr] = false;
        },
        submit() {
            this.$dialog
                .confirm({
                    title: "修改",
                    message: "你确定要修改吗?"
                })
                .then(
                    () => {
                        for (let car of this.carList) {
                            if (car.cId == this.cId) {
                                for (let key in car) {
                                    car[key] = this.info[key];
                                }
                            }
                        }
                        //已在vuex中完成修改,需提交到后台
                        //post请求,参数为this.info

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