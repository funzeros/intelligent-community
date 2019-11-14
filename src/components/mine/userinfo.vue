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
                <van-image round width="30px" height="30px" fit="cover" :src="userInfo.u_imge" />
            </template>
        </van-cell>
        <!-- <van-cell title="用户名" is-link arrow-direction="none" :value="userInfo.username" />
        <van-cell title="姓名" is-link arrow-direction="none" :value="userInfo.name" /> -->

        <van-field
            v-model="info.username"
            label="用户名"
            placeholder="未填写"
            input-align="right"
        />
        <van-field
            v-model="info.name"
            label="姓名"
            placeholder="未填写"
            input-align="right"
        />

        <van-cell title="生日" is-link :value="info.birthday" @click="showPopupBir" />
        <van-popup v-model="showBir" position="bottom" :style="{ height: '40%' }">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                @confirm="getTime"
                @cancel="cancel"
            />
        </van-popup>

        <van-cell title="性别" is-link :value="info.sex" @click="showPopupSex" />
        <van-popup v-model="showSex" position="bottom" :style="{ height: '20%' }">
            <van-picker :columns="columns" @change="onChangeSex" />
        </van-popup>

        <van-cell title="手机号" is-link arrow-direction="none" :value="userInfo.phonenum" />
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            showSex: false,
            showBir: false,
            columns: ["男", "女"],
            currentDate: new Date(),
            minDate: new Date("1909-01-01"),
            info:{
                name:"",
                username:"",
                birthday:"",
                sex:""
            }
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.mine.userInfo
        })
    },
    mounted() {
        this.info.name = this.userInfo.name;
        this.info.username = this.userInfo.username;
        this.info.birthday = this.userInfo.birthday;
        this.info.sex = this.userInfo.sex;
    },
    methods: {
        ...mapActions({
            setUserAttr:'mine/setUserAttr'
        }),
        onClickLeft() {
            this.$router.go(-1);
        },
        onClickRight() {
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
        },
        showPopupSex() {
            this.showSex = true;
        },
        onChangeSex(picker, value, index) {
            this.info.sex = value;
        },
        showPopupBir() {
            this.showBir = true;
        },
        onChangeBir(picker, value, index) {
            this.userDetail.birthday = value;
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