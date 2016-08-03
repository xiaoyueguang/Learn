define(function(require){
	//	require 添加依赖
	//	依赖先加载所以先输出 str 里的 console.log
	var str = require('main/str');
	var swi = require('swiper');
	console.log('这是在 main/index 里');
	console.log(str);
});