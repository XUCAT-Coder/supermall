/*
 * @Author: your name
 * @Date: 2021-05-30 08:25:58
 * @LastEditTime: 2021-05-31 15:06:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\store\mutations.js
 */
import {ADD_COUNT,ADD_NEW} from './mutations-type'
export default{
      [ADD_COUNT](state,theSameProductExist){
        theSameProductExist.count+=1;
      },
      [ADD_NEW](state,product){
        product.count=1;
        product.checked=true
        state.categorys.push(product)
      }
}