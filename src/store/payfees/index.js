import axios from "axios";
export default {
  // 状态管理  visitor 和  投诉建议 我的记录共有  魏珍君
  namespaced: true,
  state: {
    a:13,
    userpayments: [
      // {
      //   id: "110",
      //   homenumber: "1幢1单元1201室",
      //   paystyle: "电费",
      //   price: "35.64",
      //   ordernumber: "2019102900001",
      //   period: '2016/02/01-2016/03/01',
      //   date: "07-06 14:12",
      //   premonth: "3387.0",
      //   nextmonth: "3432.0"
      // },
      // {
      //   id: "111",
      //   homenumber: "1幢1单元1201室",
      //   paystyle: "电费",
      //   price: "35.64",
      //   ordernumber: "2019102900001",
      //   period: '2016/02/01-2016/03/01',
      //   date: "02-06 14:12",
      //   premonth: "3387.0",
      //   nextmonth: "3432.0"
      // },
      // {
      //   id: "112",
      //   homenumber: "1幢1单元1201室",
      //   paystyle: "水费",
      //   price: "35.64",
      //   ordernumber: "2019102900001",
      //   period: '2016/02/01-2016/03/01',
      //   date: "03-06 14:12",
      //   premonth: "3387.0",
      //   nextmonth: "3432.0"
      // },

      // {
      //   id: "113",
      //   homenumber: "1幢1单元1201室",
      //   paystyle: "水费",
      //   price: "46.84",
      //   ordernumber: "2019102900001",
      //   period: '2016/02/01-2016/03/01',
      //   date: "07-06 14:12",
      //   premonth: "3387.0",
      //   nextmonth: "3432.0"
      // },
      

    ],
  },
  mutations: {
    getpaylist(state, conten) {
      state.userpayments = conten.data[0].lives.map(item=>{
        item.homenumber = `${conten.data[0].area}${conten.data[0].house}`
        return item; 
      })
    }

  },
  actions: {
    async getpaylist({ commit,state}) {
      let result = await axios.get(`/api/user/life?uId=${state.a}&sStatus=1`);
      commit('getpaylist', result.data)
      // console.log(result.data)
    }
  },
  getters: {

  }
}