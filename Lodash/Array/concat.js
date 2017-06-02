/**
 * 将一个或多个数组合并成一个数组. 纯函数
 * @param {array} arr 数组
 * @return {array}
 */
let _ = require('lodash')

let arr = [1]

let arr1 = _.concat(arr, 2, [3], [[4]])

console.log(arr, arr1)

function concat (arr) {
  let toString = Object.prototype.toString

  const array = [...arr]
  const argu = [...arguments].slice(1)
  for (let i = 0; i < argu.length; i++) {
    if (toString.call(argu[i]) === '[object Array]') {
      for (let j =  0; j < argu[i].length; j++) {
        array.push(argu[i][j])
      }
    } else {
      array.push(argu[i])
    }
  }
  return array
}

let arr2 = concat(arr, 2, [3], [[4]])

console.log(arr, arr2)