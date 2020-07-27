/*
 * @Description: 
 * @Author: Fearyao
 * @Date: 2020-07-27 15:45:19
 * @LastEditTime: 2020-07-27 15:48:19
 * @LastEditors: Fearyao
 */ 

 export default class HomePage{
  constructor(){
    this.pageName = 'HomePage'
    this.render()
  }
  render() {
    document.querySelector('#app').innerHTML = `
      <div>
        <p>${this.pageName}<p>
      </div>
    `
  }
 }