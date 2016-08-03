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

});