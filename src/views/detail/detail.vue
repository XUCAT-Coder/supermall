<!--
 * @Author: your name
 * @Date: 2021-05-19 16:39:43
 * @LastEditTime: 2021-06-01 20:15:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\detail\detail.vue
-->
<!--  -->
<template>
  <div class="out">
  <navbar @themeIndex="chooseTheme" ref="detailnavbar"></navbar>
  
  <scroll class="scrollh" ref="detailscroll" :probe-type="3" @showdetailposition="getposition">
     
     <detailswiper :topImgUrl="topImg"></detailswiper>
     <detailBaseInfo :goods="goodsInfo"></detailBaseInfo>
     <detail-shop-info :shop="shopInfo"></detail-shop-info>
     <detailGoodsInfo :detailInfo="detailInfo" @imgLoaded="allImgLoaded"></detailGoodsInfo>
     <detailParamsInfo :paramInfo="itemInfo" ref="params"></detailParamsInfo>
     <detailCommonInfo :commentInfo="commonInfo" ref="comment"></detailCommonInfo>
     <detailRecommendInfo :recommendInfo="recommendInfo" ref="recommend"></detailRecommendInfo>
     
  </scroll>
  
  <back-top v-show="isShow" @click="reTop"></back-top>
  <detailBottomBar @addToCategory="addToCategory"></detailBottomBar>
  <toast></toast>
  </div>
</template>

<script>
import navbar from '../../components/common/NavBar/DetailNavBar'
import detailswiper from '../../components/common/Swiper/DeatilSwiper'
import {getDetailData,GoodsInfo,Shop,Params,getRecommend} from '@/network/detail.js'
import detailBaseInfo from './detailBaseInfo'
import scroll from '@/components/common/Scroll/scroll'
import detailShopInfo from './detailShopInfo'
import detailGoodsInfo from './detailGoodsInfo'
import detailParamsInfo from './detailParamsInfo'
import detailCommonInfo from './detailCommonInfo'
import detailRecommendInfo from './detailRecommendInfo'
import {debounce} from '@/common/debounce.js'
import { itemListenerMinxin } from "@/common/mixin.js";
import backTop from '@/components/common/backTop/backTop'
import detailBottomBar from './detailBottomBar'
import toast from '@/components/common/toast/toast'
export default {
  name:'detail',
  components:{
      navbar,
      detailswiper,
      detailBaseInfo,
      scroll,
      detailShopInfo,
      detailGoodsInfo,
      detailParamsInfo,
      detailCommonInfo,
      detailRecommendInfo,
      detailBottomBar,
      backTop,
      toast
  },
  data () {
    return {
        iid:null,
        topImg:[],
        goodsInfo:{},
        shopInfo:{},
        detailInfo:{},
        itemInfo:{},
        commonInfo:{},
        recommendInfo:[],
        itemImgListener:null,
        themeY:[],
        funcTheme: null,
        currentIndex:0,
        isShow:false,
       
    }
  },
  created(){
    this.iid=this.$route.params.iid
    this.getDetailData(this.iid)
    this.getRecommend()
    
    
  },
  activated(){
  },
  unmounted() {
    this.bus.off('imgPartLoad',this.itemImgListener)
  },
  methods:{
    getDetailData(iid){
         getDetailData(iid).then(res => {
           let data=res.data.result
           this.topImg.push(...data.itemInfo.topImages)
           this.goodsInfo=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
            
           this.shopInfo=new Shop(data.shopInfo)
           this.detailInfo=data.detailInfo
           this.itemInfo=new Params(data.itemParams.info, data.itemParams.rule)
           if(data.rate.cRate){
             this.commonInfo=data.rate.list[0]
           }
          
        });
         
   },
    getRecommend(){
         getRecommend().then(res=>{
            this.recommendInfo.push(...res.data.data.list)
            
        });
  },
    allImgLoaded(){
      let newrefresh=debounce(this.$refs.detailscroll.refresh(),200)
      this.itemImgListener=function(){
        newrefresh()
      }
    
     
             this.themeY=[],
             this.themeY.push(0),
             this.themeY.push(this.$refs.params.$el.offsetTop-44),
             this.themeY.push(this.$refs.comment.$el.offsetTop-44),
             this.themeY.push(this.$refs.recommend.$el.offsetTop-44),
             this.themeY.push(Number.MAX_VALUE)

        
            
      this.bus.on('imgPartLoad',this.itemImgListener)
   },
    chooseTheme(index){
     this.$refs.detailscroll.scrollTo(0,-this.themeY[index])
     this.currentIndex=index
   },
   getposition(pos){
     this.isShow=-pos.y>=1000
     for(let i=0;i<this.themeY.length-1;i++)
     {
       if(this.currentIndex!==i&&(-pos.y>=this.themeY[i]&&-pos.y<this.themeY[i+1]))
       {
         this.currentIndex=i
         this.$refs.detailnavbar.currentIndex=this.currentIndex
       }
     }
   },
   reTop(){
     this.$refs.detailscroll.scrollTo(0,0,200)
   },
   addToCategory(){
     const product={};
        product.iid = this.iid;
        product.imgURL = this.topImg[0]
        product.title = this.goodsInfo.title
        product.desc = this.goodsInfo.desc;
        product.newPrice = this.goodsInfo.realPrice;
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res=>{
          // this.vm.type.methods.show(res,1000)
        //  document.querySelector('.toast').isshow=!this.isshow
       
        
         this.bus.emit('changeShow',res)
        
        })
        
   }
    
  },
  mounted(){
    
  }
  // mixins: [itemListenerMinxin] 混入mixin
}
</script>

<style scoped>
.out{
  height: 100vh;
  z-index: 10;
}
.scrollh{
  height: calc(100% - 93px);
}
</style>
