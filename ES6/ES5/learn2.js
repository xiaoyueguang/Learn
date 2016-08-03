'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var _ref = [1, 2, 3, 4];
var h = _ref[0];
var i = _ref[3];
var _ref2 = [4, 5, 6];
var _ref2$ = _ref2[0];
var x = _ref2$ === undefined ? 1 : _ref2$;
var _ref2$2 = _ref2[1];
var y = _ref2$2 === undefined ? 2 : _ref2$2;
var _name$age$sex = {
	name: 'ES6',
	age: 1,
	sex: 'boy'
};
var name = _name$age$sex.name;
var age = _name$age$sex.age;
var sexx = _name$age$sex.sex;


function add() {
	var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

	var _ref4 = _slicedToArray(_ref3, 3);

	var x = _ref4[0];
	var y = _ref4[1];
	var _ref4$ = _ref4[2];
	var z = _ref4$ === undefined ? 1 : _ref4$;

	console.log(x + y + z);
}
add([1, 2]); //=> 1 + 2 + 1 = 4
add();