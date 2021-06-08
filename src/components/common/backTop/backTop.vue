<!--
 * @Author: your name
 * @Date: 2021-05-13 21:38:44
 * @LastEditTime: 2021-05-15 17:02:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit9
 * @FilePath: \supermallpro\src\components\common\backTop\backTop.vue
-->
<!--  -->
<template>
  <div class="back-top">
   <img src="../../../assets/img/backTop/backtop.png" alt="">
  </div>
</template>

<script>
export default {
  name:'backTop',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.back-top{
position : fixed;
right: 12px;
bottom: 55px;
}
.back-top img{
    width: 30px;
    height: 30px;
}


</style>
