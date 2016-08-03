let a = 1;
{	
	let b = 1;
	console.log(a);
}
console.log(b);

var c = [];
for(var i = 0; i < 10; i++){
	c[i] = function(){
		console.log(i);
	}
}
c[5]();	//=> 10

var d = [];
for(let i = 0; i < 10; i++){
	d[i] = function(){
		console.log(i);
	}
}
d[5]();	//=> 5

const e = 3.14;
//	e = 1;	//	编译失败
const f = [];
f[0] = 1;
