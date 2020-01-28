// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/*': {
                target: 'http://localhost:3200',
                ws: true,
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    }
}