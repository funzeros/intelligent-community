export default{
  // 状态管理  visitor 和  投诉建议 我的记录共有  魏珍君
    namespaced: true,
    state: {
        visobj:{},
        recordlist: [
            {
              id: 1,
              text: "小区绿化带有很多垃圾没有清理",
              img: [
                "http://b-ssl.duitang.com/uploads/item/201509/13/20150913102741_uvnEC.jpeg",
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
          ]
     },
    mutations: { 
        getewm(state,payload){
            state.visobj = payload
        }
     },
    actions: { 
        getewm({commit},payload){
            commit('getewm',payload)
        }
     },
    getters: { 

     }
}

