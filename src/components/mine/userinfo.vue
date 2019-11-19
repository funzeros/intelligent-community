<template>
    <section>
        <van-nav-bar
            title="账户信息"
            left-text="返回"
            right-text="保存"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />

        <van-cell is-link class="firstTitle" to="/main/mine/changeheader">
            <template slot="title">
                <span class="title">头像</span>
                <van-image round width="30px" height="30px" fit="cover" :src="userInfo.uImge" />
            </template>
        </van-cell>

        <van-field v-model="info.username" label="用户名" placeholder="未填写" input-align="right" />
        <van-field v-model="info.name" label="姓名" placeholder="未填写" input-align="right" />

        <van-cell title="生日" is-link :value="info.birthday" @click="showPopup('showBir')" />
        <van-popup v-model="showBir" position="bottom" :style="{ height: '40%' }">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                @confirm="getTime"
                @cancel="onCancel('showBir')"
            />
        </van-popup>

        <van-cell title="性别" is-link :value="info.sex" @click="showPopup('showSex')" />
        <van-popup v-model="showSex" position="bottom" :style="{ height: '40%' }">
            <van-picker
                :columns="columns"
                show-toolbar
                title="性别"
                @confirm="onConfirmSex"
                @cancel="onCancel('showSex')"

            />
        </van-popup>

        <van-cell title="手机号" is-link arrow-direction="none" :value="userInfo.phonenum" />
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
export default {
    data() {
        return {
            showSex: false,
            showBir: false,
            columns: ["男", "女"],
            currentDate: new Date(),
            minDate: new Date("1909-01-01"),
            info: {
                name: "",
                username: "",
                birthday: "",
                sex: ""
            }
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.mine.per_userInfo
        })
    },
    mounted() {
        this.info.name = this.userInfo.name;
        this.info.username = this.userInfo.username;
        this.info.birthday = this.userInfo.birthday;
        this.info.sex = this.userInfo.sex;
        this.info.uId = this.userInfo.uId;
    },
    methods: {
        ...mapActions({
            setUserAttr: "mine/setUserAttr"
        }),
        onClickLeft() {
            this.$router.push({
                name:"mineindex"
            });
        },
        onCancel(attr) {
            this[attr] = false;
        },
        showPopup(attr) {
            this[attr] = true;
        },
        getSex(sex){
            return sex => {
                return sex == 0 ? "男":"女"
            }
        },
        onClickRight() {
            this.$dialog
                .confirm({
                    title: "提交",
                    message: "你确定要提交吗?"
                })
                .then(
                    async () => {
                        // 可验证数据是否修改后提交(优化)
                        //数据提交请求
                        let param = new FormData();
                        param.append('uId',this.info.uId);
                        param.append('name',this.info.name);
                        param.append('username',this.info.username);
                        param.append('birthday',this.info.birthday);
                        param.append('sex',this.info.sex == "男" ? 0 : 1);
                        param.append('uImge',this.userInfo.uImge);
                        let config = {
                            headers: { "Content-Type": "multipart/form-data" }
                        };
                        let result = await axios.post("/user/editInform",param,config);
                        result.data.errno?this.$toast('保存失败'):this.$toast('保存成功');
                        for (let attr in this.info) {
                            this.setUserAttr([attr, this.info[attr]]);
                        };
                        this.$router.push({name:'mineindex'});
                        

                    },
                    () => {
                        return;
                    }
                );
        },
        onConfirmSex(value) {
            this.info.sex = value;
            this.showSex = false;
        },
        getTime(value) {
            //日期控件点击确定
            let result = `${value.getFullYear()}-${value.getMonth() +
                1}-${value.getDate()}`;
            this.info.birthday = result;
            this.showBir = false;
        },
        cancel() {
            //日期控件点击取消
            this.showBir = false;
        }
    }
};
</script>

<style lang="css" scoped>
section {
    background: #ffe;
}
.van-nav-bar {
    width: 100%;
    height: 50px;
    line-height: 50px;
}
.van-nav-bar__title {
    font-size: 20px !important;
    font-weight: 550 !important;
}
[class*="van-hairline"]::after {
    border: 0;
}
.firstTitle .van-cell__title {
    text-align: right;
}
.title {
    float: left;
}
</style>