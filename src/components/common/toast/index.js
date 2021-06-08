/*
 * @Author: your name
 * @Date: 2021-06-01 15:11:24
 * @LastEditTime: 2021-06-01 17:10:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\components\common\toast\index.js
 */
//失败了！！！
import toast from '@/components/common/toast/toast'
import { createVNode ,render} from 'vue'
const obj={}
//obj.install=function(app){
    // console.log('request',app);
    // const toastConstruct=app.extends(toast)//创建组件构造器
    // const newToast=new toastConstruct()//创建组件对象
    // newToast.mount(document.createElement('div'))//挂载到指定元素上
    // document.body.appendChild(newToast.$el)//与body联动
    // app.prototype.$toast=newToast
//}
    
    // obj.install=function(app){
    //     console.log('success');
    //     const body = document.body;
    //     const root = document.createElement("div");
    //     body.appendChild(root);
    //     root.className = "custom-root";
    //     let div = document.createElement("div");
    //     root.appendChild(div);
    //     // com 为自己写的组件,  SoltChild 可以是自己的子组件 ，也可以不传
    //     let vm = createVNode(toast,{},{
    //         // slots
    //         default:()=>createVNode(SoltChild)
    //     });
    //     vm.appContext = app._context; // 这句很关键，关联起了数据
    //     render(vm,div);
    // }
    

export default obj
