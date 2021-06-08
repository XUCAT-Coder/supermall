/*
 * @Author: your name
 * @Date: 2021-05-07 20:05:25
 * @LastEditTime: 2021-05-25 18:09:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\network\home.js
 */
import {request} from './request'
export function getHomeData(){
  return request({
    url:'/home/multidata'
  })
}
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}