define("forum/detail",[],function(require,exports,module){
	module.exports = {
		str1:"我在 ",
		str2:"forum/detail",
		str3:" 里",
	}
});define("forum/post",["forum/detail","jquery"],function(require,exports,modules){
	var detail = require('forum/detail');

	console.log(">>>" + detail.str1 + detail.str2 + detail.str3 + "<<<");

	console.log('以上代码是在 forum/post 里 输出');

	var $ = require('jquery');

	exports.width = $(window).width();
	exports.height = $(window).height();
	console.log('我在 forum/post 里');
});define("forum/index",["forum/post","forum/detail"],function(require,exports,module){
	console.log("我在 forum/index 里");

	var post = require('forum/post');
	var detail = require('forum/detail');
	console.log('>>> 当前窗口宽度为:'
		+ post.width
		+ ";高度为:"
		+ post.height
		+ "; <<<");
	console.log("以上代码在 forum/index 里输出");

});define("main/str",[],function(require,exports,module){
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
});define("main",["main/index","forum/index"],function(require){
	var main = require('main/index');
	var forum = require('forum/index');
});