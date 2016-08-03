'use strict';

var gulp = require('gulp');
var pack = require('gulp-seajs-pack');

gulp.task('default',function(){
	console.log('test')
});

gulp.task('seajs',function(){
	var config = {
		//	设置要打包的目录
		base:"./debug/js",
		paths:{
			'user':'user',
			'forum':'forum',
			'main':'main'
		},
		alias:{
			'jquery':'other/jquery/jquery',
			'swiper':'other/swiper-3.2.7.jquery',
		},
		output:[
			//"first/index.js"
		]
	};
	return gulp.src([
			"./debug/js/**/*.js",
			//	第三方包
			"!./debug/js/other/**/*.js"
		])
		//	选择	打包目录下的所有JS
		.pipe(pack(config))
		//	开始打包
		.pipe(gulp.dest("./app/js"));
		//	将打包后的 JS 输出到 目标目录里
});

var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('web-js-ug',function(){
	gulp.src([
		"./debug/js/other/**/*.js",
		"./app/js/**/*.js",
		"!./app/js/**/*.min.js",
		"!./app/js/other/**/*.js",
	])
	.pipe(gulp.dest('./app/js'))
	.pipe(uglify())
	.pipe(rename({
		extname:".min.js"
	}))
	.pipe(gulp.dest('./app/js'))
});