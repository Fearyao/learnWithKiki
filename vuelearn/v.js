/*
 * @Description: 
 * @Author: Fearyao
 * @Date: 2020-06-15 12:58:22
 * @LastEditTime: 2020-07-16 17:18:11
 * @LastEditors: Fearyao
 */

function defineReactive(target, key, value) {
  if (typeof value == 'object') {
    observe(value)
  }
  Object.defineProperty(target, key, {
    set(newValue) {
      if (newValue === value) {
        return
      }
      console.log('set')
      value = newValue
      observe(value)
    },
    get() {
      console.log('get')
      return value
    }
  })
}

function observe(target) {
  if (typeof target !== 'object') {
    return target
  }
  if (Array.isArray(target)) {
    target.__proto__ = arrayProto
    return
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

const oldArrayProperty = Array.prototype
const arrayProto = Object.create(oldArrayProperty);
['push', 'pop'].forEach(method => {
  arrayProto[method] = function () {
    console.log('array change')
    oldArrayProperty[method].call(this, ...arguments)
  }
});

const data = {
  name: 'fearyao',
  age: 26,
  friend: []
}

observe(data)

data.friend = [1, 2]
console.log(data.friend)
data.friend.push(3)

