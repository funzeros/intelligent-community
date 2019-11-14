export default {
    namespaced: true,
    state: {
        loginState:false,
        houseList: [
        ],
        carList: [
        ],
        userInfo: {
            u_imge:"https://img.yzcdn.cn/vant/cat.jpeg"
        }
    },
    getters: {

    },
    mutations: {
        setLoginState(state,bool){
            state.loginState = bool;
        },
        setHouseList(state, obj) {
            state.houseList = obj;
        },
        setCarList(state, obj) {
            state.carList = obj;
        },
        setUserInfo(state, obj) {
            state.userInfo = {...obj,...state.userInfo};
        },
        setUserAttr(state,arr){
            state.userInfo[arr[0]] = arr[1];
        },
        addHouse(state,obj){
            state.houseList.push(obj);
        },
        editHouseList(state,key,value){
            state.houseList[key] = value;
        },
        delete(state,arr){
            console.log(arr)
            for(let key in state[arr[0]]){
                if(state[arr[0]][key][arr[1]] ==arr[2]){
                    state[arr[0]].splice(key,1);
                    return;
                }
            }
        },
        addCarList(state,obj){
            state.carList.push(obj);
        }
    },
    actions: {
        setLoginState(context,bool){
            context.commit("setLoginState",bool)
        },
        setHouseList(context, obj) {
            context.commit("setHouseList", obj);
        },
        setCarList(context, obj) {
            context.commit("setCarList", obj);
        },
        setUserInfo(context, obj) {
            context.commit("setUserInfo", obj);
        },
        setUserAttr(context,arr){
            context.commit("setUserAttr",arr);
        },
        addHouse(context,obj){
            context.commit("addHouse",obj);
        },
        editHouseList(context,key,value){
            context.commit("editHouseList",key,value);
        },
        delete(context,arr){
            context.commit("delete",arr);
        },
        addCarList(context,obj){
            context.commit("addCarList",obj);
        }
    }
}