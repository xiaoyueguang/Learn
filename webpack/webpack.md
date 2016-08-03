# webpack
webpack,是一款模块加载器兼打包工具.能将 JS、coffee、less、sass、图片等作为模块来使用.  
经过一个多月的摸索,姑且算是入门了.因此重新写个小DEMO来加深自己对 webpack 的理解.

# 安装webpack

```
$ npm install webpack -g
```
跟gulp一样.webpack也有一个默认的配置文件,名为 `webpack.config.js`  

该配置文件里,可以以 commonJS 的方式去写
```
module.exports = {
	entry: {
		//	入口文件
		index: './index.js'
	},
	output: {
		path: 'dist',
		//	编译后的入口文件
		filename: 'index.js'
	}
}
```
这样即可在 index.js 里进行编码,js里可以采用 commonJS模块化进行开发.

# 在webpack里 使用ES6
首先应当先下载好 ES6的依赖包
```
$ npm install --save-dev babel-preset-es2015
$ npm install --save-dev babel-core
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-loader
```
在目录里新建`.babelrc`
>	所有的babel模块或工具都需要先写好 `.babelrc`
```
{
	"presets": [
		"es2015",
		"stage-2"
	]
}
```
`webpack.config.js`里添加以下代码
```
module: {
	//	加载器配置
	loaders: [
		{test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
		{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
	]
}
```
>	module.loaders 是告诉 `webpack` 每一种文件需要使用什么加载器,多个加载器可以通过 ! 来连接 `-loader`可省略不写  
# 运行 webpack
```
$ webpack --config xxx.js	//	使用该配置文件进行打包
$ webpack --watch	//监听文件并自动打包
$ webpack -p	//压缩打包文件
$ webpack -d	//生成map文件
```

# loader 介绍
> style-loader

将 style 添加到页面中
> css-loader

对CSS 进行打包
```
{test: /\.css$/, loader: 'style!css'}
```
> sass-loader

对 scss文件进行编译以及打包
```
{test: /\.scss$/, loader: 'style!css!sass'}
```
> url-loader

对图片进行处理,符合条件的直接转为 base64
```
{test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
```

> !!!当 webpack 第一次使用以上 loader 时,将会给出报错以及提示缺少哪些module,到时候直接对着错误信息进行安装对应的模块即可

# 独立打包样式
有的时候 我们不希望将 css 代码写到 js里,而是另外独立写个`.css`文件,这个时候我们需要 `extract-text-webpack-plugin`
```
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSCSS = new ExtractTextPlugin('style.css');

module.exports = {
	...
	module: {
		loaders: [
			{test: /\.scss$/, loader: extractSCSS.extract(['css','sass'])},
		]
	}
	plugins: [extractSCSS]
}
```

# 多入口文件提取公共模块
当入口文件有多个的时候,就需要提取出公共文件了.可采用 CommonsChunkPlugin 来提取
```
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		index: './index.js',
		detail: './detail.js',
		user: './user.js'
	},
	output: {
		path: 'dist',
		filename: '[name].js'
	},
	module: {
		...
	},
	plugins: [
		//	三个入口文件公用 common.js
		new CommonsChunkPlugin('common.js'),
		//	index,detail 公用 common.js
		//	user 公用 admincommon.js
		new CommonsChunkPlugin('common.js', ['index', 'detail']),
		new CommonsChunkPlugin('admincommon.js', ['user'])
	]
}
```

# 利用缓存以及自动生成页面
```
module.exports = {
	...
	output: {
		filename: '[name].[chunkhash:8].js'
	},
	...
}
```
> `hash:8` `chunkhash:8` 可以为文件 添加 长度8位的哈希值

由于`js`和`css`文件名的变化,导致`html`文件里引用的将会失效,可使用`HtmlWebpackPlugin`来进行自动修改
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var extractCSS = new ExtractTextPlugin('style.[chunkhash:8].css');

module.exports = {
	...
	plugins: [
		extractCSS,
		new CommonsChunkPlugin('common.[hash:8].js'),
		new HtmlWebpackPlugin({
			title: 'My App',
			//	文件名称
			filename: 'index.html',
			//	模版位置
			template: 'index.html',
			//	chunks 里写入口文件 common为提取出来的文件 所以得加上哈希值 才能正确插入到html里
			chunks: ['common.[hash:8].js', 'index'],
		})
	],
	...
}
```

# 异步加载
我们的`webpack`里面全靠同步加载JS,有的时候可能会使JS文件加载后很大,从而导致移动端首屏白屏很久.这是不好的体验.
因此我们可采用多个 chunk (代码块),在需要的时候或者异步加载内容
```
require.ensure([], function(){
	//	加载的JS文件
	require('./xxxxx');
});
```

# webpack-dev-server
这是个基于 Express.js 框架开发的 web server. 默认端口 8080;内部调用了 webpack, 监控到文件的变化并实时刷新页面.使得开发变得更加容易.
```
$ npm install webpack-dev-server --save-dev	//	安装
$ webpack-dev-server --inline --hot

```
> `--inline`能为页面添加"热加载"功能,如果代码发生变化,webpack将会自动编译并且刷新页面.使得我们能马上获得最新的页面状态  
> `--hot`"热替换(Hot Module Reloading)",即 `HRM`.当资源发生变化时,webpack会优先进行 热替换,而不是刷新整个页面.只有当 `HRM` 失效后才会进行"热加载"

```
module.exports = {
	entry: {
		...
		server: {
			'webpack-dev-server/client?http://0.0.0.0:8080',
			'webpack/hot/only-dev-server'
		}
	}
}
```
输入
> `$ webpack-dev-server --inline`
> `$ webpack-dev-server --inline --hot`

浏览器打开 `localhost:8080` 即可查看效果
