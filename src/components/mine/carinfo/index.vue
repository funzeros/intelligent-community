<template>
    <section class="contain">
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
            <div class="tips" v-if="carList.length==0">您还没有添加车辆,快去右上角添加吧~么么哒(づ￣ 3￣)づ</div>
            <van-swipe-cell :key="carinfo.c_id" v-for="carinfo of carList">
                <van-cell
                    :border="false"
                    :title="getTitle(getIdentity((houseList[0] && houseList[0].identity) || 0),carinfo.cColor,carinfo.cNumber)"
                    @click="goDetail(carinfo)"
                    value=">"
                />

                <template slot="right">
                    <van-button square type="info" text="编辑" @click="changeCar(carinfo.cId)" />
                    <van-button square type="danger" text="删除" @click="deleteCar(carinfo.cId)" />
                </template>
            </van-swipe-cell>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import {Dialog} from "vant";
export default {
    data() {
        return {
            carinfos: []
        };
    },
    computed: {
        ...mapState({
            carList: state => state.mine.per_carList,
            houseList: state => state.mine.per_houseList
        }),
        getTitle(identity, color, licensePlate) {
            return (identity, color, licensePlate) => {
                return identity + " " + color + " " + licensePlate;
            };
        },
        getIdentity(identity) {
            return identity => {
                switch (identity) {
                    case 0:
                        return "业主";
                    case 1:
                        return "家属";
                    case 2:
                        return "租客";
                    default:
                        return "访客";
                }
            };
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push({name:"mineindex"});
        },
        onClickRight(carinfo) {
            this.$router.push({
                name: "addcar"
            });
        },
        changeCar(cId) {
            this.$router.push({ name: "changecar", params: { cId } });
        },
        goDetail(carinfo) {
            this.$router.push({ name: "cardetail", params: { carinfo } });
        },
        ...mapActions({
            delete: "mine/delete"
        }),
        deleteCar(cId) {
            this.$dialog
                .confirm({
                    title: "删除",
                    message: "你确定要删除吗?"
                })
                .then(
                    async () => { 
                        let result = await axios.get(`/my/deleteCar?cId=${cId}`);
                        if(result.data.data==1){
                                Dialog.alert({
                                title: "删除",
                                message: "该项清除成功"
                            }).then(() => {
                                for(let key in this.carList){
                                    if(cId == this.carList[key].cId){
                                        this.delete(['per_carList','cId',cId]);
                                    return;
                                }
                        }
                            });
                        }
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
.tips {
    width: 70%;
    margin: 60% auto;
    height: 25%;
    background: #eee;
    border-radius: 25px;
    padding: 13% 3% 0;
    box-sizing: border-box;
    text-align: center;
    line-height: 34px;
    font-size: 12px;
}
.contain,
.body {
    height: 100%;
}
section {
    overflow: hidden;
}
.title {
    position: fixed;
    width: 100%;
}
</style>