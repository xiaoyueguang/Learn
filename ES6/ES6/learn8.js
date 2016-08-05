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