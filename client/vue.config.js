// vue.config.js
var path = require('path')

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
    },
    configureWebpack: {
        resolve: {
            alias: {
                src: path.resolve(__dirname, 'src')
            }
        },
        devtool: 'source-map'

    }
}