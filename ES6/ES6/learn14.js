{
	function * test () {
		yield 1;
		yield 2;
		return 3;
	}
	var a = test();
	a.next();	//=> {value:1, done: false}
	a.next();	//=> {value:2, done: false}
	a.next();	//=> {value:3, done: false}
}
{
	function * test () {
		console.log('Hello', yield 'world');
	}
	let a = test();
	a.next();	//=> error
}
{
	function * test () {
		for (let i = 0; true; i++) {
			//	当执行到 yield 时, 返回 i
			var reset = yield i;
			//	当返回执行到这的时候, 将next()里的参数传入reset
			if (reset) {
				i = -1;
			}
		}
	}
	var a = test();
	a.next();	//=> {value: 1, done: false}
	a.next(1);	//=> {value: 0, done: false}
}

{
	function * test () {
		for (let i = 0; i < 5; i++) {
			yield i;
		}
	}
	[...test()]	//=> [0, 1, 2, 3, 4]
	for (let a of test()) {	//=> 0 1 2 3 4
		console.log(a)
	}
}
{
	var g = function * () {
		try {
			var a = yield;
			a.fn();
		} catch (e) {
			console.log('内部捕获');
		}
	}

	var i = g();
	var j = g();
	i.next();
	i.next();	//=> 内部捕获
	j.next();
	j.next({fn: function () {}})	//=> 没报错
}