<!--
 * @Author: your name
 * @Date: 2021-06-05 12:42:24
 * @LastEditTime: 2021-06-05 12:42:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\views\profile\ListView.vue
-->
<!--  -->
<template>
   <div id="list">
      <div v-for="(item, index) in listData" :key="index" class="item">
        <span class="icon">
          <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>
        </span>
        <div class="info">{{item.info}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name:'listview',
  data () {
    return {
    }
  },
  props: {
		  listData: {
		    type: Array,
        default: function () {
          return []
        }
      }
    }
}
</script>

<style  scoped>
#list {
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }

  #list .item {
    height: 44px;
    line-height: 44px;
    position: relative;
  }

  .icon svg {
    width: 18px;
    height: 18px;
  }

  .item .icon {
    margin-top: 10px;
    position: absolute;
    left: 16px;
    top: -7px;
  }

  .item .info {
    margin-left: 40px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
  }

  .item:last-of-type .info {
    border-bottom: none;
  }
</style>
