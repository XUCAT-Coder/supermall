/*
 * @Author: your name
 * @Date: 2021-05-09 22:10:33
 * @LastEditTime: 2021-06-02 16:23:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\vue.config.js
 */
// const APP_NANE =require('./package.json').name
// /${APP_NANE}/
const path = require('path');

module.exports = {
    publicPath:'/',    // 公共路径
    outputDir: 'dist',
    // process.env.NODE_ENV === "development" ? 'devdist' : 'dist', // 不同的环境打不同包名
    css: {  // 一次配置，全局使用，这个scss 因为每个文件都要引入
        loaderOptions: {
            sass: {
                data: `@import "./src/assets/hotcss/px2rem.scss";`
            }
        }
    },
    lintOnSave:false,  // 关闭eslint
    productionSourceMap:true,  // 生产环境下css 分离文件
    devServer:{   // 配置服务器
        port:8081,
        open:true,
        https:false,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    configureWebpack:{  // 覆盖webpack默认配置的都在这里
        resolve:{   // 配置解析别名
            alias:{
                '@':path.resolve(__dirname, './src'),
                '@h':path.resolve(__dirname, './src/assets/hotcss'),
                '@s':path.resolve(__dirname, './src/assets/style'),
                '@i':path.resolve(__dirname, './src/assets/img'),
            } 
        }
    }
}
 
 