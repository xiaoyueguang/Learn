'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    (function () {
        var s = new Set()[(1, 2, 3, 4, 4, 5, 3, 2)].map(function (data) {
            return s.add(data);
        });

        console.log(s); //=> Set{1, 2, 3, 4, 5}
        s.size; //=> 5
    })();
}
{
    var _s = new Set([1, 2, 3, 4, 5, 4, 3, 2]);
    console.log(_s); //=> Set{1, 2, 3, 4, 5}
    _s.size; //=> 5
}
{
    var dedupe = function dedupe(arr) {
        return [].concat(_toConsumableArray(new Set(arr)));
    };

    var arr = [1, 2, 3, 2, '1'];
    console.log(dedup(arr));
}
{
    var _s2 = new Set();
    _s2.add(NaN); //=> Set(NaN)
    _s2.add(NaN); //=> Set(NaN)
    _s2.add([]); //=> Set(NaN, [])
    _s2.add([]); //=> Set(NaN, [], [])
    _s2.add({}); //=> Set(NaN, [], [], {})
    _s2.add({}); //=> Set(NaN, [], [], {}, {})
    _s2.add(undefined); //=> Set(NaN, [], [], {}, {}, undefined)
    _s2.add(undefined); //=> Set(NaN, [], [], {}, {}, undefined)
    _s2.add(null); //=> Set(NaN, [], [], {}, {}, undefined, null)
    _s2.add(null); //=> Set(NaN, [], [], {}, {}, undefined, null)
}
{
    var _s3 = new Set([1, 2, 3]);
    console.log(_s3.keys()); //=> SetIterator { 1, 2, 3 }
    console.log(_s3.values()); //=> SetIterator { 1, 2, 3 }
    console.log(_s3.entries()); //=> SetIterator { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] }
}
{
    var m = new Map([['name', 'lin'], ['age', 18]]);
    var o = 'sex';
    m.set(o, 'boy');
    m.get(o); //=> boy
    m.get('name'); //=> lin
    m.get('age'); //=> 18
}
{
    var _m = new Map();
    var _o = { a: 1 };
    var q = { a: 1 };
    _m.set(_o, 111);
    _m.set(q, 222);
    _m.get(_o); //=> 111
    _m.get(q); //=> 222
    _m.set([], 333);
    _m.size; //=> 3
    _m.set([], 444);
    _m.size; //=> 4
}