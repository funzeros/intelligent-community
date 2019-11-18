module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/user': {
                //http://116.62.38.213:8080/api/uploadImage
                target: 'http://106.13.93.13:9081/api/',
                ws: true,
                changeOrigin: true,
            },
            '/uploadImage':{
                target:"http://116.62.38.213:8080/api",
                ws:true,
                changeOrigin:true
            },
            'my':{
                target:"http://106.13.93.13:9001/api",
                ws:true,
                changeOrigin:true
            },
            'house':{
                target:"http://106.13.93.13:9031/api",
                ws:true,
                changeOrigin:true
            },
            'user':{
                target:"http://106.13.93.13:9081/api",
                ws:true,
                changeOrigin:true
            },
            "house":{
                target:" http://106.13.93.13:9031/api/",
                ws:true,
                changeOrigin:true
            }
        }
    }
};