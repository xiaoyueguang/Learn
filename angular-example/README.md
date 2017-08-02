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

## `Angular`主要构造块, 整体架构
### 模块`module`
模块系统, 又名`Angular`模块
模块有
* 根模块
* 特性模块
> 每个应用至少都会有一个根模块
`NgModules`是一个装饰器.用来接受描述模块的对象, 有以下属性:
* `declarations` 本模块使用的视图类
* `exports` TODO:
* `imports` 模块所需要依赖的其它模块
* `providers` 服务
* `bootstrap` 主视图, 即根组件(只有根组件能设置该属性)
```
// app.module.ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// main.ts
// 启动
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```
> `Angular`模块 和 `Javascript`模块 并不是同一个东西
当需要从其它模块里引用它的 `Angular`数据时, 则需要在 `imports: []`添加该库
***

### 组件`component`
组件, 负责控制屏幕上的一块区域.包含完整的 css, html 和 js 逻辑.  
每个组件都带有自己的生命周期.
* constructor 实例化
* ngOnChanges 组件里的值改变时触发 首次调用一定在 onInit 前
* ngOnInit 组件创建完成后触发. 只触发一次
* ngDoCheck 在每个变更检测中调用
*   ngAfterContentInit 内容进入组件后出发, 只调用一次 只适合组件
*   ngAfterContentChecked 内容变更之后调用 只适合组件
*   ngAfterViewInit 初始化组件视图和子视图后调用. 只调用一次 只适合组件
*   ngAfterViewChecked 每次组件视图和子视图变更后调用. 只适合组件
* ngOnDestroy 摧毁组件前触发. 可反订阅可观察对象.移除事件处理器. 防止内存泄露

### 模板`template`
`Angular`的模板跟标准的 `HTML`类似, 比它多了些自己的模板语法, 比如`*ngFor`, `{{value}}`, `(click)`, `[value]=fff`, `<custom-component></custom-component>`

### 元数据`metadata`
元数据是一个纯正的`javascript`类, 通过装饰器给组件附加元数据  
`@Component`装饰器属性
* `selector` CSS选择器, 将组件插入到该 css 选择器中
* `templateUrl` 模板地址
* `providers` 依赖注入数组

### 数据绑定`data binding`
数据绑定, 将模板上的数据, 事件与`javascript`中的变量, 方法绑定起来.  
减少手动绑定方法以及更新界面, 从而实现 `mvvm`

### 指令`directive`
指令会对 `DOM` 进行转换, 附加一些操作. 有三种:
* 带模板的指令: 即组件(对整个模板进行添加绑定, 添加事件)
* 结构型指令(列表循环或条件渲染等)
* 属性型指令(绑定事件, 更新属性等)

### 服务`service`
服务是一个广义范畴, 包括 值, 函数, 或应用所需的特性  
专注于完成某个事件.  
比如维护用户信息等

### 依赖注入`dependency injection`
依赖注入, 是为类添加新的依赖. 大部分依赖为 服务.
`Angular`创建组件时, 会请求生成一个注入器. 该注入器会维护一个服务实例的容器. 等服务全部解析完毕时, `Angular`会将这些服务作为参数, 去调用组件的构造函数. 从而实现依赖注入


## `Angular`根模块
利用 `NgModule` 接受一个元数据对象, 来装饰类, 使之成为根模块.
元数据对象有以下属性:
* `imports` 数组 (`Angular`导入的模块通过这里导入)
* `declarations` 数组 (每一个组件都需要通过这里来声明.)
* `bootstrap` 数组 (将该数组的组件渲染到 DOM 中)

## 显示数据
* 可通过`{{value}}`标签来显示数据
* 通过`*ngFor`来显示数组属性
* 通过`*ngIf`进行条件显示

模板可通过两种方式:
1. 内联模板. 定义 `template` 属性, 通过 \`\` 来定义模板.
2. 独立的 html 文件, 定义`templateUrl`属性, 使用相对路径引用模板

## 用户输入
1. 绑定用户输入事件 在 dom 上通过`(click)="onClick()"`绑定
2. 通过`$event`对象取得用户输入. 大部分事件可取得`$event`对象
3. 从模板引用变量取得用户输入. 可通过在绑定的模板上加入一个引用变量. `#box`. 可通过 `box.value`取得值, 需要注意的事, 必须要绑定一个方法, 哪怕是一个空方法. `(keyup)="0"`
4. 按键事件过滤(通过`key.enter`) 事件绑定可使用过滤器.
5. 失去焦点事件(blur) 失去焦点的时候触发该回调`(blur)="update()"`

## 表单
使用 `ngModel` 进行双向数据绑定
在`form`表单上添加 `#heroForm` 来保证引用.
绑定了`ngModel`元素, 还能自动跟踪修改状态与有效性验证. 并且使用特定的`Angular CSS`来更新控件
|状态|为真时css|为假时css|
|:--|:--|:--|
|控件被访问过。|ng-touched|ng-untouched|
|控件的值变化了。|ng-dirty|ng-pristine|
|控件的值有效。|ng-valid|ng-invalid|

使用`ngSubmit`提交表单.

## 依赖注入
`Angular`的依赖注入系统能够即时的创建和交付所依赖的服务