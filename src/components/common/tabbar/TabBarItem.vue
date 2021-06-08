<!--
 * @Author: your name
 * @Date: 2021-05-06 21:40:16
 * @LastEditTime: 2021-05-19 21:52:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\tabbar\TabBarItem.vue
-->
<template>
  <div class="tab-bar-item" @click="itemClick">
     <div v-show="!isActive"> <slot name="tab-img"></slot></div>
     <div v-show="isActive"> <slot name="tab-img-active"></slot></div>
     <div :style="activeStyle"> <slot name="tab-text"></slot></div>
  </div>

</template>

<script>

export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  data(){
    return {
      
    }
  },
  computed:{
    isActive(){
      
      return this.$route.path.indexOf(this.path)!== -1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
     this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
  color: pink;
}
</style>
