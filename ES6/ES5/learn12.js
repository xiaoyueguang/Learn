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
    var dedup = function dedup(arr) {
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