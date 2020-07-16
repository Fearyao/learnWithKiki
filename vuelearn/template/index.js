/*
 * @Description: 
 * @Author: Fearyao
 * @Date: 2020-06-16 11:37:29
 * @LastEditTime: 2020-06-16 16:15:18
 * @LastEditors: Fearyao
 */ 
const compiler = require('vue-template-compiler')

const template = `<p>{{message}}</p>`

const res = compiler.compile(template)
console.log(res.render)