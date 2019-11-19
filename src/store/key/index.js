import axios from "axios";
export default ({
    namespaced: true,
    state: {
        flag: 0,
        record: [],
        records:[]
    },
    mutations: {
        record(state, record) {
            state.record = [...state.records,...record];
        }
    },
    actions: {
        opendoor(context) {
            axios.get("/men/kaimen").then((result) => {
                context.commit("record", result.data.data);
            })
        }
    },
    modules: {
    }
})
