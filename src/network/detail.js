/*
 * @Author: your name
 * @Date: 2021-05-22 18:57:32
 * @LastEditTime: 2021-05-24 18:11:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\network\detail.js
 */
import {request} from './request'
export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
export class GoodsInfo{
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
    }
}
export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}
export class Params{
    constructor(info,rule){
        this.image=info.images?info.images[0]:''
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}