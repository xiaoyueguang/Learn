// Karma configuration
// Generated on Mon Jun 19 2017 12:32:44 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // JS测试框架
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // 会把 test下所有的JS文件都进行测试
    files: [
      'test/**/*.js'
    ],


    // list of files to exclude
    // 排除
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // 在测试之前, 先进行预处理
    preprocessors: {
      'test/**/*.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // 测试的报告类型
    reporters: ['progress'],


    // web server port
    // 端口
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    // 是否开启色彩
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // 打印的等级
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    // 自动监听
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // 测试的浏览器
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    // 持续集成模式. 为true 时, 会自动打开浏览器测试完成后并退出
    singleRun: false,

    // Concurrency level
    // 并发
    // how many browser should be started simultaneous
    concurrency: Infinity,
    // webpack 直接引用打包时的webpack配置即可
    webpack: require('./webpack.config.js')
  })
}
