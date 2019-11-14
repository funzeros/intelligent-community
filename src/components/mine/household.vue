<template>
    <section>
        <van-nav-bar
            title="住户信息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />
        <div class="body">
            <van-cell-group>
                <van-field
                    v-model="userInfo[attr.id]"
                    :key="attr.id"
                    :label="attr[attr.id]"
                    placeholder="未填写"
                    input-align="right"
                    v-for="attr in attrsNot"
                    :disabled="attr.disabled"
                />

                <van-field
                    v-model="info[attr.id]"
                    :key="attr.id"
                    :label="attr[attr.id]"
                    placeholder="未填写"
                    input-align="right"
                    v-for="attr in attrsCan"
                    :disabled="attr.disabled"
                />
            </van-cell-group>

            <van-cell title="是否业主入住" is-link :value="info.isEmpty" @click="showPopup" />
            <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
                <van-picker :columns="isEmpty" @change="onChangeEmpty" />
            </van-popup>

            <!-- 修改证件照片 -->
            <van-cell size="large" title="证件照片">
                <img class="idImg" :src="getImg('/img/id1.jpg')" alt />
                <img class="idImg" :src="getImg('/img/id1.jpg')" alt />
            </van-cell>

            <van-cell size="large" title="采集">
                <img class="idImg" :src="getImg('/img/id1.jpg')" alt />
            </van-cell>

            <van-button
                type="primary"
                size="large"
                round
                class="button"
                @click="submit"
                :disabled="canUse"
            >提交</van-button>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            isEmpty: ["是", "否"],
            info: {
                marStatus: "",
                nationality: "",
                edBackground: "",
                politicStatus: "",
                birthdayPlace: "",
                isEmpty: ""
            },
            show: false,
            attrsNot: [
                { id: "name", name: "姓名", disabled: true },
                { id: "sex", sex: "性别", disabled: true },
                { id: "idtype", idtype: "证件类型", disabled: true },
                { id: "idnum", idnum: "证件号码", disabled: true },
                { id: "nation", nation: "民族", disabled: true }
            ],
            attrsCan: [
                { id: "marStatus", marStatus: "婚姻状况", disabled: false },
                { id: "nationality", nationality: "国籍", disabled: false },
                // { id: "native", native: "籍贯", disabled: false },
                { id: "edBackground", edBackground: "学历", disabled: false },
                {
                    id: "politicStatus",
                    politicStatus: "政治面貌",
                    disabled: false
                },
                {
                    id: "birthdayPlace",
                    birthdayPlace: "户口所在地",
                    disabled: false
                }
            ]
        };
    },
    computed: {
        getImg(url) {
            return url => url;
        },
        ...mapState({
            userInfo: state => state.mine.userInfo
        }),
        canUse() {}
    },
    mounted() {
        this.info.marStatus = this.userInfo.marStatus;
        this.nationality = this.userInfo.nationality;
        this.info.edBackground = this.userInfo.edBackground;
        this.info.politicStatus = this.userInfo.politicStatus;
        this.info.birthdayPlace = this.userInfo.birthdayPlace;
        this.info.isEmpty = this.userInfo.isEmpty;
    },
    methods: {
        ...mapActions({
            setUserAttr:"mine/setUserAttr"
            }),
        onClickLeft() {
            this.$router.go(-1);
        },
        showPopup() {
            this.show = true;
        },
        onChangeEmpty(picker, value) {
            this.info.isEmpty = value;
        },
        submit() {
            this.$dialog
                .confirm({
                    title: "提交",
                    message: "你确定要提交吗?"
                })
                .then(
                    () => {
                        // 可验证数据是否修改后提交(优化)
                        //数据提交请求
                        for(let attr in this.info){
                            this.setUserAttr([attr,this.info[attr]]);
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
    margin-top: 12%;
    padding: 0 4%;
    margin-bottom: 17%;
}
.van-nav-bar{
    position: fixed;
    top:0;
    width: 100%;
}
.idImg {
    width: 200px;
    margin-bottom: 10px;
    padding: 0 10px;
}
.van-cell__value {
    flex: 2;
}
</style>