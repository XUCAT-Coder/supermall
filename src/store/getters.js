/*
 * @Author: your name
 * @Date: 2021-05-30 09:08:32
 * @LastEditTime: 2021-05-30 10:12:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\store\getters.js
 */
export default{
    categorysLength(state){
        return state.categorys.length
    },
    categorysContent(state){
        return state.categorys
    }
}