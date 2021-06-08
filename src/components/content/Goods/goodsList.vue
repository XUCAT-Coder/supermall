<!--
 * @Author: your name
 * @Date: 2021-05-09 13:11:23
 * @LastEditTime: 2021-05-17 21:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\content\Goods\goodsList.vue
-->
<template>
<div id="goodsList">
  <goodsListItem v-for="(item,index) in goodsList" :goodsListItem="item" :key="index">
   
  </goodsListItem>
</div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  name: "goodsList",
  components:{
    goodsListItem
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
#goodsList{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>