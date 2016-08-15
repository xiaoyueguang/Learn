'use strict';

{
    var obj = {
        name: 'Ray',
        age: 28
    };
    var proxy = new Proxy(obj, {
        //  拦截对象的 get 方法
        get: function get(target, property) {
            return 10;
        }
    });

    console.log(proxy);
    console.log(proxy.name);
    console.log(proxy.age);
}

{
    var person = {
        name: "张三"
    };

    var _proxy = new Proxy(person, {
        get: function get(target, property) {
            if (property in target) {
                return '拦截到的name为' + property + ";拦截到的值为" + target[property];
            } else {
                throw new ReferenceError('Error');
            }
        }
    });

    console.log(_proxy.name);
}

{
    var validator = {
        set: function set(obj, prop, value) {
            console.log(obj, prop, value);
            if (prop === 'age') {
                if (typeof value !== 'number') {
                    throw new TypeError('This is not a number!');
                }
                if (value > 100) {
                    throw new RangeError('Age Input Error!');
                }
                obj[prop] = value;
            }
        }
    };

    var _person = new Proxy({}, validator);

    _person.age = 12; //  {age: 12}
    perspn.age = '12'; //  => Error
    _person.age = 111; //  => Error
}

{
    var target = function target() {
        return 'I am the target';
    };
    var handler = {
        apply: function apply() {
            return 'I am the proxy';
        }
    };

    var p = new Proxy(target, handler);

    p();
    p.call();
    p.apply();
}

{
    var _person2 = {
        name: 'HanMei',
        age: 18
    };

    var _handler = {
        has: function has(target, prop) {
            if (prop === 'age') {
                return false;
            }
            return prop in target;
        }
    };

    var _proxy2 = new Proxy(_person2, _handler);

    'name' in _proxy2;
    'age' in _proxy2;
}

{}