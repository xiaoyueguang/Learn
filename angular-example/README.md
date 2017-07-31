# Angular

```
// 安装 cli 工具
npm install -g @angular/cli
// 生成项目
ng new my-app
// 开发
ng serve
// 编译打包
ng build
// 单元测试
ng test
```

## `src`目录结构
先了解下通过 `npm new my-app` 生成的新项目的目录是怎么样的.
```
e2e 端到端测试
src
  app 组件文件夹. 一个完整的组件应该包含 css html ts 和 spec.ts
    AppModule app 文件夹里有个该文件. 是用来说明如何组装.
  assets  资源文件夹
  environments
  favicon.ico 图标
  polyfills.ts 垫片
  main.ts 主要入口
  styles.css 全局样式
  test.ts 单元测试入口文件
.angular-cli.json   angular-cli 配置文件.
karma.conf.js 单元测试配置文件
protractor.conf.js e2e 配置文件
tsconfig.json typescript 配置文件
tslint.json typescript lint 配置文件
```