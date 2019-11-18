module.exports = {
    publicPath:'/',
    devServer: {
        proxy: {
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
            '/my':{
                target:"http://106.13.93.13:9001/api",
                ws:true,
                changeOrigin:true
            },
            '/house':{
                target:"http://106.13.93.13:9031/api",
                ws:true,
                changeOrigin:true
            },
            "/house":{
                target:" http://106.13.93.13:9031/api/",
                ws:true,
                changeOrigin:true
            },
            '/advice': {
                target: 'http://106.13.93.13:9021/',
                ws: true,
                changeOrigin: true
            }
        }
    },
};