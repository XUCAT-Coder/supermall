<!--
 * @Author: your name
 * @Date: 2021-05-24 18:12:45
 * @LastEditTime: 2021-05-24 18:40:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\detail\detailRecommendInfo.vue
-->
<!--  -->
<template>
  <div>
       <goodsList :goodsList="recommendInfo"></goodsList> 
  </div>
</template>

<script>
import goodsList from '@/components/content/Goods/goodsList'
export default {
  name:'detailRecommendInfo',
  data () {
    return {
    }
  },
  props:{
      recommendInfo:[]
  },
  components:{
       goodsList
       
  }
}
</script>

<style lang='stylus' scoped>

</style>

