<!--
 * @Author: your name
 * @Date: 2021-05-30 10:04:30
 * @LastEditTime: 2021-05-30 10:54:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\category\children\categoryList.vue
-->
<!--  -->
<template>
  <div v-for="(item,index) in categorysContent" :key="index">
  <categoryListItem :product="item"></categoryListItem>
  </div>
</template>

<script>
import categoryListItem from './categoryListItem'
import {mapGetters} from 'vuex'
export default {
  name:'categoryList',
  data () {
    return {
    }
  },
  components:{
    categoryListItem
  },
  computed:{
      ...mapGetters([
          'categorysContent'
      ])
  }
}
</script>

<style lang='stylus' scoped>

</style>
