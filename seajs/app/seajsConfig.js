if(location.href.indexOf('?dev') > 0){
	//	根据字段判断是否进入调试模式
	seajs.config({
		base:"../debug/js",
		debug:true,
	});
}else{
	//	进入发布状态
	seajs.config({
		base:"./js",
		map:[
			['.js','.min.js']
		],
	});
}

seajs.config({
	//	路径配置
	paths:{
		'user':'user',
		'forum':'forum',
		'main':'main'
	},
	//	别名配置
	alias:{
		'jquery':'other/jquery/jquery',
		'swiper':'other/swiper-3.2.7.jquery',
	},
	shim:{
		'swiper':{
			deps:['jquery'],
			exports:'swiper'
		}
	}
})

seajs.use('main/index');
//seajs.use('forum/index');