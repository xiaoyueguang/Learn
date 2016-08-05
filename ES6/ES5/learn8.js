'use strict';

{
    var foo = 'bar';
    var obj = { foo: foo };
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
    var _obj = {};
    _obj['a' + 'b'] = 1;
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

    Object.assign(a, b, c, d);
}
{
    var _a = {};
    Object.assign(_a, { x: 1 });
    console.log(_a);
}
{
    var _a2 = {};
    var _b = {
        test: function test() {
            console.log(1);
        }
    };
    Object.assign(_a2, _b);
}
{
    var clone = function clone(origin) {
        return Object.assign({}, origin);
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
            return Object.assign({}, DEFAULTS, options);
        };
    })();
}