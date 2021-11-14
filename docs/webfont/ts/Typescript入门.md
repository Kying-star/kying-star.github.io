# Typescript入门

#### **JavaScript 的超集**

​		Typescript是javascript的超集，ts对js的语法进行了加强和拓展，引入了静态和类等概念。这使ts在中大规模的项目中有极大的优势。



#### **开始使用ts**

#####  安装 TypeScript

```
npm install -g typescript
```

##### 创建项目

> 在新建的项目目录下新建src文件夹，在文件夹下新增index.ts

```
│
└─src
        index.ts
```

##### npm将目录初始化

```
npm init
```

##### 初始化TS

```
tsc --init
```



上面的操作做完之后你会发现项目目录变成了这个样子

```
│  package.json
│  tsconfig.json
│
└─src
        index.ts
```

其中**tsconfig.json**就是ts最重要的配置文件

这里贴上一个常用配置

```json
{
  "compilerOptions": {
    "target": "es5",                            // 指定 ECMAScript 目标版本: 'ES5'
    "module": "commonjs",                       // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "moduleResolution": "node",                 // 选择模块解析策略
    "experimentalDecorators": true,             // 启用实验性的ES装饰器
    "allowSyntheticDefaultImports": true,       // 允许从没有设置默认导出的模块中默认导入。
    "sourceMap": true,                          // 把 ts 文件编译成 js 文件的时候，同时生成对应的 map 文件
    "strict": true,                             // 启用所有严格类型检查选项
    "noImplicitAny": true,                      // 在表达式和声明上有隐含的 any类型时报错
    "alwaysStrict": true,                       // 以严格模式检查模块，并在每个文件里加入 'use strict'
    "declaration": true,                        // 生成相应的.d.ts文件
    "removeComments": true,                     // 删除编译后的所有的注释
    "noImplicitReturns": true,                  // 不是函数的所有返回路径都有返回值时报错
    "importHelpers": true,                      // 从 tslib 导入辅助工具函数
    "lib": ["es6", "dom"],                      // 指定要包含在编译中的库文件
    "typeRoots": ["node_modules/@types"],
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [                                  // 需要编译的ts文件一个*表示文件匹配**表示忽略文件的深度问题
    "./src/**/*.ts"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.test.ts",
  ]
}
```

##### 添加npm命令

```json
"scripts": {
    "build": "tsc", // 编译
    "build:w": "tsc -w" // 监听文件，有变动即编译
  },
```



### hello world

在index.ts中添加

```typescript
function sayhi(txt: string | number) {
    console.log(txt);
}

sayhi('hello world'); //hello world

sayhi(1); //1

//sayhi({name:'lqx'}) 类型“{ name: string; }”的参数不能赋给类型“string | number”的参数。

```

使用编译命令

```
npm run build
or
tsc
```

将ts编译成js，即可

