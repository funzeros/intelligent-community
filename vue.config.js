module.exports = {
    publicPath:'/',
    devServer: {
        proxy: {
            '/api/user': {
                target: 'http://106.13.93.13:9081',
                ws: true,
                changeOrigin: true
            },
            // 投诉建议
           '/myadvice':{
               target:"http://106.13.93.13:9021",
               ws:true,
               changeOrigin:true
           },
        //    回复接口
           '/response':{
                target:"http://106.13.93.13:9021/",
                ws:true,
                changeOrigin:true
            },

           
        }
}
}