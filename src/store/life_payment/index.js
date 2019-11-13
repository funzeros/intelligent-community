// 生活缴费
import axios from 'axios';
export default {
    namespaced: true,
    state: {
        userpayments: [
            {
              id: "110",
              homenumber: "1幢1单元1201室",
              paystyle: "电费",
              price: "35.64",
              money:'30',
              ordernumber: "2019102900001",
              date: "2016/02/01-2016/03/01",
              premonth: "3387.0",
              nowmonth: "3432.0"
            },
            {
              id: "111",
              homenumber: "1幢1单元1201室",
              paystyle: "水费",
              price: "46.84",
              money:'30',
              ordernumber: "2019102900001",
              date: "2016/02/01-2016/03/01",
              premonth: "3387.0",
              nowmonth: "3432.0"
            },
             {
              id: "112",
              homenumber: "1幢1单元1201室",
              paystyle: "水费",
              price: "30.00",
              money:'30',
              ordernumber: "2019102900001",
              date: "2016/02/01-2016/03/01",
              premonth: "3387.0",
              nowmonth: "3432.0"
            }, 
         
          ],
        paymentone:[]
    },
    mutations: {
        //修改数据 的方法 返回promise对象  async（function（）） awat 等待结果
        setNowPay(state, paynow) {
            state.paymentone = paynow;
        }
    },
    actions: {
        
       // 接收 事件方法 可以带参数
       async justpayment({commit,state}, paymentId) {
        //    console.log( paymentId);
        //    console.log( state.userpayments.length)
        //    console.log( state.paymentone)

        for(let i=0;i<state.userpayments.length;i++){
            if(state.userpayments[i].id===paymentId){
                state.paymentone=state.userpayments[i];
            }
        }
        commit('setNowPay', state.paymentone)
        //console.log( state.paymentone)
    }


    }
}