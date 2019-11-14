<template>
    <section>
        <van-nav-bar
            title="我的车辆"
            left-text="返回"
            right-text="添加车辆"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight()"
            class="title"
        />

        <div class="body">
            <van-swipe-cell :key="carinfo.c_id" v-for="carinfo of carList">
                <van-cell
                    :border="false"
                    :title="getTitle(getIdentity((houseList[0] && houseList[0].identity) || 0),carinfo.carColor,carinfo.licensePlate)"
                    @click="goDetail(carinfo)"
                    value=">"
                />

                <template slot="right">
                    <van-button square type="info" text="编辑" @click="changeCar(carinfo)" />
                    <van-button square type="danger" text="删除" @click="deleteCar(carinfo)" />
                </template>
            </van-swipe-cell>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            carinfos: []
        };
    },
    computed: {
        ...mapState({
            carList: state => state.mine.carList,
            houseList: state => state.mine.houseList
        }),
        getTitle(identity, color, licensePlate) {
            return (identity, color, licensePlate) => {
                return identity + " " + color + " " + licensePlate;
            };
        },
        getIdentity(identity) {
            return identity => {
                switch (identity) {
                    case "0":
                        return "业主";
                    case "1":
                        return "家属";
                    case "2":
                        return "租客";
                    default:
                        return "访客";
                }
            };
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight(carinfo) {
            this.$router.push({
                name: "addcar"
            });
        },
        changeCar(carinfo) {
            this.$router.push({ name: "changecar", params: { carinfo } });
        },
        goDetail(carinfo) {
            this.$router.push({ name: "cardetail", params: { carinfo } });
        },
        ...mapActions({
            delete: "mine/delete"
        }),
        deleteCar(carinfo) {
            this.$dialog
                .confirm({
                    title: "删除",
                    message: "你确定要删除吗?"
                })
                .then(
                    () => {
                        // 可验证数据是否修改后提交(优化)
                        //数据提交请求
                        this.delete(["carList", "c_id", carinfo.c_id]);
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
    margin-top: 14%;
}
section {
    overflow: hidden;
}
.title {
    position: fixed;
}
</style>