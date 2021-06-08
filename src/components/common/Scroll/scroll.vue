<!--
 * @Author: your name
 * @Date: 2021-05-12 13:54:18
 * @LastEditTime: 2021-06-03 10:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\Scroll\scroll.vue
-->
<template>
<div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "scroll",
  props:{
  probeType:{
        type:Number,
        default:0
   },
  pullUpload:{
    type:Boolean,
    default:false
  }
  },
  data(){
    return {
      scroll:null,
    }
  },
  mounted(){
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      observeDOM :true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpload
    })
    if(this.probeType==2||this.probeType==3){
      this.scroll.on('scroll',(position)=>{
      this.$emit('showposition',position)
      this.$emit('showdetailposition',position)
    })
    }
    if(this.pullUpload){
      this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
    }
    
  },
  methods:{
    scrollTo(x,y,time=200){
      this.scroll.scrollTo(x,y)
    } ,
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll&&this.scroll.refresh
    },
    getScrollY(){
    
      return this.scroll.y
    }
  }
}

</script>

<style scoped>

</style>