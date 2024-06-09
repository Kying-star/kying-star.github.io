# JS高阶函数和运行机制



## 安全的类型检测



JavaScript内置的类型检测机制并非完全可靠。



**首先让我们看一下简单的数据类型判断，并没有什么问题**



```javascript
typeof(1) // "number"
typeof('1') // "string"
typeof(false) // "boolean
let isNumber = new Number(1)
console.log(isNumber instanceof Number); // true
let isString = new String('1')
console.log(isString instanceof String); // true
let isBoolen = new Boolean(false)
console.log(isBoolen instanceof Boolean); // true
```



**但是下面这些就无法区分**



```javascript
let isArray = new Array([1,2,3])
let isMap = new Map()
let isRep = /123/g
// ...
console.log(isArray instanceof Object) // true
console.log(typeof(isArray)) // object
console.log(isMap instanceof Object) // true
console.log(typeof(isMap)) // object
console.log(isRep instanceof Object) // true
console.log(typeof(isRep)) // object
// ...
```



**注意**



1. `typeof`用在基本数据类型和函数时，返回其对应类型的描述，对于引用类型都返回为object.

1. `instanceof`无法判断基本数据类型，对于引用类型数据，返回其对应类型。

1. `Object.prototype.toString`无论基本数据类型还是引用类型返回其对应类型。



各个方式的类型检测样例见这个[链接](https://segmentfault.com/a/1190000018340166)



**解决方法**



Object原生的toString()方法，都会返回一个[object NativeConstructorName]格式的字符串。



```javascript
function isType (type) {
  return function(value){
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}
let arr = []
let isArray = isType('Array')
console.log(isArray(arr)); // true
```



## 操作数组



### 扩展运算符的妙用



#### 复制数组



```javascript
const a = [1,2]
const a2 = [...a]
a2[0] = 2
console.log(a,a2); //[ 1, 2 ] [ 2, 2 ]
```



#### 合并数组



```javascript
const a = [1,2]
const a1 = [3,4]
const a2 = [...a,...a1]
console.log(a2); //[ 1, 2, 3, 4 ]
```



#### 与解构赋值结合



```javascript
const [first,...other] = [1,2,3,4,5]
console.log(first) //1
console.log(other) //[ 2, 3, 4, 5 ]
```



#### 分割字符串



```javascript
const strArray = [..."米哈游永远的神"]
console.log(strArray) //['米', '哈','游', '永','远', '的','神']
```



## 高阶函数



高阶函数(higher-order function)指操作函数的函数，它接收函数作为参数或将函数作为返回值输出。



以下`fn`就是一个高阶函数。



```javascript
// 作为参数传递
function fn(callback){
    callback && callback()
}
fn(function(){console.log("Hi")}
```



把函数当作参数传递，代表可以抽离出一部分容易变化的业务逻辑，把这部分业务逻辑放在函数参数中，这样一来可以分离业务代码中变化与不变的部分。



```javascript
// 作为返回值输出
function fn(){
    return function(){}
}
fn()
```



相比把函数当作参数传递，函数当作返回值输出的应用场景也有很多。让函数继续返回一个可执行的函数，意味着运算过程是可延续的。



#### 回调函数



在`ajax`异步请求的应用中，回调函数的使用非常频繁。想在`ajax`请求返回之后做一些事情，但又并不知道请求返回的确切时间时，最常见的方案就是把callback函数当作参数传入发起`ajax`请求的方法中，待请求完成之后执行callback函数。



回调函数的应用不仅只在异步请求中，当一个函数不适合执行一些事件时，也可以把这些事件封装成一个函数，并把它作为参数传递给另外一个函数。



#### 偏函数



就是把一个函数的某些参数先固化，也就是设置默认值，返回一个新的函数，在新函数中继续接收剩余参数，这样调用这个新函数会更简单。



下面是使用`Object.prototype.toString`方法判断数据类型的一系列的`isType`函数



```javascript
var isString = function( obj ){
  return Object.prototype.toString.call( obj ) === '[object String]';
};
var isArray = function( obj ){
  return Object.prototype.toString.call( obj ) === '[object Array]';
};
var isNumber = function( obj ){
  return Object.prototype.toString.call( obj ) === '[object Number]';
};
```



可简化为：



```javascript
function isType(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

const isArray = isType('Array');
const isString = isType('String');
console.log(isArray([1, 2, [3,4]])); // true
console.log(isString({}));           // false
```



#### 预置函数



当达到条件时再执行回调函数



```javascript
function after(time, cb) {
    return function() {
        if (--time === 0) {
            cb();
        }
    }
}
// 吃三碗才能吃饱
let eat = after(3, function() {
    console.log('吃饱了');
});
eat();
eat();
eat();
// eat函数只有执行3次的时候才会输出'吃饱了'
```



#### 函数柯里化



Currying柯里化又称部分求值，柯里化函数会接收一些参数，然后不会立即求值，而是继续返回一个新函数，将传入的参数通过闭包的形式保存，等到被真正求值的时候，再一次性把所有传入的参数进行求值。



给函数分步传递参数，每次传递部分参数，并返回一个更具体的函数接收剩下的参数，这中间可嵌套多层这样的接收部分参数的函数，直至返回最后结果。



```javascript
// 原函数
function add(a, b, c) {
    return a + b + c;
}
 
// 柯里化函数
function addCurrying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
 
// 调用原函数
add(1, 2, 3); // 6
 
// 调用柯里化函数
addCurrying(1)(2)(3) // 6
```



通用：



```javascript
function curry(fn) {
    const g = (...allArgs) => allArgs.length >= fn.length ?
        fn(...allArgs) : 
        (...args) => g(...allArgs, ...args)
 
    return g;
}
 
// 测试用例
const foo = curry((a, b, c, d) => {
    console.log(a, b, c, d);
});
foo(1)(2)(3)(4);    // 1 2 3 4
const f = foo(1)(2)(3);
f(5);               // 1 2 3 5
```



#### 函数防抖



针对的是会频繁触发的函数。



只要有新触发的函数，就立即停止执行当前函数，转而执行新函数。



一般规定在事件被触发n秒后再执行回调函数，如果n秒内又触发了这个事件，则以新的事件的时间为准，还是n秒后执行，不断刷新定时器，无限后延。



```javascript
const debounce = (func, wait) => {
  //定义一个计时器
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
};
```



#### 函数节流



针对的是会频繁触发的函数。



只要当前函数没有执行完成，任何新触发都会被忽略，可以实现在持续触发事件的情况下，规定时间内只执行一次事件的效果。稀释函数的执行频率。



`**setTimeout**`**版**



```javascript
const throttle = (func, wait) => {
  let timer;
  return () => {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      func();
      timer = null;
    }, wait);
  };
};
```



**时间戳版**



```javascript
const throttle = (func, wait) => {
  let last = 0;
  return () => {
    const current_time = +new Date();
    if (current_time - last > wait) {
      func.apply(this, arguments);
      last = +new Date();
    }
  };
};
```



## JS 运行机制 （浏览器下）



#### 区分进程和线程



- 进程是一个工厂，工厂有它的独立资源(系统分配的内存)  工厂之间相互独立（进程之间相互独立）

- 线程是工厂中的工人，多个工人协作完成任务 （多个线程在进程中协作完成）

- 工厂内有一个或多个工人  工人之间共享空间 （一个进程由一个或者多个工人组成，同个进程下的多个线程共享程序的的内存空间）



任务管理器中的后台进程列表就是查看进程的地方



进程是cpu资源分配的最小单位，线程是cpu调度的最小单位



平时说的单线程和多线程都是在同一个进程下



#### 浏览器是多进程的



在浏览器中，每打开一个tab页就是在开一个浏览器进程（chrome的任务管理器为例）



浏览器的主要进程



1. Browser进程：浏览器的主进程（负责协调、主控），只有一个。作用有

- - 负责浏览器界面显示，与用户交互。如前进，后退等

- - 负责各个页面的管理，创建和销毁其他进程

- - 将Renderer进程得到的内存中的Bitmap，绘制到用户界面上

- - 网络资源的管理，下载等



1. 第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建

1. GPU进程：最多一个，用于3D绘制等

1. 浏览器渲染进程（浏览器内核）（Renderer进程，内部是多线程的）：默认每个Tab页面一个进程，互不影响。主要作用为 页面渲染，脚本执行，事件处理等



#### 浏览器内核主要线程



1. GUI渲染线程



- 

- - 负责渲染浏览器界面，解析HTML，CSS，构建DOM树和RenderObject树，布局和绘制等。

- - 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行

- - 注意，**GUI渲染线程与JS引擎线程是互斥的**，当JS引擎执行时GUI线程会被挂起（相当于被冻结了），GUI更新会被保存在一个队列中**等到JS引擎空闲时**立即被执行。



1. JS引擎线程



- 

- - 也称为JS内核，负责处理Javascript脚本程序。（例如V8引擎）

- - JS引擎线程负责解析Javascript脚本，运行代码。

- - JS引擎一直等待着任务队列中任务的到来，然后加以处理，一个Tab页（renderer进程）中无论什么时候都只有一个JS线程在运行JS程序

- - 同样注意，**GUI渲染线程与JS引擎线程是互斥的**，所以如果JS执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。



1. 事件触发线程



- 

- - 归属于浏览器而不是JS引擎，用来控制事件循环（可以理解，JS引擎自己都忙不过来，需要浏览器另开线程协助）

- - 当JS引擎执行代码块如setTimeOut时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX异步请求等），会将对应任务添加到事件线程中

- - 当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待JS引擎的处理

- - 注意，由于JS的单线程关系，所以这些待处理队列中的事件都得排队等待JS引擎处理（当JS引擎空闲时才会去执行）



1. 定时触发器线程

- - `setInterval`与`setTimeout`所在线程

- - 浏览器定时计数器并不是由JavaScript引擎计数的,（因为JavaScript引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）

- - 因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待JS引擎空闲后执行）

- - 注意，W3C在HTML标准中规定，规定要求setTimeout中低于4ms的时间间隔算为4ms。



1. 异步http请求线程

- - 在XMLHttpRequest在连接后是通过浏览器新开一个线程请求

- - 将检测到状态变更时，如果设置有回调函数，异步线程就**产生状态变更事件**，将这个回调再放入事件队列中。再由JavaScript引擎执行。



#### 事件环（EventLoop)



当没有任何事件时，事件环只是在空转，以节省CPU的方式



![img](https://s3.ax1x.com/2021/03/13/6w829J.gif)



#### 任务队列 （TaskQueue)



当我们向任务队列中加入任务时，事件环会绕道而行，每次执行一个任务队列里的任务



![img](https://s3.ax1x.com/2021/03/13/6wGVuq.gif)



#### 渲染步骤（The Render Steps)



浏览器通过渲染去更新页面，当浏览器检测到页面需要更新是,会进入渲染步骤



![img](https://s3.ax1x.com/2021/03/13/6wUzbn.gif)



这里的SLP是指的浏览器渲染的三个步骤，这里不作展开，在后面的浏览器解析机制里会具体说明



#### 堵塞



当我们去执行一些死循环的代码时,会引起事件环的堵塞



例如 `while(true);`



![img](https://s3.ax1x.com/2021/03/13/6wwK1O.gif)



此时js的运行会被卡住，但是css animation API 不会被卡住,因为它由GPU来执行



但是，以下这种方式，并不会引起阻塞



```javascript
function loop() {
  setTimeout(loop, 0)
}
loop()
```



为什么会这样呢，这要提到js的两种任务种类`**macrotask**`**和**`**microtask**`



**macrotask**：包含执行整体的js代码，事件回调，XHR回调，定时器（setTimeout/setInterval/setImmediate），IO操作，UI render



**microtask**：更新应用程序状态的任务，包括promise回调，MutationObserver，process.nextTick，Object.observe



两者的区别在于会不会触发新一轮的tick



而宏任务会触发新一轮的tick，会使事件环继续执行下去，从而不导致堵塞。



也就相当于下面



![img](https://s3.ax1x.com/2021/03/14/6w50JO.gif)



#### requestAnimationFrame



在过去的很长一段时间里，网页的动画都是由js控制的，但这种做法其实是不稳定的。



浏览器并不会在每个事件环内进行渲染，他会优化资源的分配，在保证性能的情况下，以浏览器提供的帧率渲染（一般为60帧）



这也就意味着纯js控制的动画可能会出现掉帧的情况，而浏览器提供了一个API:`requestAnimationFrame`,利用他的回调函数，我们可以更加稳定的使用js来编写动画。



#### 微任务堵塞

微任务是不会触发新的tick的，以至于他会在每个循环执行完所有的微任务之后，在继续运行，但是若是不断的加入微任务（比运行更快）js就会进入堵塞

```javascript
function loopMicro() {
  Promise.resolve().then(loopMicro)
}
loopMicro()
```

#### 判断以下代码的运行结果



```javascript
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function () {
  console.log('promise1');
}).then(function () {
   console.log('promise2');
});
   console.log('script end');
```

## Ref
[【事件循环】【前端】事件原理讲解，超级硬核，忍不住转载](https://www.bilibili.com/video/BV1K4411D7Jb/?spm_id_from=333.788.recommend_more_video.3)