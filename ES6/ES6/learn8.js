{
    let foo = 'bar';
    let obj = {foo};    
}
{
    let foo = {
        bar(str) {
            console.log('Hello' + str);
        },
        *m(){
            yield 'Hello World!';
        }
    };
}
{
    let obj = {};
    obj['a' + 'b'] = 1;
}
{
    let person = {
        sayName(){
            console.log(this.name);
        },
        get firstName(){
            return 'Hello';
        }
    };

    person.sayName.name;
    person.firstName.name
}
{
    Object.is({},{})
}
{
    let a = {a:1};
    let b = {b:2};
    let c = {c:3};
    let d = {d:4};

    Object.assign(a, b, c, d);
}
{
    let a = {};
    Object.assign(a,{x:1});
    console.log(a);
}
{
    let a = {};
    let b = {
        test(){
            console.log(1);
        }
    };
    Object.assign(a, b);
}
{
    function clone(origin){
        return Object.assign({}, origin);
    }
}
{
    const merge = (target, ...sources) => Object.assign(target, ...sources);
}
{
    const merge = (...sources) => Object.assign({}, ...sources);
}
{
    const DEFAULTS = {
        count: 0,
        length: 0
    };
    let setValue = (options) => Object.assign({}, DEFAULTS, options);
}
{
    const a = {
        a: 1,
        b: 2,
    };
    const b = {
        c: 3,
        d: 4,
    }

    a[Symbol('s')] = 'test';
    b[Symbol('ss')] = 'test';
    a.__proto__ = b;

    for (let key in a) {
        console.log(key);
    }

    console.log(Object.keys(a));
    console.log(Object.getOwnPropertyNames(a));
    console.log(Object.getOwnPropertySymbolskeys(a));
    console.log(Reflect.ownKeys(a));
}
{
    const a = {
        a: 1,
        b: 2
    };
    const b = {
        c: 1,
        d: 2
    };
    Object.setPrototypeOf(a, b);

    let pro = Object.getPrototypeOf(a);
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
    let {x, y, ...z} = {x:1, y: 2, a: 3, b: 4};
}
{
    let obj = {a:1, b:2};
    let n = {...obj};
}
{
    const obj = {
        foo: 123,
        get bar(){
            return 456;
        }
    }
    Object.getOwnPropertyDescriptors(obj);
}