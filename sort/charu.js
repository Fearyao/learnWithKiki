/*
 * @Description:
 * @Author: Fearyao
 * @Date: 2020-07-08 11:03:00
 * @LastEditTime: 2020-07-16 11:52:05
 * @LastEditors: Fearyao
 */

const { log } = require("console")

const charu = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let n = arr.splice(i, 1)[0]
        arr.splice(j, 0, n)
      }
    }
  }
  return arr
}

console.log(charu([1, 5, 2, 6, 3, 7, 4, 8]))
