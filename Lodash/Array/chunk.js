/**
 * _.chunk(array, [size = 1])
 * 将 一个数组 按照长度为 size 来切成多个数组. 纯函数
 * @param {array} arr 数组
 * @param {number} size 长度
 * @return {array}
 */

let _ = require('lodash')

let arr = [1, 2, 3, 4, 5]

let arr1 = _.chunk(arr, 2)

console.log(arr, arr1)

function chunk (arr, size = 1) {
  const array = []
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let length = Math.floor(i / size)
    // 
    if (i % size === 0) {
      array.push([])
    }
    array[length].push(arr[i])
  }
  return array
}

let arr2 = chunk(arr, 2)
console.log(arr, arr2)