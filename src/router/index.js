import Vue from 'vue';
import VueRouter from 'vue-router';
import suggestion from '../views/suggestion/suggestion.vue'
Vue.use(VueRouter);


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
      {
        path: '/main/mine',
        name: 'mine',
        component: () => import('../views/main/mine.vue')
      },
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
    component: () => import('../views/suggestion/suggestion_edit.vue')
  },
  // 投诉建议——人员选择
  {
    path: '/suggestion/selectperson',
    name: 'selectperson',
    component: () => import('../views/suggestion/suggestion_select.vue')
  },
  // 生活缴费
  {
    path:'/life_payment',
    name:'life_payment',
    component: () => import('../views/lifepayment/life_payment.vue')
  },
  // 生活缴费——缴费记录
  {
    path:'/life_payment/payment_records',
    name:'payment_records',
    component: () => import('../views/lifepayment/payment_records.vue')
  },
  // 生活缴费——立即缴费
  {
    path: '/life_payment/:id',
    name: 'payment_justpay',
    component: () => import('../views/lifepayment/life_payment_justpay.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
