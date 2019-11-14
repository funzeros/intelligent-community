<template>
    <section class="contain">
        <van-nav-bar
            title="我的房产"
            left-text="返回"
            right-text="添加房屋"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            class="title"
        />

        <div class="body">
            <div class="tips" v-if="houseList.length==0">
                您还没有添加房屋,快去右上角添加吧~么么哒(づ￣ 3￣)づ
            </div>
            <van-swipe-cell :key="houseinfo.f_id" v-for="houseinfo of houseList">
                <van-cell
                    v-if="houseinfo"
                    :border="false"
                    :title="getTitle(houseinfo.identity,houseinfo.build,houseinfo.unit,houseinfo.house)"
                    :value="houseinfo.state"
                    @click="goDetail(houseinfo)"
                />

                <template slot="right">
                    <van-button square type="info" text="编辑" @click="changeHouse(houseinfo)" />
                    <van-button
                        square
                        type="danger"
                        text="删除"
                        @click="deleteHouse(houseinfo.f_id)"
                    />
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
            houseinfos: []
        };
    },
    mounted() {
        this.houseinfos = this.houseList;
    },
    computed: {
        ...mapState({
            houseList: state => state.mine.houseList
        }),
        getTitle(identity, build, unit, house) {
            return (identity, build, unit, house) => {
                switch (identity) {
                    case "0":
                        return build + unit + house + " " + "业主";
                    case "1":
                        return build + unit + house + " " + "家属";
                    case "2":
                        return build + unit + house + " " + "租客";
                }
            };
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push({name:"mineindex"});
        },
        onClickRight() {
            this.$router.push({
                name: "addhouse"
            });
        },
        changeHouse(houseinfo) {
            this.$router.push({
                name: "changehouse",
                params: { houseinfo }
            });
        },
        goDetail(houseinfo) {
            this.$router.push({
                name: "housedetail",
                params: { ...houseinfo }
            });
        },
        ...mapActions({
            delete: "mine/delete"
        }),
        deleteHouse(f_id) {
            this.$dialog
                .confirm({
                    title: "删除",
                    message: "你确定要删除吗?"
                })
                .then(
                    () => {
                        this.delete(["houseList", "f_id", f_id]);
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
    padding: 0 2%;
}
.tips{
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
.contain,.body{
    height: 100%;
}
section {
    overflow: hidden;
}
#main{
    background-color: #fff;
}
</style>