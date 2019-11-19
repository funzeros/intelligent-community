export default {
  namespaced: true,
  state: {
    checkedValue:'',
    answers:[],     //报修类型
    checkAddress:'',
    addresses:[],    //小区地址
    messContent:'',   //报修内容
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
       GetContent(state,contentMessage) {
          state.messContent = '';
          state.messContent = contentMessage;
          console.log(state.messContent);
       }
  },
  actions: {
  checkMess({commit},type) {    //报修类型
    commit("sends",type);
    console.log(type)
  },
  getAddress({commit},address) {  //报修地址
    commit("GetAdd",address);
  },
  getContent({commit},contentMessage) {  //报修内容
       commit("GetContent",contentMessage);
  }

 
  },
}