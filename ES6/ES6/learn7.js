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