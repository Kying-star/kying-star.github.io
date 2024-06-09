# CSS  Houdini

​		CSS Houdini 号称 CSS 领域最令人振奋的革新。CSS 本身长期欠缺语法特性，可拓展性几乎为零，并且新特性的支持效率太低，兼容性差。而 Houdini 直接将 CSS 的 API 暴露给开发者，以往完全黑盒的浏览器解析流开始对外开放，开发者可以自定义属于自己的 CSS 属性，从而定制和扩展浏览器的展示行为。

------

### 从浏览器解析开始

​		让我们来看看一个 HTML 文档从被浏览器接收到显示在屏幕上的全过程，下面这张图里被标为蓝色的部分是 JavaScript 可以染指的环节

![](D:\blog\vuepress-starter\docs\.vuepress\public\img\houdini\浏览器解析.png)

作为开发者，看着这张图心都凉了，我们根本控制不了浏览器解析 HTML 和 CSS 的过程，只能看着它生成 [DOM](https://link.zhihu.com/?target=https%3A//dom.spec.whatwg.org/) 和 [CSS object model](https://link.zhihu.com/?target=https%3A//drafts.csswg.org/cssom/) (CSSOM)。没法控制级联（cascade）、没法控制浏览器布局元素的方式（layout）、也没法控制元素在屏幕上显示的过程（paint）、最后的合成（composite）也无能为力。

整个过程中，开发者能完全控制的唯一环节就是 DOM，另外 CSSOM 也可以部分控制到。即使如此，引用 Houdini 官网上的话来说，这种程度的暴露是“不确定的、兼容性不稳定的以及缺乏对关键特性的支持的”。

### CSS Houdini

CSS Houdini 对外开放了浏览器解析流程的一系列 API，这些 API 允许开发者介入浏览器的 CSS engine 运作，带来了更多的 CSS 解决方案。

![](https://user-gold-cdn.xitu.io/2019/8/3/16c56957c98d73cd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

CSS Houdini 目前主要提供了以下几个 API：

### CSS Properties and Values API

允许在 CSS 中定义变量和使用变量，是目前支持程度最高的一个 API。CSS 变量以 `--` 开头，通过 `var()` 调用：

```html
  <div class="rect">
    <div class="text">text</div>
  </div>
```

```CSS
.rect {
  width: 400px;
  height: 400px;
  --rect-color: rgb(255, 64, 129);
}

.text {
  color: var(--rect-color);
}

```

#### CSS的变量作用域

css变量还和js变量一样，是有作用域的,分为全局变量和局部变量。

全局变量全局生效，局部变量只在自己的子元素生效，全局变量和局部变量重复时，优先局部变量

```html
  <div class="rect">
    <div class="text">text</div>
  </div>
  <div class="scope">
    <div class="textScope">scope</div>
  </div>
```

```css
.rect {
  /* width: 400px;
  height: 400px; */
  --rect-color: rgb(255, 64, 129);
}

.text {
  color: var(--rect-color);
}
.textScope {
  color: var(--rect-color);
}
:root {
  --rect-color: #35944a;
}
```

### Painting API

允许开发者编写自己的 Paint Module，自定义诸如 background-image 这类的绘制属性。自定义的重点在于，"怎么画" 的逻辑需要我们来描述，因此我们利用 registerPaint 来描述我们的绘制逻辑：

```js
registerPaint('rect', class {
  paint(ctx, size, properties, args) {}
});
```

registerPaint 方法注册了一个 Paint 类 rect 以供调用，这个类的核心在于它的 paint 方法。paint 方法用于描述自定义的绘制逻辑，它接收四个参数：

`ctx`：一个 Canvas 的 Context 对象，因此 paint 中的绘制方式跟 canvas 绘制是一样的。

`size`：包含节点的尺寸信息，同时也是 canvas 可绘制范围（画板）的尺寸信息。

`properties`：包含节点的 CSS 属性，需要调用静态方法 `inputProperties` 声明注入。

`args`: CSS 中调用 Paint 类时传入的参数，需要调用静态方法 `inputArguments` 声明注入。



### Layout API

允许开发者编写自己的 Layout Module，自定义诸如 display 这类的布局属性。同样的，"如何布局" 的逻辑需要我们自己编写：

```javascript
registerLayout('block-like', class {
  layout(children, edges, constraints, properties, breakToken) {
    // ...
    return {
      // inlineSize: number,
      // blockSize: number,
      // autoBlockSize: number,
      // childFragments: sequence<LayoutFragment>
    }
  }
})

```

registerLayout 方法用于注册一个 Layout 类以供调用，它的 layout 方法用于描述自定义的布局逻辑，最终返回一个包含布局后的位置尺寸信息和子节点序列信息的对象，引擎将根据这个对象进行布局渲染。

同样的，调用时只需：

```css
.wrapper {
  display: layout('block-like');
}
```

### Worklets

registerPaint、registerLayout 这些 API 在全局上并不存在，为什么可以直接调用呢？这是因为上述的 JS 代码并不是直接执行的，而是通过 Worklets 载入执行的。Worklets 类似于 Web Worker，是一个运行于主代码之外的独立工作进程，但比 Worker 更为轻量，负责 CSS 渲染任务是最合适的了。和 Web Worker 一样，Worklets 拥有一个隔离于主进程的全局空间，在这个空间里，没有 window 对象，却有 registerPaint、registerLayout 这些全局 API。因此，我们需要这样引入自定义 JS 代码：

```javascript
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("paintworklet.js");
}
```

```javascript
if ("layoutWorklet" in CSS) {
  CSS.layoutWorklet.addModule("layoutworklet.js");
}
```

### Painting API试玩

#### 1、编写一个Paint类

```javascript
// paintworklet.js
registerPaint('wave', class {
  // 设置元素可调用的属性
  static get inputProperties () {
    return ['--animation-tick'];
  }
  /**
   * @description: 规定绘制规则
   * @param {*} ctx 同cavans的ctx对象,支持cavans大部分api
   * @param {*} size 元素的大小
   * @param {*} properties 元素节点的css属性
   * @return {*}
   */
  paint (ctx, size, properties) {
    let tick = Number(properties.get('--animation-tick'));
    const {
      width,
      height
    } = size;
    const initY = height * 0.4;
    tick = tick * 2;
    ctx.beginPath(); // 规定绘制开始
    ctx.moveTo(0, initY + Math.sin(tick / 20) * 10 + initY + Math.cos(tick / 20) * 10); // 规定绘制开始坐标
    // 设置波浪绘制路径
    for (let i = 1; i <= width; i++) {
      ctx.lineTo(i, initY + Math.sin((i + tick) / 20) * 10);
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    // ctx.lineTo(0, initY + Math.sin(tick / 20) * 10);
    // 停止绘制
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    //填充颜色    
    ctx.fill();
  }
})
```

#### 2、引入Paint模块

```javascript
// inedx.js
CSS.paintWorklet.addModule("./src/paintworklet.js");
const wave = document.querySelector("#wave");
let tick = 0;
requestAnimationFrame(function raf (now) {
  tick += 1;
  wave.style.cssText = `--animation-tick: ${tick};`;
  requestAnimationFrame(raf);
  console.log(tick);
});
```

#### 3、设置元素及其属性

```css
/* index.css */
#wave {
  width: 200px;
  height: 400px;
  margin: 10vh auto;
  background-color: #ff3e81;
  background-image: paint(wave);
}
```

```html
<!-- index.html --> 
<div id="wave"></div>
```

效果图

<img src="https://s31.aconvert.com/convert/p3r68-cdx67/i3r8j-90cqm.gif" style="zoom:50%;" />

## Refs

[Houdini：CSS 领域最令人振奋的革新](https://zhuanlan.zhihu.com/p/20939640)

[Houdini， CSS的成人礼](http://m.mamicode.com/info-detail-2760619.html)

[CSS Houdini实现动态波浪纹](https://juejin.im/post/6844903901951426568#heading-6)

[GoogleChromeLabs/houdini-samples](https://github.com/GoogleChromeLabs/houdini-samples)

> 谷歌实验室里的demo很多还不能运行

