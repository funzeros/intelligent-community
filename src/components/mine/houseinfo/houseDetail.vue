<template>
    <section class="contain">
        <van-nav-bar
            title="房屋信息"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />
        <div class="houseDeatil">
            <van-cell-group :key="attr.id" v-for="attr of attrs">
                <van-cell :title="attr.attr" :value="getAttr(attr)"/>
            </van-cell-group>

            <van-cell-group v-if="$route.params.identity==2">
                <van-cell title="合同开始时间" :value="$route.params.contract_start_time" />
                <van-cell title="合同结束时间" :value="$route.params.contract_end_time" />
                <div class="imgProve">
                    <article>相关证明</article>
                    <aside>
                        <img :src="getImg('/img/id1.jpg')" alt />
                    </aside>
                </div>
            </van-cell-group>

            <van-cell-group  v-if="$route.params.identity==0">
                <van-cell title="建筑面积" value="168.00m²"/>
                <van-cell title="房屋用途" value="暂无"/>
                <van-cell title="住户可见" value="暂无"/>
                <van-cell title="交付时间" value="暂无"/>
                <van-cell title="产权性质" value="暂无"/>
                <van-cell title="户型" value="3房两室两厅"/>
                <van-cell title="朝向" value="朝南"/>
                <van-cell title="入住时间" value="1900-01-01"/>
                <van-cell title="入住时间" value="1900-01-01"/>
                <van-cell title="入住时间" value="1900-01-01"/>
                <van-cell title="入住时间" value="1900-01-01"/>

                <!-- 房屋证件 -->
            </van-cell-group>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            attrs: [
                { id: "identity", attr: "身份类型" },
                { id: "area", attr: "所属片区" },
                { id: "build", attr: "所属楼栋" },
                { id: "unit", attr: "所属单元" },
                { id: "house", attr: "所属房屋" }
            ]
        };
    },
    computed: {
        exitButton() {
            return this.$route.params.operation == 0 ||
                this.$route.params.operation == 1
                ? true
                : false;
        },
        getImg(url) {
            return url => url;
        },
        getAttr(attr) {
            return attr => {
                if (attr.id == "identity") {
                    switch (this.$route.params[attr.id]) {
                        case 0:
                            return "业主";
                        case 1:
                            return "家属";
                        case 2:
                            return "租客";
                    }
                } else {
                    return this.$route.params[attr.id];
                }
            };
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
.contain{
    overflow: hidden;
}
.houseDeatil {
    padding: 0 15px;
    margin-bottom: 13%;
    margin-top: 13%;
}
.van-button {
    margin-top: 100px;
}
.title{
    width: 100%;
    position: fixed;
}
article {
    font-size: 14px;
}
.imgProve {
    display: flex;
    padding: 10px 16px;
}
img {
    width: 200px;
}
</style>