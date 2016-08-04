function test(x = 'Hello', y = 'World!'){
	return x + y;
}

let a = (x = 'Hello', y = 'World') => x + y;

let b = (x, y, z) => {};

let c = (x, y, z = 1) => {};

let d = (x, y = 1, z) => {};

let e = (x = 1, y, z) => {};

let y = 1;
let f = (x = y) => {
	let y = 2;
	return x;
};


function throwIfMissing() {
	throw new Error('Missing parameter');
}

function foo(mustBeProvided = throwIfMissing()) {
	return mustBeProvided;
}

function foo1(optional = undefined) {}

function add(...values){
	console.log(values);
}

console.log(...[1, 2, 3]);

Math.max(1,2,4,3);
Math.max.apply(null, [1,2,4,3]);
Math.max(...[1,2,4,3]);

let arr1 = [1,2];
let arr2 = [3,4];
[...arr1, ...arr2];

let list = [1,2,3,4,5,6];
const [aa,bb, ...rest] = list;

