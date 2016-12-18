/*  TypeScript 可为变量声明类型. 声明类型后不可改变. 这是与JavaScript最大的不同 */
//  布尔值
let isDone: boolean = false
//  数字
let number: number = 35
//  字符串
let name: string = 'LiLei'
//  数组
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2 , 3]
//  元组. 表示一个已知元素数量和类型的数组
let x: [string, number, boolean] = ['LiLei', 18, false]
//  枚举 为数组赋予名字
enum Color {Red = 2, Green, Blue}
let c: number = Color.Green //=> c=3
let colorName: string = Color[c]
//  任意值 当不清除变量为什么类型时
let notSure: any = 4;
notSure = false
notSure = 'test'

let listAny1: any[] = [1, '1']
let listAny2: Array<any> = [1, '1']
//  空值 没有任何类型. 比如函数返回 null 或 undefined时
function warn (name: string): void {
  // return name //  => 报错.不应该有返回
  return undefined
}
//  Null 和 undefined
let u: undefined = undefined
let n: null = null
u = null
n = undefined
//  Never
//  函数内必须存在无法达到的终点. 否则报错
function error (msg: string): never {
  throw new Error(msg);
}

//  类型断言
let notSure1: any = 'string'
//  <string> 表明已经确定该值一定是string
let strLength1: number = (<string>notSure1).length
let strLength2: number = (notSure1 as string).length
// console.log(strLength1)


export const base_init = function () {
  document.title = '基础类型'
};