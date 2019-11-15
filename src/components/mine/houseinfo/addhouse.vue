<template>
    <section>
        <van-nav-bar title="添加房屋" left-text="返回" left-arrow @click-left="onClickLeft" />

        <div class="body">
            <van-cell
                title="身份类型"
                is-link
                @click="showPopup('identityShow')"
                :value="info.identity"
            />
            <van-cell title="所属片区" is-link @click="showPopup('areaShow')" :value="info.area" />
            <van-cell title="所属楼栋" is-link @click="showPopup('buildShow')" :value="info.build" />
            <van-cell title="所属单元" is-link @click="showPopup('unitShow')" :value="info.unit" />
            <van-cell title="所属房屋" is-link @click="showPopup('houseShow')" :value="info.house" />
            <van-button
                type="primary"
                size="large"
                round
                class="button"
                @click="submit"
                :disabled="canUse"
            >添加</van-button>
        </div>

        <van-popup v-model="identityShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker
                :columns="identity"
                show-toolbar
                title="身份类型"
                @cancel="cancel('identityShow')"
                @confirm="onConfirmIdentity"
            />
        </van-popup>

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
            identityShow: false,
            areaShow: false,
            buildShow: false,
            unitShow: false,
            houseShow: false,

            identityFlag: true,
            buildFlag: true,
            areaFlag: true,

            info: {
                identity: "",
                area: "",
                build: "",
                unit: "",
                house: ""
            },
            build: [],
            unit: [],
            house: [],
            identity: ["业主", "家属", "租客"]
        };
    },
    computed: {
        ...mapState({
            houselists: state => state.register.houselists,
            area: state => state.register.areas,
            houseList: state => state.mine.pre_houseList
        }),
        canUse() {
            return this.buildFlag || this.identityFlag || this.areaFlag;
        }
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
        onConfirmIdentity(value) {
            this.info.identity = value;
            this.identityFlag = false;
            this.identityShow = false;
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
            addHouse: "mine/addHouse"
        }),
        editIdentity(identity) {
            switch (identity) {
                case "业主":
                    return "0";
                case "家属":
                    return "1";
                case "租客":
                    return "2";
            }
        },
        submit() {
            this.$dialog
                .confirm({
                    title: "添加",
                    message: "你确定要添加吗?"
                })
                .then(
                    () => {
                        // 可验证数据是否修改后提交(优化)
                        //数据提交请求
                        this.info.identity = this.editIdentity(
                            this.info.identity
                        );


                        //提交完成后清空暂存对象
                        for (let i in this.info) {
                            this.info[i] = "";
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