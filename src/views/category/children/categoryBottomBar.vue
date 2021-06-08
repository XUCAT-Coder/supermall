<!--
 * @Author: your name
 * @Date: 2021-05-30 18:19:31
 * @LastEditTime: 2021-06-02 13:13:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\category\children\categoryBottomBar.vue
-->
<!--  -->
<template>
  <div class="cartBottomBox">
     
        <checkBottom class="checkbottom" :value="isselected" @click="tickAll"></checkBottom>
        <span class="left  idone">全选</span>
        
        <span class="right idtwo">合计:{{'￥'+allTotal}}</span>
        <span class="right idthird" @click="settleAccount">结算({{goodCount}})</span>
        
     
  </div>
</template>

<script>
import checkBottom from './categoryCheckButton'
export default {
  name:'categoryBottomBar',
  data () {
    return {
      existItem:[],
      flag:false
    }
  },
  components:{
    checkBottom
  },
  computed:{
    goodCount(){
      return this.$store.state.categorys.filter(item=>item.checked).length
    },
    allTotal(){
      // this.$store.state.categorys.forEach(item => {
      //   if(item.checked){
      //     this.existItem.push(...item)
      //   }
      // });
      return this.$store.state.categorys.filter(item=>item.checked)
      .reduce((pre,item)=> pre+item.count*item.newPrice,0)
      .toFixed(2)
    },
    isselected(){
      // if(this.$store.state.categorys.length===0){return false}
      // return !this.$store.state.categorys.find(item=>!item.checked)
      return this.$store.state.categorys.length!==0&&
             this.$store.state.categorys.every(item=>item.checked)
    }
  },
  methods:{
    tickAll(){
      if(this.isselected){
        this.$store.state.categorys.forEach(item =>item.checked=false);
      }else{
        this.$store.state.categorys.forEach(item=>item.checked=true)
      }
    },
    settleAccount(){
      if(!this.isselected&&this.$store.state.categorys.every(item=>item.checked==false)){
        this.bus.emit('selectNone','您未选择任何商品')
      }
    }
  }
}
</script>

<style  scoped>
.cartBottomBox{
  width: 100%;
  height: 44px;
  position: fixed;
  line-height: 44px;
  bottom: 55px;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  left: 0;
  padding-left: 35px;
  /* box-sizing: border-box; */
  align-items: center;
  display: flex;
  font-size: 12px;
}
.checkbottom{
  position: absolute;
  left: 16px;
  bottom: 17px;
  display: block;
  line-height: 0;
}

.idone{
  padding-left: 5px;
  padding-right: 10px;
}
.idthird{
 text-align: center;
 background-color: orange;
}
.right{
  float: left;
}
.left{
  align-items: center;
}
.left,.right{
  flex: 1;
}
</style>
