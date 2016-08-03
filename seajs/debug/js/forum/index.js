define(function(require,exports,module){
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