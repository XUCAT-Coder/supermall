<!--
 * @Author: your name
 * @Date: 2021-05-06 19:36:30
 * @LastEditTime: 2021-05-28 21:50:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\App.vue
-->
<template>
  <div id="app">
    
    
   <keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
   </keep-alive>
   <router-view v-if="!$route.meta.keepAlive"></router-view>
   <main-tab-bar v-show="$route.meta.keepAlive"></main-tab-bar>
  

    
  </div>

</template>

<script>

import mainTabBar from './components/content/mainTabBar/mainTabBar'


export default {
  name: 'App',
  components: {
    mainTabBar,

  },
  data(){
    return {
      // cloak:this.$route.meta.keepAlive
    }
  },
  methods:{
   
  }
}

</script>

<style>

@import "assets/css/base.css";
</style>
