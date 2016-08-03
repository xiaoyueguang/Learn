define("main/str",[],function(require,exports,module){
	//	通过 module.exports 输出内容
	module.exports = "这是一个 STR";
	//	或者 通过 exports 暴露部分内容
	//	exports.str1 = "这是 str 1";
	//	exports.str2 = "这是 str 2";
	console.log('这是在 main/str 里');
});define("main/index",["main/str","swiper"],function(require){
	//	require 添加依赖
	//	依赖先加载所以先输出 str 里的 console.log
	var str = require('main/str');
	var swi = require('swiper');
	console.log('这是在 main/index 里');
	console.log(str);
});