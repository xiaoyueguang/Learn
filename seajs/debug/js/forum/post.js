define(function(require,exports,modules){
	var detail = require('forum/detail');

	console.log(">>>" + detail.str1 + detail.str2 + detail.str3 + "<<<");

	console.log('以上代码是在 forum/post 里 输出');

	var $ = require('jquery');

	exports.width = $(window).width();
	exports.height = $(window).height();
	console.log('我在 forum/post 里');
});