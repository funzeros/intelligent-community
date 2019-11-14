<template>
    <section>
        <van-nav-bar
            title="编辑车辆"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />
        <div class="body">
            <van-cell-group>
                <van-field
                    v-model="info.licensePlate"
                    label="车辆号码"
                    placeholder="请输入车牌号码"
                    input-align="right"
                />
            </van-cell-group>

            <van-cell title="车辆类型" is-link @click="showType" :value="info.carType" />
            <van-cell title="车辆颜色" is-link @click="showColor" :value="info.carColor" />

            <van-cell-group>
                <van-field
                    v-model="info.carFrame"
                    label="车架号"
                    placeholder="请输入车架号"
                    input-align="right"
                />
                <van-field
                    v-model="info.carNumber"
                    label="车辆编号"
                    placeholder="请输入车辆编号"
                    input-align="right"
                />
            </van-cell-group>

            <van-button type="primary" size="large" round class="button" @click="submit">修改</van-button>
        </div>
        <van-popup v-model="typeShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker :columns="type" @change="onChangeType" />
        </van-popup>
        <van-popup v-model="colorShow" :style="{ height: '30%' }" position="bottom" round>
            <van-picker :columns="color" @change="onChangeColor" />
        </van-popup>
    </section>
</template>

<script>
export default {
    data() {
        return {
            info: this.$route.params.carinfo,
            typeShow: false,
            colorShow: false,
            type: ["小型车", "中型车", "大型车", "公交车", "货车"],
            color: [
                "白色",
                "粉色",
                "蓝色",
                "黑色",
                "紫色",
                "红色",
                "灰色",
                "黄色",
                "绿色",
                "绿色"
            ]
        };
    },
    computed: {
        getAttr(attr) {
            return attr => this.$route.params.carinfo[attr];
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        },
        showType() {
            this.typeShow = true;
        },
        onChangeType(picker, value, index) {
            this.info.carType = value;
        },
        showColor() {
            this.colorShow = true;
        },
        onChangeColor(picker, value, index) {
            this.info.carColor = value;
        },
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
                        this.$router.push({name:"carindex"});
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
}
section {
    overflow: hidden;
}
.title {
    position: fixed;
}
.button {
    position: absolute;
    bottom: 10%;
    left: 5%;
    width: 90%;
}
</style>