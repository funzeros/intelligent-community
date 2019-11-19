import axios from "axios";
import qs from 'qs';
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
        areas:['A区','B区','C区','D区'],//片区
        houselists:[
            {
                build:'1幢',
                units:[
                    {
                        unit:'1单元',
                        houses:['0101','0102','0103','0104','0201','0202','0203','0204','0301','0302']
                    },
                    {
                        unit:'2单元',
                        houses:['0101','0102','0103','0104','0201','0202','0203','0204','0301','0302']
                    }
                ]
            },
            {
                build:'2幢',
                units:[
                    {
                        unit:'1单元',
                        houses:['0101','0102','0103','0104','0201','0202','0203','0204','0301','0302']
                    },
                    {
                        unit:'2单元',
                        houses:['0101','0102','0103','0104','0201','0202','0203','0204','0301','0302']

                    }
                ]
            },
            {
                build:'3幢',
                units:[
                    {
                        unit:'1单元',
                        houses:['0101','0102','0103','0104','0201','0202','0203','0204','0301','0302']
                    },
                    {
                        unit:'2单元',
                        houses:['0101','0102','0103','0104','0201','0202','0203','0204','0301','0302']
                    }
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
        coturl:['http://img3.imgtn.bdimg.com/it/u=2202144165,2270864374&fm=26&gp=0.jpg'],//合同照片地址
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
        phonehas:false,
        regsuccess:true//注册成功
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
            state.regsuccess=true;
        }
    },
    actions: {
        changePhone(context,phone){
            context.commit('setPhone',phone);
        },
        changePwd(context,pwd){
            context.commit('setPwd',pwd);
        },
        async verifyPhone({commit,state},data){
            let result= await axios.get('/user/phone'+'?phonenum='+data);
            // commit('setphonehas',result.data.has);
            console.log(result);

        },
        async subRegInfo({commit,state}){ //提交注册信息
            let identype="0";//身份信息
            if(state.homeform[0].value==='业主'){
                identype="0";
            }else if(state.homeform[0].value==='业主家属'){
                identype="1";
            }else if(state.homeform[0].value==='租客'){
                identype="2";
            }
            let idtype="0";//身份证类型
            if(state.idtype==='身份证'){
                idtype="0";
            }else{
                idtype="1";
            }
            let data={  
                        "identity":identype,
                        "area":state.homeform[1].value,
                        "build":state.homeform[2].value,
                        "unit":state.homeform[3].value,
                        "house":state.homeform[4].value,
                        "phonenum":state.phone,
                        "passward":state.pwd,
                        "contractStartTime":state.contract_start,
                        "contractEndTime":state.contract_end,
                        "contractPicurl":state.coturl.join(','),
                        "username":state.username,
                        "name":state.name,
                        "sex":state.sexid,
                        "idtype":idtype,
                        "idnum":state.idnum,
                        "nation":state.nation,
                    };
                      // "idCardA":state.cardurla,
                        // "idCardB":state.cardurlb,
                        // "uPicurl":state.upicurl
            let result= await axios.post('/user/register',qs.stringify(data));
            if (result.data.message==='success'){
                commit('setregflag');
            }
            // console.log(data);

        }
    },
    modules: {
    }
}