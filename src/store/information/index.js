// 通知公告
import axios from 'axios';
export default {
    namespaced: true,
    state: {
        informlists: [
            {
                id: "1",
                title: "物业费上调",
                content:
                    "广大业主朋友，大家好!广源小区自2016交付费用以来，一直受国家物业管理。因物价上涨等一系列原因，我们即将上涨物业费，敬请谅解",
                time: "2019-06-14 11:20",
                img: 'http://img1.imgtn.bdimg.com/it/u=3622845054,993908195&fm=26&gp=0.jpg'
            },
            {
                id: "2",
                title: "停电通告",
                content:
                    "尊敬的各位业主，接供电局通知，因电力线路改造，我小区将于4月18日下午2带你到6点停电给您带来不便敬请谅解",
                time: "2019-06-13 16:34",
                img: 'http://img4.imgtn.bdimg.com/it/u=3902308987,938126101&fm=11&gp=0.jpg'
            },
            {
                id: "3",
                title: "物业费上调",
                content:
                    "广大业主朋友，大家好!广源小区自2016交付费用以来，一直受国家物业管理。因物价上涨等一系列原因，我们即将上涨物业费，敬请谅解",
                time: "2019-06-14 11:20",
                img: 'http://img1.imgtn.bdimg.com/it/u=3622845054,993908195&fm=26&gp=0.jpg'
            },

        ],
        informlist: []
    },
    mutations: {
        setInfo(state, infoID) {
            state.informlist = infoID;
        }
    },
    actions: {
        async informdetail({ commit, state }, informId) {
            for (let i = 0; i < state.informlists.length; i++) {
                if (state.informlists[i].id === informId) {
                    state.informlist = state.informlists[i];
                }
            }
            commit('setInfo', state.informlist)

        }
    }


}
