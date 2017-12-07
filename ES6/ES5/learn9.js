'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
    var a = Symbol('a');
    var b = Symbol('a');
    typeof a === 'undefined' ? 'undefined' : _typeof(a);
    a === b;
}
{
    var _a = Symbol.for('a');
    var _b = Symbol.for('a');

    console.log(_a === _b);
}
{
    var _a2 = Symbol.for('a');
    Symbol.keyFor(_a2);

    var _b2 = Symbol('b');
    Symbol.keyFor(_b2);
}