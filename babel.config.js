/*
 * @Author: your name
 * @Date: 2021-05-06 19:36:30
 * @LastEditTime: 2021-05-23 08:53:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermallpro\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      //libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]


}
