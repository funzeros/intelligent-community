module.exports = {
    publicPath:'/',
    devServer: {
        proxy: {
            '/user': {
                target: 'http://106.13.93.13:9081/api',
                ws: true,
                changeOrigin: true
            },
            '/uploadImage':{
                target: 'http://116.62.38.213:8080/api',
                ws: true,
                changeOrigin: true
            }
        }
    },
};