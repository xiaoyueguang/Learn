let [a, b, c, d] = [1, 2, 3, 4];
let [h, , , i] = [1, 2, 3, 4];

let [x = 1, y = 2] = [4, 5, 6];

let {name, age, sex: sexx} = {
	name: 'ES6',
	age: 1,
	sex: 'boy'
}

function add([x, y, z = 1] = []) {
	console.log(x + y + z);
}
add([1, 2]);	//=> 1 + 2 + 1 = 4
add();