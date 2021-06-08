<!--
 * @Author: your name
 * @Date: 2021-05-19 18:59:04
 * @LastEditTime: 2021-06-02 16:24:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\NavBar\DetailNavBar.vue
-->
<!--  -->
<template>
  <div>
      <navbar>
          <template v-slot:left>
             <div>
                <img :src="img1" alt="" @click="back" > 
             </div>
                 
              
          </template>
          <template v-slot:center>
              <div class="out">
                   <div v-for="(item,index) in titles" :key="index" :class="{in:true,actived:currentIndex===index}" @click="selected(index)">
                          {{item}}
                   </div>
              </div>
           
          </template>
          
      </navbar>      
  </div>
</template>

<script>
import navbar from './NavBar'
import img1 from '@i/back/back.png'
export default {
  name:'DeatilNavBar',
  data () {
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0,
        img1:img1
        
    }
  },
  components:{
      navbar
  },
  methods:{
      selected(index){
          this.currentIndex=index
          this.$emit('themeIndex',index)
      },
      back(){
          this.$router.push('/home')
      }
  }
}
</script>

<style scoped>

img{
    visibility: visible;
    width: 44px;
    height: 44px;
}
.out{
    display:flex;
    background-color: whitesmoke;
}
.in{
    flex: 1;
    font-size: 12px;
}
.actived{
    color: pink;
    font-size: 16px;
}
</style>
