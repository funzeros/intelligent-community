<template>
    <section>
        <van-nav-bar title="车辆信息" left-text="返回" left-arrow @click-left="onClickLeft" />
        <div class="body">
            <van-cell-group :key="attr.id" v-for="attr of attrs">
                <van-cell :title="attr.attr" :value="getAttr(attr.id)" />
            </van-cell-group>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            attrs: [
                { id: "cNumber", attr: "车牌号" },
                { id: "cType", attr: "车辆类型" },
                { id: "cColor", attr: "车辆颜色" },
                { id: "cFrameNumber", attr: "车架号" },
                { id: "cVehicleNumber", attr: "车辆编号" }
            ]
        };
    },
    computed: {
        getAttr(attr){
            return (attr)=>{
                return this.$route.params.carinfo[attr]
            }
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1);
        }
    }
};
</script>

<style lang="css" scoped>
</style>