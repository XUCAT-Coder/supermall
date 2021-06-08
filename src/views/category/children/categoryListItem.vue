<!--
 * @Author: your name
 * @Date: 2021-05-30 10:04:54
 * @LastEditTime: 2021-06-01 20:46:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\category\children\categoryListItem.vue
-->
<!--  -->
<template>
    
 <div id="shop-item">
    <div class="item-selector">
      <checkButton :value="product.checked" @has-click="hasbeenClick"></checkButton>
    </div>
    <div class="item-img">
      <img :src="product.imgURL" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.newPrice}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from './categoryCheckButton'
export default {
  name:'categoryListItem',
  data () {
    return {
    }
  },
  components:{
    checkButton
  },
  props:{
    product:{
        type:Object,
        default(){
            return {}
        }
    }
  },
  methods:{
    hasbeenClick(){
        this.product.checked=!this.product.checked
    }
  }
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 80px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>
