# Rollup

`Rollup`不同于`webpack`. 它更专注于`Javascript`的打包. 不像`webpack`能将各种各样的资源全部打包进来. 当引用了`node_module` 的模块时, 也不会把引用的模块整个都打包进来.

## 开始
`Rollup` 可以配置个配置文件. 默认为项目根目录下的`rollup.config.js`

### 命令行
```
// 将 src 下的 index.js 以 commonjs 的模式 打包, 输出到 dist 下的 bundle.js
rollup ./src/index.js --format cjs --output ./dist/bundle.js
// 指定配置文件
rollup --config ./rollup.config.js
```

### 配置文件
`Rollup` 的配置非常简单. 导出一个对象即可, 且可以用 `ES2015` 来写.
```
export default {
  // 入口文件
  entry: './src/index.js',
  // format 即输出的文件格式. 选项有 cjs, iife, amd, umd, es
  format: 'cjs',
  // 输出文件
  dest: './dist/bundle.js',
  // 是否开启 map
  sourceMap: true,
  // 指出哪些为外部模块
  external: ['lodash'],
  // 在输出的 JS 头部添加banner
  banner: '/* Rollup-example\n */'
}
```

## 同配置下 与 webpack 打包后的文件大小比较.
|rollup|webpack|
|:--:|:--:|
|212 bytes|3.12 KiB|

比较两则打包出来的代码, 发现`Rollup`打包出来的比`webpack`打包出来的少了个方法`sub`.  
`Rollup`利用了`Tree Shaking`的优势, 将静态分析打包出来的代码, 去除没用到的方法. 在项目很大的时候将会有很好的优势.