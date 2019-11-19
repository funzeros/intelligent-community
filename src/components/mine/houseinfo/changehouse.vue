<template>
    <section class="contain">
        <van-nav-bar
            title="修改房屋"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />

        <div class="body">
            <van-cell title="所属片区" is-link @click="showPopup('areaShow')" :value="info.area" />
            <van-cell title="所属楼栋" is-link @click="showPopup('buildShow')" :value="info.build" />
            <van-cell title="所属单元" is-link @click="showPopup('unitShow')" :value="info.unit" />
            <van-cell title="所属房屋" is-link @click="showPopup('houseShow')" :value="info.house" />
            <div v-if="info.identity == 0">
                <van-field
                    v-model="info.measure"
                    placeholder="请输入所属面积"
                    label="所属面积"
                    input-align="right"
                />
                <van-field
                    v-model="info.ues"
                    placeholder="请输入房屋用途"
                    label="房屋用途"
                    input-align="right"
                />
                <van-field
                    v-model="info.isShow"
                    placeholder="请输入住户可见"
                    label="住户可见"
                    input-align="right"
                />
                <van-field
                    v-model="info.deliver"
                    placeholder="请输入交付时间"
                    label="交付时间"
                    input-align="right"
                />
                <van-field
                    v-model="info.property"
                    placeholder="请输入产权性质"
                    label="产权性质"
                    input-align="right"
                />
                <van-field
                    v-model="info.apartment"
                    placeholder="请输入户型"
                    label="户型"
                    input-align="right"
                />
                <van-field
                    v-model="info.orientation"
                    placeholder="请输入朝向"
                    label="朝向"
                    input-align="right"
                />
                <van-field
                    v-model="info.intime"
                    placeholder="请输入入住时间"
                    label="入住时间"
                    input-align="right"
                />
                <van-cell title="房屋证件">
                    <van-uploader :after-read="afterReadCates" image-fit="cover" accept="image/*">
                        <van-image width="200px" height="150px" :src="info.catesPic" />
                    </van-uploader>
                </van-cell>
                <van-cell title="户型图">
                    <van-uploader :after-read="afterReadApart" image-fit="cover" accept="image/*">
                        <van-image width="200px" height="150px" :src="info.apartPic" />
                    </van-uploader>
                </van-cell>
            </div>
            <div class="buttonC">
                <van-button type="primary" size="large" round class="button" @click="submit">修改</van-button>
            </div>
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
import axios from "axios";
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
            houseList: state => state.mine.per_houseList,
            userInfo:state=>state.mine.per_userInfo
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
            editHouseList: "mine/editHouseList",
            replace:"mine/replace"
        }),
        afterReadCates(file) {
            this.info.catesPic = file.content;
        },
        afterReadApart(file) {
            this.info.apartPic = file.content;
        },
        submit() {
            this.$dialog
                .confirm({
                    title: "修改",
                    message: "你确定要修改吗?"
                })
                .then(
                    async () => {
                        let url = `?uId=${this.info.uId}&fId=${this.info.fId}&area=${this.info.area}&house=${this.info.house}&build=${this.info.build}&unit=${this.info.unit}&identity=${this.info.identity}`;
                        let result = await axios.get("/house/updateHouse"+url)

                        result = await axios.get(`/user/my?uId=${this.userInfo.uId}`);
                        this.replace(['per_houseList','houseList',result.data.data.house]);
                        
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
    margin-top: 13%;
}
.contain {
    margin-bottom: 13%;
    overflow: hidden;
    background: #eee;
}
.button {
    margin-top: 3%;
    width: 90%;
}
.title {
    width: 100%;
    position: fixed;
}
.buttonC {
    text-align: center;
    background: #fff;
}
</style>