<!--
 * @Author: your name
 * @Date: 2021-05-20 21:33:29
 * @LastEditTime: 2021-06-01 20:46:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\Swiper\DeatilSwiper.vue
-->
<!--  -->
<template>
   <van-swipe :autoplay="3000" style="height:300px" :stop-propagation="false">
        <van-swipe-item v-for="(item,index) in topImgUrl" :key="index" >
         <div class="box">
            
             <img :src="item" alt="">
            
          
         </div>
        </van-swipe-item>
      </van-swipe> 
</template>

<script>

import { Swipe, SwipeItem } from "vant";

export default {
  name:'DetailSwiper',
  data () {
    return {
    }
  },
  props:{
    topImgUrl:{
      type:Array,
      default(){
        return []
      }
    }
  },
   methods: {
        
   },
   components:{
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }

  
}
</script>

<style  scoped>
.box img{
  width: 100%;
  overflow: hidden;
}
</style>
