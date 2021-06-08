<!--
 * @Author: your name
 * @Date: 2021-05-07 22:03:32
 * @LastEditTime: 2021-05-21 22:21:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\Swiper\Swiperitem.vue
-->
<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide"
}
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;

}
</style>
