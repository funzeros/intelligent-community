<template>
    <section>
        <van-nav-bar title="修改房屋" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div class="body">
            <van-cell title="所属片区" is-link @click="showPopup('areaShow')" :value="info.area" />
            <van-cell title="所属楼栋" is-link @click="showPopup('buildShow')" :value="info.build" />
            <van-cell title="所属单元" is-link @click="showPopup('unitShow')" :value="info.unit" />
            <van-cell title="所属房屋" is-link @click="showPopup('houseShow')" :value="info.house" />
            <van-button type="primary" size="large" round class="button" @click="submit">修改</van-button>
        </div>

        <van-popup v-model="areaShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker
                :columns="area"
                show-toolbar
                title="所属片区"
                @cancel="cancel('areaShow')"
                @confirm="onConfirmArea"
            />
        </van-popup>

        <van-popup v-model="buildShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker
                :columns="build"
                show-toolbar
                title="所属楼栋"
                @cancel="cancel('buildShow')"
                @confirm="onConfirmBuild"
            />
        </van-popup>

        <van-popup v-model="unitShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker
                :columns="unit"
                show-toolbar
                title="所属单元"
                @cancel="cancel('unitShow')"
                @confirm="onConfirmUnit"
            />
        </van-popup>

        <van-popup v-model="houseShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker
                :columns="house"
                show-toolbar
                title="所属房屋"
                @cancel="cancel('houseShow')"
                @confirm="onConfirmHouse"
            />
        </van-popup>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            areaShow: false,
            buildShow: false,
            unitShow: false,
            houseShow: false,

            info: {},
            build: [],
            identity: ["业主", "家属", "租客"],
            unit: [],
            house: [],
            fId: this.$route.params.fId
        };
    },
    computed: {
        ...mapState({
            houselists: state => state.register.houselists,
            area: state => state.register.areas,
            houseList: state => state.mine.per_houseList
        })
    },
    mounted() {
        for (let i of this.houselists) {
            this.build.push(i.build);
            for (let j of i.units) {
                this.unit.push(j.unit);
                for (let k of j.houses) {
                    this.house.push(k);
                }
            }
        }

        for (let house of this.houseList) {
            if (house.fId == this.fId) {
                for (let key in house) {
                    this.info[key] = house[key];
                }
            }
        }

        this.unit = new Set(this.unit);
        this.unit = Array.from(this.unit);

        this.house = new Set(this.house);
        this.house = Array.from(this.house);
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        showPopup(attr) {
            this[attr] = true;
        },
        cancel(attr) {
            this[attr] = false;
        },
        onConfirmArea(value) {
            this.info.area = value;
            this.areaFlag = false;
            this.areaShow = false;
        },
        onConfirmBuild(value) {
            this.info.build = value;
            this.buildFlag = false;
            this.buildShow = false;
        },
        onConfirmUnit(value) {
            this.info.unit = value;
            this.unitShow = false;
        },
        onConfirmHouse(value) {
            this.info.house = value;
            this.houseShow = false;
        },
        ...mapActions({
            editHouseList: "mine/editHouseList"
        }),
        submit() {
            this.$dialog
                .confirm({
                    title: "修改",
                    message: "你确定要修改吗?"
                })
                .then(
                    () => {
                        // 可验证数据是否修改后提交(优化)
                        //数据提交请求
                        for (let house of this.houseList) {
                            if (house.cId == this.cId) {
                                for (let key in house) {
                                    house[key] = this.info[key];
                                }
                            }
                        }
                        this.$router.push({ name: "houseindex" });
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
    padding: 10px 16px;
}
.button {
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 90%;
}
</style>