<template>
<div id="maintabbar">
  <tab-bar>
    <tab-bar-item path="/home" activeColor="orange">
      <template #tab-img><img src="@/assets/img/tabbar/homebefore.png" alt=""></template>
      <template #tab-img-active><img src="@/assets/img/tabbar/homeafter.png" alt=""></template>
      <template #tab-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/content" activeColor="orange">
      <template #tab-img><img src="@/assets/img/tabbar/contentbefore.png" alt=""></template>
      <template #tab-img-active><img src="@/assets/img/tabbar/contentafter.png" alt=""></template>
      <template #tab-text><div>内容</div></template>
    </tab-bar-item>
    <tab-bar-item path="/shop" activeColor="orange">
      <template #tab-img><img src="@/assets/img/tabbar/categorybefore.png" alt=""></template>
      <template #tab-img-active><img src="@/assets/img/tabbar/categoryafter.png" alt=""></template>
      <template #tab-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="orange">
      <template #tab-img><img src="@/assets/img/tabbar/profilebefore.png" alt=""></template>
      <template #tab-img-active><img src="@/assets/img/tabbar/profileafter.png" alt=""></template>
      <template #tab-text><div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</div>
</template>

<script>
export default {
  name: "mainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from '../../common/tabbar/TabBarItem'
</script>

<style scoped>
#maintabbar{
  position: fixed;
  bottom: 0;
  z-index: 9;
}
</style>
