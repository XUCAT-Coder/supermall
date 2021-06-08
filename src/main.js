/*
 * @Author: your name
 * @Date: 2021-05-06 19:36:30
 * @LastEditTime: 2021-06-01 20:36:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import installElementPlus from './plugins/element'
import mitt from 'mitt';
import moment from 'moment'
//import toast from '@/components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue3-lazyload'
const bus = mitt();
FastClick.attach(document.body)
const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.bus = bus
//app.use(toast)
app.use(VueLazyLoad)
app.use(store).use(router).use(moment).mount('#app')

