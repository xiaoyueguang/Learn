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