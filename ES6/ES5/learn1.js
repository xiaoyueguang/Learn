"use strict";

var a = 1;
{
	var _b = 1;
	console.log(a);
}
console.log(b);

var c = [];
for (var i = 0; i < 10; i++) {
	c[i] = function () {
		console.log(i);
	};
}
c[5](); //=> 10

var d = [];

var _loop = function _loop(_i) {
	d[_i] = function () {
		console.log(_i);
	};
};

for (var _i = 0; _i < 10; _i++) {
	_loop(_i);
}
d[5](); //=> 5

var e = 3.14;
//	e = 1;	//	编译失败
var f = [];
f[0] = 1;