import axios from "axios";
export default {
    namespaced: true,
    state: {
        comvoting: [],
        comvoted: [],
        details:[],
        pId:1,
        uId:1
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
        getcomvoting(context) {
            axios.get(`/api/toupiao/onGoing?uId=${context.state.uId}`).then((result) => {
                context.commit("comvoting", result.data.data);
            })
        },
        getcomvoted(context) {
            axios.get(`/api/toupiao/historyVote?uId=${context.state.uId}`).then((result) => {
                context.commit("comvoted", result.data.data);
            })
        },
        getdetails(context) {
            axios.get(`/api/toupiao/count?uId=${context.state.uId}&pId=${context.state.pId}`).then((result) => {
                context.commit("details", result.data.data);
            })
        }
    },
    modules: {
    }
}
