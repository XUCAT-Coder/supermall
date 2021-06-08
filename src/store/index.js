/*
 * @Author: your name
 * @Date: 2021-05-06 19:36:30
 * @LastEditTime: 2021-05-30 21:05:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\src\store\index.js
 */
import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
export default createStore({
  state: {
    categorys:[]
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
