module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/my': {
                target: 'http://106.13.93.13:9090/',
                ws: true,
                changeOrigin: true
            }
        }
    }
};