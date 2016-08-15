{
    const obj = {
        name: 'Ray',
        age: 28
    };
    let proxy = new Proxy(obj, {
        //  拦截对象的 get 方法
        get: (target, property) => 10
    });

    console.log(proxy);
    console.log(proxy.name);
    console.log(proxy.age);
}

{
    const person = {
        name: "张三"
    };

    const proxy = new Proxy(person, {
        get: function(target, property) {
            if (property in target) {
                return '拦截到的name为' + property + ";拦截到的值为" + target[property];
            } else {
                throw new ReferenceError('Error');
            }
        }
    });

    console.log(proxy.name);
}

{
    const validator = {
        set: (obj, prop, value) => {
            console.log(obj, prop, value);
            if (prop === 'age') {
                if (typeof value !== 'number') {
                    throw new TypeError('This is not a number!');
                }
                if (value > 100) {
                    throw new RangeError('Age Input Error!')
                }
                obj[prop] = value;
            }
        }
    };

    const person = new Proxy({}, validator);

    person.age = 12;    //  {age: 12}
    perspn.age = '12';  //  => Error
    person.age = 111;   //  => Error
}

{
    const target = () => 'I am the target';
    const handler = {
        apply: () => 'I am the proxy'
    };

    let p = new Proxy(target, handler);

    p();
    p.call();
    p.apply();
}

{
    const person = {
        name: 'HanMei',
        age: 18
    };

    const handler = {
        has (target, prop) {
            if (prop === 'age') {
                return false;
            }
            return prop in target;
        }
    }

    const proxy = new Proxy(person, handler);

    'name' in proxy;
    'age' in proxy;
}

{
    
}