module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/myadvice':{
                target:"http://106.13.93.13:9021/",
                ws:true,
                changeOrigin:true,
             },
            //邻里
            '/post': {
                target: 'http://106.13.93.13:9001/api',
                ws: true,
                changeOrigin: true,
            }, 
            '/toupiao': {
                target: 'http://106.13.93.13:9061/api/',
                ws: true,
                changeOrigin: true,
            }, 
            '/men': {
                target: 'http://106.13.93.13:9081/api/',
                ws: true,
                changeOrigin: true,
            },
            '/user': {
                target: 'http://106.13.93.13:9081/api/',
                ws: true,
                changeOrigin: true,
            },
            // http://106.13.93.13:9081/api/user/register
            '/uploadImage':{
                target:"http://116.62.38.213:8080/api",
                ws:true,
                changeOrigin:true
            },
            // 投诉建议
           
           "/allAdvice":{
            target:"http://106.13.93.13:9021/",
               ws:true,
               changeOrigin:true
           },
           
            '/my': {
                target: "http://106.13.93.13:9001/api",
                ws: true,
                changeOrigin: true
            },
            '/house': {
                target: "http://106.13.93.13:9031/api",
                ws: true,
                changeOrigin: true
            },
            //回复接口
            '/response': {
                target: "http://106.13.93.13:9021/",
                ws: true,
                changeOrigin: true
            },
            '/advice': {
                target: 'http://106.13.93.13:9021/',
                ws: true,
                changeOrigin: true
            },
            '/repairs': {
                target:'http://106.13.93.13:9041',
                ws:true,
                changeOrigin:true
            }
        }
    },
};
