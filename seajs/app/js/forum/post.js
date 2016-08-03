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
});