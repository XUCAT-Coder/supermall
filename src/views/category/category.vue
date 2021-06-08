<!--
 * @Author: your name
 * @Date: 2021-05-06 22:16:35
 * @LastEditTime: 2021-06-01 19:58:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\category\category.vue
-->
<template>
  <div class="cart">
    <toast></toast>
    <nav-bar class="navbar">
      <template #center>
        <div>
        <span>购物车({{categorysLength}})</span>
        </div>
      </template>
  </nav-bar>
  <div class="wrapper"  ref="wrappers">
    
    <div class="content">
    <categoryList></categoryList>  
          
    </div>
   
  </div>
  <cateBottomBar class="bottomBar"></cateBottomBar>
  </div>
 
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'
import categoryList from './children/categoryList'
import cateBottomBar from './children/categoryBottomBar'
import toast from '@/components/common/toast/toast'
import {mapGetters} from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: "category",
  components:{
    NavBar,
    categoryList,
    cateBottomBar,
    toast
  },
    data(){
    return{
      scroll:null
    }
  },
  mounted(){
    
    this.scroll=new BScroll(this.$refs.wrappers,{
      click:true,
      observeDOM :true,
    })
  },
  activated(){
    this.scroll.refresh
  },
  computed:{
    ...mapGetters([
      'categorysLength'
    ])
  }
 
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.navbar{
  background-color: var(--color-tint);  
}
.wrapper{
  margin-top: 44px;
  height: calc(100% - 93px - 30px);
  overflow: hidden;
  background-color: whitesmoke;
}
.bottomBar{
  background-color: rgb(231, 227, 227);
}

</style>