let a = {
	0: 1,
	1: 2,
	6: 1,
	length: 4
};
let b = Array.from(a);

console.log(b);

console.log(Array.from('hello'))

let c = Array.from(a, function(data){
	return data || 0;
});

let d = Array.of();
let e = Array.of(4);
let f = Array.of(1, 2, 3);

[1, 4, 7, 10].find(n => n > 5);


for (let index of ['a', 'b'].keys()) {
	console.log(index);
}

for (let elem of ['a', 'b'].values()) {
	console.log(elem);
}

for (let [index, elem] of ['a', 'b'].entries()) {
	console.log(index, elem);
}