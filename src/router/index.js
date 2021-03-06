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
            path:'set',
            name:'set',
            component:() => import("../components/mine/set.vue")
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
        },
        
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
    // 开门
    {
        path: '/key',
        name: 'key',
        component: () => import('../views/main/key.vue')
    },
    //邻里
    {
        path: '/neighbor',
        name: 'neighbor',
        component: () => import(/* webpackChunkName: "about" */ '../views/neighborOther/neighborhood.vue')
      },
    //帖子详情
    {
        path: '/mainBody/:id',
        name: 'mainBody',
        component: () => import(/* webpackChunkName: "about" */ '../views/mainBody/text.vue')
      },
    //发现-生活服务
    {
        path: '/lifeServe',
        name: 'lifeServe',
        component: () => import('../views/lifeServe/find.vue')
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
     //在线敲门
     {
        path: '/knockdoor',
        name: 'knockdoor',
        component: () => import('../views/knockdoor/knockdoor.vue')
    },
    {
        path: '/choosehouse/:fid',
        name: 'choosehouse',
        component: () => import('../views/knockdoor/choosehouse.vue')
    },
    {
        path: '/chatpage/:hid',
        name: 'chatpage',
        component: () => import('../views/knockdoor/chatpage.vue')
    },
     // 报事报修
    {  
        path:'/main/repair',
        name:'repair',
        component: () => import('../views/repair/repair.vue')
      },
       
      {
        path:'/main/myCheckMess',
        name:'myCheckMess',
        component:() => import('../views/repair/myCheckMess.vue')
      },
       //报修记录
      {
        path:'/main/myRepair',
        name:'myRepair',
        component: () => import('../views/repair/myRepair.vue')
      },
      //报修详细信息
      {
        path:'/main/myRepair/repairDetail',
        name:'repairDetail',
        component: () => import('../views/repair/repairDetail.vue')
      },
      //报修等级评价
      {
        path:'/main/myRepair/repairRank',
        name:'repairRank',
        component: () => import('../views/repair/repairRank.vue')
      },
      // 忘记密码
   {
    path: '/login/password',
    name: 'password',
    component: () => import('../views/forgotpassword/index.vue')
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
    // console.log(store.state.guardflag)
    if (store.state.guardflag) {//登录标志
        next();
    } else {
        switch(to.name){
            case 'login':;
            case 'password':;
            case 'register':next();
            break;
            default: next('/'); 
            break;
        }
        // if (to.name === 'register') { //去注册
        //     next();
        // } else if (to.name === 'login') { //去登录
        //     next();
        // }else {
        //     next('/'); //其他转登录
        // }
    }
})

export default router
