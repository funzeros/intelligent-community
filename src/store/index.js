import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import find from './find';
import key from './key';
import register from './register';
import comvote from './comvote';
import visitor from "./visitor";//访客预约
import mine from './mine'

import monitor from "./monitor";//电子监控
import information from './information';//通知公告
import life_payment from './life_payment';//生活缴费
import payfees from "./payfees";//缴费记录

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // guardflag:false
      guardflag:true
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    key,
    find,
    register,
    comvote,
    information,
    life_payment,
    visitor,
    payfees,
    mine,
    monitor
  }
})
