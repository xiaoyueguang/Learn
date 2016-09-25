{
    const arr = [1, 2, 3];
    let [x, y] = arr;
}
{
    const arr = [1, 2, 3];
    let [x, ...rest] = arr;
}
{
    let generator = function* () {
        yield 1;
        yield* [2, 3, 4];
        yield 5;
    }
    let iterator = generator();
    iterator.next();
    //  这里开始调用 Iterator 接口
    iterator.next();
}
{
    let str = 'Hello World!';
    typeof str[Symbol.iterator];
    //  function
}
{
    let str = 'Hello World!';
    for (let s of str) {
        console.log(s); //=> H e l l o   W o r l d !
    }

    let nodeList = document.querySelectorAll('div');
    for (let d of nodeList) {
        console.log(d.className);
    }

    function func () {
        for (let x of arguments) {
            console.log(x);
        }
    }
    func('Hello', 'World!');    //=> Hello World!
}
{
    let arr = {length: 2, 0: 'a', 1: 'b'};
    //  会报错
    for (let x of arr) {
        console.log(x);
    }

    for (let y of Array.from(arr)) {
        console.log(x);
    }
}
{
    const obj = {
        a: 1,
        b: 2,
        c: 3
    }
    for (let k of Object.keys(obj)) {
        console.log(k); //=> a, b, c
    }
}