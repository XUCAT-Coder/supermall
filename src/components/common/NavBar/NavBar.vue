<!--
 * @Author: your name
 * @Date: 2021-05-07 12:34:41
 * @LastEditTime: 2021-05-20 21:30:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\NavBar\NavBar.vue
-->
<template>
<div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  text-align: center;
  line-height: 44px;
  z-index: 9;

}
.left,.right{
  width: 60px;
  background-color: whitesmoke;
}
.center{
  flex: 1;
  color: black;
}
</style>