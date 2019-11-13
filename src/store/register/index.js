import axios from "axios";

//  by方珂琛

export default{    
    namespaced: true,
    state: {
        //注册信息
        homeform:[
            {id:'0001',name:'身份类型',value:'',selects:'identitys',must:true,idflag:true},
            {id:'0002',name:'片区',value:'',selects:'areas',must:false},
            {id:'0003',name:'楼栋',value:'',selects:'builds',must:true},
            {id:'0004',name:'单元',value:'',selects:'units',must:true},
            {id:'0005',name:'房屋',value:'',selects:'houses',must:true},

        ],//注册房屋信息的表单
        identitys:['relation','owner','renter'],//总身份类型
        areas:['浙江','山东','北京','上海'],//片区
        houselists:[
            {
                build:'1幢',
                units:[
                    {
                        unit:'一单元',
                        houses:['1101','1102','1103']
                    }
                ]
            },
            {
                build:'2幢',
                units:[
                    {
                        unit:'一单元',
                        houses:['2101','2102','2103']
                    },
                    {
                        unit:'二单元',
                        houses:['2201','2202','2203']
                    }
                ]
            },
            {
                build:'3幢',
                units:[
                    {
                        unit:'一单元',
                        houses:['3101','3102','3103']
                    },
                    {
                        unit:'二单元',
                        houses:['3201','3202','3203']
                    },
                    {
                        unit:'三单元',
                        houses:['3301','3302','3303']
                    },
                ]
            }
        ],//楼栋单元房屋
        // 房屋表单状态选择
        identity:false,//选择身份框展示状态
        stepcash:0,//步骤缓存
        stepcount:0,//下一步步数
        phone:'',//手机号
        pwd:'',//密码
        sec_pwd:'',//二次确认密码
        cotime_flag:false,
        contract_start:'',//合同开始时间
        contract_end:'',//合同结束时间
        cotime_title:'开始时间',//
        coturl:['asd'],//合同照片地址
        username:'',
        name:'',
        sex:'男',
        sexid:0, //性别ID
        idtype:'身份证',
        idnum:'',
        nation:'汉族',
        carda:'',//身份证正面
        cartb:'',//身份证背面
        upic:'',//用户照片
        cardurla:'',//身份证正面url
        cardurlb:'',//身份证背面url
        upicurl:'',//用户照片url
        phonehas:false
    },
    getters:{
        getPhone:(state)=>{
            return state.phone;
        },
        getPwd : (state) =>{
            return state.pwd;
        }
    },
    mutations: {
        setPhone(state,phone){
            state.phone = phone;
        },
        setPwd(state,pwd){
            state.pwd = pwd;
        },
        setphonehas(state,has){
            state.phonehas=has;
        },
        setregflag(state,data){
            console.log(data);
        }
    },
    actions: {
        changePhone(context,phone){
            context.commit('setPhone',phone);
        },
        changePwd(context,pwd){
            context.commit('setPwd',pwd);
        },
        async verifyPhone({commit,state}){
            let data={"phonenum":state.phone};
            let result= await axios.post('/api/user/verifyphone',data);
            commit('setphonehas',result.data.has);

        },
        async subRegInfo({commit,state}){ //提交注册信息
            let data={  
                        "identity":state.homeform[0].value,
                        "area":state.homeform[1].value,
                        "build":state.homeform[2].value,
                        "unit":state.homeform[3].value,
                        "house":state.homeform[4].value,
                        "phonenum":state.phone,
                        "password":state.pwd,
                        "contractStartTime":state.contract_start,
                        "contractEndTime":state.contract_end,
                        "contractPicurl":state.coturl,
                        "username":state.username,
                        "name":state.name,
                        "sex":state.sexid,
                        "idtype":state.idtype,
                        "idnum":state.idnum,
                        "nation":state.nation,
                        "idCardA":state.cardurla,
                        "idCardB":state.cardurlb,
                        "uPicurl":state.upicurl
                    };
            // let result= await axios.post('/api/user/register',data);
            // commit('setregflag',result.data);
            console.log(data);

        }
    },
    modules: {
    }
}