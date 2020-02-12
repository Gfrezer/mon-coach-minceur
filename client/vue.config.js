// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3200',
                ws: true,
                changeOrigin: true,
                logLevel: "debug",
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}