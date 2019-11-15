export default {
  namespaced: true,
  state: {
    checkedValue:'',
    answers:[],     //报修类型
    checkAddress:'',
    addresses:[],    //小区地址
  },
  mutations: {
       sends(state,answer) {    //报修
         state.answers.length = 0;
            state.checkedValue = answer;
             state.answers.push(state.checkedValue)
             
       },
       GetAdd(state,address) {    //小区选择
         state.addresses.length = 0;
          state.checkAddress = address;
          state.addresses.push(state.checkAddress);
       },
  },
  actions: {
  checkMess({commit},type) {
    commit("sends",type);
    console.log(type)
  },
  getAddress({commit},address) {
    commit("GetAdd",address);
  },
 
  },
}