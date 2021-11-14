### Vue脚手架

#### 环境安装

>① 使用npm（需要安装node环境）全局安装webpack，打开命令行工具输入：`npm install webpack -g`或者（`npm install -g webpack`），安装完成之后输入 `webpack -v`，如下图，如果出现相应的版本号，则说明安装成功。

注意：webpack 4.X 开始，需要安装 webpack-cli 依赖 ,所以使用这条命令  npm install webpack webpack-cli -g

> ② 全局安装vue-cli，在cmd中输入命令:```npm i vue-cli -g```

安装完成之后输入 vue -V（注意这里是大写的“V”），如下图，如果出现相应的版本号，则说明安装成功



#### 构建脚手架

>① 我首先在D盘新建一个文件夹（dxl_vue）作为项目存放地，然后使用命令行cd进入到项目目录输入：

```javascript
npm vue init webpack yourproject//你自定义的项目名称
```

yourproject是自定义的项目名称，命令执行之后，会在当前目录生成一个以该名称命名的项目文件夹。

>输入命令后，会跳出几个选项让你回答：

- Project name (baoge)： -----项目名称，直接回车，按照括号中默认名字（注意这里的名字不能有大写字母，如果有会报错Sorry, name can no longer contain capital letters），阮一峰老师博客[为什么文件名要小写](https://link.jianshu.com/?t=http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html) ，可以参考一下。
- Project description (A Vue.js project)： ----项目描述，也可直接点击回车，使用默认名字
- Author ()： ----作者，输入你的大名
  接下来会让用户选择：
- Runtime + Compiler: recommended for most users 运行加编译，既然已经说了推荐，就选它了
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specificHTML) are ONLY allowed in .vue files - render functions are required elsewhere  仅运行时，已经有推荐了就选择第一个了
- Install vue-router? (Y/n) 是否安装vue-router，这是官方的路由，大多数情况下都使用，这里就输入“y”后回车即可。
- Use ESLint to lint your code? (Y/n) 是否使用ESLint管理代码，ESLint是个代码风格管理工具，是用来统一代码风格的，一般项目中都会使用。
  接下来也是选择题Pick an ESLint preset (Use arrow keys) 选择一个ESLint预设，编写vue项目时的代码风格，直接y回车
- Setup unit tests with Karma + Mocha? (Y/n) 是否安装单元测试，我选择安装y回车
- Setup e2e tests with Nightwatch(Y/n)? 是否安装e2e测试 ，我选择安装y回车

回答完毕后就开始构建项目了。

>② 配置完成后，可以看到目录下多出了一个项目文件 yourproject，然后cd进入这个文件夹：
>安装依赖：```npm install```

### 完事了

运行输入```npm run dev```

#### 总结

```javascript
vue init webpack yourproject
```
一路回车到底

```javascript
cd yourproject
```


```javascript
npm install
```

搞定