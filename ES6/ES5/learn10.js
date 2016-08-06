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