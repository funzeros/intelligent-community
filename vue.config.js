module.exports = {
    publicPath: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://106.13.93.13:9061',
                ws: true,
                changeOrigin: true
            }
        }
    }
};