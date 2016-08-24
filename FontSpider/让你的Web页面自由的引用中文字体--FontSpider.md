# 让你的Web页面自由的引用中文字体--FontSpider

## 为什么使用它?
如今我们的页面变得越来越有个性化,漂亮的背景,绚丽的动画,以及独特的字体.  
然而中文的复杂程度远比英文的 26个 字体要复杂,每次引用中文字体后导致浏览器要下载 2M+ 的字体文件,极大的拖慢整个页面的加载速度.  
虽然可以通过 png 去显示那几个独特的字体, 可是当需要颜色改变,字体大小修改的时候,就变得非常的困难.  

如今 有了 `FontSpider`, 可以从字体里提取出我们想要的几个字, 大大的减少了整个字体文件的体积,非常棒!

## 怎么去使用它?

通过`npm`去安装

```
$ npm install font-spider -g
```

创建个文件夹,然后放自己需要的`ttf`文件和一个`.html`文件  
`.html`文件里引用该字体,以及所需要的字体.
```
<html>
  <head>
    <title>字体</title>
    <style>
      @font-face {
        font-family: 'webfont';
        src: url('./webfont.ttf') format('truetype');
      }
      body {
        font-family: 'webfont';
      }
    </style>
  </head>
  <body>
    测试
  </body>
</html>
```

然后命令行输入即可获得所需要的字体文件
```
$ font-spider index.html
```

命令行返回如下
```
Font family: webfont
Original size: 10838.984 KB
Include chars:  测试
Chars length: 3
Font id: 688685a3db2390250ed4d81d27c0cfb0
CSS selectors: body
Font files:
File webfont.ttf created: 2.628 KB
```
第三行是从 `html`文件里提取出的字体  
最后行的大小就是提取出的字体文件大小,这大小,足够在浏览器里去引用了.  
原来的字体放到 `.font-spider`文件夹下做备份,方便以后找回