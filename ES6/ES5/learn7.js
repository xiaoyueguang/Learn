'use strict';

var _console;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function test() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World!';

	return x + y;
}

var a = function a() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';
	return x + y;
};

var b = function b(x, y, z) {};

var c = function c(x, y) {
	var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
};

var d = function d(x) {
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	var z = arguments[2];
};

var e = function e() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y = arguments[1];
	var z = arguments[2];
};

var y = 1;
var f = function f() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : y;
	return function () {
		var y = 2;
		return x;
	}();
};

function throwIfMissing() {
	throw new Error('Missing parameter');
}

function foo() {
	var mustBeProvided = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : throwIfMissing();

	return mustBeProvided;
}

function foo1() {
	var optional = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
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
//	扩展运算的参数只能放最后一位
var aa = list[0],
    bb = list[1],
    rest = list.slice(2);


var str = [].concat(_toConsumableArray('hello'));

var func1 = function func1() {};

console.log(func1.name);

var g = function g(b) {
	return b;
};

var h = function h() {
	return 5;
};

var i = function i(a, b) {
	return a + b;
};

var j = function j(a, b) {
	return { a: a, b: b };
};

var k = function k(_ref) {
	var a = _ref.a,
	    b = _ref.b;
	return a + ' ' + b;
};

function foo() {
	var _this = this;

	return function () {
		return function () {
			return function () {
				console.log('id:', _this.id);
			};
		};
	};
}

var fooo = foo.call({ id: 1 });

var t1 = fooo.call({ id: 2 })()();
var t2 = fooo().call({ id: 3 })();
var t3 = fooo()().call({ id: 4 });