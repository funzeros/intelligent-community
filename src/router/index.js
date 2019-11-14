import Vue from 'vue';
import VueRouter from 'vue-router';
import suggestion from '../views/suggestion/suggestion.vue'
import store from '../store';

Vue.use(VueRouter);


const mine = {
    /*
        Auther:施冬冬
    */
    path: '/main/mine',
    name: 'mine',
    component: () => import('../views/main/mine.vue'),
    redirect: { name: 'mineindex' },
    children: [
        {
            path: 'mineindex',
            name: 'mineindex',
            component: () => import('../components/mine/')
        },
        {
            path: 'userinfo',
            name: 'userinfo',
            component: () => import("../components/mine/userinfo.vue")
        },
        {
            path: "household",
            name: "household",
            component: () => import("../components/mine/household.vue")
        },
        {
            path: "changeheader",
            name: "changeheader",
            component: () => import("../components/mine/changeheader.vue")
        },
        {
            path: "aboutus",
            name: "aboutus",
            component: () => import("../components/mine/about.vue")
        },
        {
            path: "aboutquarters",
            name: "aboutquarters",
            component: () => import("../components/mine/about.vue")
        },
        {
            path: "aboutproperty",
            name: "aboutproperty",
            component: () => import("../components/mine/about.vue")
        },
        {
            path: "carinfo",
            name: 'carinfo',
            component: () => import('../views/main/mine.vue'),
            redirect: { name: 'carindex' },
            children: [
                {
                    path: "carindex",
                    name: "carindex",
                    component: () => import("../components/mine/carinfo/")
                },
                {
                    path: "cardetail",
                    name: "cardetail",
                    component: () => import("../components/mine/carinfo/carDetail.vue")
                },
                {
                    path: "addcar",
                    name: "addcar",
                    component: () => import("../components/mine/carinfo/addcar.vue")
                },
                {
                    path: "changecar",
                    name: "changecar",
                    component: () => import("../components/mine/carinfo/changecar.vue")
                }
            ]
        },
        {
            path: "houseinfo",
            name: 'houseinfo',
            component: () => import('../views/main/mine.vue'),
            redirect: { name: 'houseindex' },
            children: [
                {
                    path: "houseindex",
                    name: "houseindex",
                    component: () => import("../components/mine/houseinfo/"),
                },
                {
                    path: 'addhouse',
                    name: "addhouse",
                    component: () => import("../components/mine/houseinfo/addhouse.vue")
                },
                {
                    path: 'housedetail',
                    name: "housedetail",
                    component: () => import("../components/mine/houseinfo/houseDetail.vue")
                },
                {
                    path: 'changehouse',
                    name: "changehouse",
                    component: () => import("../components/mine/houseinfo/changehouse.vue")
                }
            ]
        }
    ]
}

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login&register/login')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/login&register/register')
    },
    // 主页
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/main/main.vue'),
        children: [
            // 社区
            {
                path: '/main/community',
                name: 'community',
                component: () => import('../views/main/community.vue'),

            },
            // 发现
            {
                path: '/main/find',
                name: 'find',
                component: () => import('../views/main/find.vue'),
            },
            // 开门
            {
                path: '/main/key',
                name: 'key',
                component: () => import('../views/main/key.vue')
            },
            // 邻里
            {
                path: '/main/neighborhood',
                name: 'neighborhood',
                component: () => import('../views/main/neighborhood.vue')
            },
            // 我的
            mine
        ]
    },
    // 投票
    {
        path: '/comvote',
        name: 'comvote',
        component: () => import('../views/comvote/comvote.vue')
    },
    // 投票详情
    {
        path: '/votedetails/:id',
        name: 'votedetails',
        component: () => import('../views/comvote/votedetails.vue')
    },
    // 消息通知
    {
        path: '/community_message',
        name: 'community_message',
        component: () => import('../views/message/community_message.vue')
    },
    // 通告页面
    {
        path: '/community_inform',
        name: 'community_inform',
        component: () => import('../views/information/community_inform.vue')
    },
    //公告详情页
    {
        path: '/community_inform/:id',
        name: 'informdetail',
        component: () => import('../views/information/community_informdetail.vue')
    },
    // 访客授权部分
    {
        path: '/visitor',
        name: 'visitor',
        component: () => import("../views/visitor")
    },
    // 二维码
    {
        path: '/visitor/:id',
        component: () => import("../views/visitor/QRcode")
    },
    // 访客记录
    {
        path: '/visrecord',
        name: 'visrecord',
        component: () => import("../views/visitor/visRecord")
    },
    // 访客记录详情
    {
        path: '/visrecord/:id',
        name: 'visdetail',
        component: () => import('../views/visitor/visdetail')
    },
    // 投诉建议
    {
        path: '/suggestion',
        name: 'suggestion',
        component: suggestion,
    },
    // 投诉建议——我的记录
    {
        path: '/suggestion/myedit',
        name: 'myedit',
        component: () => import('../views/advice/myrecord')
    },
    {
        path: '/myrecord/:id',
        name: 'reply',
        component: () => import('../views/advice/reply'),
    },
    // 生活缴费
    {
        path: '/life_payment',
        name: 'life_payment',
        component: () => import('../views/lifepayment/life_payment.vue')
    },
    // 生活缴费——缴费记录
    {
        path: '/payfees',
        name: 'payment_records',
        component: () => import('../views/payfees/payfees')
    },
    // 缴费记录-详情
    {
        path: '/payfees/:id',
        name: 'paydetail',
        component: () => import('../views/payfees/paydetail')
    },

    // 生活缴费——立即缴费
    {
        path: '/life_payment/:id',
        name: 'payment_justpay',
        component: () => import('../views/lifepayment/life_payment_justpay.vue')
    },
    // 电子监控
    {
        path: '/monitor',
        name: 'monitor',
        component: () => import('../views/monitor/index')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由守卫
router.beforeEach((to, from, next) => {
    // console.log('to',to);
    // console.log('from',from);
    // console.log(store.state.guardflag);
    console.log(store.state.guardflag)
    if (store.state.guardflag) {//登录标志
        next();
    } else {
        if (from.name === 'login' && to.name === 'register') { //登录转注册
            next();
        } else if (from.name === null && to.name === 'login') { //载入登录
            next();
        } else if (from.name === 'register' && to.name === 'login') { //注册转登录
            next();
        } else {
            next('/'); //其他转登录
        }
    }
})

export default router
