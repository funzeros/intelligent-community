<template>
    <section>
        <van-nav-bar title="完善信息" left-arrow  @click-left="onClickLeft"></van-nav-bar>

        <van-cell-group style="margin-top:50px;">
            <van-field
                placeholder="请输入您的手机号"
                left-icon="contact"
                v-model="phone"
                @input="check_phone"
                @blur="verphone"  
            />
            <!-- 验证手机号是否注册 -->
        </van-cell-group>
        <div class="err_info">{{phone_msg}}</div>

        <van-cell-group>
            <van-field
                type="password"
                placeholder="请输入密码"
                left-icon="lock"
                v-model="pwd"
                @input="check_pwd"
            />
        </van-cell-group>
        <div class="err_info">{{pwd_msg}}</div>

        <van-cell-group>
            <van-field
                type="password"
                placeholder="请确认密码"
                left-icon="lock"
                v-model="sec_pwd"
                @input="check_sec_pwd"
            />
        </van-cell-group>
        <div class="err_info">{{sec_pwd_msg}}</div>

        <van-cell-group>
            <van-field
                center
                placeholder="请输入短信验证码"
                left-icon="apps-o"
                v-model="code"
                @input="check_code"
            >
                <van-button slot="button" size="small" type="info">发送验证码</van-button>
            </van-field>
        </van-cell-group>
        <div class="err_info">{{code_msg}}</div>
        <!-- <van-button type="info" size="large" class="next" :disabled="isSubmit" @click="submit">下一步</van-button> -->
        <van-button type="default" :style="{background:degree}" class="next" :disabled="isSubmit" @click="submit">下一步</van-button>

    </section>
</template>

<script>
/*
    Auther:施冬冬
*/ 
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            phone: "",
            pwd: "",
            phone_msg: "",
            pwd_msg: "",
            sec_pwd: "",
            sec_pwd_msg: "",
            code: "",
            code_msg: "",
            phone_flag: false,
            pwd_flag: false,
            sec_pwd_flag: false,
            code_flag: false,
            degree:'#ddf'

        };
    },
    computed: {
        isSubmit() {
            if(this.phone_flag &&
                this.pwd_flag &&
                this.sec_pwd_flag &&
                this.code_flag&&!this.$store.state.register.phonehas){
                this.degree='#bbf';
                }
            //提交按钮是否可用
            return !(
                this.phone_flag &&
                this.pwd_flag &&
                this.sec_pwd_flag &&
                this.code_flag&&!this.$store.state.register.phonehas
            );
        },
        ...mapGetters(["getPhone", "getPwd"])
    },
    methods: {
        onClickLeft(){
           let stepcount=this.$store.state.register.stepcount;
            if(stepcount>0)this.$store.state.register.stepcount--;
        },
        check_phone() {
            //匹配手机号
            let bool = /^1[3456789]\d{9}$/.test(this.phone);
            this.phone_msg = bool ? "" : "手机号输入有误,请重新输入";
            this.phone_flag = bool ? true : false;
        },
        check_pwd() {
            //匹配密码
            let flag =
                /\d/g.test(this.pwd.trim()) &&
                /[a-zA-Z]/g.test(this.pwd.trim());
            let bool = flag && /^[0-9a-zA-Z]{8,20}$/.test(this.pwd);
            this.pwd_msg = bool ? "" : "请输入8-20位数字与字母的组合";
            this.pwd_flag = bool ? true : false;
        },
        check_sec_pwd() {
            //检测两次密码是否相同
            let bool = this.sec_pwd == this.pwd;
            this.sec_pwd_msg = bool ? "" : "两次密码输入不一致,请重新输入";
            this.sec_pwd_flag = bool ? true : false;
        },
        check_code() {
            //匹配验证码格式是否正确
            let bool = /^\d{6}$/.test(this.code);
            this.code_msg = bool ? "" : "请输入六位有效数字";
            this.code_flag = bool ? true : false;
        },
        submit() {
            //数据提交
            //将手机号和密码注册到vuex
            // this.changePhone(this.phone);
            // this.changePwd(this.pwd);
            this.$store.dispatch('register/changePhone',this.phone);
            this.$store.dispatch('register/changePwd',this.pwd);
            // console.log(this.$store.state.register.stepcount)
            let stepcount=this.$store.state.register.stepcount;
            if(stepcount<4)this.$store.state.register.stepcount++;
        },
        async verphone(){ //验证手机号是否已注册
            console.log('准备验证手机号');
            
                // this.$store.state.register.phonehas=true;//测试用例

            // await this.$store.dispatch('register/verifyPhone');//调用axios
            console.log('手机号验证完成');
            if(this.$store.state.register.phonehas){
                this.phone_msg = "手机号已经注册";
            }
        }
    }
};
</script>

<style lang="css" scoped>
section {
    padding: 0 25px;
    height: 100%;
}
    /* 标题 */
.register_info .van-nav-bar {
width: 100%;
height: 72px;
line-height: 72px;
}
/* 标题下划线 */
.van-hairline--bottom::after {
border-bottom-width: 0px;
}
/* 标题名字 */
.van-nav-bar__title {
font-size: 20px;
font-weight: 600;
}
/* 标题部分的左箭头 */
.van-nav-bar__arrow {
min-width: 1em;
font-size: 22px;
}
.van-nav-bar .van-icon {
color: #000;
vertical-align: middle;
}
.van-cell-group {
    border: 1px solid #eee;
    border-radius: 8px;
}
[class*="van-hairline"]::after {
    border: 0;
}

.err_info {
    text-align: left;
    text-indent: 2.5em;
    margin: 4px 0;
    height: 21px;
    font-size: 12px;
    color: red;
}
.next{
        width: 300px;
        height: 50px;
        background: #bbf;
        color: #fff;
        border-radius: 5px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 5%;
        margin: auto;
        opacity: 1;
    }
</style>