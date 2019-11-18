module.exports = {
    publicPath:'/',
    devServer: {
        proxy: {
            '/api/user': {
                target: 'http://106.13.93.13:9081',
                ws: true,
                changeOrigin: true
            },
            '/api': {
                target: 'http://106.13.93.13:9081/',
                ws: true,
                changeOrigin: true
            },
            '/advice': {
                target: 'http://106.13.93.13:9021/',
                ws: true,
                changeOrigin: true
            },
            '/api': {
                target: 'http://116.62.38.213:8888/',
                ws: true,
                changeOrigin: true
            },
        }
    },
};