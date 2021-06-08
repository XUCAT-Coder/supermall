<!--
 * @Author: your name
 * @Date: 2021-05-07 22:05:35
 * @LastEditTime: 2021-05-25 21:42:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\home\children\homeswiper.vue
-->
<template>
  <!-- <el-carousel height="150px" id="imgs" ref="carousel" indicator-position="outside">
    <el-carousel-item  v-for="(item,index) in banners" :key="index" >
      
        <div>
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
         </a>
        </div>
      
    </el-carousel-item>
  </el-carousel> -->
   
      <van-swipe :autoplay="3000"  :stop-propagation="false" class="pot">
        <van-swipe-item v-for="(item,index) in banners" :key="index" >
         <div class="box">
             <a :href="item.link">
             <img :src="item.image" alt="" @load="imgload">
             </a>
          
         </div>
        </van-swipe-item>
      </van-swipe>
   
   
    
  
  
   
      
    
</template>



<script>

import { Swipe, SwipeItem } from "vant";

export default {
  name: "homeswiper",
  components:{
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false,
     
    }
  },
  methods:{
    imgLoad(){
      if(!this.isLoad){
      this.$emit('allImgLoad')
      this.isLoad=!this.isLoad
      }
     
    },
   
  }

}
</script>

<style scoped>

.pot{
 height: 150px;
}
 
 .box img{
   width: 100%;
  
 }

</style>