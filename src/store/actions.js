/*
 * @Author: your name
 * @Date: 2021-05-30 08:26:47
 * @LastEditTime: 2021-06-01 16:09:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\store\actions.js
 */


import {ADD_COUNT,ADD_NEW} from './mutations-type'
export default{
    addCart(context,product){
       return  new Promise((resolve,reject)=>{
        const theSameProductExist=this.state.categorys.find(function(item){
          return item.iid===product.iid
     });
     if(theSameProductExist){
       context.commit(ADD_COUNT,theSameProductExist)
       resolve('再次添加本商品成功')
       
     }else{
       context.commit(ADD_NEW,product)
       resolve('添加新商品成功')
      
     }
     })
       
        
    }
}