<template>
<div id="homerecommend">
   <div v-for="(item,index) in recommends" :key="index" id="hr-item">
     <a :href="item.link"><img :src="item.image" alt=""></a>
     <div id="text">{{item.title}}</div>
   </div>
</div>
</template>

<script>
export default {
  name: "homerecommend",
  data(){
    return {

    }
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>
#homerecommend{
  text-align: center;
  display: flex;
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
  border-bottom: 5px solid rgba(123, 113, 144, 0.09);
}
#hr-item{
  flex: 1;
}
#hr-item img{
  width: 60%;
  height: 60%;
}
#text{
  margin-top: 5px;
}
</style>