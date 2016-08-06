{
    let a = Symbol('a');
    let b = Symbol('a');
    typeof a;
    a === b;
}
{
    let a = Symbol.for('a');
    let b = Symbol.for('a');

    console.log(a === b);
}
{
    let a = Symbol.for('a');
    Symbol.keyFor(a);

    let b = Symbol('b');
    Symbol.keyFor(b);
}