'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
	var test = /*#__PURE__*/regeneratorRuntime.mark(function test() {
		return regeneratorRuntime.wrap(function test$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 1;

					case 2:
						_context.next = 4;
						return 2;

					case 4:
						return _context.abrupt('return', 3);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, test, this);
	});

	var a = test();
	a.next(); //=> {value:1, done: false}
	a.next(); //=> {value:2, done: false}
	a.next(); //=> {value:3, done: false}
}
{
	var _test = /*#__PURE__*/regeneratorRuntime.mark(function _test() {
		return regeneratorRuntime.wrap(function _test$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.t0 = console;
						_context2.next = 3;
						return 'world';

					case 3:
						_context2.t1 = _context2.sent;

						_context2.t0.log.call(_context2.t0, 'Hello', _context2.t1);

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _test, this);
	});

	var _a = _test();
	_a.next(); //=> error
}
{
	var _test2 = /*#__PURE__*/regeneratorRuntime.mark(function _test2() {
		var _i, reset;

		return regeneratorRuntime.wrap(function _test2$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_i = 0;

					case 1:
						if (!true) {
							_context3.next = 9;
							break;
						}

						_context3.next = 4;
						return _i;

					case 4:
						reset = _context3.sent;

						//	当返回执行到这的时候, 将next()里的参数传入reset
						if (reset) {
							_i = -1;
						}

					case 6:
						_i++;
						_context3.next = 1;
						break;

					case 9:
					case 'end':
						return _context3.stop();
				}
			}
		}, _test2, this);
	});

	var a = _test2();
	a.next(); //=> {value: 1, done: false}
	a.next(1); //=> {value: 0, done: false}
}

{
	var _test3 = /*#__PURE__*/regeneratorRuntime.mark(function _test3() {
		var _i2;

		return regeneratorRuntime.wrap(function _test3$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_i2 = 0;

					case 1:
						if (!(_i2 < 5)) {
							_context4.next = 7;
							break;
						}

						_context4.next = 4;
						return _i2;

					case 4:
						_i2++;
						_context4.next = 1;
						break;

					case 7:
					case 'end':
						return _context4.stop();
				}
			}
		}, _test3, this);
	});

	[].concat(_toConsumableArray(_test3())); //=> [0, 1, 2, 3, 4]
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = _test3()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _a2 = _step.value;
			//=> 0 1 2 3 4
			console.log(_a2);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}
{
	var g = /*#__PURE__*/regeneratorRuntime.mark(function g() {
		var a;
		return regeneratorRuntime.wrap(function g$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_context5.prev = 0;
						_context5.next = 3;
						return;

					case 3:
						a = _context5.sent;

						a.fn();
						_context5.next = 10;
						break;

					case 7:
						_context5.prev = 7;
						_context5.t0 = _context5['catch'](0);

						console.log('内部捕获');

					case 10:
					case 'end':
						return _context5.stop();
				}
			}
		}, g, this, [[0, 7]]);
	});

	var i = g();
	var j = g();
	i.next();
	i.next(); //=> 内部捕获
	j.next();
	j.next({ fn: function fn() {} }); //=> 没报错
}