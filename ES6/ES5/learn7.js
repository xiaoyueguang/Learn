'use strict';

var _console;

function test() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 'Hello' : arguments[0];
	var y = arguments.length <= 1 || arguments[1] === undefined ? 'World!' : arguments[1];

	return x + y;
}

var a = function a() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 'Hello' : arguments[0];
	var y = arguments.length <= 1 || arguments[1] === undefined ? 'World' : arguments[1];
	return x + y;
};

var b = function b(x, y, z) {};

var c = function c(x, y) {
	var z = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
};

var d = function d(x) {
	var y = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	var z = arguments[2];
};

var e = function e() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	var y = arguments[1];
	var z = arguments[2];
};

var y = 1;
var f = function f() {
	var x = arguments.length <= 0 || arguments[0] === undefined ? y : arguments[0];
	return function () {
		var y = 2;
		return x;
	}();
};

function throwIfMissing() {
	throw new Error('Missing parameter');
}

function foo() {
	var mustBeProvided = arguments.length <= 0 || arguments[0] === undefined ? throwIfMissing() : arguments[0];

	return mustBeProvided;
}

function foo1() {
	var optional = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
}

function add() {
	for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
		values[_key] = arguments[_key];
	}

	console.log(values);
}

(_console = console).log.apply(_console, [1, 2, 3]);

Math.max(1, 2, 4, 3);
Math.max.apply(null, [1, 2, 4, 3]);
Math.max.apply(Math, [1, 2, 4, 3]);

var arr1 = [1, 2];
var arr2 = [3, 4];
[].concat(arr1, arr2);

var list = [1, 2, 3, 4, 5, 6];
var aa = list[0];
var bb = list[1];
var rest = list.slice(2);