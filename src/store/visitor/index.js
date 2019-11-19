import axios from "axios"
export default {
  // 状态管理  visitor 访客预约 和  投诉建议  我的记录共有  魏珍君
  namespaced: true,
  state: {
    visobj: {},
    recordlist: [
      {
        id: 1,
        text: "小区绿化带有很多垃圾没有清理",
        img: [
          "http://img1.imgtn.bdimg.com/it/u=3622845054,993908195&fm=26&gp=0.jpg",
          "http://b-ssl.duitang.com/uploads/item/201509/13/20150913102741_uvnEC.jpeg",
          "http://b-ssl.duitang.com/uploads/item/201509/13/20150913102741_uvnEC.jpeg"
        ],
        reply: "已回复",
        state: "投诉",
        jldata: "2015-06-06 18:12",
        corp: "小刘"
      },
      {
        id: 2,
        text: "小区附近有陌生人逗留，物业请去看是不是小偷踩点",
        img: [
          "http://b-ssl.duitang.com/uploads/item/201509/13/20150913102741_uvnEC.jpeg",
          "http://b-ssl.duitang.com/uploads/item/201509/13/20150913102741_uvnEC.jpeg",
          "http://b-ssl.duitang.com/uploads/item/201509/13/20150913102741_uvnEC.jpeg"
        ],
        reply: "待回复",
        state: "建议",
        jldata: "2015-06-06 18:12",
        corp: "小刘"
      },
      {
        id: 3,
        text: "小区绿化带有很多垃圾没有清理",
        img: [],
        reply: "待回复",
        state: "表扬",
        jldata: "2015-06-06 18:12",
        corp: "小刘"
      },
      {
        id: 4,
        text: "小区绿化带有很多垃圾没有清理",
        img: [],
        reply: "待回复",
        state: "表扬",
        jldata: "2015-06-06 18:12",
        corp: "小刘"
      }
    ],
    repliedlist: {},
    getalllist:null
  },
  mutations: {
    getewm(state, payload) {
      state.visobj = payload
    },
    getreplied(state,result){
      // console.log(result)
      state.repliedlist = result
    },
    // 获取全部回复记录
    getallrecord(state,getall){
      // console.log(getall)
      //  getall.forEach(item=>{
      //  item[0][0].pImgs = item[0][0].pImgs.split(',')
      // })
      state.getalllist = getall
      console.log(state.getalllist)
    }
  },
  actions: {
    getewm({ commit }, payload) {
      axios.post("/api/vistor",payload).then(result=>{
        // console.log(result)
      })
      commit('getewm', payload)
    },
    async getreplied({ commit }) {
      let result = await axios.get("/response?pId=5")
     let detailobj = result.data.data[0]
      commit('getreplied',detailobj)
    },
    async getallrecord({commit}){
      let result = await axios.get("/myadvice?pUser=root")
      // console.log(result)
      commit("getallrecord",result.data.data)
      
    }
  },
  getters: {

  }
}

