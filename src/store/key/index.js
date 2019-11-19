import axios from "axios";
export default ({
    namespaced: true,
    state: {
        flag: 0,
        record: []
    },
    mutations: {
        record(state, record) {
            state.record = [...state.record,...record];
        }
    },
    actions: {
        opendoor(context) {
            axios.get("/api/men/kaimen").then((result) => {
                context.commit("record", result.data.data);
            })
        }
    },
    modules: {
    }
})
