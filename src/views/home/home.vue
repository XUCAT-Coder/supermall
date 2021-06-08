<template>

<div id="home">
<!--     <el-scrollbar class="homeScroll" ref="homescrollbar" id="resolveScroll">-->
<!--        <NavBar class="nav-bar">-->
<!--          <template v-slot:center><div>购物街</div></template>-->
<!--        </NavBar>-->
<!--        <homeswiper :banners="banners" id="homeswiper"></homeswiper>-->
<!--        <homerecommend :recommends="recommends"></homerecommend>-->
<!--        <onlyshow></onlyshow>-->

<!--        <div  @click="backTop"  v-show="visible">-->
<!--          <reTop></reTop>-->
<!--        </div>-->
<!--       <div id="infscroll"-->
<!--            v-infinite-scroll="load"-->
<!--            infinite-scroll-disabled="disabled"-->
<!--            infinite-scroll-distance="3">-->
<!--         <tabControl :titles="['流行','新款','精选']" class="tabControl"-->
<!--                     @clickControl="clickControlMain"-->
<!--         ></tabControl>-->
<!--         <goodsList :goodsList="goods[currentGoodsType].list"></goodsList>-->
<!--        <p v-if="loading">加载中...</p>-->
<!--         <p v-if="noMore">没有更多了</p>-->
<!--       </div>-->
<!--     </el-scrollbar>-->
             <NavBar class="nav-bar">
              <template v-slot:center><div>购物街</div></template>
             </NavBar>
             <tabControl :titles="['流行','新款','精选']" :class="isshowtabcontrol?'tabControl1':''"
                             @clickControl="clickControlMain"
                             ref="tabcontrol1"
                             v-show="isshowtabcontrol"
             ></tabControl>
             <scroll class="wrapper"
                     ref="scroll" 
                     :probe-type="3"
                     :pullUpload="true"
                      @showposition="limitposition"
                      @pullingUp="loadMore"
                      >
                  <homeswiper :banners="banners" id="homeswiper"
                    @allImgLoad="allImgLoaded"
                  ></homeswiper>
                  <homerecommend :recommends="recommends"></homerecommend>
                  <onlyshow></onlyshow>             
                  <tabControl :titles="['流行','新款','精选']" class="tabControl"
                             @clickControl="clickControlMain"
                             ref="tabcontrol2"
                  ></tabControl>
                  <goodsList :goodsList="goods[currentGoodsType].list"></goodsList>
                 
             </scroll>
             <div><backTop  @click="backTop" v-show="visible"></backTop></div>
           



</div>


</template>

<script>
import NavBar from '../../components/common/NavBar/NavBar'
import {getHomeData,getHomeGoods} from '../../network/home'
import homeswiper from './children/homeswiper'
import homerecommend from './children/homerecommend'
import onlyshow from './children/onlyshow'
import tabControl from './children/tabControl'
import goodsList from '../../components/content/Goods/goodsList'
import backTop from '../../components/common/backTop/backTop'
import scroll from '../../components/common/Scroll/scroll'
import {debounce} from '@/common/debounce.js'
export default {
  name: "home",
  components:{
    NavBar,
    homeswiper,
    homerecommend,
    onlyshow,
    tabControl,
    goodsList,
    backTop,
    scroll

  },
  data(){
   return{
     banners:[],
     recommends:[],
     goods:{
       'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
       'sell':{page:0,list:[]}
     },
     currentGoodsType:'pop',
     currentIndex:0,
     visible:false,
     loading:false,
     taboffsetTop:0,
     isshowtabcontrol:false,
     savaY:0,
     itemImgListener:null
   }
  },
  computed:{
    disabled () {
      return this.loading
    }
  },
  methods:{
    getHomeData(){
      getHomeData().then(res=>{

        this.banners=res.data.data.banner.list
        this.recommends=res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
          
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page+=1;
        this.$refs.scroll.finishPullUp();
      })
    },
    clickControlMain(index){
      this.currentGoodsType=Object.keys(this.goods)[index]
      this.$refs.tabcontrol1.currentIndex=index
      this.$refs.tabcontrol2.currentIndex=index
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    limitposition(position){
         this.visible=-position.y>1000
         this.isshowtabcontrol=-position.y>=this.taboffsetTop
    },
    loadMore(){
        this.getHomeGoods(this.currentGoodsType)
    },
    allImgLoaded(){
         
            this.taboffsetTop=this.$refs.tabcontrol2.$el.offsetTop
            
        
      }
      
    
    
    
   },
  created(){
   this.getHomeData();
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
   
   
  },
  //  activated() {
  //    this.$refs.scroll.refresh()
  //    this.$refs.scroll.scrollTo(0,this.savaY,0)
    
  //  },
  //  deactivated() {
  //    this.savaY=this.$refs.scroll.getScrollY()
  //    this.bus.off('imgPartLoad',this.itemImgListener)
  //  },
   mounted(){
   let newrefresh=debounce(this.$refs.scroll.refresh(),200)
   this.itemImgListener=function(){
      newrefresh()
   }
   this.bus.on('imgPartLoad',this.itemImgListener)
  
  }
}
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
}
#home{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.tabControl1{
  position: relative;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
}
/*.homeScroll{*/
/*  height: calc(100% - 50px);*/
/*  overflow: hidden;*/
/*}*/
.wrapper{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
}
</style>