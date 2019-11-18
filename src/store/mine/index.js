import axios from "axios";
export default {
    namespaced: true,
    state: {
        loginState: false,
        houseList: [],
        carList: [],
        userInfo: {},
        per_userInfo: {},
        per_carList: [],
        per_houseList: [],
        checkedState:false //设置页面的网络开关状态
    },
    getters: {

    },
    mutations: {
        setLoginState(state, bool) { //设置登录状态
            state.loginState = bool;
        },
        // setHouseList(state, obj) { 
        //     state.houseList = obj;
        // },
        // setCarList(state, obj) {
        //     state.carList = obj;
        // },
        // setUserInfo(state, obj) {
        //     state.userInfo = { ...obj, ...state.userInfo };
        // },
        setUserAttr(state, arr) {
            state.userInfo[arr[0]] = arr[1];
        },
        add(state, arr) {
            let newobj = {};
            Object.assign(newobj,arr[1]);
            state[arr[0]].push(newobj); 
        },
        editHouseList(state, key, value) {
            state.houseList[key] = value;
        },
        delete(state, arr) {
            //数组的第一个参数为要操作的数据结构,第二个参数为键,第三个参数为值
            for (let key in state[arr[0]]) {
                if (state[arr[0]][key][arr[1]] == arr[2]) {
                    state[arr[0]].splice(key, 1);
                    return;
                }
            }
        },
        getUserInfo(state, data) {
            console.log(data)
            state.userInfo = data.userInfo;
            state.houseList = data.house;
            state.carList = data.car;
            state.per_userInfo = data.userInfo;
            state.per_houseList = data.house;
            state.per_carList = data.car;

            //对pre_userinfo处理
            switch (state.per_userInfo.idtype) {
                case 1:
                    state.per_userInfo.idtype = "身份证";
                    break;
                case 0:
                    state.per_userInfo.idtype = "其他";
                    break;
            }

            switch (state.per_userInfo.sex) {
                case 0:
                    state.per_userInfo.sex = "男";
                    break;
                case 1:
                    state.per_userInfo.sex = "女";
                    break;
            }

            switch (state.per_userInfo.isempty) {
                case null:
                case 0:
                    state.per_userInfo.isempty = "否";
                    break;
                case 1:
                    state.per_userInfo.isempty = "是";
            }

            let newdate = new Date(state.per_userInfo.birthday);
            state.per_userInfo.birthday = `${newdate.getFullYear()}-${newdate.getMonth() +
                1}-${newdate.getDate()}`;
        },
        changeCheck(state){
            state.checkedState = !state.checkedState;
        },
        replace(state,arr){
            state[arr[0]] = arr[2];
            state[arr[1]] = arr[2];
        }
    },
    actions: {
        setLoginState(context, bool) {
            context.commit("setLoginState", bool)
        },
        // setHouseList(context, obj) {
        //     context.commit("setHouseList", obj);
        // },
        // setCarList(context, obj) {
        //     context.commit("setCarList", obj);
        // },
        // setUserInfo(context, obj) {
        //     context.commit("setUserInfo", obj);
        // },
        setUserAttr(context, arr) {
            context.commit("setUserAttr", arr);
        },
        add(context, arr) {
            context.commit("add", arr);
        },
        editHouseList(context, key, value) {
            context.commit("editHouseList", key, value);
        },
        delete(context, arr) {
            context.commit("delete", arr);
        },
        async getUserInfo(context,uId) {
            let result = await axios.get(`/user/my?uId=${uId}`);
            //  http://106.13.93.13:9081/api/user/my
            context.commit("getUserInfo", result.data.data);
        },
        changeCheck(context){
            context.commit("changeCheck");
        },
        replace(context,arr){
            context.commit("replace",arr);
        }
    }
}