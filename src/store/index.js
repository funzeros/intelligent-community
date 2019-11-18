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
import neighbor from "./neighbor";
import knockdoor from "./knockdoor";  // 敲门
import MyRepair from "./myRepair"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guardflag:false,
    // guardflag: true,
    // 建议数据
    stylelists: [
      { id: "1111", name: "投诉" },
      { id: "2222", name: "建议" },
      { id: "3333", name: "表扬" }
    ],
    informstyle: [],
    picked: '',
    tabs: [
      {
        id: "101",
        rounter: "/main/community",
        iconfont: "icon-xingqiu-",
        title: "社区"
      },
      {
        id: "102",
        rounter: "/main/find",
        iconfont: "icon-zhinanzhen_o",
        title: "发现"
      },
      {
        id: "103",
        rounter: "/key",
        iconfont: "icon-yuechi",
        title: "开门"
      },
      {
        id: "104",
        rounter: "/main/neighborhood",
        iconfont: "icon-caidan",
        title: "邻里"
      },
      {
        id: "105",
        rounter: "/main/mine",
        iconfont: "icon-wode",
        title: "我的"
      }
    ],
    selectTab:null,
    loginData:{}
  },
  mutations: {
    setSuggest(state, infoID) {
      state.informstyle = infoID;
    },
    setcheck(state, radid) {
      state.picked = radid;
    },
    setInitTab(state){
      if(!state.selectTab)
      state.selectTab=state.tabs[0]
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
    setInitTab({commit}){
      commit('setInitTab');
    },
    async loginon({commit,dispatch,state},info){
      let result=await axios.post(`/api/user/logingo?username=${info.usernm}&passward=${info.pwd}&type=1`);
      console.log(result);
      if(!result.data.errno){
        state.guardflag=true;
        state.loginData=result.data;
        console.log(state);
        dispatch('knockdoor/userOnLine',state.knockdoor.selfhid);//上线连接到聊天服务器
      }
    }
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
    knockdoor,
    neighbor,
    MyRepair

  }
})
