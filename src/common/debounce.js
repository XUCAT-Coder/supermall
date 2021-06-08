/*
 * @Author: your name
 * @Date: 2021-05-25 10:52:57
 * @LastEditTime: 2021-05-25 19:47:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\common\debounce.js
 */
 export function debounce(func,delay){
   let timer = null; //该timer只会执行一次
   return function(...args) {
     if (timer) clearTimeout(timer);
 
     timer = setTimeout(() => {
       //console.log("执行一次");
      func.apply(this,args);
     }, delay);
     
   }
}