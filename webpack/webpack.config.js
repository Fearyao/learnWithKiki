/*
 * @Description: 
 * @Author: Fearyao
 * @Date: 2020-07-27 15:35:57
 * @LastEditTime: 2020-07-27 16:09:47
 * @LastEditors: Fearyao
 */ 
const path = require('path')
const {resolve} = path
module.exports = {
  entry:'./index.js',
  output:{
    filename:'bundle.js',
    path:resolve(__dirname,'dist')
  },
  rules:[],
  plugins:[],
  mode:'develop'
}