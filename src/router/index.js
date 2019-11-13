import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main/community'
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
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue'),
    children: [
      {
        path: '/main/community',
        name: 'community',
        component: () => import('../views/main/community.vue'),

      },
      {
        path: '/main/find',
        name: 'find',
        component: () => import('../views/main/find.vue'),
      },
      {
        path: '/main/key',
        name: 'key',
        component: () => import('../views/main/key.vue')
      },
      {
        path: '/main/neighborhood',
        name: 'neighborhood',
        component: () => import('../views/main/neighborhood.vue')
      },
      {
        path: '/main/mine',
        name: 'mine',
        component: () => import('../views/main/mine.vue')
      },
    ]
  },
  {
    path: '/comvote',
    name: 'comvote',
    component: () => import('../views/comvote/comvote.vue')
  },
  {
    path: '/votedetails/:id',
    name: 'votedetails',
    component: () => import('../views/comvote/votedetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
