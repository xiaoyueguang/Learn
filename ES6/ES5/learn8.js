'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

{
    var foo = 'bar';
    var _obj = { foo: foo };
}
{
    var _foo = {
        bar: function bar(str) {
            console.log('Hello' + str);
        },
        m: regeneratorRuntime.mark(function m() {
            return regeneratorRuntime.wrap(function m$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return 'Hello World!';

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, m, this);
        })
    };
}
{
    var _obj2 = {};
    _obj2['a' + 'b'] = 1;
}
{
    var person = {
        sayName: function sayName() {
            console.log(this.name);
        },

        get firstName() {
            return 'Hello';
        }
    };

    person.sayName.name;
    person.firstName.name;
}
{
    Object.is({}, {});
}
{
    var a = { a: 1 };
    var b = { b: 2 };
    var c = { c: 3 };
    var d = { d: 4 };

    _extends(a, b, c, d);
}
{
    var _a = {};
    _extends(_a, { x: 1 });
    console.log(_a);
}
{
    var _a2 = {};
    var _b = {
        test: function test() {
            console.log(1);
        }
    };
    _extends(_a2, _b);
}
{
    var clone = function clone(origin) {
        return _extends({}, origin);
    };
}
{
    var merge = function merge(target) {
        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sources[_key - 1] = arguments[_key];
        }

        return Object.assign.apply(Object, [target].concat(sources));
    };
}
{
    var _merge = function _merge() {
        for (var _len2 = arguments.length, sources = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            sources[_key2] = arguments[_key2];
        }

        return Object.assign.apply(Object, [{}].concat(sources));
    };
}
{
    (function () {
        var DEFAULTS = {
            count: 0,
            length: 0
        };
        var setValue = function setValue(options) {
            return _extends({}, DEFAULTS, options);
        };
    })();
}
{
    var _a3 = {
        a: 1,
        b: 2
    };
    var _b2 = {
        c: 3,
        d: 4
    };

    _a3[Symbol('s')] = 'test';
    _b2[Symbol('ss')] = 'test';
    _a3.__proto__ = _b2;

    for (var key in _a3) {
        console.log(key);
    }

    console.log(Object.keys(_a3));
    console.log(Object.getOwnPropertyNames(_a3));
    console.log(Object.getOwnPropertySymbolskeys(_a3));
    console.log(Reflect.ownKeys(_a3));
}
{
    var _a4 = {
        a: 1,
        b: 2
    };
    var _b3 = {
        c: 1,
        d: 2
    };
    Object.setPrototypeOf(_a4, _b3);

    var pro = Object.getPrototypeOf(_a4);
    console.log(pro);
}
{
    var obj = {
        a: 1,
        b: 2
    };
    Object.keys(obj);
    Object.values(obj);
    Object.entries(obj);
}
{
    var _x$y$a$b = { x: 1, y: 2, a: 3, b: 4 };
    var x = _x$y$a$b.x;
    var y = _x$y$a$b.y;

    var z = _objectWithoutProperties(_x$y$a$b, ['x', 'y']);
}
{
    var _obj3 = { a: 1, b: 2 };
    var n = _extends({}, _obj3);
}
{
    var _obj4 = {
        foo: 123,
        get bar() {
            return 456;
        }
    };
    Object.getOwnPropertyDescriptors(_obj4);
}