<template>
    <section>
        <van-nav-bar
            :title="getTitle($route.path)"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            class="title"
        />
        <div class="body">
            <h2>{{getBodyTitle($route.path)}}</h2>

            <section class="contain">
                <p
                    v-if="$route.path=='/main/mine/aboutquarters'"
                >小区户型本小区80多栋楼，多为四层，五层，六层，极少七层，主要面积有49平58平73平，楼间距大，采光好生活配套小区北邻500米就是东湖公园东湖银座，小区西北方向1000米就是第 一人民医院教育情况本小区内有迎春中学迎春小学及迎春幼儿园，迎春中学师资力量雄厚，凭房产证可入学，迎春中学新建教学楼。小区不足</p>
                <p
                    v-else-if="$route.path=='/main/mine/aboutproperty'"
                >万科物业秉承“全心全意全为您”的服务宗旨，坚持“服务至诚、精益求精、管理规范、进取创新”质量方针，始终以客户需求为导向，致力为客户提供全面优质物业服务的同时不断创新物业服务模式。近年来万科物业以“懂生活、识品质、汇聚幸福”为核心理念，在“安全、环境、设备设施管理”等传统物业服务工作基础上，又推出“文化、健康、教娱、居家”等诸多创新服务内容。深耕客户资源经营，通过会所、租售中心、社区食堂、长者服务中心、四点半学校等社区配套经营，为不</p>
                <div v-else class="us">
                    <p>浙江微风智能科技有限公司是一家传统与现代化结合的智能化综合性高科技公司，是全国领先的以社区、乡村为智能化核心的智慧城市解决方案的专业提供商和服务商。</p>
                    <p>公司以基于大数据分析和人工智能的基础，自主研发、搭建专业的配套服务体系平台，并安排专业设计团队进行项目深化设计后由公司旗下施工团队进行项目落地，保障项目实施的顺利进行。在不断服务与自我革新的工程中，公司这套从前端设计到落地施工的体系已日趋成熟，并获得不错的成效。</p>
                    <p>微风智能深耕智慧城市建设下的智慧社区、智慧乡村建设项目，着眼全国全国智慧城市建设市场，打造的智慧城市方案汇聚平台成为行业性标杆，专业为政府和开发商提供一站式智能化升级服务。</p>
                </div>
            </section>

            <section v-if="$route.path=='/main/mine/aboutquarters' || $route.path=='/main/mine/aboutproperty'">
                <p>
                    <span>建筑年代：2012年12月1号</span>
                    <span>绿化率：40%</span>
                </p>
                <p>
                    <span>占地面积：9000m2</span>
                    <span>建筑面积：3000m2</span>
                </p>
                <p>
                    <span>负责人：张勇</span>
                    <span>联系电话：0571-8899</span>
                </p>
                <p>详细地址：杭州市萧山区建设一路101号</p>
            </section>

            <section v-else>
                <p>公司地址：杭州市萧山区建设一路101号</p>
                <p>联系人：张勇</p>
                <p>联系方式：0571-88992</p>
            </section>
        </div>
    </section>
</template>


<script>
export default {
    computed: {
        getTitle(path) {
            return path => {
                switch (path) {
                    case "/main/mine/aboutquarters":
                        return "关于小区";
                    case "/main/mine/aboutproperty":
                        return "关于物业";
                    case "/main/mine/aboutus":
                        return "关于我们";
                }
            };
        },
        getBodyTitle(path) {
            return path => {
                switch (path) {
                    case "/main/mine/aboutquarters":
                        return "广元公寓";
                    case "/main/mine/aboutproperty":
                        return "万科物业";
                    case "/main/mine/aboutus":
                        return "浙江微风智能科技有限公司";
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
<style lang="css">
.body {
    margin-top: 12%;
    padding: 1% 4%;
    display: flex;
    flex-direction: column;
}
.title {
    position: fixed;
    top: 0;
    width: 100%;
}
h2 {
    font-size: 18px;
    text-align: center;
    margin-top: 8%;
}
p {
    font-size: 12px;
    display: flex;
    line-height: 25px;
    text-align: left;
}
.contain {
    text-indent: 2em;
    margin-top: 3%;
    margin-bottom: 8%;
}
.body span {
    width: 50%;
    text-align: left;
}
</style>