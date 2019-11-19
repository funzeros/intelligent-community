<template>
    <section class="contain">
        <van-nav-bar
            title="添加房屋"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />

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

            <!-- 根据身份信息不同来显示不同的添加页面 -->

            <div v-if="info.identity == '业主'">
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
                <van-button
                    type="primary"
                    size="large"
                    round
                    class="button"
                    @click="submit"
                    :disabled="canUse"
                >添加</van-button>
            </div>
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
import axios from "axios";
import { async } from 'q';
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
                house: "",

                measure: "", //面积
                use: "", //房屋用途
                isShow: "", //住户可见
                deliver: "", //交互时间
                property: "", //产权性质
                apartment: "", //户型
                orientation: "", //朝向
                intime: "", //入住时间
                catesPic: "",
                apartPic: ""
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
            houseList: state => state.mine.pre_houseList,
            userInfo:state=>state.mine.per_userInfo
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
            add: "mine/add",
            replace: "mine/replace"
        }),
        editIdentity(identity) {
            switch (identity) {
                case "业主":
                    return 0;
                case "家属":
                    return 1;
                case "租客":
                    return 2;
            }
        },
        afterReadCates(file) {
            this.info.catesPic = file.content;
        },
        afterReadApart(file) {
            this.info.apartPic = file.content;
        },
        submit() {
            this.$dialog
                .confirm({
                    title: "添加",
                    message: "你确定要添加吗?"
                })
                .then(
                    async () => {
                        // 可验证数据是否修改后提交(优化)
                        //数据提交请求
                        this.info.identity = this.editIdentity(
                            this.info.identity
                        );
                        let url = `?uId=${this.userInfo.uId}&area=${this.info.area}&house=${this.info.house}&build=${this.info.build}&unit=${this.info.unit}&identity=${this.info.identity}`

                        let result = await axios.get("/house/addHouse"+url);
                        result = await axios.get(`/user/my?uId=${this.userInfo.uId}`);
                        this.replace(['per_houseList','houseList',result.data.data.house]);
                        

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
.contain {
    overflow: hidden;
}
.body {
    padding: 10px 16px;
    margin-top: 13%;
    margin-bottom: 13%;
    background: #eee;
}
.buttonC {
    padding-top: 5%;
    padding: 10px 16px;
    text-align: center;
    background: #fff;
}
.button {
    width: 90%;
}
.title {
    width: 100%;
    position: fixed;
}
</style>