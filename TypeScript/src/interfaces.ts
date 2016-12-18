//  TypeScript接口的核心原则之一, 是对值进行类型检查.来保证代码传入的值是所想要的类型.从而保证可靠性

//  枚举动物类型
enum Type {Bird, Cat, Dog}
//  描述一个动物接口, 说明该对象所需要的属性以及类型
//  被接口声明后的对象, 添加多余的属性都会报错
interface animal {
  name: string;
  //  只读
  readonly type: Type;
  age: number;
  //  ? 表示可有可无
  color?: string;
  [propName: string]: any;
}
//  用动物接口来描述变量
function getAge (animal: animal): number {
  return animal.age
}

let lilei = {
  name: 'lilei',
  age: 10,
  type: 2,
  prop: true
}
let hanmei:animal = {
  name: 'hanmei',
  age: 5,
  type: Type.Bird,
  color: 'white'
}

// hanmei.type = Type.Cat; //  报错.
console.log(getAge(lilei))
let a: number[] = [1, 2, 3]
//  ReadonlyArray<T> 表示该数组创建后就不可再更改
let arr: ReadonlyArray<number> = a

//  函数类型: 接口可同时规定变量以及返回值的类型
interface replaceFunc {
  (oriWord: string, keyWord: string, replaceWord: string): string;
}

let myReplace: replaceFunc
myReplace = function (oriWord, keyWord, replaceWord) {
  return oriWord.replace(keyWord, replaceWord)
}

//  可索引的类型
interface BooleanArray {
  [index: number]: boolean
}
let myArray: BooleanArray
myArray = [true, false]

//  类 类型
interface ClockInterface {
  //  规定属性类型
  currentTime: Date;
  //  规定方法变量类型以及返回类型
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  currentTime: Date
  setTime (d) {
    this.currentTime = d
  }
  constructor (h: number, m: number) {
    let date: Date = new Date()
    date.setHours(h)
    date.setMinutes(m)
    this.setTime(h)
  }
}

let clock = new Clock(12, 13)
window['clock'] = clock



export const interfaces_init = function () {
  document.title = '接口'
};