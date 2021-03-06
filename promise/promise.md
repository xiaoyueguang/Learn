# Promise对象
曾经用`seajs`开发后台管理的时候,矫情的PHPER非要JS内联到HTML文件中,方便他调用内容,还指定了`jQueryFileUpload`作为上传插件.  
当时看到`jQueryFileUpload`的时候,我是懵逼的,竟然要引入这么多JS!还要按照顺序去引入,不能顺序错误!整个人都崩溃了,于是就写出了一下的回调金字塔.
```
seajs.use('__STATIC__/admin/js/other/jquery/jquery.js',function($){
	seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/load-image.all.js',function(){
		seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/canvas-to-blob.js',function(){
			seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/vendor/jquery.ui.widget.js',function(){
				seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/jquery.iframe-transport.js',function(){
					seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/jquery.fileupload.js',function(){
						seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/jquery.fileupload-process.js',function(){
							seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/jquery.fileupload-image.js',function(){
								seajs.use('__STATIC__/admin/js/plugins/jQueryFileUpload/jquery.fileupload-validate.js',function(){
									......
								});
							});
						});
					});
				});
			});
		});
	});
});

```
回调金字塔,一层一层的回调,很容易出现问题,导致整个都崩溃掉.为了解决异步编程,ES6提供了`Promise`对象.  
`Promise`对象代表一个异步操作,三种状态: `Pending`(进行中), `Resolved`(已完成)和 `Rejected`(已失败).  
`Promise`对象的状态变化只有两种,`Pending` => `Resolved` 或者 `Pending` 和 `Rejected`  

`Promise`新建后,其内部的代码将直接运行.

```
var promise = new Promise(function(resolve, reject){
	//	创建后 以下代码直接执行.
	var value = Math.round(Math.random());
	console.log('将要输出: 值为' + value);
	//	setTimeout 模拟延迟操作
	setTimeout(function(){
		if (value === 1) {
			resolve(value);
		} else {
			reject(value);
		}
	}, 2000);
});

promise.then(function(value){
	console.log('值为1');
}, function(){
	console.log('值为0');
});
```

利用 `Promise`能很好的解决回调问题. 
```
// 传统的方式:
function sleepByES3 (time, success) {
  setTimeout(() => {
    typeof success === 'function' && success()
  }, time * 1000)
}

sleepByES3(1, function () {
  console.log(1)
  sleepByES3(2, function () {
    console.log(2)
    sleepByES3(3, function () {
      console.log(3)
    })
  })
})

// Promise:
function sleep (time) {
	// 返回一个 Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time * 1000)
  })
}

function run () {
  sleep(1).then(() => {
    console.log(1)
    return sleep(2)
  }).then(() => {
    console.log(2)
    return sleep(3)
  }).then(() => {
    console.log(3)
  })
}

run()

/**
 * 利用 async, 同步写法
 */
async function asyncRun () {
  await sleep(1)
  console.log(1)
  await sleep(2)
  console.log(2)
  await sleep(3)
  console.log(3)
}

asyncRun()

```

当然, `Promise`也不仅仅是这些功能. 比如:
1. `Promise.all` 等全部回调完成后 触发.
2. `Promise.race` 只要其中一个完成了, 就马上触发

```
function sleep (time) {
	// 返回一个 Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
      console.log(time)
    }, time * 1000)
  })
}
// 输出1, 2, 3之后, 打印出 全部完成
Promise.all([
  sleep(1),
  sleep(2),
  sleep(3)
]).then(() => {
  console.log('全部完成')
})
// 输出 1后,马上输出 完成一个
Promise.race([
  sleep(1),
  sleep(2),
  sleep(3)
]).then(() => {
  console.log('完成一个')
})
```