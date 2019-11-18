module.exports = {
    publicPath:'/',
    devServer: {
        proxy: {
            '/api/user': {
                target: 'http://106.13.93.13:9081',
                ws: true,
                changeOrigin: true
            }
        }
    },
};