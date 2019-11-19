import axios from "axios";
export default {
    namespaced: true,
    state: {
        comvoting: [],
        comvoted: [],
        details:[],
        pId:1
    },
    mutations: {
        comvoting(state, comvoting) {
            state.comvoting = comvoting;
        },
        comvoted(state, comvoted) {
            state.comvoted = comvoted;
        },
        details(state, details) {
            state.details = details;
        }
    },
    actions: {
        getcomvoting(context,uId) {
            axios.get(`/toupiao/onGoing?uId=${uId}`).then((result) => {
                context.commit("comvoting", result.data.data);
            })
        },
        getcomvoted(context,uId) {
            axios.get(`/toupiao/historyVote?uId=${uId}`).then((result) => {
                context.commit("comvoted", result.data.data);
            })
        },
        getdetails(context,uId) {
            axios.get(`/toupiao/count?uId=${uId}&pId=${context.state.pId}`).then((result) => {
                context.commit("details", result.data.data);
            })
        }
    },
    modules: {
    }
}
