/**
 * 将数组中的元素为 false 的 移除掉 返回一个新数组. 纯函数
 * @param {array} arr 数组
 * @return {array}
 */
let _ = require('lodash')

let arr = [0, 1, '', 2, false, 3, null, 4, undefined, 5, NaN, 6]

let arr1 = _.compact(arr)

console.log(arr, arr1)

function compact (arr) {
  const array = []
  let i = 0;
  let length = arr.length
  for (; i < length; i++) {
    arr[i] && array.push(arr[i])
  }
  return array
}

let arr2 = compact(arr)

console.log(arr, arr2)