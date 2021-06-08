/*
 * @Author: your name
 * @Date: 2021-05-06 19:36:30
 * @LastEditTime: 2021-06-02 15:36:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
const home = ()=>import('../views/home/home')
const content = ()=>import('../views/content/content')
const shop = ()=>import('../views/category/category')
const profile = ()=>import('../views/profile/profile')
const detail = ()=>import('../views/detail/detail')
const routes = [
  {
    path:'',redirect:'/home'
  },
  {
    name:'home',
    path:'/home',
    component:home,
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/content',
    component:content,
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/shop',
    component:shop,
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      keepAlive:true
    }
  },
  {
    path:'/detail/:iid',
    component:detail,
    meta:{
      keepAlive:false
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'hash',
  // to为即将跳转的路由，from为上一个页面路由
  beforeRouteLeave(to, from,next) {
  // 设置下一个路由的 meta
  to.meta.keepAlive = false;
  next();
}
})

export default router
