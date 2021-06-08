<!--
 * @Author: your name
 * @Date: 2021-05-30 11:17:18
 * @LastEditTime: 2021-06-02 13:04:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\category\children\categoryCheckBottom.vue
-->
<!--  -->
<template>
  <div>
      <div @click="clicked" :class="{active:flag}" class="tick">
          <img src="../../../assets/img/category/tick.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name:'categoryCheckButton',
  props:{
      value:{
          type:Boolean,
          default(){
              return false
          }
      }
  },
  data () {
    return {
        flag:this.value
    }
  },
  methods:{
    clicked(){
        this.$emit('hasClick')
        
    }
  },
  watch:{
    value:function(newValue){
      this.flag=newValue
    }
  }
}
</script>

<style  scoped>
.tick {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
