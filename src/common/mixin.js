/*
 * @Author: your name
 * @Date: 2021-05-25 18:56:30
 * @LastEditTime: 2021-05-25 19:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\common\mixin.js
 */
import { debounce } from "@/common/debounce.js";
export const itemListenerMinxin = {
    mounted() {
      // 防抖
      let newrefresh = debounce(this.$refs.scroll.refresh, 50);
      
    }
  };
  //自行选择是否采用