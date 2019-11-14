<template>
    <section>
        <van-nav-bar title="添加房屋" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div class="body">
            <van-cell title="所属片区" is-link @click="showArea" :value="info.area" />
            <van-cell title="所属楼栋" is-link @click="showBuild" :value="info.build" />
            <van-cell title="所属单元" is-link @click="showUnit" :value="info.unit" />
            <van-cell title="所属房屋" is-link @click="showHouse" :value="info.house" />
            <van-button type="primary" size="large" round class="button" @click="submit">修改</van-button>
        </div>

        <van-popup v-model="areaShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker :columns="area" @change="onChangeArea" />
        </van-popup>

        <van-popup v-model="buildShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker :columns="build" @change="onChangeBuild" />
        </van-popup>

        <van-popup v-model="unitShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker :columns="unit" @change="onChangeUnit" />
        </van-popup>

        <van-popup v-model="houseShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker :columns="house" @change="onChangeHouse" />
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
            house: []
        };
    },
    computed: {
        ...mapState({
            houselists: state => state.register.houselists,
            area: state => state.register.areas,
            houseList: state => state.mine.houseList
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
        this.unit = new Set(this.unit);
        this.unit = Array.from(this.unit);

        this.house = new Set(this.house);
        this.house = Array.from(this.house);
        this.info = this.$route.params.houseinfo;
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        showArea() {
            this.areaShow = true;
        },
        showBuild() {
            this.buildShow = true;
        },
        showUnit() {
            this.unitShow = true;
        },
        showHouse() {
            this.houseShow = true;
        },
        onChangeArea(picker, value, index) {
            this.info.area = value;
        },
        onChangeBuild(picker, value, index) {
            this.info.build = value;
        },
        onChangeUnit(picker, value, index) {
            this.info.unit = value;
        },
        onChangeHouse(picker, value, index) {
            this.info.house = value;
        },
        ...mapActions({
            editHouseList:'mine/editHouseList'
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
                        for (let houselist of this.houseList) {
                            if(houselist.f_id == this.info.f_id){
                                for (let attr in this.info) {
                                    this.editHouseList(attr,this.info[attr]);
                                }
                            }
                        }
                        this.$router.push({name:"carindex"})
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