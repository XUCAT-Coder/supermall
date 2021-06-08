/*
 * @Author: your name
 * @Date: 2021-06-02 12:43:20
 * @LastEditTime: 2021-06-02 12:55:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\postcss.config.js
 */
module.exports={
    plugins:{
        autoprefixer:{},
        "postcss-px-viewport":{
            viewportWidth:375, //设计稿宽度
            viewportHeight:667,//设计稿高度
            unitPrecision:5,//转换小数位数
            viewportUnit:'vw',//视窗单位
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类
            minPixelValue:1,//范围不转换
            mediaQuery:false//允许转换px

        }
    }
}