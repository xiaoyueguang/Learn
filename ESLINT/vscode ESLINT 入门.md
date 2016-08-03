经过半年的前端磨练(就是不停地敲敲代码),自认水平提高的速度还是可以的.  
现在回头看下写过的代码,发现以前写的代码真的是不忍惨睹.  
比如
> 1.  变量名乱起
> 2.  风格多变
> 3.  注释乱写或者没写
等等错误;

**这不是一个很好的消息!**

一个人单兵作战久了,风格都变得随心所欲,这为以后的团队合作带来极大的隐患.  
趁今天事情少, 我决定去研究下 **ESLint** !

## 关于 **ESLint**
> ESLint 是一个开源的项目, 由 [Nicholas C. Zakas](http://nczonline.net/) 于2013年6月发布  
> 具有
> 1. 规则可配置性高
> 2. 支持插件扩展以及自定义规则
> 等优点.

### 如何在 VS CODE 编辑器使用 **ESLint**

因为很喜欢 [Visual Studio Code](https://code.visualstudio.com) 这款小巧的编辑器  
虽然是微软出品,但是没有想象中的那种庞大臃肿样子,使用起来很得心应手.前端开发使用还是很不错的.  
因此我也只研究了下怎么在 VS CODE 里去使用 **ESLint**  

#### 环境
>	1. 1.3版本或以上的 Visual Studio Code (想使用 ESLint 的时候恰好碰到版本更新)

#### 安装 ESLint 插件
>	在 VS CODE 里按 F1 输入 `ext install vscode-eslint` 即可安装 ESLint;

#### 使用 ESLint 插件
>	在项目根目录下 新建一个名为 `.eslintrc` 的文件.  
>	`.eslintrc` 文件里写配置(使用 JSON 和 YAML 语法)  
>	ESLint 的相关设置 参考 [ESLint](http://eslint.org/) 或者 [ESLint_docs](https://github.com/Jocs/ESLint_docs);

#### ESLint配置的主要内容
>|内容		|描述		  |
>|----------|:-----------:|
>|env		|环境		     |
>|globals	|全局变量		|
>|rules		|规定的代码规则  |

#### 忽略文件
我们可以通过 .eslintignore 文件 来告诉 ESLint 要忽略的文件