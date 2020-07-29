/*
 * @Description: 
 * @Author: Fearyao
 * @Date: 2020-07-27 15:45:19
 * @LastEditTime: 2020-07-29 09:52:25
 * @LastEditors: Fearyao
 */

import img from '../../assets/https.png'
export default class HomePage {
  constructor() {
    this.pageName = 'HomePage'
    this.render()
  }
  clickFn(){
    this.pageName += ' clicked'
    this.render()
  }

  render() {
    document.querySelector('#app').innerHTML = `
      <div onclick=${this.clickFn}>
        <p>${this.pageName}<p>
        <img src='${img}'>
      </div>
    `
  }
}