<template>
    <section>
        <van-nav-bar title="我的" />
        <div class="body">
            <van-cell is-link class="myInfo" to="/main/mine/userinfo">
            <template slot="title">
                <article>
                    <img :src="userInfo.uImge" alt width="50" height="50" class="head" />
                </article>
                <aside>
                    <div>{{userInfo.name}}</div>
                    <van-tag
                        color="#ffe1e1"
                        text-color="#ad0000"
                        v-if="houseList[0]"
                    >{{getIdentity(houseList[0].identity)}}</van-tag>
                    
                </aside>
            </template>
        </van-cell>
            <div class="tab">
            <van-cell title="住户信息" is-link to="/main/mine/household" />
            <van-cell title="我的房产" is-link :value="getHouseInfo" to="/main/mine/houseinfo" />
            <van-cell title="我的车辆" is-link :value="getCarInfo" to="/main/mine/carinfo" />
        </div>

        <div class="tab">
            <van-cell title="关于小区" is-link to="/main/mine/aboutquarters" />
            <van-cell title="关于物业" is-link to="/main/mine/aboutproperty" />
            <van-cell title="关于我们" is-link to="/main/mine/aboutus" />
        </div>

        <div class="tab">
            <van-cell title="设置" is-link to='/main/mine/set'/>
            <van-cell title="退出登录" is-link @click="logout" />
        </div>
        </div>
    </section>
</template>

<script>
/*
Auther:施冬冬
此文件为一级路由,userinfo为用户信息详情页,
household为住户信息,carinfo为我的车辆,houseinfo为我的房产
二级路由获取参数:可路由传参(推荐)或二级路由单独请求
*/
import { mapState,mapActions } from "vuex";
import axios from "axios";
export default {
    computed: {
        ...mapState({
            userInfo: state => state.mine.per_userInfo,
            carList: state => state.mine.per_carList,
            houseList: state => state.mine.per_houseList,
            loginDate:state =>state.loginData
        }),
        getHouseInfo() {
            return this.houseList.length !== 0
                ? `已绑定${this.houseList.length}套房产`
                : "";
        },
        getCarInfo() {
            return this.carList.length !== 0
                ? `已绑定${this.carList.length}辆车`
                : "";
        },
        getIdentity(identity) {
            //将identity转换
            return identity => {
                switch (identity) {
                    case 0:
                        return "业主";
                    case 1:
                        return "家属";
                    case 2:
                        return "租客";
                }
            };
        }
    },
    mounted(){
        this.$nextTick(()=>{
            //请求数据(个人信息,房屋信息,汽车信息)
            this.getUserInfo(this.loginDate.data.uId);
        })
        this.userInfo.uId = this.loginDate.data.uId;
    },
    methods: {
        ...mapActions({
            getUserInfo:"mine/getUserInfo"
        }),
        logout() {
            //清除登录信息
            //退出登录并跳转到登录界面
            this.$dialog
                .confirm({
                    title: "退出",
                    message: "你确定要退出吗?"
                })
                .then(
                    () => {
                        this.$router.push("/");
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
.myInfo {
    text-align: left;
    background: url(../../../public/images/bk.jpg) no-repeat;
    background-size: 100%;
}
.myInfo .van-cell__right-icon {
    line-height: 50px !important;
}
.head {
    border-radius: 6px;
    border: 2px solid #fff;
}
article {
    float: left;
}
aside {
    float: left;
    margin-top: 5px;
    margin-left: 20px;
}
aside > div {
    color: #fff;
}
.van-cell__title {
    text-align: left;
}
.tab {
    margin-bottom: 10px;
}
</style>