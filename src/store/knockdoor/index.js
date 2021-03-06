import axios from "axios";
export default {
    namespaced: true,
    state: {
        houseList:[
            {fid:'00',area:'广元公寓',build:'1幢',unit:'1单元',house:[
              {hid:'00',house:'0101'}, {hid:'01',house:'0102'}, {hid:'02',house:'0103'}, {hid:'03',house:'0104'}, {hid:'04',house:'0201'},
               {hid:'05',house:'0202'}, {hid:'06',house:'0203'}, {hid:'07',house:'0204'}, {hid:'08',house:'0301'}, {hid:'09',house:'0302'}
            ]},
            {fid:'01',area:'广元公寓',build:'1幢',unit:'2单元',house:[
              {hid:'00',house:'0101'}, {hid:'01',house:'0102'}, {hid:'02',house:'0103'}, {hid:'03',house:'0104'}, {hid:'04',house:'0201'},
               {hid:'05',house:'0202'}, {hid:'06',house:'0203'}, {hid:'07',house:'0204'}, {hid:'08',house:'0301'}, {hid:'09',house:'0302'}
            ]},
            {fid:'02',area:'广元公寓',build:'2幢',unit:'1单元',house:[
              {hid:'00',house:'0101'}, {hid:'01',house:'0102'}, {hid:'02',house:'0103'}, {hid:'03',house:'0104'}, {hid:'04',house:'0201'},
               {hid:'05',house:'0202'}, {hid:'06',house:'0203'}, {hid:'07',house:'0204'}, {hid:'08',house:'0301'}, {hid:'09',house:'0302'}
            ]},
            {fid:'03',area:'广元公寓',build:'2幢',unit:'2单元',house:[
              {hid:'00',house:'0101'}, {hid:'01',house:'0102'}, {hid:'02',house:'0103'}, {hid:'03',house:'0104'}, {hid:'04',house:'0201'},
               {hid:'05',house:'0202'}, {hid:'06',house:'0203'}, {hid:'07',house:'0204'}, {hid:'08',house:'0301'}, {hid:'09',house:'0302'}
            ]},
            {fid:'04',area:'广元公寓',build:'3幢',unit:'1单元',house:[
              {hid:'00',house:'0101'}, {hid:'01',house:'0102'}, {hid:'02',house:'0103'}, {hid:'03',house:'0104'}, {hid:'04',house:'0201'},
               {hid:'05',house:'0202'}, {hid:'06',house:'0203'}, {hid:'07',house:'0204'}, {hid:'08',house:'0301'}, {hid:'09',house:'0302'}
            ]},
            {fid:'05',area:'广元公寓',build:'3幢',unit:'2单元',house:[
              {hid:'00',house:'0101'}, {hid:'01',house:'0102'}, {hid:'02',house:'0103'}, {hid:'03',house:'0104'}, {hid:'04',house:'0201'},
               {hid:'05',house:'0202'}, {hid:'06',house:'0203'}, {hid:'07',house:'0204'}, {hid:'08',house:'0301'}, {hid:'09',house:'0302'}
            ]}
          ],
       selfhid:'',
       ws:{},
       data:[],//消息提醒
       hdata:[]//历史消息

    },
    mutations:{

    },
    actions:{
      userOnLine({commit,state},selfhid){ //创建webserve连接
         let url = "ws://47.103.218.109:4399";
         state.ws = new WebSocket(url);
         state.ws.onopen = () => {
            // console.log(state.ws);
            state.ws.send(
              `{"user":"${selfhid}","msg":"上线了","connet":"0"}`
            );
          };
      }

    }
}

