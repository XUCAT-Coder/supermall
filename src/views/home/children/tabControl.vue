<!--
 * @Author: your name
 * @Date: 2021-05-08 22:08:01
 * @LastEditTime: 2021-05-23 21:03:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\home\children\tabControl.vue
-->
<template>
    <div id="tabControl">
      <div v-for="(item,index) in titles" id="tabControlItem"
           @click="isFocus(index)"
           :class="{active:currentIndex===index}"
           :key="index">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "tabControl",
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    isFocus(index){
      this.currentIndex=index
      this.$emit('clickControl',index)
    }
  }
}
</script>

<style scoped>
#tabControl{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  margin-bottom: 3px;
}
#tabControlItem{
  flex: 1;

}
.active{
  color: var(--color-tint);
}
.active span{
  border-bottom: 1px solid var(--color-tint);
}
</style>