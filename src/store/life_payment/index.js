// 生活缴费---周佩蕾
import axios from 'axios';
export default {
  namespaced: true,
  state: {
    userpayments: [],
    paymentone: []
  },
  mutations: {

    setNowPay(state, paynow) {
      state.paymentone = paynow;
    },
    setUserPay(state, paylist) {
      state.userpayments = paylist;
    }
  },
  actions: {

    // 获取所有的未缴费数据
    async justpayment({ commit, state }, paymentId) {
      
      const result = await axios.get(`/user/life?uId=${paymentId}&sStatus=0`);
      const userpaylist=result.data.data;
      commit('setUserPay',userpaylist);
      // 

  
    },
    // 对应ID的详情数据
   async detailpay({ commit, state }, {detailId,userId}){
    
        const datailinfo = await axios.get(`/user/life?uId=${userId}&sStatus=0`);
        const dataillist=datailinfo.data.data[detailId];
        commit('setNowPay',dataillist);
    //console.log(dataillist)
   }


  }
}