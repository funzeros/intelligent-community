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
import knockdoor from "./knockdoor";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // guardflag:false
    guardflag: true,
    // 建议数据
    stylelists: [
      { id: "1111", name: "投诉" },
      { id: "2222", name: "建议" },
      { id: "3333", name: "表扬" }
    ],
    informstyle: [],
    picked: ''
  },
  mutations: {
    setSuggest(state, infoID) {
      state.informstyle = infoID;
    },
    setcheck(state, radid) {
      state.picked = radid;
    }
  },
  actions: {
      // 投诉类型数据
      async suggtype({ commit, state }, typeId) {
        state.informstyle=typeId;
        commit('setSuggest', state.informstyle);
    },
    // 人员选择数据
    async radiosel({ commit, state }, radioId) {
      state.picked=radioId;
      commit('setcheck', state.picked);
      //console.log(state.picked)
  },
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
    monitor,
    knockdoor

  }
})
