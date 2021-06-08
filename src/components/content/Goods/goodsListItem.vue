<!--
 * @Author: your name
 * @Date: 2021-05-09 13:11:39
 * @LastEditTime: 2021-06-02 12:59:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \supermallpro\src\components\content\Goods\goodsListItem.vue
-->
<template>
  <div id="goodsListItem">

      <img :src="chooseShowImg" alt="" @load="allImgLoad" @click="imgClick()" class="goodsImg">
      <div id="info">
        <p>{{goodsListItem.title}}</p>
        <span>{{goodsListItem.price}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props:{
    goodsListItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
     
    }
  },
  methods:{
    allImgLoad(){
      this.bus.emit('imgPartLoad')//调用事件总线方法
    },
    imgClick(){
      this.$router.push('/detail/'+this.goodsListItem.iid)
      
    },
   
    
  },
  computed:{
      chooseShowImg(){
       return     this.goodsListItem.image ||  this.goodsListItem.show.img
    }
  }
}

</script>

<style scoped>
#goodsListItem{
  width: 45%;
  padding-bottom: 30px;
  position: relative;
}
#goodsListItem img{
  width: 100%;
  border-radius: 5%;
  flex: 1;
}
#goodsListItem p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

}
#goodsListItem span{
  color: var(--color-tint);
}
#info{
  position: absolute;
  bottom: 5px;
  font-size: 12px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodsImg{
  margin-bottom: 5px;
}
</style>