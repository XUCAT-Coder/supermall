<!--
 * @Author: your name
 * @Date: 2021-06-01 15:05:14
 * @LastEditTime: 2021-06-02 13:06:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\toast\toast.vue
-->
<!--  -->
<template>
  <div class="toast" v-show="isshow">
    {{message}}
    <span>{{show1()}}</span>
    <span>{{show2()}}</span>
  </div>
</template>

<script>
import {debounce} from '@/common/debounce.js'
export default {
  name:'toast',
  data () {
    return {
        message:'',
        isshow:false
    }
  },
  methods:{
      show1(delay=2000){
          this.bus.on('changeShow',(res)=>{
            this.isshow=true
            this.message=res
            setTimeout(()=>{
            this.isshow=false,
            this.message=''
          },delay)
          })
      },
      show2(delay=2000){
            const show2=debounce(()=>{
            this.bus.on('selectNone',(res)=>{

            this.isshow=true
            this.message=res
            
            setTimeout(()=>{
            this.isshow=false,
            this.message=''
          },delay)
          })
         },300)
           return show2()
       
       
      }
  }
}
</script>

<style  scoped>
.toast{
    position: fixed;
    
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.8);
    font-size: 20px;
    z-index: 999;
}
.toast span{
  margin: 0;
  padding: 0;
}
</style>
